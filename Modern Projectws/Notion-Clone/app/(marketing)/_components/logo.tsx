import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const font = Poppins({
    subsets: ['latin'],
    weight: ['400', '600'],
})

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image src="/logo.png" alt="logo" className="object-contain" height={40} width={40} />
            <p className={cn('font-semibold', font.className)}>Notion</p>
        </div>
    )
}
