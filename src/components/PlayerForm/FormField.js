import React from 'react';

const FormField = ({ 
    name, 
    label, 
    type, 
    value,
    containerClass,
    handleChange 
}) => {

    return (
        <div className={ containerClass }>

            <label>{ label }</label>

            <input
                name={ name }
                type={ type }
                value={ value }
                onChange={ handleChange }
                required
            />
            
        </div>
    );

};

export default FormField;