import { useBoundStore } from '@/store/store'
import { useTranslations } from 'next-intl'
import { EditEducationInputField } from './EditInputField'
import { uuid } from 'uuidv4'
import { useState } from 'react'

export const ResumeEducationEdit = () => {
  const translation = useTranslations('Components')
  const buttonTranslation = useTranslations('Buttons')

  const [colapse, setColapse] = useState(true)
  const store = useBoundStore((state) => state)


  const isInLayout = store.layout.find(item => item.i === 'education')

  const handleClickButton = () => {

    setColapse(!colapse)
  }
  return (
    <div className='w-full gap-2 flex flex-col  pt-2'>
      <div className='px-4 flex flex-row items-center justify-between w-full'>
        <h1 className='text-md font-bold'>{translation('education')}</h1>
        <div className='flex gap-2'>
          {isInLayout ? <button className='text-red-500' onClick={() => store.removeLayoutItem('education')}>{buttonTranslation('delete')}</button> : <button onClick={() => store.pushLayoutItem({ i: "education", x: 0, y: 0, w: 12, h: 2, maxH: 4, maxW: 12, minW: 12, static: false, isResizable: true })}>{buttonTranslation('add')}</button>}
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
            {
              store.education.map(education => {
                return (
                  <EditEducationInputField key={education.id} education={education} store={store} />
                )
              })
            }
            <button
              className='bg-primary p-2 my-2 w-fit self-center rounded-md text-white'
              onClick={() => store.addEducation({
                id: uuid(),
                school: '',
                degree: '',
                dateRange: '',
                description: '',
              })}
            >
              {buttonTranslation('addfield')}

            </button>
          </div>
          : null}

    </div>
  )
}

const ResumeEducation = () => {
  const education = useBoundStore((state) => state.education)
  const translation = useTranslations('Components')
  return (
    <div>
      <h1 className='text-2xl font-bold underline'>{translation('education')}</h1>
      {education.map((ed) => {
        return (
          <div key={ed.id} className='flex flex-col '>
            <span className='font-bold'>{ed.school}</span>
            <span>{ed.dateRange}</span>
            <span className=''>{ed.degree}</span>
            <span>{ed.description}</span>
          </div>
        )
      })}

    </div>
  )
}

export default ResumeEducation