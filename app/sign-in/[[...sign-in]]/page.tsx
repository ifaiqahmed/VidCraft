import BgGradient from '@/components/common/gradient'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return(
<div className='flex items-center justify-center py-16' >
  <BgGradient>
  <SignIn />
  </BgGradient>
</div>
  ) 
}