import { memo } from "react";
import * as S from "./styles";
import Header from "../../../components/Header";
import { Formik } from "formik";
// import useLogic from "./logic";
import { initialValues, validationSignupSchema } from "./constants";
const Login = () => {
// const { handleOnSubmit } = useLogic();
  return (
    <S.LoginContainer>
      <Header />
      <S.LoginContent>
        <S.H1> La</S.H1> <S.H1P>MAFIA de INTERNET</S.H1P>{" "}
        <S.H1>quiere quedarse con</S.H1> <S.H1P>TODO EL PASTEL</S.H1P>
        <S.H1>Monetizar</S.H1>
        <S.H1P>INFOPRODUCTOS</S.H1P> <S.H1>desde el día 1,</S.H1>{" "}
        <S.H1P> ES POSIBLE</S.H1P>
        <S.H1> Crea cursos, tu comunidad, impacata a tu audiencia con email marketing y
        mucho más...</S.H1>
        {/* -----FORMULARIO CON FORMIK------ */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSignupSchema}
          // onSubmit={submit}
        >
          {({ errors, handleSubmit, handleChange, values }) => (
            <S.Form onSubmit={handleSubmit}>
              <S.FormContent>
                <S.InputController>
                  <S.Label>Nombre</S.Label>
                  <S.Input
                    type="string"
                    name="Nombre"
                    onChange={handleChange}
                  />
                  {errors?.Nombre && (
                    <S.InputError>{errors.email}</S.InputError>
                  )}
                </S.InputController>
                <S.InputController>
                  <S.Label>Email</S.Label>
                  <S.Input type="email" name="email" onChange={handleChange} />
                  {errors?.email && <S.InputError>{errors.email}</S.InputError>}
                </S.InputController>

                <S.InputController>
                  <S.Label>Password</S.Label>
                  <S.Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                  {errors?.password && (
                    <S.InputError>{errors.password}</S.InputError>
                  )}
                </S.InputController>
                <S.Button type="submit">Login</S.Button>
                <S.Link to="/signup">Create account</S.Link>
              </S.FormContent>
            </S.Form>
          )}
        </Formik>
        {/* -----FORMULARIO CON FORMIK------ */}
      </S.LoginContent>
    </S.LoginContainer>
  );
};

export default memo(Login);
