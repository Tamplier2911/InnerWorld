import validator from 'validator';

const createFormValidator = (userCredentials) => {
  const { firstName, lastName, phone, email } = userCredentials;
  let isValid = true;

  const errors = {
    firstName: '',
    lastName: '',
    phone: [],
    email: [],
  };

  // length to be greater than one and less than 40
  // to be a sting
  if (typeof firstName !== 'string') {
    isValid = false;
    errors.firstName = 'First name must be type of a string.';
  }
  if (firstName.length < 1 || firstName.length > 40) {
    isValid = false;
    errors.firstName = 'First name cannot be longer than 40 characters.';
  }

  // length to be greater than one and less than 40
  // to be a string
  if (typeof lastName !== 'string') {
    isValid = false;
    errors.lastName = 'Last name must be type of a string.';
  }
  if (lastName.length < 1 || lastName.length > 40) {
    isValid = false;
    errors.lastName = 'Last name cannot be longer than 40 characters.';
  }

  // to be email
  email.forEach((em, i) => {
    if (em !== '' && !validator.isEmail(em)) {
      isValid = false;
      errors.email[i] = 'Email must match respective pattern.';
    }
  });

  // to match respective pattern
  // to star with "+"
  // to contain only 13 charcaters
  phone.forEach((ph, i) => {
    if (ph !== '' && (ph.length < 13 || ph.length > 13)) {
      isValid = false;
      errors.phone[i] = 'Phone length must consist of 13 characters.';
    } else if (ph !== '' && !ph.startsWith('+')) {
      isValid = false;
      errors.phone[i] = "Phone must start with '+' character.";
    } else if (
      ph !== '' &&
      !validator.isMobilePhone(ph, 'uk-UA', { strictMode: true })
    ) {
      isValid = false;
      errors.phone[i] = 'Phone must be valid ukrainian number.';
    }
  });

  return {
    isValid,
    ...errors,
  };
};

export default createFormValidator;
