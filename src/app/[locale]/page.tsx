'use client'
import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl"
import { useRouter } from "next/navigation";



export default function Index() {
  const t = useTranslations('Index');
  const router = useRouter()
  const locale = useLocale()
  const onClickEvent = () => {
    router.push(`${locale}/app`)
  }




  return (
    <main className='px-4'>
      <h1>{t('title')}</h1>
      
      <button className='mt-10 bg-blue-500 text-white px-4 py-2 rounded' onClick={onClickEvent}>Start Building</button>
    
    </main>

  )
}