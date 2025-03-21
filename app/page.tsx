import BgGradient from '@/components/common/gradient'
import Banner from '@/components/home/Banner'
import HowItWorks from '@/components/home/HowItWorks'
import Pricing from '@/components/home/Pricing'
import { Button } from '@/components/ui/button'
import { Dot } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
   <main className='mx-auto w-full inset-0 h-full bg-[radial-gradient(#e5e7eb_1px), transparent_1px)] [background-size:16px_16px]' >
   
<BgGradient/>
<Banner/>
<div className='flex items-center justify-center' >
<Dot className='text-purple-400' ></Dot>
<Dot className='text-purple-400' ></Dot>
<Dot className='text-purple-400' ></Dot>
</div>
<HowItWorks/>
<div className='flex items-center justify-center' >
<Dot className='text-purple-400' ></Dot>
<Dot className='text-purple-400' ></Dot>
<Dot className='text-purple-400' ></Dot>
</div>
<Pricing/>  
<div className='flex items-center justify-center' >
<Dot className='text-purple-400' ></Dot>
<Dot className='text-purple-400' ></Dot>
<Dot className='text-purple-400' ></Dot>
</div>
<footer className='bg-gray-200/20 flex h-20 py-20 px-12 z-20 relative overflow-hidden'><p>
  All Rights Reserved, {new Date().getFullYear()}</p></footer>
   </main>
  )
}

export default page