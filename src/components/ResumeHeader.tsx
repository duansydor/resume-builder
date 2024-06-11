import { useBoundStore } from '@/store/store'
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'
import { EditInputField } from './EditInputField';





export const ResumeHeaderEdit = () => {
    const translation = useTranslations('Components')
    const buttonTranslation = useTranslations('Buttons')
    const [colapse, setColapse] = useState(true)
    const store = useBoundStore((state) => state)


    const isInLayout = store.layout.find(item => item.i === 'header')

    const handleClickButton = () => {

        setColapse(!colapse)
    }
    return (
        <div className='w-full gap-2 flex flex-col  pt-2'>
            <div className='px-4 flex flex-row items-center justify-between w-full'>
                <h1 className='text-md font-bold w-10'>{translation('header')}</h1>
                <div className='flex gap-2'>
                    {isInLayout ? <button className='text-red-500' onClick={() => store.removeLayoutItem('header')}>{buttonTranslation('delete')}</button> : <button onClick={() => store.pushLayoutItem({ i: "header", x: 0, y: 0, w: 12, h: 2, maxH: 2, maxW: 12, minW: 12, static: false, isResizable: true })}>{buttonTranslation('add')}</button>}
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
                        <EditInputField name={'name'} value={store.fields.name} store={store} />
                        <EditInputField name={'role'} value={store.fields.role} store={store} />
                        <EditInputField name={'address'} value={store.fields.address} store={store} />
                        <EditInputField name={'phone'} value={store.fields.phone} store={store} />
                        <EditInputField name={'email'} value={store.fields.email} store={store} />



                    </div>
                    :
                    ''
            }

        </div>
    )
}

const ResumeHeader = () => {
    const fields = useBoundStore((state) => state.fields);
    const setFields = useBoundStore((state) => state.setField)

    // const componentDataForItem = boundedStore.componentData.a;


    return (
        <div className='flex w-full'>
            <div className='flex flex-col p-2 w-full'>
                <h1 className='text-2xl font-bold'>
                    {fields.name}
                </h1>
                <span className='mb-2'>{fields.role}</span>
                <span className='w-full'>{fields.address}</span>
                <span className='w-full'>{fields.phone}</span>
                <span className='w-full'>{fields.email}</span>

            </div>
        </div>
    )
}

export default ResumeHeader