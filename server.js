const path=require('path')
const express=require('express')
const app=express()
app.use(express.static('finalapp/build'))
app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'trackr','build','index.html')))


const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`Server running in on port ${PORT}`))

