import React from 'react'
import Header from '../components/Header'
import { navSections } from '../layout/AdminNavSections';

function AdminLayout() {
  return (
    <>
      <Header navSections={navSections} />
      
    </>
  )
}

export default AdminLayout