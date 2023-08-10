import express,{Express,Response,Request,} from 'express'
import dotenv from  "dotenv"

dotenv.config()
const app =express()
const PORT = process.env.PORT || 4000

app.get('/',(req:Request,res:Response)=>{
    res.send("An Express Ts Server")
})

app.listen(PORT,()=>console.log(`[server]:Server running at http://localhost:${PORT}`))
