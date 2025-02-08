import React from 'react'
import { useOutletContext } from "react-router-dom";

function Products() {
  const { eachPageMargine } = useOutletContext();
  return (
    <div className={(window.innerWidth < 768) ? "header-left-Zero" : eachPageMargine}>
      <h1>products page</h1>
    </div>
  )
}

export default Products