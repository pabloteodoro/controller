"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/app/dashboard/components/input"
import { api } from "@/lib/api" 
import { useRouter } from "next/navigation"

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

export function NewCustomerForm({ userId }: { userId: string }) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const router = useRouter()

    async function handleRegisterCustomer(data: FormData) {
        await api.post("/api/customer", {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            userId: userId
    })

    router.refresh();
    router.replace("/dashboard/customer")

}

    return (
        <form className="flex flex-col mt-6" onSubmit={handleSubmit(handleRegisterCustomer)}>
            <label className="mb-1 text-lg font-medium">
                Nome Completo:
            </label>
            <Input
            type="text"
            name="name"
            placeholder="Digite o Nome Completo"
            error={errors.name?.message}
            register={register}

            
            
            />
            <section className="flex gap-2 mt-2 flex-col sm:flex-row">
                <div className="flex-1">
                    
                    <label className="mb-1 text-lg font-medium">
                        Telefone:
                    </label>
                    <Input
                        type="number"
                        name="phone"
                        placeholder="Digite o telefone"
                        error={errors.phone?.message}
                        register={register}
                    />  
                </div>
            </section>

         
                <div className="flex-1">
                    
                    <label className="mb-1 text-lg font-medium">
                        E-mail:
                    </label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Digite o E-mail..."
                        error={errors.email?.message}
                        register={register}
                    />  
                </div>

                  <label className="mb-1 text-lg font-medium">
                        Endereço Completo:
                    </label>
                    <Input
                        type="text"
                        name="address"
                        placeholder="Digite o Endereço..."
                        error={errors.address?.message}
                        register={register}
                    /> 

                    <button type="submit" className="bg-blue-500 my-4 px-2 h-11 rounded text-white font-bold">
                        Cadastrar
                    </button>  
        </form>
    )
}