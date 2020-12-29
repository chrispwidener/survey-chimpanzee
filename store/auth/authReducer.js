import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loggedIn: false,
    loggedInAs: null,
    users: [],
}

const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        registerUser: (state, action) => {
            const user = action.payload;
            const username = user.username;
            const password = user.password;
            const hash = password.hashCode();
            state.auth.users.push({username, hash});
        },
        logIn: (state, action) => {
            // Check to see if there's a user with the same username
            const registeredUserWithSameUsername = state.auth.users.find((user) => {
                return user.username == action.payload.username;
            });
            // If there is then compare password hash
            if (registeredUserWithSameUsername) {
                const registeredUserUsername     = registeredUserWithSameUsername.username;
                const registeredUserPasswordHash = registeredUserWithSameUsername.hash;

                const loggingInUserPassword = action.payload.password;

                const validUserPassCombo = loggingInUserPassword.hashCode() == registeredUserPasswordHash;

                // If password is valid set logged in user
                if (validUserPassCombo) {
                    state.auth.loggedIn = true;
                    state.auth.loggedInAs = registeredUserUsername;
                }
            }
        },

    }
});

export const selectLoggedIn = state => state.auth.loggedIn;

export const {

} = authReducer.actions;

export default authReducer.reducer