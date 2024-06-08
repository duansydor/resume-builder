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
import html2canvas from 'html2canvas';
import { useEffect, useRef, useState } from "react";


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
  const textContentRef = useRef<HTMLDivElement | null>(null);
  const [triggerExport, setTriggerExport] = useState(false);
  useEffect(() => {
    const handleExport = async () => {
      if (textContentRef.current) { 
        const canvas = await html2canvas(textContentRef.current);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4'); 
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3986746031.
        const imgProps = pdf.getImageProperties(imgData);
        const zoomFactor = 1.7; 
        const pdfWidth = pdf.internal.pageSize.getWidth() * zoomFactor;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('download.pdf');
      } else {
        console.error("textContentRef is not yet attached");
      }
    };
    // You might want to trigger handleExport based on some event, 
    // like a button click. For now, let's just call it once for demonstration:
    if (triggerExport) { // Only run if triggerExport is true
      handleExport();
      setTriggerExport(false); // Reset the trigger after export
    }
  }, [triggerExport]); 
  return (
    <div className='mt-20 w-screen min-h-screen overflow-scroll'>
      <div className='flex gap-2 justify-end ml-auto mr-auto items-center w-96 z-50'>
        <button onClick={() => setTriggerExport(true)}>Export</button>
      </div>
      <div ref={textContentRef} className={`pl-20 ${triggerExport?'':'ml-72'}`}>
        <GridLayout
          className=""
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
                <div className={` z-0 w-[700px] ${triggerExport?'w-[1080px]':'border-2 border-primary'}`} key={item.i}>
                  {ComponentToRender(item.i)}
                  {
                    triggerExport?null:
                    <button className='z-50 absolute -right-16 top-0 bg-red-500 text-white p-1 rounded-md' onClick={e => {
                    boundedStore.removeLayoutItem(item.i)
                   }}>Delete</button>
                  }
                </div>
              )
            })
          }
        </GridLayout>

      </div>
    </div>
  )
}

export default ResumeCanvas