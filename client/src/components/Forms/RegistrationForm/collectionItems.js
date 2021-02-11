export const collectionItemsForm = [
  { name: "firstName", label: "First Name", required: true, message: 'Please input your First Name!'},
  { name: "lastName", label: "Last Name", required: true, message: 'Please input your Last Name!'},
  { name: "login", label: "Login", required: true, message: 'Please input your Login'},
  { name: "email", label: "E-mail", required: true, message: 'Please input your E-mail!', type: "email", messageType: 'The input is not valid E-mail!', },
  { name: "password", label: "Password", required: true, message: 'Please input your password!'},
  { name: "phone", label: "Phone Number", required: true, message: 'Please input your phone number!'}
];

export const collectionItemsProfile = [
  { name: "firstName", label: "First Name", rules:[{required: true, message: 'Please input your First Name!'}]},
  { name: "lastName", label: "Last Name", rules:[{required: true, message: 'Please input your Last Name!'}]},
  { name: "login", label: "Login", rules:[{required: true, message: 'Please input your Login!'}]},
  { name: "email", label: "E-mail", rules:[{required: true, message: 'Please input your E-mail!'},{type: 'email', messageType: 'The input is not valid E-mail!'}]},
  { name: "password", label: "Password", rules:[{required: true, message: 'Please input your password!'}]},
  { name: "phone", label: "Phone Number", rules:[{required: true, message: 'Please input your phone number!'},{type:'number', message:'The phone number must contain only numbers'},{min:12, max:12, message: 'The phone number must contain 13 characters'}]}
];