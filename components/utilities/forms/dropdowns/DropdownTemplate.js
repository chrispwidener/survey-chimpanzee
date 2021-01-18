import { Field, ErrorMessage } from 'formik';

const DropdownTemplate = (props) => {

    const options = props.options.map(option => {
        return <option value={option}>{option}</option>
    })

    return (
        <div>
           <Field 
                as="select"
                name={props.name}        
            > 
                { options }
            </Field>
           <ErrorMessage 
                name={props.name}
                component={props.component ? props.component : "p"}
            />
        </div>
    );
}

export default DropdownTemplate;
