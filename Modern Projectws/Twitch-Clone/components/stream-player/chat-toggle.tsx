'use client'

import { useChatSidebar } from '@/store/use-chat-sidebar'
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'
import { Hint } from '../hint'
import { Button } from '../ui/button'

export const ChatToggle = () => {
    const { collapsed, onExpand, onCollapse } = useChatSidebar((state) => state)
    const Icon = collapsed ? ArrowLeftFromLine : ArrowRightFromLine

    const onToggle = () => {
        if (collapsed) {
            onExpand()
        } else {
            onCollapse()
        }
    }

    const label = collapsed ? 'Expand' : 'Collapse'

    return (
        <Hint label={label} side="left" asChild>
            <Button onClick={onToggle} variant="ghost" className="h-auto hover:bg-white/10 hover:text-primary bg-transparent">
                <Icon className="h-4 w-4" />
            </Button>
        </Hint>
    )
}
