import { useState } from "react"
import "./Dropdown.css"


function Dropdown() {
    const [show, setShow] = useState(false)
    const [selectedValue, setSelectedValue] = useState("Select City")

    const options = ["Chennai","Mumbai","Delhi","Chengalpattu","Guduvanchery"]
    const showMenu = () => setShow(!show)
    const selectMenu = (e) => {
        setSelectedValue(e.target.textContent)
        setShow(false)
    }

  return (
    <div className="dropdown">
        <div className="dropdown-field" onClick={showMenu}>
            <div className="value-box">{selectedValue}</div>
            <div className="dropdown-toggler">&#x2304;</div>
        </div>
        {show && 
        <div className="dropdown-menus">
            {options.map((item, index) => (<div key={index} className="menu" onClick={selectMenu}>{item}</div>))}
        </div>
        }
    </div>
  )
}

export default Dropdown