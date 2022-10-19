import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getTransactions} from '../../Api/Transactions';
import {processTransactions} from '../../Utils';
import {TransactionState} from './types';

const initialState: TransactionState = {
  status: 'idle',
  favourites: [],
  processedTransactions: {},
  error: '',
};

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async () => {
    const response = await getTransactions();
    return response;
  },
);

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTransactions.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const transactions = action.payload;
        const processedTransactions = processTransactions(transactions);
        state.processedTransactions = processedTransactions;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || '';
      });
  },
});

export const {} = transactionSlice.actions;

export default transactionSlice.reducer;
