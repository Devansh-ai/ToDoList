import { createSlice } from '@reduxjs/toolkit';


interface ConfigModal {
  title:any,
  notes:any,
}

type ActionType = {
  type: string;
  payload: any;
};

let initialState: ConfigModal = {
  title:[],
  notes:[],

};

const ConfigSlice = createSlice({
  name: 'Config',
  initialState,
  reducers: {
    addNotes:(state,action)=>{
      const data=action.payload
      state.notes.push(data.notes);
      state.title.push(data.title);
    }
    // addFunds: (state, action) => {
    //   const data: { addFund: number } = action.payload
    //   // console.log(data, "payload")
    //   state.funds.push(data)

    //   state.totalfunds += Number(data.addFund)
    // },
    // addexpenses: (state, action) => {
    //   const data = action.payload
    //   if (data.type == "Food") {
    //     state.Food += Number(data.addExpense)
    //   }
    //   else if (data.type == "Transport") {
    //     state.Transport += Number(data.addExpense)
    //   }
    //   else if (data.type == "Shopping") {
    //     state.Shopping += Number(data.addExpense)
    //   }
    //   else if (data.type == "Education") {
    //     state.Education += Number(data.addExpense)
    //   }
    //   state.expenses.push(data)
    //   state.totalexpenses += Number(data.addExpense)
    // }

  },

  // selectors: {
  //   getProducts: (state: ConfigModal) => state.products,
  // },
});

// export const {getProducts} = ConfigSlice.selectors;

export const {
  addNotes
} = ConfigSlice.actions;

export default ConfigSlice.reducer;
