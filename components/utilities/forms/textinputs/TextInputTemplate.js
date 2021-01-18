import React from 'react';
import { Field, ErrorMessage } from 'formik';

const TextInputTemplate = (props) => {
    // Text accepts a type because
    // sometimes it's neccesary for
    // a text field to be of type password

    return (
        <div>
           <Field 
                type={props.type ? props.type : "text"} 
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
