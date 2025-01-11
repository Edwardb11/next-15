import * as yup from 'yup';



export const billingAddressSchema = yup.object().shape({
    fullName: yup
      .string()
      .required("Full Name is required")
      .min(2, "Full Name must be at least 2 characters long"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email Address is required"),
    mobile1: yup
      .string()
      .matches(/^[0-9]{10}$/, "Mobile Number must be exactly 10 digits")
      .required("Mobile Number 1 is required"),
    mobile2: yup.string().matches(/^[0-9]{10}$/, "Mobile Number must be exactly 10 digits").nullable(),
    address: yup
      .string()
      .required("Address is required")
      .min(10, "Address must be at least 10 characters long"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    zipCode: yup
      .string()
      .matches(/^[0-9]{5}$/, "Zip Code must be exactly 5 digits")
      .required("Zip Code is required"),
    nameOnCard: yup
      .string()
      .required("Name on Card is required")
      .min(2, "Name on Card must be at least 2 characters long"),
    cardNumber: yup
      .string()
      .matches(/^\d{16}$/, "Card Number must be exactly 16 digits")
      .required("Card Number is required"),
    cvv: yup
      .string()
      .matches(/^\d{3}$/, "CVV must be exactly 3 digits")
      .required("CVV is required"),
    expMonth: yup
      .string()
      .required("Expiration Month is required")
      .matches(/^(0[1-9]|1[0-2])$/, "Invalid Month (must be 01-12)"),
    expYear: yup
      .string()
      .required("Expiration Year is required")
      .matches(/^20\d{2}$/, "Invalid Year (must be in format YYYY)"),
  });