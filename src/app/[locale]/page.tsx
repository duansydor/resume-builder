'use client'
import Loading from '@/components/Loading';
import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useState } from 'react';



export default function Index() {
  const t = useTranslations('Index');
  const router = useRouter()
  const locale = useLocale()
  const [isLoading, setIsLoading] = useState(false);
  const onClickEvent = () => {
    setIsLoading(true);
    router.push(`${locale}/app`)
  }




  return (
    <main className='w-full h-svh flex px-4 pb-16'>
      <div className='mx-auto mt-20 h-fit w-[720px] flex flex-col  md:flex-row'>
        <div className='flex flex-col items-center md:items-start'>
          <div className='w-80 text-center md:text-left md:w-96 md:mr-10'>
            <h1 className='my-4 text-center font-bold text-2xl md:w-fit md:text-left md:mr-8'>{t('title')}</h1>
            <span className='text-center text-sm md:w-fit md:text-left md:mr-8'>Basta inserir seus dados e deixar que criemos um currículo profissional e atraente que faça você ser notado pelos recrutadores.  Não é necessário experiência em design!</span>
          </div>
          <Image alt='hero image' src="/hero.png" width={350} height={350} className="w-80 mt-8 md:hidden mx-2" />

          <Link className='' passHref href={`${locale}/app`}>
            <button
              className='mt-10 bg-blue-500 text-white px-4 py-2 rounded shadow-lg'
              onClick={onClickEvent}
            >
              {t('start')}
            </button>
          </Link>
        </div>
        <Image alt='hero image' src="/hero.png" width={350} height={350} className="w-80 my-2 mx-2 max-[768px]:hidden" />
      </div>
      {isLoading && <Loading translation={t('loading')} />}
    </main>

  )
}