import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

// import toast from 'react-toastify';

const initialState = {
  Pastes: localStorage.getItem("Pastes") ? JSON.parse(localStorage.getItem("Pastes")) : []
}

const PasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      const paste = action.payload;

      state.Pastes.push(paste);
      localStorage.setItem("Pastes", JSON.stringify(state.Pastes));
      // toast.success("Paste added successfully")
      toast.success("Paste added successfully")
    },

    removePaste: (state, action) => {
      const id = action.payload;
      console.log(id);

      const index = state.Pastes.findIndex(paste => paste._id === id);

      if (index >= 0) {
        state.Pastes.splice(index, 1);
        localStorage.setItem("Pastes", JSON.stringify(state.Pastes));
      }
      toast.success("Paste removed successfully")
    },
    updateToPaste: (state, action) => {
      const paste = action.payload;
      const index = state.Pastes.findIndex(p => p._id === paste._id);
      if (index >= 0) {
        state.Pastes[index] = paste;
        localStorage.setItem("Pastes", JSON.stringify(state.Pastes));
      }
      toast.success("Paste updated successfully")
    },
    resetAllPaste: (state,) => {
      state.Pastes = [];
      localStorage.setItem("Pastes", JSON.stringify(state.Pastes));
    },

  }
})
export const { addToPaste, updateToPaste, resetAllPaste, removePaste } = PasteSlice.actions;
export default PasteSlice.reducer;