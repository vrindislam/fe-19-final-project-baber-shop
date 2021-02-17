export const collectionItemsForm = [
  { name: "firstName", label: "First Name", required: true, message: 'Please input your First Name!'},
  { name: "lastName", label: "Last Name", required: true, message: 'Please input your Last Name!'},
  { name: "login", label: "Login", required: true, message: 'Please input your Login'},
  { name: "email", label: "E-mail", required: true, message: 'Please input your E-mail!', type: "email", messageType: 'The input is not valid E-mail!', },
  { name: "password", label: "Password", required: true, message: 'Please input your password!'},
  { name: "phone", label: "Phone Number", required: true, message: 'Please input your phone number!'}
];

export const collectionItemsProfile = [
  { name: "firstName", label: "First Name", rules:[{required: true, message: 'Please enter your First Name!'}]},
  { name: "lastName", label: "Last Name", rules:[{required: true, message: 'Please enter your Last Name!'}]},
  { name: "login", label: "Login", rules:[{required: true, message: 'Please enter your Login!'}]},
  { name: "email", label: "E-mail", rules:[{required: true, message: 'Please enter your E-mail!'},{type: 'email', messageType: 'The entered e-mail is not valid!'}]},
  { name: "password", label: "Password", rules:[{required: true, message: 'Please enter your password!'}]},
  { name: "phone", label: "Phone Number", rules:[{required: true, message: 'Please enter your phone number!'},{min:12, max:12, message: 'The phone number must contain 12 characters'}]}
];

export const collectionItemsCheckoutAddress = [
  { name: "fullName", label: "Full name", rules:[{required: true, message: 'Please enter your Full Name!'}]},
  { name: "email", label: "E-mail", rules:[{required: true, message: 'Please enter your E-mail!'},{type: 'email', messageType: 'The entered e-mail is not valid!'}]},
  { name: "address", label: "Address", rules:[{required: true, message: 'Please enter your address!'}]},
  { name: "city", label: "City", rules:[{required: true, message: 'Please enter your city!'}]},
  { name: "zip", label: "Zip", rules:[{required: true, message: 'Please enter your zip!'}]},
  { name: "phone", label: "Phone Number", rules:[{required: true, message: 'Please enter your phone number!'},{min:12, max:12, message: 'The phone number must contain 12 characters'}]}
]

export const collectionItemsCheckoutPayment = [
  { name: "name", label: "Full name", rules:[{required: true, message: 'Please enter your Full Name!'}]},
  { name: "number", label: "Card number", rules:[{required: true, message: 'Please enter your card number!'}]},
  { name: "expiry", label: "Valid through", rules:[{required: true, message: 'Please enter your expiration date!'}]},
  { name: "cvc", label: "CVV", rules:[{required: true, message: 'Please enter your CVV code!'}]},
]