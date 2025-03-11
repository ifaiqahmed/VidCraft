import BgGradient from '@/components/common/gradient'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
  <div className='flex items-center justify-center py-16' >
    <BgGradient>
    <SignUp />
    </BgGradient>
  </div>
    ) 
}