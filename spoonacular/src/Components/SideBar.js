import style from './SideBar.module.css'
// import {useState} from 'react'


function SideBar(props) {
    function handleChange(e) {
        console.log(e.target.className)
    }
    return (
        <div className={style.container} style={props.showBtn ? {"display" : "block"} : null}>
            <p>Cuisine</p>
            <ul>
                <li><input type="checkbox" className="Cuisine" name='african' onChange={handleChange} /> African</li>
                <li><input type="checkbox" name='american' onChange={handleChange} /> American</li>
                <li><input type="checkbox" name='British' onChange={handleChange} /> British</li>
                <li><input type="checkbox" name='Cajun' onChange={handleChange} /> Cajun</li>
                <li><input type="checkbox" name='Caribbean' onChange={handleChange} /> Caribbean</li>
                <li><input type="checkbox" name='Chinese' onChange={handleChange} /> Chinese</li>
                {/* <li><input type="checkbox" name='Eastern European' onChange={handleChange} /> Eastern European</li> */}
                <li><input type="checkbox" name='European' onChange={handleChange} /> European</li>
                <li><input type="checkbox" name='French' onChange={handleChange} /> French</li>
            </ul>
            <p>Diet</p>
            <ul>
                <li><input type="checkbox" name='Vegetarian' onChange={handleChange} /> Vegetarian</li>
                <li><input type="checkbox" name='Gluten Free' onChange={handleChange} /> Gluten Free</li>
                <li><input type="checkbox" name='Ketogenic' onChange={handleChange} /> Ketogenic</li>
            </ul>   
        </div>
    )
}

export default SideBar;