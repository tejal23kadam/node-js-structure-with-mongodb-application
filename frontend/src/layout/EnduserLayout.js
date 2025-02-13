import React from 'react'
import Header from '../components/Header'
import { navSections } from '../layout/EndUseNavSections';

function EnduserLayout() {
    return (
        <>
            <Header navSections={navSections} />
        </>
    )
}

export default EnduserLayout