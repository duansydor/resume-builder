import SideMenu from '@/components/SideMenu'
import ResumeCanvas from '@/components/ResumeCanvas'

const page = () => {

    return (
        <div className='flex'>
           <SideMenu/>

           <ResumeCanvas/>

        </div>
    )
}

export default page