import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../store";
import { IReferralObj, IReferralState } from "../../interfaces/referral";
import { createReferralAPI, deleteReferralAPI, fetchReferralAPI, listReferralAPI, updateReferralAPI } from "./api";

const initialSelectedState: IReferralObj = {
  _id: '',
  country: '',
  email: '',
  givenName: '',
  homeName: '',
  phone: '',
  postcode: '',
  state: '',
  street: '',
  suburb: '',
  surname: '',
}

const initialState: IReferralState = {
  list: [],
  selected: initialSelectedState,
  status: 'idle',
  state: 'add'
}

const referralSlice = createSlice({
  name: "referral",
  initialState,
  reducers: {
    updateList: (state, action: PayloadAction<IReferralObj[]>) => {
      state.list = action.payload
    },
    updateSelected: (state, action: PayloadAction<IReferralObj>) => {
      state.selected = action.payload
    },
    updateState: (state, action: PayloadAction<'add' | 'edit'>) => {
      state.state = action.payload
    },
    resetFormState: (state) => {
      state.state = 'add'
      state.selected = initialSelectedState
    }
  },
  // extraReducers(builder) {
  //   builder
  // },
})

export const { updateList, updateSelected, updateState, resetFormState } = referralSlice.actions;

export const referralState = (state: RootState) => state.referral

export const fetchReferrals = (): AppThunk => async (dispatch, getState) => {
  try {
    // call list endpoint
    const { data } = await listReferralAPI();

    // call update list state
    dispatch(updateList(data.data))
  } catch (error) {
    console.log(`Fetching referrals: ${error}`)
  }
}

export const createReferral = (payload: IReferralObj): AppThunk => async (dispatch, getState) => {
  try {
    // call create endpoint
    await createReferralAPI(payload)

    // re-fetch to refresh table
    dispatch(fetchReferrals())

    // reset form state
    dispatch(updateSelected(initialSelectedState))
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

export const getReferral = (id: string): AppThunk => async (dispatch, getState) => {
  try {
    const { data } = await fetchReferralAPI(id)

    // set selected state
    dispatch(updateSelected(data.data as IReferralObj))

    // set state to edit
    dispatch(updateState('edit'))
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

export const updateReferral = (payload: IReferralObj): AppThunk => async (dispatch, getState) => {
  try {
    const state = referralState(getState())

    // call update endpoint
    await updateReferralAPI({
      _id: state.selected._id,
      ...payload
    })

    // set form state & selected
    dispatch(resetFormState())

    // re-fetch to refresh table
    dispatch(fetchReferrals())
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

export const deleteReferral = (id: string): AppThunk => async (dispatch, getState) => {
  try {
    // call delete endpoint
    await deleteReferralAPI(id)

    // re-fetch to refresh table
    dispatch(fetchReferrals())
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}



export default referralSlice.reducer;