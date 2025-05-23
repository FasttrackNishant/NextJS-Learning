'use client'

import { ColumnDef } from '@tanstack/react-table'
import { SellAction } from './cell-action'

export type CategoryColumn = {
    id: string
    name: string
    billboardLabel: string
    createdAt: string
}

export const columns: ColumnDef<CategoryColumn>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'billboard',
        header: 'Billboard',
        cell: ({ row }) => row.original.billboardLabel,
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
