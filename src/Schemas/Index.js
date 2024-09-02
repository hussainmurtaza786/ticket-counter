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
    returnDate: yup.date().required('Return Date is Required'),
    returnTime: yup.string().matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Please enter a valid time in HH:mm format")
        .required('Retun Time is Required'),

})

export const trainSchema = yup.object().shape({
    name: yup.string().required("  Name is Required"),
    email: yup.string().email("Please enter a valid email").required("Email is Required"),
    phone: yup.number().required("Phone Number is Required"),
    passengers: yup.string().required("Number of Passengers"),
    depStation: yup.string().required("Departure Station is Required"),
    desStation: yup.string().required("Destination Station is Required"),
    depDate: yup.date().required('Departure Date is Required '),
    depTime: yup.string().matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Please enter a valid time in HH:mm format")
        .required('Departure Time is Required'),


})

export const busSchema = yup.object().shape({
    name: yup.string().required("  Name is Required"),
    email: yup.string().email("Please enter a valid email").required("Email is Required"),
    phone: yup.number().required("Phone Number is Required"),
    passengers: yup.string().required("Number of Passengers"),
    depLocation: yup.string().required("Departure Location is Required"),
    desLocation: yup.string().required("Destination Location is Required"),
    depDate: yup.date().required('Departure Date is Required '),
    depTime: yup.string().matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Please enter a valid time in HH:mm format")
        .required('Departure Time is Required'),

})


export const cricketSchema = yup.object().shape({
    stadium: yup.string().required("  Stadium Name is Required"),
    team: yup.string().required("Team  is Required"),
    ticket: yup.number().min(1, ("Minimum 1 ticket is Required")).required(" Ticket is Required"),
    date: yup.date().required(' Date is Required '),

})

export const footballSchema = yup.object().shape({
    stadium: yup.string().required("  Stadium Name is Required"),
    homeTeam: yup.string().required("Home Team  is Required"),
    awayTeam: yup.string().required("Away Team  is Required"),
    ticket: yup.number().min(1, ("Minimum 1 ticket is Required")).required(" Ticket is Required"),
    date: yup.date().required(' Date is Required '),

})

export const tennisSchema = yup.object().shape({
    court: yup.string().required("  Court Name is Required"),
    player1: yup.string().required("Player 1  is Required"),
    player2: yup.string().required("Player 2  is Required"),
    ticket: yup.number().min(1, ("Minimum 1 ticket is Required")).required(" Ticket is Required"),
    date: yup.date().required(' Date is Required '),

})

export const contactSchema = yup.object().shape({
    name: yup.string().required("  Name is Required"),
    subject: yup.string().required("  Subject is Required"),
    message: yup.string().required("  Messages is Required"),
    email: yup.string().email("Please enter a valid email").required("Email is Required"),

})


