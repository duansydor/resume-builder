'use client'
import { useBoundStore } from '@/store/store';
import React, { ComponentType, useEffect, useState } from 'react'
import GridLayout from "react-grid-layout";
import { useTranslations } from "next-intl";
import { LayoutItemType } from '@/types';

import LanguageResume from './LanguageResume';




const SideMenu = () => {

    const componentsNameTranslation = useTranslations('ComponentsName');
    const fieldsNamesTranslation = useTranslations('FieldNames')
    const [open, setOpen] = useState(true)
    const boundedStore = useBoundStore((state) => state);



    const menuSwitcher = () => {
        setOpen(!open)
    }
    const handleInputChange = (componentId: string, field: string, value: string) => {
        if (boundedStore.componentData[componentId]) { // Check if componentData[componentId] exists
            boundedStore.setComponentData(componentId, {
                ...boundedStore.componentData[componentId],
                [field]: value,
            });
        } else {
            // Handle the case where componentData[componentId] is undefined
            console.error(`Component data for ID ${componentId} not found.`);
        }
    };
    const componentRenderMap = {
        'LanguageResume': ({ value }: any) => (
            <div className='flex'>
                <div className='flex flex-col mr-2 gap-2 mt-4'>
                    <input
                        type="text"
                        className=''
                        defaultValue={value.language}
                        onChange={(e) => boundedStore.setLanguages(value.id, e.target.value, value.level)}
                    />
                    <input
                        type="text"
                        defaultValue={value.level}
                        onChange={(e) => boundedStore.setLanguages(value.id, value.language, e.target.value)}
                    />
                </div>
                <button
                    className='mr-10 bg-red-600 px-2 h-fit place-self-center text-white rounded-md'
                    onClick={() => boundedStore.deleteLanguage(value.id)}
                >
                    Delete
                </button>
            </div>
        ),
        'Experience': ({ value }: any) => (
            // place:'',
            // position:'',
            // date:'',
            // description:''
            <div className='flex'>
                <div className='flex flex-col mr-2 gap-2 mt-4'>
                    <input
                        type="text"
                        className=''
                        defaultValue={value.place}
                        onChange={(e) => boundedStore.setLanguages(value.id, e.target.value, value.level)}
                    />
                    <input
                        type="text"
                        defaultValue={value.position}
                        onChange={(e) => boundedStore.setLanguages(value.id, value.language, e.target.value)}
                    />
                    <input
                        type="text"
                        defaultValue={value.date}
                        onChange={(e) => boundedStore.setLanguages(value.id, value.language, e.target.value)}
                    />
                    <input
                        type="text"
                        defaultValue={value.description}
                        onChange={(e) => boundedStore.setLanguages(value.id, value.language, e.target.value)}
                    />
                </div>
                <button
                    className='mr-10 bg-red-600 px-2 h-fit place-self-center text-white rounded-md'
                    onClick={() => boundedStore.deleteLanguage(value.id)}
                >
                    Delete
                </button>
            </div>
        ),
        'ObjectiveResume': ({ value }: any) => (
            <textarea
                className='relative w-80 h-96 flex text-justify resize-none'

                maxLength={322}
                defaultValue={value}
                onChange={(e) => handleInputChange(item.i, key, e.target.value)}
            />
        )
    };


    function componentHeader(name: string, isHidden: boolean) {
        switch(name){
            case "LanguageResume":
                return <button className='mr-10 text-xl bg-primary px-2 rounded-md text-white' onClick={() => boundedStore.addLanguage('English', 'Basic')}>+</button>
            case 'ObjectiveResume':
                return <button className='mr-10 text-xl bg-primary px-2 rounded-md text-white' onClick={() => boundedStore.addLanguage('English', 'Basic')}>+</button>
            
            }
    }

    return (
        <div className='flex h-screen justify-start items-start'>

            <div className={`z-40 pt-24 fixed  h-lvh bottom-0 top-0 px-4 py-8 w-96  transition-all duration-500 ${open ? 'left-0 bg-gray-300 shadow-lg' : '-left-[350px]'}`}>
                <button onClick={menuSwitcher} className={`text-center font-bolder text-white w-8 h-8 rounded-full bg-primary absolute -right-4 top-1/2`}>{open ? '<' : '>'}</button>

                <ul className={`overflow-y-scroll h-full transition-all duration-500 ${open ? 'block' : 'hidden'}`}>

                    {
                        boundedStore.layout.map((item: LayoutItemType) => {
                            // Retrieve the data for the current component
                            const componentDataForItem = boundedStore.componentData[item.i];
                            const componentName = boundedStore.components.find((component) => component.i === item.i) || { name: '', isHidden: false }

                            console.log(componentDataForItem)
                            // Render input fields based on the component's data
                            return (
                                <li className='py-2 flex flex-col w-full' key={item.i}>

                                    <div className='w-full flex justify-between items-center'>
                                    <h1 className='font-bold text-xl'>{componentsNameTranslation(componentName.name)}</h1>
                                        {
                                            componentHeader(componentName.name, componentName.isHidden)
                                        }
                                    </div>
                                    <div className=''>
                                        {
                                            Object.entries(componentDataForItem).map(([key, value]: any) => {
                                                return (
                                                    <div className=' ' key={key}>
                                                        <div>
                                                            <span>{!Array.isArray(componentDataForItem) ? fieldsNamesTranslation(key) : ''}</span>

                                                        </div>

                                                        {
                                                            Array.isArray(componentDataForItem) ? (
                                                                <div className=' '>
                                                                    {componentRenderMap[componentName.name]
                                                                        ? componentRenderMap[componentName.name]({ value })
                                                                        : <input
                                                                            type="text"
                                                                            defaultValue={value}
                                                                            onChange={(e) => handleInputChange(item.i, key, e.target.value)}
                                                                        />
                                                                    }
                                                                </div>
                                                            ) : (
                                                                <input
                                                                    type="text"
                                                                    defaultValue={value}
                                                                    onChange={(e) => handleInputChange(item.i, key, e.target.value)}
                                                                />
                                                            )
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                </li>
                            );
                        })
                    }
                    {
                        boundedStore.components.map(available => {
                            return (
                                <li key={available.i} className={`flex justify-between items-center my-4 ${available.isHidden ? 'hidden' : ''}`}>

                                    <h1 className='font-bold text-xl'>{componentsNameTranslation(available.name)}</h1>
                                    <button
                                        className='mr-10 text-xl bg-primary px-2 rounded-md text-white'
                                        onClick={(e) => {
                                            boundedStore.pushLayoutItem({ i: available.i, x: 0, y: 0, w: 12, h: 2, minW: 12, maxW: 12, maxH: 2, static: false, isResizable: true })
                                            boundedStore.setHidden(available.i, true)
                                        }}
                                    >
                                        +
                                    </button>

                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div >
    )
}

export default SideMenu