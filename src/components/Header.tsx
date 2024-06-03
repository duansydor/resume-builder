import React from 'react'
import LocalSwitcher from './LocalSwitcher'
import { useTranslations } from 'next-intl';

const Header = () => {
    const t = useTranslations('Header');

    return (
        <header className='z-50 relative top-0 left-0 p-4 flex w-full justify-between bg-primary text-white'>
            <div>{t('logo')}</div>
            <LocalSwitcher />
        </header>

    )
}

export default Header