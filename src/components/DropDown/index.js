import './style.css'
const DropDown = (props) => {
    return (
        <div>
            <label className="label">{props.label}</label>
            <select className="dropdown">
                {props.items.map(item => 
                    <option  key={item}>
                       {item}
                    </option>)
                }
            </select>
        </div>
    )
}

export default DropDown