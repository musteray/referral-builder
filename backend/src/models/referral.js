import mongoose from 'mongoose';

const { Schema } = mongoose;
const ReferralSchema = new Schema(
  {
    givenName: {
      type: String,
      trim: true,
      required: true,
      index: true,
    },
    surname: {
      type: String,
      trim: true,
      required: false,
      index: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      index: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
      index: true,
    },
    homeName: {
      type: String,
      trim: true,
      required: false,
      index: true,
    },
    street: {
      type: String,
      trim: true,
      required: false,
      index: true,
    },
    suburb: {
      type: String,
      trim: true,
      required: false,
      index: true,
    },
    state: {
      type: String,
      trim: true,
      required: false,
      index: true,
    },
    postcode: {
      type: String,
      trim: true,
      required: false,
      index: true,
    },
    country: {
      type: String,
      trim: true,
      required: false,
      index: true,
    },
  },
  { timestamps: true },
);

const ReferralModel = mongoose.model(
  'Referral',
  ReferralSchema,
);

export default ReferralModel;