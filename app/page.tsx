import BgGradient from '@/components/common/gradient'
import Banner from '@/components/home/Banner'
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
{/* <Divider/>
<HowItWorks/>
<Divider/>  
<Pricing/>  
<Divider/>
<Footer/> */}
   </main>
  )
}

export default page