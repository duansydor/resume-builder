'use client'
import GridLayout from "react-grid-layout";
import { useBoundStore } from '@/store/store';
import { LayoutItemType } from "@/types";
import ResumeHeader from "./ResumeHeader";
import ResumeLanguages from "./ResumeLanguages";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";
import ResumeGoal from "./ResumeGoal";
import jsPDF from "jspdf";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";


const ComponentToRender = (index: string) => {
  switch (index) {
    case 'header':
      return <ResumeHeader />
    case 'languages':
      return <ResumeLanguages />
    case 'education':
      return <ResumeEducation />
    case 'experiences':
      return <ResumeExperience />
    case 'goal':
      return <ResumeGoal />
    default:
      return null
  }
}


const ResumeCanvas = () => {
  const boundedStore = useBoundStore((state) => state)
  const buttonTranslation = useTranslations('Buttons')

  const textContentRef = useRef<HTMLDivElement | null>(null);
  const [triggerExport, setTriggerExport] = useState(false);
  const divToCapture = document.getElementById('mydiv');
  const domtoimage = require('dom-to-image')
  useEffect(() => {
    if (triggerExport) {
      domtoimage.toPng(divToCapture)
        .then(function (dataUrl: any) {
          const pdf = new jsPDF();

          pdf.addImage(dataUrl, 'PNG', 5, 10, 0, 0); // Adjust position as needed
          pdf.save('download.pdf');
        })
        .catch(function (error: any) {
          console.error('oops, something went wrong!', error);
        });
      setTriggerExport(false)
    }
  }, [triggerExport])
  return (
    <div ref={textContentRef} className='mt-20 w-screen min-h-screen flex flex-col items-center overflow-x-scroll'>
      <div className='mb-10 flex flex-col items-center gap-2'>
        <button className="border-2 border-primary text-xl p-2 text-primary rounded-md w-fit" onClick={() => setTriggerExport(true)}>{buttonTranslation('export')}</button>

        <span>{buttonTranslation('explanation')}</span>
      </div>
      <div className="">

        <div className={`relative ${triggerExport ? 'left-20' : '-ml-96'}`} id="mydiv">
          <GridLayout
            isDraggable={true}
            layout={boundedStore.layout}
            cols={12}
            width={720}
            autoSize={true}
            margin={[0, 5]}
            rowHeight={100}
            onLayoutChange={(layout: LayoutItemType[]) => {
              boundedStore.setLayout(layout)
            }}
          >
            {
              boundedStore.layout.map((item) => {
                return (
                  <div className={` z-0 w-[700px] ${triggerExport ? 'w-[1080px]' : 'border-2 border-primary'}`} key={item.i}>
                    {ComponentToRender(item.i)}

                  </div>
                )
              })
            }
          </GridLayout>
        </div>
      </div>
    </div>
  )
}

export default ResumeCanvas