const express =required('express');
const router=express.Router();
const bookController=require('..'/controllers/books);
router.get('/',bookController.getAllBooks);
router.post('/',bookController.createBook);
router.delete('/id',bookController.deleteBook);
module.exports=router;
