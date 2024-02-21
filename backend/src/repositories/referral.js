import mongoose from "mongoose";
import ReferralModel from "../models/referral";

export const list = async () => await ReferralModel.find({}).sort({ _id: -1 })

export const create = async (data) => {
  const doc = new ReferralModel(data)
  return await doc.save()
}

export const findById = async (id) => await ReferralModel.findById(id)

export const update = async (id, body) => await ReferralModel.findByIdAndUpdate(id, body)

export const remove = async (id) => await ReferralModel.deleteOne({ _id: id })