import Link from 'next/link'
import React from 'react'

function Landing() {
  return (
    <div className='flex justify-center items-center h-[100%]'>
      <Link href={'/home'} className='px-3 py-2 bg-orange-600 text-white rounded-full'>
        Home
      </Link>
    </div>
  )
}

export default Landing