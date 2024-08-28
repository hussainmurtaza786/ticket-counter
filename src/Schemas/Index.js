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
    phone: yup.number().required("Phone Number is Required"),

})

export const planeSchema = yup.object().shape({
    name: yup.string().required("  Name is Required"),
    email: yup.string().email("Please enter a valid email").required("Email is Required"),
    phone: yup.number().required("Phone Number is Required"),
    passengers: yup.string().required("Number of Passengers is Required "),
    depAirport: yup.string().required("Departure Airport is Required"),
    desAirport: yup.string().required("Destination Airport is Required"),
    depDate: yup.date().required('Departure Date '),
    depTime: yup.string().matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Please enter a valid time in HH:mm format")
    .required('Departure Time is Required'),
    returnDate:yup.date().required('Return Date is Required'),
    returnTime:yup.string().matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Please enter a valid time in HH:mm format")
    .required('Retun Time is Required'),

})

export const trainSchema = yup.object().shape({
    name: yup.string().required("  Name is Required"),
    email: yup.string().email("Please enter a valid email").required("Email is Required"),
    phone: yup.number().required("Phone Number is Required"),
    passengers: yup.string().required("Number of Passengers"),
    depStation: yup.string().required("Departure Airport is Required"),
    desStation: yup.string().required("Destination Airport is Required"),
    depDate: yup.date().required('Departure Date '),
    depTime: yup.string().matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Please enter a valid time in HH:mm format")
    .required('Departure Time is Required'),
    returnDate:yup.date().required('Departure Date '),
    returnTime:yup.string().matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Please enter a valid time in HH:mm format")
    .required('Retun Time is Required'),

})

export const busSchema = yup.object().shape({
    name: yup.string().required("  Name is Required"),
    email: yup.string().email("Please enter a valid email").required("Email is Required"),
    phone: yup.number().required("Phone Number is Required"),
    passengers: yup.string().required("Number of Passengers"),
    depLocation: yup.string().required("Departure Airport is Required"),
    desLocation: yup.string().required("Destination Airport is Required"),
    depDate: yup.date().required('Departure Date '),
    depTime: yup.string().matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Please enter a valid time in HH:mm format")
    .required('Departure Time is Required'),

})
