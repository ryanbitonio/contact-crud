import { ContactTypes } from "@/components/data-table/data-table-columns-options";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ContactTypes[] = [];

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addRow: (state, action: PayloadAction<ContactTypes>) => {
      state.push(action.payload);
    },
    editRow: (state, action) =>
      state.map((row, index) => {
        if (index === action.payload) return { ...row, firstName: "Edited" };

        return row;
      }),
    deleteRow: (state, action) =>
      state.filter((row, index) => index !== action.payload),
    deleteAll: () => initialState,
  },
});

export const { addRow, editRow, deleteRow, deleteAll } = contactSlice.actions;

export default contactSlice.reducer;
