import { useBoundStore } from '@/store/store'
import { useTranslations, useLocale } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { EditGoalInputField } from './EditInputField'

import { useForm } from 'react-hook-form'


export const ResumeGoalEdit = () => {
  const translation = useTranslations('Components')
  const fieldsTranslations = useTranslations('Fields')
  const buttonTranslation = useTranslations('Buttons')
  const [gemini, setGemini] = useState(false)
  const [colapse, setColapse] = useState(true)
  const store = useBoundStore((state) => state)
  const locale = useLocale();

  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();


  const isInLayout = store.layout.find(item => item.i === 'goal')

  useEffect(()=>{

  },[store.fields.goals])
  const onSubmitFunction = async (data:any) => {
    setIsLoading(true);
    
    fetch(new Request('/api/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)

    }))
      .then((response) => response.json())
      .then((result) => {

        store.setField("goals",result.goal.response.candidates[0].content.parts[0].text);
        
        setGemini(false)
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleClickButton = () => {

    setColapse(!colapse)
  }
  return (
    <div className='w-full gap-2 flex flex-col  pt-2'>
      <div className='px-4 flex flex-row items-center justify-between w-full'>
        <h1 className='text-md font-bold'>{translation('goal')}</h1>
        <div className='flex gap-2'>
          {isInLayout ? <button className='text-red-500' onClick={() => store.removeLayoutItem('goal')}>{buttonTranslation('delete')}</button> : <button onClick={() => store.pushLayoutItem({ i: "goal", x: 0, y: 0, w: 12, h: 2, maxH: 4, maxW: 12, minW: 12, static: false, isResizable: true })}>{buttonTranslation('add')}</button>}
          <button
            className={`h-fit w-8 rounded-md text-lg font-bold text-white ${colapse && isInLayout ? 'bg-red-500' : 'bg-primary'}`}
            onClick={handleClickButton}
          >
            {colapse && isInLayout ? '-' : '+'}
          </button>

        </div>
      </div>

      {

        colapse && isInLayout
          ?
          <div className='px-4 flex flex-col'>
            <EditGoalInputField />
            <button
              className='bg-primary p-2 my-2 w-fit self-center rounded-md text-white'
              onClick={() => setGemini(!gemini)}
            >
              {buttonTranslation('generateai')}
            </button>
            <div>
              {
                gemini &&
                <div className='fixed w-96 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-blue-200 border-2 border-blue-400 p-4 rounded-lg shadow-md z-50'>
                  <form onSubmit={handleSubmit(onSubmitFunction)} className='flex flex-col items-center justify-center'>
                  <button 
                    className='my-4 h-8 w-8 bg-red-500 z-50 rounded-full text-md font-bold text-white place-self-center'
                    onClick={()=>{
                      setGemini(false)
                      reset()
                    }}
                  >
                    X
                  </button>

                    <div className='flex flex-col'>
                      <label htmlFor="role">{fieldsTranslations('role')}:</label>
                      <input type="text" id="role" {...register('role')} />
                    </div>
                    <div className='flex flex-col'>
                      <label htmlFor="skills">{fieldsTranslations('skills')}:</label>
                      <input type="text" id="skills" {...register('skills')} />
                    </div>
                      <input type="hidden" value={locale} id="skills" {...register('locale')} />

                    <button className='p-2 mt-2 w-full text-center text-primary' type="submit" disabled={isLoading} onClick={handleSubmit(onSubmitFunction)}>
                      {isLoading ? buttonTranslation('generating') : buttonTranslation('generate')}
                    </button>
                  </form>
                </div>
              }
            </div>
          </div>
          :
          ''
      }

    </div>
  )
}

const ResumeGoal = () => {
  const goals = useBoundStore((state) => state.fields)
  const translation = useTranslations('Components')

  return (
    <div>
      <h1 className='text-2xl font-bold underline'>{translation('goal')}</h1>
      <div className='w-full h-44 break-words flex flex-col'>
        {
          goals.goals.toString()
        }
      </div>
    </div>
  )
}

export default ResumeGoal