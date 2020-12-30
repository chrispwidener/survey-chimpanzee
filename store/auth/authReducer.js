import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loggedIn: false,
    loggedInAs: null,
    loginError: null,
    users: [],
}

const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        registerUser: (state, action) => {
            const user     = action.payload;
            const email    = user.email;
            const password = user.password;
            state.auth.users.push({email, password});
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

                // If password is valid set logged in user
                if (validUserPassCombo) {
                    state.auth.loggedIn = true;
                    state.auth.loggedInAs = registeredUserEmail;
                } else {
                    //  Implement invalid email/password combo
                }
            }
        },

    }
});

export const selectLoggedIn = state => state.auth.loggedIn;

export const {
    registerUser,
    logIn,
} = authReducer.actions;

export default authReducer.reducer