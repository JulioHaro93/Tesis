import {Router} from 'express';

import users from '../models/user.js'; 
import { createUserSchema } from '../schemas/user.js';

const path = '/usuarios'

const router = Router();

router.get('/SeeUsers', async (req, res)=>{

    const result = await users.getUsers();
    if(result.success){
        res.json({
            result
        })
    }else{
        res.json({
            result
        })
    }
    

})

router.put('/userModify', (req,res)=>{

})

router.post('/createANewUser', async (req,res)=>{
    const body = req.body

    const validationResult = createUserSchema.validate(body)

    if(validationResult.error ===null){
        const result = await users.createUser(body)
    if(result.success){
        res.status(200).json({result})
    }else{
        res.status(result.httpCode).json({result})
    }
    }else{
        const exit={
            success: false,
            message: "Por favor, verifique que está ingresando sus datos correctamente",
            error: 'bad request',
            httpCode: 400,
            attribute: validationResult.error || 'Error desconocido'
        }
        res.status(400).json(
            exit
        )
    }
    
})

router.delete('/deleteUser/:id', (req,res)=>{

})

router.put('/unactiveUser/:id',(req,res)=>{

})


export default router