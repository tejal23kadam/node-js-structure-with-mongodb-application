import { React } from 'react'
import { useOutletContext } from "react-router-dom";


function Dashboard() {
    const { eachPageMargine } = useOutletContext();

    return (
        <>
            <div className={(window.innerWidth < 768) ? "header-left-Zero" : eachPageMargine}>
                <h1>this is dashboard page</h1>
            </div>
        </>
    )
}
export default Dashboard