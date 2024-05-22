// models/User.js
"use strict";

const mongoose = require("mongoose"),
  { Schema } = mongoose,
  userSchema = Schema({
    name: {
      first: {
        type: String,
        required: true,
      },
      last: {
        type: String,
        trim: true
      }
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true
    },
    phoneNumber: {
      type: String,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    courses: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"
    }],
    subscribedAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subscriber"
    }
  },
  {
    timestamps: true //createdAt updatedAt
  }
);

userSchema.virtual("fullName").get(function() {
  return `${this.name.first} ${this.name.last}`;
});

userSchema.virtual("fullHangulName").get(function() {
  return `${this.name.first}${this.name.last}`;
});

module.exports = mongoose.model("User", userSchema);
