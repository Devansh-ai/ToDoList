import { createSlice } from '@reduxjs/toolkit';

interface ConfigModal {
  item: {
    title: string;
    notes: string;
  }[];
}

let initialState: ConfigModal = {
  item: []
};

const ConfigSlice = createSlice({
  name: 'Config',
  initialState,
  reducers: {
    deleteNotes:(state,action)=>{
      console.log("action",action)
      console.log("stateitem",state.item[action.payload])
      state.item.splice(action.payload,1)
      
    },
    addNotes: (state, action) => {
      const data: any = action.payload;
      state.item.push(data);
    },
    editNotes: (state, action) => {
      const { id, item } = action.payload;
      state.item[id].note = action.payload.item.note;
      state.item[id].title = action.payload.item.title;
    }
  }
});

export const {
  addNotes,
  editNotes,
  deleteNotes
} = ConfigSlice.actions;

export default ConfigSlice.reducer;
