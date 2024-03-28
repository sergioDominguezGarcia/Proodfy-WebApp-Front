import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../services/api/auth";

const useLogic = (onSignup) => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    async (values) => {
      try {
        await signup(values);
        onSignup();
        navigate("/dashboard");
      } catch (error) {
        setError(error.message);
      }
    },
    [navigate, onSignup]
  );
  return {
    handleOnSubmit,
    error,
  };
};

export default useLogic;
