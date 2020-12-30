import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loggedIn: false,
    loggedInAs: null,
    loginError: null,
    users: [{email: "test@test.com", password: "testpass"}],
}

const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        registerUser: (state, action) => {
            const user     = action.payload;
            const email    = user.email;
            const password = user.password;
            state.users.push({email, password});
            state.loggedInAs = email;
            state.loggedIn = true;
        },
        logIn: (state, action) => {
            // Check to see if there's a user with the same email 
            const registeredUserWithSameEmail = state.users.find((user) => {
                return user.email == action.payload.email;
            });

            // If there is then compare password 
            if (registeredUserWithSameEmail) {
                const registeredUserEmail = registeredUserWithSameEmail.email;

                const registeredUserPass  = registeredUserWithSameEmail.password;
                const loggingInUserPass = action.payload.password;

                const validUserPassCombo = loggingInUserPass == registeredUserPass;
                console.log(validUserPassCombo);

                // If password is valid set logged in user
                if (validUserPassCombo) {
                    state.loggedIn = true;
                    state.loggedInAs = registeredUserEmail;
                } else {
                    //  Implement invalid email/password combo
                }
            }
        },
        logOut: (state) => {
            state.loggedIn = false;
            state.loggedInAs = null;
            state.logInError = null;
        },

    }
});

export const selectLoggedIn   = state => state.auth.loggedIn;
export const selectLoggedInAs = state => state.auth.loggedInAs;

export const {
    registerUser,
    logIn,
    logOut,
} = authReducer.actions;

export default authReducer.reducer