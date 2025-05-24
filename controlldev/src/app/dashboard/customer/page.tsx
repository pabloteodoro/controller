import { Container } from "@/components/container";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation"; 
import Link from 'next/link'
import { CardCustomer } from "./components/card";

export default async function Customer() {

     const session = await getServerSession(authOptions)
    
        if(!session || !session.user) {
            redirect("/")
        }
    
    return (
        <Container>
            <main>
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Página Clientes</h1>
                    <Link href="/dashboard/customer/new" className="bg-blue-500 text-white px-4 py-1 rounded ">
                    Novo Cliente
                    </Link>


                </div>

                <section className="grid grid-cols-21 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">

                    <CardCustomer/>

                    <CardCustomer/>

                    <CardCustomer/>

                </section>

            </main>

         
        </Container>
    )
}