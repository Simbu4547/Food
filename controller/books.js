const Book=require('../models/book')
export.getAllBooks=async(req,res)=>{
  try{
    const books=await Book.find({});
    res.json(books);
  }catch(error){
    res.status(500).json({error:error.message});
  }
};
exports.createBook=async (req,res)=>{
  try{
    const book=new Book(req.body);
    await book.save();
    res.json(book);
  }catch (error){
    res.status(500).json({error:error.message});
  }
};
exports.deleteBook=async (req,res)=>{
  try{
    const {id}=req.paarams;
    const book =await Book.findByIdAndDelete(id);
    if(!book){
      return res.status(404).json({error:'Book not Found'});
    }res.json(book);
  }
  catch (error){
    ress.Status(500).json({error:error.messsage});
  }
};
                                  
