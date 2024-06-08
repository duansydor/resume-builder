import { useBoundStore } from '@/store/store'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { EditLanguageInputField } from './EditInputField'
import { uuid } from 'uuidv4'

export const ResumeLanguagesEdit = () => {
    const translation = useTranslations('Components')
    const [colapse, setColapse] = useState(false)
    const store = useBoundStore((state) => state)


    const isInLayout = store.layout.find(item => item.i === 'languages')

    const handleClickButton = () => {

        setColapse(!colapse)
    }
    return (
        <div className='w-full gap-2 flex flex-col  pt-2'>
            <div className='px-4 flex flex-row items-center justify-between w-full'>
                <h1 className='text-2xl font-bold'>{translation('languages')}</h1>
                <div className='flex gap-2'>
                    {isInLayout ? <button className='text-red-500' onClick={() => store.removeLayoutItem('languages')}>Delete</button> : <button onClick={() => store.pushLayoutItem({ i: "languages", x: 0, y: 0, w: 12, h: 2, maxH: 2, maxW: 12, minW: 12, static: false, isResizable: true })}>Add</button>}
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
                            store.languages.map(language => {
                                return (
                                    <EditLanguageInputField language={language} store={store} />
                                )
                            })
                        }
                        <button
                            className='bg-primary p-2 my-2 w-fit self-center rounded-md text-white'
                            onClick={() => store.addLanguage({
                                id: uuid(),
                                name: '',
                                level: ''
                            })}
                        >
                            Add Language
                        </button>
                    </div>
                    :
                    ''
            }

        </div>
    )
}

const ResumeLanguages = () => {
    const languages = useBoundStore((state) => state.languages)
    const translation = useTranslations('Components')
    return (
        <div>
            <h1 className='text-2xl font-bold underline'>{translation('languages')}</h1>

            {
                languages.map(language => {
                    return (
                        <div className='flex gap-2'>
                            <span className='font-bold'>{language.name}:</span>
                            <span>{language.level}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ResumeLanguages