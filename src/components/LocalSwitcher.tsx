'use client'
import { useLocale } from "next-intl"
import { useRouter,usePathname  } from "next/navigation";

import {ChangeEvent, useTransition} from "react"
const LocalSwitcher = () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();
    const pathname = usePathname()
    const onSelectChange = (e:ChangeEvent<HTMLSelectElement>) =>{
        
        const nextLocale = e.target.value;
        const currentPath = pathname.replace(`/${localActive}`, '');
        startTransition(()=>{
            router.replace(`/${nextLocale}${currentPath}`);
        })
    }
  return (
    <label className="border-2 rounded">
        <p className="sr-only">Select a language</p>
        <select
        defaultValue={localActive}
        className="bg-transparent"
        onChange={onSelectChange}
        aria-label="Select a language"
        disabled={isPending}
        >
            <option value="en" className="text-black m-4">English</option>
            <option value="pt" className="text-black">Portugês</option>
            
        </select>
    </label>
  )
}

export default LocalSwitcher