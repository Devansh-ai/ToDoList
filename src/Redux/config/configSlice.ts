import { createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

/**
 * this is the redux toolkit sllice code
 * it has reducers for CRUD operations of notes
 */

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
let counter=0;
let initialState: ConfigModal = {
  item: [
    { "audioFiles": [], "bgColor": "#E4F1AC", "imageUri": [], "note": "Functions such as to-do-list and notebook have been added to notes to help you record edit and manage your thoughts and ideas", "title": "Welcome to Notes", "uniqueId": 201 },
    { "audioFiles": [], "bgColor": "#E4F1AC", "imageUri": [], "note": "Enhance your notes with editing functions such as text styles,doodles", "title": "Edit as you want", "uniqueId": 202 },
    { "audioFiles": [], "bgColor": "#E4F1AC", "imageUri": [], "note": "Save your voice notes now in notes app along with your text", "title": "Voice Recorder ", "uniqueId": 203 }
  ],
  deletedItem: [],
};

const ConfigSlice = createSlice({
  name: 'Config',
  initialState,
  reducers: {
    deleteNotes: (state, action) => {
      const id = action.payload;
      const noteIndex = state.item.findIndex(note => note.uniqueId === id);
      if (noteIndex >= 0) {
        const deletedNote = state.item.splice(noteIndex, 1)[0];
        state.deletedItem.push(deletedNote);
      } else {
        console.error(`Note with uniqueId ${id} not found`);
      }
      // console.log("deletedvvvvvvvvvvvv", state.deletedItem)
    },
    addNotesPin:(state,action)=>{
      const id=action.payload;
      Alert.alert("qwertyuiop")
      console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqq",id)
      state.item.splice(counter,0,id)
      counter++;
    },
    
    addNotes: (state, action) => {
      const data: any = action.payload;
      const newNote = {
        ...data,
        audioFiles: data.audioFiles || [],
      };
      state.item.splice(counter,0,newNote);
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
        const recoveredNote = state.deletedItem.splice(index, 1)[0];
        state.item.push(recoveredNote);
      } else {
        console.warn(`Note at index ${index} not found in deleted items`);
      }
    },
  },
});

export const {
  addNotes,
  editNotes,
  deleteNotes,
  recoverNotes,
  addNotesPin
} = ConfigSlice.actions;

export default ConfigSlice.reducer;