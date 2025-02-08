import React from 'react'
import { useOutletContext } from "react-router-dom";


function Settings() {
  const { eachPageMargine } = useOutletContext();

  return (
    <div className={(window.innerWidth < 768) ? "header-left-Zero" : eachPageMargine}>
      <h1>settings page page</h1>
    </div>
  )
}

export default Settings