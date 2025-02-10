import React from 'react'
import AdminHeader from '../components/Header'
import { navSections } from '../layout/EndUseNavSections';

function EnduserLayout() {
    return (
        <>

            <AdminHeader navSections={navSections} />

        </>
    )
}

export default EnduserLayout