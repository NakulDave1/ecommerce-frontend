const express=require('express');
const app=express();
const path=require('path')

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/index.html'));
  });
app.get('/product', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/product.html'));
  });



app.listen('8000',()=>{
    console.log("Port running successfully")
})


























































function openUserHTML(){
    // this function opens new page on every click in 

    window.open('user.html') }


function openAdminHTML(){
        // this function opens new page on every click in 
    
        window.open('admin.html') }

function openIndexHTML(){
            // this function opens new page on every click in 
        
            window.open('index.html') }        















