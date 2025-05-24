

export function CardCustomer() {
    return (
    <article className="flex flex-col bg-gray-100 border-2 p-2 rounded-lg gap-2 hover:scale-105 duration-300">
            <h2>
               <a className="font-bold"></a> Nome: João Silva

            </h2>
            <p><a className="font-bold">Email:</a> teste@teste.com</p>
            <p className="font-bold"><a>Telefone:</a> +55 11 981693-226</p>
            <button className="bg-red-500 px-4 rounded text-white mt-2 self-end">
            Deletar
            </button>
        </article>
    )
}