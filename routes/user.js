import {Router} from 'express';

import users from '../models/user.js'; 

const path = '/usuarios'

const router = Router();

router.get('/SeeUsers', (req, res)=>{

    const result = users.getUsers();
    if(result.success){
        res.json({
            result,
            httpCode:200
        })
    }else{
        res.json({
            result
        })
    }
    

})

router.put('/userModify', (req,res)=>{

})

router.post('/createANewUser',(req,res)=>{
    const body = req.body
    console.log("BODYBODY")
    console.log(body)
    const result = users.createUser(body)
    if(result.success){
        res.json({result})
    }else{
        res.json({result})
    }
})

router.delete('/deleteUser/:id', (req,res)=>{

})

router.put('/unactiveUser/:id',(req,res)=>{

})


export default router