import { cn } from '@/lib/utils';
import { Icon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";



export default function Navbar({ className}: {className?: string}) {
    const socials = [
        {
            link: "https://www.linkedin.com/in/ear-bunsong-161b57297/",
            label: "Linkedin",
            Icon: SiLinkedin
            ,
        },
        {
            link: "https://github.com/Earbunsong",
            label: "GitHub",
            Icon: SiGithub,
        },
        {
            link: "https://twitter.com/BunsongEar28221",
            label: "Twitter",
            Icon: SiTwitter,
        },
    ]
  return (
    <nav className={cn('py-10 flex justify-between items-center' ,className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Earbunsong 👨🏻‍💻</h1>
        <div className='flex items-center gap-5'>
            {socials.map((social,index)=>{

                const Icon = social.Icon

                return( <Link 
                                   href={social.link}
                                    key={index} 
                                    aria-label={social.label}>
                    <Icon className='w-5 h-4 hover:scale-125 transition-all'/>
                    </Link>);
                          
            })}
        </div>
    </nav>
  )
}
