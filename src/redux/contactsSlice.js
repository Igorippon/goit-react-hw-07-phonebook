import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const slice = createSlice({
    name: 'contacts',
    initialState: {
        list:
            [
                { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
                { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
                { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
                { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
            ]
    },
    reducers: {
        addContact: {
            reducer(state, action) { state.list.push(action.payload); },
            prepare(value) {
                return {
                    payload: {
                        id: nanoid(),
                        ...value,
                    }

                };
            },
        },
        deleteContact(state, action) {
            const idx = state.list.findIndex(contact => contact.id === action.payload);
            state.list.splice(idx, 1);
        }
    },
});

export const { addContact, deleteContact } = slice.actions;
const contactReducer = slice.reducer;

const persistConfig = {
    key: 'contacts',
    storage,
};

export const persistedReducer = persistReducer(persistConfig, contactReducer);
export const getContactValue = state => state.contacts.list;