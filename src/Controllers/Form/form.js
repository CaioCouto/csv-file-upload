class FormController {
    static upload(req, res, next) {
        if(!req.duplicate) {
            const filename = req.file.originalname;
            const fileType = req.file.mimetype;
            const fileSizeInBytes = req.file.size;
            const fileSizeInMegaBytes = (fileSizeInBytes/(1024**2)).toFixed(4);
    
            console.log('File name: ' + filename);
            console.log('File size: ' + fileSizeInBytes + ' B('+ fileSizeInMegaBytes + ' MB)');
            return res.redirect(`/imports/register?filename=${filename}&fileType=${fileType}`);
        }
        return res.redirect(`/reports?duplicate=1`);
    }
};

module.exports = FormController;