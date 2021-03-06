import React, { useContext } from 'react';
import { FormContext } from '../../FormContext';

function Select({ field_id, field_label, field_placeholder, field_value, field_options, field_mandatory }) {
    const { handleChange } = useContext(FormContext);
    return (<div>
        <label htmlFor={field_id} className="form-label">{field_label}</label>
        <select className="form-select" aria-label={field_label}
            onChange={event => handleChange(field_id, event)} required={{ field_mandatory }}
        >
            <option >Open this select menu</option>
            {field_options.length > 0 && field_options.map((option, i) =>
                <option value={option.option_label} key={i}>{option.option_label}</option>

            )}
        </select>
    </div>
    )
}

export default Select;