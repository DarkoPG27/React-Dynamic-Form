import React, { useContext } from 'react';
import { FormContext } from '../../FormContext';

const Input = ({ field_id, field_label, field_placeholder, field_value, field_mandatory }) => {

    const { handleChange } = useContext(FormContext);

    return (
        <div className="mb-3">

            <label
                htmlFor={field_id}
                className="form-label"
            >{field_label}
            </label>

            <input
                type="text"
                className="form-control"
                id={field_id}
                aria-describedby={field_label}
                placeholder={field_placeholder ? field_placeholder : ""}
                value={field_value ? field_value : ""}
                onChange={event => handleChange(field_id, event)}
                required={{ field_mandatory }}
            />

            <div
                id={field_id}
                className="form-text"
            >We'll never share your email with anyone else.
            </div>

        </div>
    )
}

export default Input;