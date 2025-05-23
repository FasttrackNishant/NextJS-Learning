'use client'

import { ColumnDef } from '@tanstack/react-table'
import { SellAction } from './cell-action'

export type BillboardColumn = {
    id: string
    label: string
    createdAt: string
}

export const columns: ColumnDef<BillboardColumn>[] = [
    {
        accessorKey: 'label',
        header: 'Label',
    },
    {
        accessorKey: 'createdAt',
        header: 'Date',
    },
    {
        id: 'actions',
        cell: ({ row }) => <SellAction data={row.original} />,
    },
]
