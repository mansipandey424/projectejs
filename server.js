import express from "express"
import path from 'path'
import { fileURLToPath } from 'url'; 
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))


const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')))
app.post('/join us', function(req, res){

    console.log(req.body)
  
  });

  pp.post('/contact us', function(req, res){

    console.log(req.body)
  
  });

  
app.get('/who we are', (req, res)=> {
    console.log(__dirname);
      res.sendFile(path.join(__dirname, 'views/who we are.ejs'));
     
    });

  
app.get('/our work.ejs', (req, res)=> {
    console.log(__dirname);
      res.sendFile(path.join(__dirname, 'views/our work.ejs'));
     
    });
  

app.get('/join us', (req, res)=> {
    console.log(__dirname)
    res.render("join us.ejs", {})
     
    });

    app.get('/contact us', (req, res)=> {
        console.log(__dirname)
        res.render("contact us", {})
         
        });

    app.listen(4090, function(req,res){
        console.log("server start")
        
    });