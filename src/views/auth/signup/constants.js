import * as Yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  password: "",
};

export const validationSignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "too short characters")
    .max(20, "too long characters"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter a valid email address"),
  password: Yup.string()
    .min(4, "too short characters")
    .max(20, "too long characters")
    .required("required"),
});
