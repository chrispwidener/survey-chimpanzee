import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import TextInputTemplate from 'components/utilities/forms/textinputs/TextInputTemplate';
import { emailSchema, passwordSchema } from 'components/utilities/forms/textinputs/textInputValidationSchemas';

import { useDispatch } from 'react-redux';
import { registerUser } from 'store/auth/authReducer';

const Register = (props) => {

    const dispatch = useDispatch();

    const initialValues = {
        email: "",
        password: "",
        passwordConfirm: "",
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object({
                    email: emailSchema,
                    password: passwordSchema,
                    passwordConfirm: Yup.string()
                        .oneOf([Yup.ref('password'), null], "Must match password")
                        .required("You must confirm your Password")
                })}
                onSubmit={(values, { setSubmitting }) => {
                    console.log("Email: " + values.email);
                    console.log("Password: " + values.password);
                    dispatch(registerUser({
                        email: values.email,
                        password: values.password, 
                    }));
                }}
            >
                <Form>
                    <TextInputTemplate
                        name="email"
                        type="text" 
                        placeholder="Email Address"
                    />
                    <TextInputTemplate
                        name="password"
                        type="password" 
                        placeholder="Password" 
                    />
                    <TextInputTemplate
                        name="passwordConfirm"
                        type="password"
                        placeholder="Confirm Password" 
                    />
                    <button type="submit">Register</button>
                </Form>
            </Formik>
        
        </div>
    );
}

export default Register;
