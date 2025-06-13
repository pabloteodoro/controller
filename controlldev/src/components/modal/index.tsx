"use client"

import { useContext, useRef, MouseEvent } from "react"
import { ModalContext } from "@/providers/modal"


export function ModalTicket() {
    const { handleModalVisible } = useContext(ModalContext);
    const modalRef = useRef<HTMLDivElement | null >(null);

    const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
        if(modalRef.current && !modalRef.current.contains(e.target as Node)) {
            handleModalVisible();
        }

    }


    return (
        <div className="absolute bg-gray-900/80 w-full min-h-screen" onClick={handleModalClick}>
            <div className="absolute inset-0 flex items-center justify-center">
                <div ref={modalRef} className="bg-white shadow-lg w-4/5 md:w-1/2 max-w-2xl p-3 rounded">
                <h1 className="font-bold text-lg md:text-2xl">
                    Detalhes do Chamado:
                </h1>
                <button className="bg-red-500 p-1  px-2 text-white rounded" onClick={handleModalVisible}>
                    Fechar
                </button>
                </div>

                <div className="flex flex-wrap gap-1 mb-2">
                    <h2 className="font-bold">
                        Nome:
                    </h2>
                    <p>Problema no Computador</p>

                </div>

                 <div className="flex flex-wrap gap-1 mb-2">
                    <h2 className="font-bold">
                        Descrição:
                    </h2>
                    <p>Problema no Software</p>

                </div>

                <div className="w-full border-b-[1.5px] my-4">
                    <h1 className="font-bold text-lg mb-4"> Detalhes do Cliente</h1>
                </div>

                <div className="flex flex-wrap gap-1 mb-2">
                    <h2 className="font-bold">
                        Nome:
                    </h2>
                    <p>Mercado</p>
                </div>

                <div className="flex flex-wrap gap-1 mb-2">
                    <h2 className="font-bold">
                        Telefone:
                    </h2>
                    <p>981693-226</p>
                </div>

                <div className="flex flex-wrap gap-1 mb-2">
                    <h2 className="font-bold">
                        E-mail:
                    </h2>
                    <p>mercado@gmail.com</p>
                </div>

                <div className="flex flex-wrap gap-1 mb-2">
                    <h2 className="font-bold">
                        Endereço:
                    </h2>
                    <p>Rua Cliente, 1090 - São Paulo/SP </p>
                </div>




                

            </div>
        </div>
    )
}