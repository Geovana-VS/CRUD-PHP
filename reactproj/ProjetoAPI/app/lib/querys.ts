
import prisma from "./prisma";


export async function IndexProduto(){
    return await prisma.produto.findMany();
}


