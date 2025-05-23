import { getSelf } from './auth-service'
import { db } from './db'

export const isBlockedByUser = async (id: string) => {
    try {
        const self = await getSelf()

        const otherUser = await db.user.findUnique({
            where: { id },
        })

        if (!otherUser) {
            throw new Error('User not found!')
        }

        if (otherUser.id === self.id) {
            return false
        }

        const existingBlocked = await db.block.findUnique({
            where: {
                blockerId_blockedId: {
                    blockerId: otherUser.id,
                    blockedId: self.id,
                },
            },
        })

        return !!existingBlocked
    } catch {
        return false
    }
}

export const blockUser = async (id: string) => {
    const self = await getSelf()

    if (self.id === id) {
        throw new Error('Cannot block yourself!')
    }

    const otherUser = await db.user.findUnique({
        where: { id },
    })

    if (!otherUser) {
        throw new Error('User not found!')
    }

    const existingBlock = await db.block.findUnique({
        where: {
            blockerId_blockedId: {
                blockedId: otherUser.id,
                blockerId: self.id,
            },
        },
    })

    if (existingBlock) {
        throw new Error('Already blocked!')
    }

    const block = await db.block.create({
        data: {
            blockedId: otherUser.id,
            blockerId: self.id,
        },
        include: {
            blocked: true,
        },
    })

    return block
}

export const unblockUser = async (id: string) => {
    const self = await getSelf()

    if (self.id === id) {
        throw new Error('Cannot block yourself!')
    }

    const otherUser = await db.user.findUnique({
        where: { id },
    })

    if (!otherUser) {
        throw new Error('User not found!')
    }

    const existingBlock = await db.block.findUnique({
        where: {
            blockerId_blockedId: {
                blockedId: otherUser.id,
                blockerId: self.id,
            },
        },
    })

    if (!existingBlock) {
        throw new Error('Not blocked!')
    }

    const unblock = await db.block.delete({
        where: {
            id: existingBlock.id,
        },
        include: {
            blocked: true,
        },
    })

    return unblock
}

export const getBlockedUsers = async () => {
    const self = await getSelf()

    const blockedUsers = await db.block.findMany({
        where: {
            blockerId: self.id,
        },
        include: {
            blocked: true,
        },
    })

    return blockedUsers
}
