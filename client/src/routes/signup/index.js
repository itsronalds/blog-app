import Layout from '../../components/ui/layout';

import { useForm } from 'react-hook-form';
import axios from '../../utils/axios';

// UI
import FormGroup from '../../components/ui/formGroup';
import { Input, Photo } from '../../components/ui/input';
import { RadioGroup, Radio } from '../../components/ui/radio';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUp = async (data, event) => {
    const { name, lastname, gender, email, password, photo } = data;
    const formData = new FormData();

    formData.append('userName', name);
    formData.append('userLastName', lastname);
    formData.append('userGender', gender);
    formData.append('userEmail', email);
    formData.append('userPassword', password);
    formData.append('userPhoto', photo[0]);

    try {
      const request = await axios.post('/auth/signup', formData);
      const { success, message, errors } = request.data;

      if (errors) {
        return alert(errors[0].msg);
      }

      if (success) {
        alert(message);

        event.target.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout className="bg-gray-50 flex justify-center items-center">
      <form className="w-80 shadow rounded p-3" onSubmit={handleSubmit(signUp)}>
        <FormGroup className="mb-3" label="Name">
          <Input type="text" name="name" placeholder="Enter name..." register={register} />
        </FormGroup>

        <FormGroup className="mb-3" label="Last name">
          <Input type="text" name="lastname" placeholder="Enter last name..." register={register} />
        </FormGroup>

        <RadioGroup className="mb-3" label="Gender" value="gender" register={register}>
          <Radio value="male" isChecked>
            Male
          </Radio>
          <Radio value="female">Female</Radio>
          <Radio value="other">Other</Radio>
        </RadioGroup>

        <FormGroup className="mb-3" label="Email">
          <Input type="text" name="email" placeholder="Enter email..." register={register} />
        </FormGroup>

        <FormGroup className="mb-3" label="Password">
          <Input
            type="password"
            name="password"
            placeholder="Enter password..."
            register={register}
          />
        </FormGroup>

        <FormGroup className="mb-3" label="Photo">
          <Photo name="photo" placeholder="Enter photo..." register={register} />
        </FormGroup>

        <button
          type="submit"
          className="w-full bg-blue-500 p-2.5 text-white text-sm rounded transition-all hover:bg-blue-600"
        >
          Continue
        </button>
      </form>
    </Layout>
  );
};

export default SignUp;
