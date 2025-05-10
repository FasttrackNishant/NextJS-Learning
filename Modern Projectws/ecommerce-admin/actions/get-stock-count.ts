import prismadb from '@/lib/prismadb'

export const getStockCount = async (storeId: string) => {
    /** @ts-ignore */
    const stockCount = await prismadb.product.count({
        where: {
            storeId,
            isArchived: false,
        },
    })
    return stockCount
}
