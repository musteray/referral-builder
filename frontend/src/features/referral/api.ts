import { IReferralObj } from "../../interfaces/referral"
import axios from "../../utils/axios"

export const listReferralAPI = (): Promise<any> => axios.get('/v1/referral')
export const createReferralAPI = (payload: IReferralObj): Promise<any> => axios.post('/v1/referral', payload)
export const fetchReferralAPI = (id: string): Promise<any> => axios.get(`/v1/referral/${id}`)
export const updateReferralAPI = (payload: IReferralObj): Promise<any> => axios.put(`/v1/referral/${payload._id}`, payload)
export const deleteReferralAPI = (id: string): Promise<any> => axios.delete(`/v1/referral/${id}`)