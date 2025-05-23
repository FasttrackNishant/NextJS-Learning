'use client'

import { useAuth } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { onFollow, onUnfollow } from '@/actions/follow'
import { useTransition } from 'react'
import { toast } from 'sonner'
import { Skeleton } from '../ui/skeleton'

interface ActionsProps {
    hostIdentity: string
    isFollowing: boolean
    isHost: boolean
}

export const Actions = ({ hostIdentity, isFollowing, isHost }: ActionsProps) => {
    const { userId } = useAuth()
    const router = useRouter()
    const [isPending, startTransition] = useTransition()

    const handleFollow = () => {
        startTransition(() => {
            onFollow(hostIdentity)
                .then((data) => toast.success(`You are now following ${data.following.username}!`))
                .catch(() => toast.error('Something went wrong!'))
        })
    }

    const handleUnfollow = () => {
        startTransition(() => {
            onUnfollow(hostIdentity)
                .then((data) => toast.success(`You have unfollowed ${data.following.username}!`))
                .catch(() => toast.error('Something went wrong!'))
        })
    }

    const toggleFollow = () => {
        if (!userId) {
            return router.push('/sign-in')
        }

        if (isHost) return

        if (isFollowing) {
            handleUnfollow()
        } else {
            handleFollow()
        }
    }

    return (
        <Button onClick={toggleFollow} disabled={isPending || isHost} variant="primary" size="sm" className="w-full lg:w-auto">
            <Heart className={cn('w-4 h-4 mr-2', isFollowing ? 'fill-white' : 'fill-none')} />
            {isFollowing ? 'Unfollow' : 'Follow'}
        </Button>
    )
}

export const ActionsSkeleton = () => {
    return <Skeleton className="h-10 w-full lg:w-24" />
}
