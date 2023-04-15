const express=require('express');
const mongose=require('mongose');
const bodyParser=require('body-parser');
const bookRoutes=require('./rout/books);
const app=express();
mongose.connect('mongodb://localhost:27017/books')
