let express=require("express");
let router=express.Router();
let {users}=require('../models/users');
router.get("/viewemployees",async(req,res)=>{
    let result=await users.find();
    res.send(result);
})
router.get("/viewemployees",(req,res)=>{
    res.send("View Employees router");
});
router.post("/assignemployees",(req,res)=>{
    res.send("Assign Employees router");
})

router.delete("/deleteemployees/:id",async(req,res)=>{
    let result=await users.findByIdAndDelete(req.params.id)
    if(result){
        res.send("Employee deleted sucess");

    }else{
        res.send("No user found");
    }
    res.send("Delete Employees router");
});
module.exports=router;

