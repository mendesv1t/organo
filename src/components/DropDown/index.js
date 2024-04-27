import './style.css'
const DropDown = (props) => {
    
    return (
        <div className='drop-down'>
            <label className="label">{props.label}</label>
            <select className="dropdown" onChange={event => props.valorAlterado(event.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
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