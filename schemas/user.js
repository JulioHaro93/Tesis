import Joi from 'joi'

const createUserSchema = Joi.object().keys({
    nombre: Joi.string(),
    correo: Joi.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    password: Joi.string().min(6).max(15),
    institution: Joi.string(),
    address: Joi.string(),
    activo: Joi.bool()
})

export {createUserSchema}