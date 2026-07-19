import * as yup from "yup"

export const loginFormSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Email is Required"),
  password: yup.string().required("Password is Required"),
})

export const signupFormSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Email is Required"),
  password: yup.string().required("Password is Required"),
  age: yup.number().required("Age is Required"),
  username: yup.string().required("User Name is Required"),
  phone: yup.number().required("Phone Number is Required"),
})

export const contactSchema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  subject: yup.string().required("Subject is Required"),
  message: yup.string().required("Message is Required"),
  email: yup.string().email("Please enter a valid email").required("Email is Required"),
})


