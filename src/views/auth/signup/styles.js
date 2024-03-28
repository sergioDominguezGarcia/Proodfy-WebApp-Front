import styled from "styled-components";
import { Link as DefaultLink } from "react-router-dom";

export const LoginContainer = styled.div`
  /* display: flex; */
`;

export const LoginContent = styled.div`
  /* display: flex; */
  /* border: 1px solid blue; */
`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 24px;
  margin-bottom: 20px;
  /* border: 1px solid green; */

  width: 75%;
`;
export const H1P = styled.h1`
  color: #6926ac;
  font-size: 24px;
  margin-bottom: 20px;
  /* border: 1px solid green; */

  width: 75%;
`;

export const Form = styled.form``;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px; /* Limitamos el ancho máximo del contenido del formulario */
  margin: 0 auto; /* Centramos el contenido horizontalmente */
`;
export const InputController = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;
export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  color: orange;
`;
export const Input = styled.input`
  width: 100%;
  max-width:250px;
  padding: 10px;
  border: 1px solid #e5d392;
  border-radius: 10px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #ffffff; /* Color que desees para el placeholder */
  }

  background: rgba(217, 217, 217, 0);
`;
export const InputError = styled.span`
  color: red;
  margin-top: 5px;
  font-size: 12px;
`;
export const Button = styled.button`
  width: 100%;
  max-width: 270px;
  margin-top: 15px;
  padding: 10px;
  background: rgba(105, 38, 172, 0.5);
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: block;
`;
export const Link = styled(DefaultLink)`
  color: #007bff;
  text-decoration: none;
  margin-top: 10px;
  text-align: center;
  display: block;
`;
