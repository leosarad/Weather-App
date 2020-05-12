let start = (app)=>{
    app.get('/',(req,res)=>{
        res.render('index',{"app":app.variables});
    })

    app.get('*',(req,res)=>{
        app.variables.requestPage = req.url;
        res.render('404',{"app":app.variables});
    })
}   
module.exports ={
    start
}