import { ensureIsArray } from './../../../node_modules/reselect/src/utils';
import { createSlice } from '@reduxjs/toolkit';

interface ConfigModal {
  item: {
    title: string;
    note: string;
    uniqueId:number;
  }[];
  deletedItem: {
    title: string;
    note: string;
  }[];
}

let initialState: ConfigModal = {
  item: [],
  deletedItem: [],

};

const ConfigSlice = createSlice({
  name: 'Config',
  initialState,
  reducers: {

    deleteNotes: (state, action) => {
      const id  = action.payload; // id is the uniqueId of the note to be deleted
        
      // Find the note to delete from the item array
      console.log("devansh",id)
      const noteIndex = state.item.findIndex(note => note.uniqueId === id);
      // If the note exists, move it to deleted array and remove it from item array
      if (noteIndex >= 0) {
        const deletedNote = state.item.splice(noteIndex, 1)[0];  // Remove the note from item

        // Add the deleted note to the deleted array
        state.deletedItem.push(deletedNote);
      } else {
        console.error(`Note with uniqueId ${id} not found`);
      }
    },
    addNotes: (state, action) => {
      console.log("/////////////",action.payload)
      const data: any = action.payload;
      state.item.push(data);
    },
     editNotes : (state, action) => {
      // console.log("Edit Payload:", action.payload);
    
      const { id, item } = action.payload;
    

      const noteIndex = state.item.findIndex(note => note.uniqueId === id);
    
        state.item[noteIndex].note = item.note;
        state.item[noteIndex].title = item.title;

      
    }
    
  }
});

export const {
  addNotes,
  editNotes,
  deleteNotes
} = ConfigSlice.actions;

export default ConfigSlice.reducer;
