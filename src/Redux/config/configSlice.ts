import { createSlice } from '@reduxjs/toolkit';

interface ConfigModal {
  item: {
    title: string;
    note: string;
    uniqueId: number;
    imageUri: string[];
    bgColor: string;
    audioFiles: string[];
  }[];
  deletedItem: {
    title: string;
    note: string;
    uniqueId: number;
    imageUri: string[];
    bgColor: string;
    audioFiles: string[];
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
      const id = action.payload;
      console.log("devansh", id);
      const noteIndex = state.item.findIndex(note => note.uniqueId === id);
      if (noteIndex >= 0) {
        const deletedNote = state.item.splice(noteIndex, 1)[0];
        state.deletedItem.push(deletedNote);
      } else {
        console.error(`Note with uniqueId ${id} not found`);
      }
    },
    addNotes: (state, action) => {
      const data: any = action.payload;
      const newNote = {
        ...data,
        audioFiles: data.audioFiles || [],
      };
      state.item.push(newNote);
    },
    editNotes: (state, action) => {
      const { id, item } = action.payload;
      const noteIndex = state.item.findIndex(note => note.uniqueId === id);

      if (noteIndex !== -1) {
        state.item[noteIndex].note = item.note;
        state.item[noteIndex].title = item.title;

        if (item.imageUri) {
          state.item[noteIndex].imageUri = item.imageUri;
        }
        if (item.bgColor) {
          state.item[noteIndex].bgColor = item.bgColor;
        }

        if (item.audioFiles !== undefined) {
          state.item[noteIndex].audioFiles = item.audioFiles;
        }
      }
    },
    recoverNotes: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.deletedItem.length) {
        // Remove from deletedItem and add to item array
        const recoveredNote = state.deletedItem.splice(index, 1)[0];
        state.item.push(recoveredNote);
      } else {
        console.error(`Note at index ${index} not found in deleted items`);
      }
    },
  },
});

export const {
  addNotes,
  editNotes,
  deleteNotes,
  recoverNotes,
} = ConfigSlice.actions;

export default ConfigSlice.reducer;