const express= require ('express')
const router = express.Router();

router.get('/', (req, res)=>{
    obj= {
        name: "Rushikesh",
        email: "rushi@gmail.com"
            
            
        }
    
    res.json(obj)
})

module.exports= router;