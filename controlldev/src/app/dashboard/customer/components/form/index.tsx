"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
    name: z.string().min(1, "O Campo Nome é Obrigatório"),
    email: z.string().email("Digite um E-mail válido").min(1,"O E-mail é Obrigatório"),
    phone: z.string().refine((value) => {
        return /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) || /^\d{2}\s\d{9}$/.test(value) || /^\d{11}$/.test(value)
    }, {
        message: "O Número de Telefone deve estar (DD) 99999-9999"
    }),
    address: z.string(),

})

type FormData = z.infer<typeof schema>

export function NewCustomerForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })
    return (
        <form>
            <label>
                Nome Completo:
            </label>
            <input type="text" placeholder="Digite o nome completo..."/>
        </form>
    )
}