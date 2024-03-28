import { memo } from "react";
import * as S from "./styles";
import Header from "../../../components/Header";
import { Formik } from "formik";
import useLogic from "./logic";
import { initialValues, validationSignupSchema } from "./constants";

const SignUp = () => {
  const { handleOnSubmit } = useLogic();
  return (
    <S.LoginContainer>
      <Header />
      <S.LoginContent>
        <S.H1> La</S.H1> <S.H1P>MAFIA de INTERNET</S.H1P>{" "}
        <S.H1>quiere quedarse con</S.H1> <S.H1P>TODO EL PASTEL</S.H1P>
        <S.H1>Monetizar</S.H1>
        <S.H1P>INFOPRODUCTOS</S.H1P> <S.H1>desde el día 1,</S.H1>{" "}
        <S.H1P> ES POSIBLE</S.H1P>
        <S.H1>
          {" "}
          Crea cursos, tu comunidad, impacata a tu audiencia con email marketing
          y mucho más...
        </S.H1>
        {/* -----FORMULARIO CON FORMIK------ */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSignupSchema}
          onSubmit={handleOnSubmit}
        >
          {({ errors, handleSubmit, handleChange, values }) => (
            <S.Form onSubmit={handleSubmit}>
              <S.FormContent>
                <S.InputController>
                  <S.Label htmlFor="name"></S.Label>
                  <S.Input
                    placeholder="Name..."
                    autoComplete="true"
                    id="name"
                    type="string"
                    name="name"
                    onChange={handleChange}
                  />
                  {errors?.name && <S.InputError>{errors.name}</S.InputError>}
                </S.InputController>
                <S.InputController>
                  <S.Label htmlFor="email"></S.Label>
                  <S.Input
                    placeholder="Email..."
                    autoComplete="true"
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                  />
                  {errors?.email && <S.InputError>{errors.email}</S.InputError>}
                </S.InputController>

                <S.InputController>
                  <S.Label htmlFor="password"></S.Label>
                  <S.Input
                    placeholder="Password..."
                    id="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                  {errors?.password && (
                    <S.InputError>{errors.password}</S.InputError>
                  )}
                </S.InputController>
                <S.Button type="submit">Signup</S.Button>

              </S.FormContent>
            </S.Form>
          )}
        </Formik>
        {/* -----FORMULARIO CON FORMIK------ */}
      </S.LoginContent>
    </S.LoginContainer>
  );
};

export default memo(SignUp);
