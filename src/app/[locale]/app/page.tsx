'use client'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

const page = () => {
  const t = useTranslations('App')
  const router = useRouter()
  const locale = useLocale()
  const onClickHandle = () => {
    router.push(`app/template`)
  }
  return (
    <main className='px-8 h-svh text-custom-dark'>
      {/* template container */}
      <div className='flex flex-col justify-start gap-4 mt-10'>
        <h1 className='text-3xl font-bold mt-4'>{t('title')}</h1>
        <div className="flex justify-between gap-4 flex-col md:flex-row">
          <div className='w-[310px] h-[350px] bg-blue-400'></div>
          <div className='w-[310px] h-[350px] bg-blue-400'></div>
          <div className='w-[310px] h-[350px] bg-blue-400'></div>
        </div>
      </div>
      <div className='flex flex-col items-center py-8 gap-4'>
        <h1 className='text-3xl font-bold'>{t('condition')}</h1>
        <button onClick={onClickHandle} className='bg-primary p-4 w-fit text-white font-bold text-xl rounded-lg'>{t('cta')}</button>
        <span className='w-64 text-center text-sm -mt-2' >{t('note')}</span>
      </div>
    </main>
  )
}

export default page