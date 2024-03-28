import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../services/api/auth'


const useLogic = (onLogin) => {
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleOnSubmit = useCallback(
    async (values) => {
      try {
        await login(values.email, values.password)
        onLogin()
        navigate('/dashboard')
      } catch (error) {
        setError(error.message)
      }
    },
    [navigate, onLogin]
  )
  return {
    handleOnSubmit,
    error,
  }
}

export default useLogic
