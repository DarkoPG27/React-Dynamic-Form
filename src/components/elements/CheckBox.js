import React, { useContext } from 'react';
import { FormContext } from '../../FormContext';

const CheckBox = ({ field_id, field_label, field_value, field_mandatory }) => {

    const { handleChange } = useContext(FormContext);
    return (
        <div className="mb-3 form-check">
            <input
                type="checkbox"
                className="form-check-input"
                id={field_id}
                checked={field_value}
                required={{ field_mandatory }}
                onChange={event => handleChange(field_id, event)}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">{field_label}</label>
        </div>
    )
}

export default CheckBox;