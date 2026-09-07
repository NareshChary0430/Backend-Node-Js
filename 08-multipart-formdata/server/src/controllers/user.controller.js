const create = (req,res)=>{
   try {
      console.log(req.files);
      console.log(req.body);
      
      res.status(200).json({
         message: "Files uploaded successfully",
         files: req.files,
         data: req.body
      });
   } catch (error) {
      res.status(500).json({
         message: "Error uploading files",
         error: error.message
      });
   }
}

module.exports ={ create}