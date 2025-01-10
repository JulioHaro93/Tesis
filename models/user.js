import User from '../db/user.js'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

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
        const userExists = await User.findOne({correo: body.correo})

        if(userExists){
            return{
                success: false,
                httpCode: 400,
                code: 'Bad request',
                message: 'El usuario ya ha sido registrado'
            }
        }else{
            const salt = bcrypt.genSaltSync(10);
            body.password = bcrypt.hashSync(body.password, salt);

                const user = await User.create(body);
                if(user){
                    const usuarito = {
                        nombre: user.nombre,
                        correo: user.correo,
                        activo: user.activo,
                    }
                    return {
                        success: true,
                        httpCode: 200,
                        message: 'Usuario creado con éxito',
                        ususario: usuarito
                    };
                }else{
                    return {
                        success: false,
                        httpCode: 500,
                        error: "Internal Error Server",
                        message: "No fue posible crear al usuario \nPor problemas con el servidor"
                    };
                }
        }

    }
        
}

export default users;