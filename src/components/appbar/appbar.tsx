'use client';
import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

function AppBarBack({ menu }: { menu: string }) {
    const router = useRouter();
    return (
        <nav className='sticky top-0 bg-white z-10 px-5 py-5 border-b'>
            <button onClick={() => router.back()} className='flex items-center gap-2'>
                <FaArrowLeft size={18} />
                <h1 className='font-medium text-base'>{ menu }</h1>
            </button>
        </nav>
    )
}

export default AppBarBack