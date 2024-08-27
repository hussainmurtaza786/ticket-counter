import * as yup from "yup"




export const loginFormSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is Required"),
    password: yup.string().required(" Password is Required"),
})

export const movieFormSchema = yup.object().shape({
    timestamp: yup.date().required("Date  is required"),
    name: yup.string().required(" Movie Name is Required"),
    price: yup.number().min(500, (" Minimum Ticket is of 500rs")).required("Price is Required"),
    seat: yup.number().min(1, ("Buy atleast one Tikcet")).required("Seat is Required"),
    genre: yup.string().required("Genre is Required")
})

export const signupFormSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is Required"),
    password: yup.string().required(" Password is Required"),
    age: yup.number().required("Age is Required"),
    username: yup.string().required("User Name is Required"),
    phone: yup.number().required("Phone Number is Required")

})