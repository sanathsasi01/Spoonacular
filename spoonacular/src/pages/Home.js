import SideBar from "../Components/SideBar";
import {useState} from 'react';
import style from './Home.module.css'

function Home() {
    const [showFilterBtn, setFilterBtn] = useState(false)
    function handleFilterClick() {
        setFilterBtn(!showFilterBtn)
    }
    return (
        <div>
            <div onClick={handleFilterClick} className={style.FilterBtn}>
                <i className="fas fa-filter" id="filter-icon"></i> &nbsp; &nbsp;
                {showFilterBtn ? "Close Filter" : "Filter Results"}
            </div>
            <SideBar showBtn={showFilterBtn} />
        </div>
    )
}

export default Home;