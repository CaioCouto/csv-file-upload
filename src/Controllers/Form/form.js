class FormController {
    static upload(req, res, next) {
        if(!req.duplicate) {
            const filename = req.file.originalname;
            const fileSizeInBytes = req.file.size;
            const fileSizeInMegaBytes = (fileSizeInBytes/(1024**2)).toFixed(4);
    
            console.log('File name: ' + filename);
            console.log('File size: ' + fileSizeInBytes + ' B('+ fileSizeInMegaBytes + ' MB)');
            return res.redirect(`/transactions/register?filename=${filename}`);
        }
        return res.redirect(`/?duplicate=1`);
    }
};

module.exports = FormController;