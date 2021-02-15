export const collectionItemsForm = [
  { name: "firstName", label: "First Name", required: true, message: 'Please input your First Name!', min: 3, messageType: 'Must be min 7 characters', max: 29, messageType2: 'Max 30 characters'},
  { name: "lastName", label: "Last Name", required: true, message: 'Please input your Last Name!', min: 3, messageType: 'Must be min 7 characters', max: 29, messageType2: 'Max 30 characters'},
  { name: "login", label: "Login", required: true, message: 'Please input your Login', min: 3, messageType: 'Must be min 7 characters', max: 30, messageType2: 'Max 30 characters'},
  { name: "email", label: "E-mail", required: true, message: 'Please input your E-mail!', type: "email", messageType: 'The input is not valid E-mail!'},
  { name: "password", label: "Password", required: true, message: 'Please input your password!', min: 7, messageType: 'Must be min 7 characters', max: 29, messageType2: 'Max 30 characters'},
  { name: "phone", label: "Phone Number", required: true, message: 'Please input your phone number!', min: 13, messageType: "Must be 12 characters"}
];

export const onlyLetters = () => {return e => /[-.;"!@#$%ˆ&*():<>|,§_/'=?/\d/]/.test(e.key) && e.preventDefault()}
export const onlyNumbers = () => {return e => /[-.;"!@#$%ˆ&*():<>|,§_/'=?a-zA-Zа-яА-Я]/.test(e.key) && e.preventDefault()}