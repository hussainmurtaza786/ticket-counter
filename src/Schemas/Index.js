import * as yup from "yup"




export const loginFormSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is Required"),
    name: yup.string().required(" Name is Required"),
})

export const movieFormSchema = yup.object().shape({
    date: yup.date().required("Date  is required"),
    movieName: yup.string().required(" Movie Name is Required"),
    firstName: yup.string().required(" First Name is Required"),
    lastName: yup.string().required(" Last Name is Required"),
    email: yup.string().email("Please enter a valid email").required("Email is Required"),
    time: yup.string().required("Time is Required")



})
