import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  candidateName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'], // Valid values
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone1: {
    type: String,
    required: true,
  },
  phone2: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  enquiryFor: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  comeToKnow: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
