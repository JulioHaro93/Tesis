import User from '../db/user.js'
import mongoose from 'mongoose'


const users ={

    getUsers: async ()=>{
        const usuarios = await User.find();
        if(usuarios.length >0){
            return{
                success: true,
                users: usuarios
            }
        }else{
            return{
                success: false,
                error: 404,
                message: "Error, no se encontró ningún usuario"
            }
        }
    },
    createUser: async (body)=>{
        const create = await User.create(
            body
        ).then(user =>{
            return{
                success:true,
                create
            }
        }).catch(error =>{
            return{
                success:false,
                httpCode: 500
            }
        })
        
    }

}

export default users;