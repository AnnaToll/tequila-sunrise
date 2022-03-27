import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    buyhistory: {
        type: Array
    }

}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

UserSchema.pre("save", async function () {
    const userExists = await UserModel.find({
      email: this.get("email"),
    })
      .lean()
      .exec();
    if (userExists.length > 0) {
      throw new Error(errorHandler.errors.REGISTER_email_EXISTS);
    }
  });

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);