'use client'
import { useBoundStore } from '@/store/store';
import React, { useEffect, useState } from 'react'
import GridLayout from "react-grid-layout";
import { useTranslations } from "next-intl";
import { LayoutItemType } from '@/types';
const SideMenu = () => {

    const componentsNameTranslation = useTranslations('ComponentsName');
    const fieldsNamesTranslation = useTranslations('FieldNames')
    const [open, setOpen] = useState(true)
    const boundedStore = useBoundStore((state) => state);
    const [layoutCopy,setLayoutCopy] = useState([]) 



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


    return (
        <div className='flex h-screen justify-start items-start'>

            <div className={`z-40 pt-24 fixed  h-lvh bottom-0 top-0 px-4 py-8 w-96  transition-all duration-500 ${open ? 'left-0 bg-gray-300 shadow-lg' : '-left-[350px]'}`}>
                <button onClick={menuSwitcher} className={`text-center font-bolder text-white w-8 h-8 rounded-full bg-primary absolute -right-4 top-1/2`}>{open ? '<' : '>'}</button>

                <ul className={`overflow-y-scroll h-full transition-all duration-500 ${open ? 'block' : 'hidden'}`}>
                   
                        {
                            boundedStore.layout.map((item: any) => {
                                // Retrieve the data for the current component
                                const componentDataForItem = boundedStore.componentData[item.i];
                                const componentName = boundedStore.components.find((component) => component.i === item.i)

                                console.log(componentDataForItem)
                                // Render input fields based on the component's data
                                return (
                                    <li className='' key={item.i}>
                                        <span className='font-bold'>{item.name}</span>
                                        <div className="py-2">
                                            <h1 className='font-bold text-xl'>
                                                {
                                                    componentName ? componentName.isHidden ? componentsNameTranslation(componentName.name) : '' : ''
                                                }
                                            </h1>
                                            <div>
                                                {componentDataForItem ?

                                                    Object.entries(componentDataForItem).map(([key, value]: any) => {
                                                        return (
                                                            <div className='flex flex-col mr-2' key={key}>
                                                                <span>{fieldsNamesTranslation(key)}:</span>
                                                                {key === 'content'?
                                                                <textarea
                                                                className='resize-none h-96 overflow-y-scroll'
                                                                
                                                                maxLength={322}
                                                                defaultValue={value}
                                                                onChange={(e) => handleInputChange(item.i, key, e.target.value)}
                                                                />

                                                                :
                                                                <input
                                                                    type="text"
                                                                    defaultValue={value}
                                                                    onChange={(e) => handleInputChange(item.i, key, e.target.value)}
                                                                />}
                                                                
                                                            </div>
                                                        )
                                                    })
                                                    :
                                                    <div>

                                                    </div>
                                                }
                                            </div>
                                        </div>


                                    </li>

                                );

                            })
                        }
                    {

                        boundedStore.components.map(available => {
                            return (
                                <li key={available.i} className={`${available.isHidden ? 'hidden' : ''}`}>
                                    <button
                                        onClick={(e) => {
                                            boundedStore.pushLayoutItem({ i: available.i, x: 0, y: 0, w: 12, h: 2, minW: 12, maxW: 12, maxH: 2, static: false, isResizable: true })
                                            boundedStore.setHidden(available.i, true)
                                        }}
                                    >
                                        {available.name}

                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}

export default SideMenu