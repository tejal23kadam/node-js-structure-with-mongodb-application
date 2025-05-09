import React from 'react'
import { navSections } from '../layout/AdminNavSections';
import AdminHeader from '../components/AdminHeader';

function AdminLayout() {
  return (
    <>
      <AdminHeader navSections={navSections} />
    </>
  )
}

export default AdminLayout