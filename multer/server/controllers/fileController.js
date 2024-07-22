export const  fileController = async (req, res, next)=>{
    // const data = req.file;
    console.log(req.file);

    res.json({
        message: "done"
    })
}
