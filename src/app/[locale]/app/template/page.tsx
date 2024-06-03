'use client'
import { useSearchParams } from 'next/navigation'
import SideMenu from '@/components/SideMenu'
import ResumeCanvas from '@/components/ResumeCanvas'

const page = () => {
    const searchParams = useSearchParams();
    const template_id = searchParams.get('template_id')
    return (
        <div className='flex'>
           <SideMenu/>

           <ResumeCanvas/>

        </div>
    )
}

export default page