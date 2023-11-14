'use client'
import Link from 'next/link'
import clsx from 'clsx'
interface MobileFooterProps{
    href: string;
    icon: any;
    active: boolean;
    onClick: () => void;
}

const MobileItem: React.FC<MobileFooterProps> = ({
    href,
    icon: Icon,
    active,
    onClick,
}) => {

    const handleClick = () =>{
        if(onClick){
            return onClick()
        }
    }
  return (
    <Link href={href} onClick={onClick}  className={clsx(`group flex gap-x-3 text-sm p-4  leading-6 font-semibold text-gray-500 hover:text-black hover:bg-gray-100`, active && 'bg-gray-100 text-black', active && "bg-gray-100 text-black")}>
      <Icon className="h-8 w-8"/>
    </Link>
  )
}

export default MobileItem
