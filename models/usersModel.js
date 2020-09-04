const { Schema, model } = require('mongoose');
const validator = require('validator');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter your first name.'],
    trim: true,
    maxlength: [40, 'First name must not consist of more than 40 characters.'],
    minlength: [1, 'First name must consist of 1 character or more.'],
  },
  lastName: {
    type: String,
    required: [true, 'Please enter your last name.'],
    trim: true,
    maxlength: [40, 'Last name must not consist of more than 40 characters.'],
    minlength: [1, 'Last name must consist of 1 character or more.'],
  },
  phone: [
    {
      type: String,
      required: [true, 'Please enter at least one phone number.'],
      trim: true,
      maxlength: [
        13,
        'Phone number cannot consist of more than 13 characters.',
      ],
      minlength: [
        13,
        'Phone number cannot consist of more than 13 characters.',
      ],
    },
  ],
  email: [
    {
      type: String,
      required: [true, 'Please enter at least one email address.'],
      trim: true,
      lowercase: true,
      unique: true,
      validate: [validator.isEmail, 'Email must be valid.'],
    },
  ],
});

const User = model('User', userSchema);
module.exports = User;
