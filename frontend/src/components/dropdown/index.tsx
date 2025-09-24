import type { DropdownProps } from "./index.d";

import './index.css';

const Dropdown = (props: DropdownProps) => {
    const { name, id, data } = props;

    return (
        <>
            <label className="dropdown-field-name">{name}</label>
            <select id={id} name={id} className="dropdown">
                <option></option>
                {
                    data?.map((item) => (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    ))
                }
            </select>
        </>
    )
}

export default Dropdown;