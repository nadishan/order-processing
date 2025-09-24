import type { TextInputProps } from "./index.d";

import './index.css';

const TextInput = (props: TextInputProps) => {
    const { isRequired = false, name, id } = props;

    return (
         <div>
            <label className="text-input-label">{name}</label>
            <input type="text" className="text-input-box" id={id} name={id} required={isRequired} />
        </div>
    )

}

export default TextInput;