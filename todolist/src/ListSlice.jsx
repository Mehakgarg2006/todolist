import { createSlice } from '@reduxjs/toolkit';

const ListSlice = createSlice(

    {
        name: 'list',
        initialState: {
            items: [],
        },

        reducers:
        {
            addItem(state, action) {
                state.items.push(action.payload);
            },
            deleteItem(state, action) {
                state.items.splice(action.payload, 1);

            },
            clearAll(state) {
                state.items = [];
            },
        },
    }
);

export const { addItem, deleteItem, clearAll } = ListSlice.actions;
export default ListSlice.reducer;
//.reducer because specifically exporting reducers