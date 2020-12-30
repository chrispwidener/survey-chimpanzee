import React from 'react';
import { Field, ErrorMessage } from 'formik';

const TextInputTemplate = (props) => {
    return (
        <div>
           <Field 
                type={props.type} 
                name={props.name}
                placeholder={props.placeholder ? props.placeholder : props.name }
            />
            <ErrorMessage
                name={props.name}
                component={props.component ? props.component : "p"}
            />
        </div>        
    );
}

export default TextInputTemplate;
