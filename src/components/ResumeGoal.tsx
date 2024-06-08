import { useBoundStore } from '@/store/store'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { EditInputField } from './EditInputField'


export const ResumeGoalEdit = () => {
  const translation = useTranslations('Components')
  const [colapse, setColapse] = useState(false)
  const store = useBoundStore((state) => state)


  const isInLayout = store.layout.find(item => item.i === 'goal')

  const handleClickButton = () => {

      setColapse(!colapse)
  }
  return (
      <div className='w-full gap-2 flex flex-col  pt-2'>
          <div className='px-4 flex flex-row items-center justify-between w-full'>
              <h1 className='text-2xl font-bold'>{translation('goal')}</h1>
              <div className='flex gap-2'>
                  {isInLayout ? <button className='text-red-500' onClick={() => store.removeLayoutItem('goal')}>Delete</button> : <button onClick={() => store.pushLayoutItem({ i: "goal", x: 0, y: 0, w: 12, h: 2, maxH: 2, maxW: 12, minW: 12, static: false, isResizable: true })}>Add</button>}
                  <button
                      className={`h-fit w-8 rounded-md text-lg font-bold text-white ${colapse && isInLayout ? 'bg-red-500' : 'bg-primary'}`}
                      onClick={handleClickButton}
                  >
                      {colapse && isInLayout ? '-' : '+'}
                  </button>

              </div>
          </div>

          {
              //   name: 'John Doe',
              //   role: 'Web Designer',
              //   address: '123 Main Street, Anytown, CA 12345',
              //   phone: '(123) 456-7890',
              //   email: 'john.doe@email.com',
              //   goals: 'To Manage this enterprise',
              colapse && isInLayout
                  ?
                  <div className='px-4 flex flex-col'>
                      <EditInputField name={'goal'} value={store.fields.goals} store={store} />
                     
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
      <div>
        {
          goals.goals
        }
      </div>
    </div>
  )
}

export default ResumeGoal