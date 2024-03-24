import Link from 'next/link';
import React from 'react'
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { cn } from '@/lib/utils';

export default function Navbar({className}:{className?:string}) {

    const social = [
        {
            Link :"https://www.linkedin.com/in/i-komang-krisna-aditya-kusuma-ab3a39255/",
            Label :"Linkedin",
            Icon : SiLinkedin,    
        },
        {
            Link :"https://github.com/artesia0528",
            Label :"Github",
            Icon : SiGithub,    
        },
        {
            Link :"https://www.instagram.com/krisnaaditya_0528?igsh=MWwydmdmM3ZqbGF4Zg==",
            Label :"Instagram",
            Icon : SiInstagram,    
        },
    ];

    return( 
        <nav 
        className={cn(
                "py-10 flex justify-between items-center animate-move-down",
                className)}
            >
            <h1 className="text-2xl font-bold underline underline-offset-8 decoration-red-500 -rotate-2">krisnaAditya 🚀</h1>
            <div className="flex items-center gap-5 ">
                {social.map((social,index) => {
                    const Icon = social.Icon;
                    return <Link href={social.Link} key={index} aria-label={social.Label}>
                        <Icon className="h-5 w-5 hover:scale-125 transition-all"/>
                    </Link>
                })}
            </div>
        </nav>
    );
}