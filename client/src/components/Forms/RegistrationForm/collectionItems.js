const minRulesLength = {min: 2, message: 'Must be min 2 characters'}
const maxRulesLength = {max: 24, message: 'Max 25 characters'}

export const collectionItemsForm = [
  { name: "firstName", label: "First Name", rules:[{required: true, message: 'Please enter your First Name!'}, minRulesLength, maxRulesLength]},
  { name: "lastName", label: "Last Name", rules:[{required: true, message: 'Please enter your Last Name!'}, minRulesLength, maxRulesLength]},
  { name: "login", label: "Login", rules: [{required: true, message: 'Please enter your Login'}, minRulesLength, maxRulesLength]},
  { name: "email", label: "E-mail", rules: [{required: true, message: 'Please enter your E-mail!'}, {type: "email", messageType: 'The entered e-mail is not valid!'},]},
  { name: "password", label: "Password", rules: [{required: true, message: 'Please enter your password!'}, {min: 7, message: 'Must be min 7 characters'}, maxRulesLength]},
  { name: "phone", label: "Phone Number", rules: [{required: true, message: 'Please enter your phone number!'}, {min:13, max:13, message: 'The phone number must contain 13 characters'}]}
];

export const onlyLetters = () => {return e => /[-.;"!@#$%ˆ&*():<>|,§_/'=?/\d/]/.test(e.key) && e.preventDefault()}
export const onlyNumbers = () => {return e => /[-.;"!@#$%ˆ&*():<>|,§_/'=?a-zA-Zа-яА-Я]/.test(e.key) && e.preventDefault()}

export const collectionItemsCheckoutAddress = [
  { name: "fullName", label: "Full name", rules:[{required: true, message: 'Please enter your Full Name!'}]},
  { name: "email", label: "E-mail", rules:[{required: true, message: 'Please enter your E-mail!'},{type: 'email', messageType: 'The entered e-mail is not valid!'}]},
  { name: "address", label: "Address", rules:[{required: true, message: 'Please enter your address!'}]},
  { name: "city", label: "City", rules:[{required: true, message: 'Please enter your city!'}]},
  { name: "zip", label: "Zip", rules:[{required: true, message: 'Please enter your zip!'}]},
  { name: "phone", label: "Phone Number", rules:[{required: true, message: 'Please enter your phone number!'},{min:12, max:12, message: 'The phone number must contain 12 characters'}]}
]