import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import TextInputTemplate from 'components/utilities/forms/textinputs/TextInputTemplate';
import { emailSchema, passwordSchema } from 'components/utilities/forms/textinputs/textInputValidationSchemas';

import { useDispatch } from 'react-redux';
import { logIn } from 'store/auth/authReducer';

const Login = (props) => {

    const dispatch = useDispatch();

    const initialValues = {
        email: "",
        password: "",
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object({
                    email: emailSchema,
                    password: passwordSchema,
                })}
                onSubmit={(values, { setSubmitting }) => {
                    console.log("Email: " + values.email);
                    console.log("Password: " + values.password);
                    dispatch(logIn({
                        email: values.email,
                        password: values.password, 
                    }));
                }}
            >
                <Form>
                    <TextInputTemplate
                        name="email"
                        type="text" />
                    <TextInputTemplate
                        name="password"
                        type="password" />
                    <button type="submit">Log In</button>
                </Form>
            </Formik>
        
        </div>
    );
}

export default Login;
