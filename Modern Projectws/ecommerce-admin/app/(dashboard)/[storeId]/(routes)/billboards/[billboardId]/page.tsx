import prismadb from '@/lib/prismadb'
import { BillboardForm } from './components/billboard-form'

const BillBoardPage = async ({ params }: { params: { billboardId: string } }) => {
    /** @ts-ignore */
    const billboard = await prismadb.billboard.findUnique({
        where: {
            id: params.billboardId,
        },
    })

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardForm initialData={billboard} />
            </div>
        </div>
    )
}

export default BillBoardPage
