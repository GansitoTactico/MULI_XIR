import { MdEmail } from "react-icons/md";
import {z} from "zod";

export const register_schema = z.object({
    username: z.string({
        required_error: "nombre de usuario no valido",
    }),
    email: z.string({
        required_error: "email no valido",
    }).email({
        required_error: "email no valido",
    }),
    password: z.string({
        required_error: "contraseña no valida",
    }).min(6,{
        required_error: "La contraseña debe ser mayor a 6 caracteres"
    }),
});

export const login_schema = z.object({
    email: z.string({
        required_error: "El email es requerido",
    }).email({
        required_error: "email no valido",
    }),
    password: z.string({
        required_error: "contraseña no valida",
    }).min(6,{
        required_error: "La contraseña debe ser mayor a 6 caracteres"
    }),

})