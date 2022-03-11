import Layout from '../../components/ui/layout';

// UI
import FormGroup from '../../components/ui/formGroup';
import { Input } from '../../components/ui/input';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from '../../utils/axios';

// Context
import { useAuthContext } from '../../context/AuthContext';

const LogIn = () => {
  // Navigation
  const navigate = useNavigate();

  // Update auth function from context
  const { setIsAuth } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const logIn = async (data, event) => {
    try {
      const request = await axios.post('/auth/login', data);
      const { success, auth, errors } = request.data;

      if (errors) {
        alert(errors[0].msg);

        return setIsAuth(false);
      }

      if (success) {
        navigate('/home');

        setIsAuth(auth);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout className="bg-gray-50 flex justify-center items-center">
      <form className="w-80 shadow rounded p-3" onSubmit={handleSubmit(logIn)}>
        <FormGroup className="mb-3" label="Email">
          <Input type="email" name="userEmail" placeholder="Enter email..." register={register} />
        </FormGroup>

        <FormGroup className="mb-3" label="Password">
          <Input
            type="password"
            name="userPassword"
            placeholder="Enter password..."
            register={register}
          />
        </FormGroup>

        <button className="w-full bg-blue-500 p-2.5 text-white text-sm rounded transition-all hover:bg-blue-600">
          Continue
        </button>
      </form>
    </Layout>
  );
};

export default LogIn;
