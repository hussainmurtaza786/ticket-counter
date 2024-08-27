import * as yup from "yup"




export const loginFormSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is Required"),
    password: yup.string().required(" Password is Required"),
})

export const movieFormSchema = yup.object().shape({
    date: yup.date().required("Date  is required"),
    name: yup.string().required(" Movie Name is Required"),
    lastName: yup.string().required(" Last Name is Required"),
    email: yup.string().email("Please enter a valid email").required("Email is Required"),
    price: yup.number().min(500,(" Minimum Ticket is of 500")).required("Price is Required"),
    seat: yup.number().required("Seat is Required"),
    time: yup.string().required("Time is Required")
})

export const signupFormSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is Required"),
    password: yup.string().required(" Password is Required"),
    age: yup.number().required("Age is Required"),
    username: yup.string().required("User Name is Required"),
    phone: yup.number().required("Phone Number is Required")

})
