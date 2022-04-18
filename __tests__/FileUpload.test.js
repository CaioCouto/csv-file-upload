const axios = require("axios");
const path = require("path");
const FormData = require("form-data");
const { readFileSync } = require("fs");

function readCSV(filename) {
    const srcDir = path.dirname(__dirname);
    return readFileSync(
        path.join(srcDir, filename),
        {
            encoding:'utf-8',
            flag: 'r'
        }
    );
}

describe ('Test File Upload Routine', () => {
    const getResponseUrlParams = url => url.split('?')[1];
    
    it('Upload File', done => {
        const filename = 'transacoes-2022-01-01.csv';
        const form = new FormData();
        form.append('transactions', readCSV(filename), filename);
        axios.post(
            'http://localhost:3333/upload',
            form,
            {
                headers: {
                    ...form.getHeaders()
                }
            }
        )
        .then(resp => {
            expect(getResponseUrlParams(resp.request.path)).toBe(`valid=1`);
            done();
        });
    });
    
    it('Upload Duplicated File', done => {
        const filename = 'transacoes-2022-01-01.csv';
        const form = new FormData();
        form.append('transactions', readCSV(filename), filename);
        axios.post(
            'http://localhost:3333/upload',
            form,
            {
                headers: {
                    ...form.getHeaders()
                }
            }
        )
        .then(resp => {
            expect(getResponseUrlParams(resp.request.path)).toBe('duplicate=1');
            done();
        });
    });
    
    it('Upload Duplicated Data', done => {
        const filename = 'transacoesDuplicada2022-01-01.csv';
        const form = new FormData();
        form.append('transactions', readCSV(filename), filename);
        axios.post(
            'http://localhost:3333/upload',
            form,
            {
                headers: {
                    ...form.getHeaders()
                }
            }
        )
        .then(resp => {
            expect(getResponseUrlParams(resp.request.path)).toBe('duplicate=1');
            done();
        });
    });
});