import { useBoundStore } from '@/store/store'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { EditExperienceInputField } from './EditInputField'
import { uuid } from 'uuidv4'

export const ResumeExperienceEdit = () => {
  const translation = useTranslations('Components')
  const buttonTranslation = useTranslations('Buttons')

  const [colapse, setColapse] = useState(true)
  const store = useBoundStore((state) => state)


  const isInLayout = store.layout.find(item => item.i === 'experiences')

  const handleClickButton = () => {

    setColapse(!colapse)
  }
  return (
    <div className='w-full gap-2 flex flex-col  pt-2'>
      <div className='px-4 flex flex-row items-center justify-between w-full'>
        <h1 className='text-md font-bold'>{translation('experiences')}</h1>
        <div className='flex gap-2'>
          {isInLayout ? <button className='text-red-500' onClick={() => store.removeLayoutItem('experiences')}>{buttonTranslation('delete')}</button> : <button onClick={() => store.pushLayoutItem({ i: "experiences", x: 0, y: 0, w: 12, h: 2, maxH: 4, maxW: 12, minW: 12, static: false, isResizable: true })}>{buttonTranslation('add')}</button>}
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
            {
              store.experiences.map(experience => {
                return (
                  <EditExperienceInputField experience={experience} store={store} />
                )
              })
            }
            <button
              className='bg-primary p-2 my-2 w-fit self-center rounded-md text-white'
              onClick={() => store.addExperience({
                id: uuid(),
                company: '',
                position: '',
                dateRange: '',
                description: '',

              })}
            >
              {buttonTranslation('addfield')}

            </button>
          </div>
          :
          ''
      }

    </div>
  )
}

const ResumeExperience = () => {
  const experiences = useBoundStore((state) => state.experiences)
  const translation = useTranslations('Components')

  return (
    <div>
      <h1 className='text-2xl font-bold underline'>{translation('experiences')}</h1>
      {experiences.map((experience) => {
        return (
          <div key={experience.id} className='flex flex-col'>
            <span className='font-bold w-full'>{experience.company}</span>
            <span className='w-full'>{experience.dateRange}</span>
            <span className='w-full'>{experience.position}</span>
            <span className='w-full'>{experience.description}</span>
          </div>
        )
      })}

    </div>
  )
}

export default ResumeExperience