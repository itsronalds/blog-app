import Layout from '../../components/ui/layout';

// UI
import FormGroup from '../../components/ui/formGroup';
import { Input } from '../../components/ui/input';

import { useForm } from 'react-hook-form';
import axios from '../../utils/axios';
import { useState, useEffect } from 'react';

const Profile = () => {
  const [data, setData] = useState({});

  const { register, handleSubmit, setValue } = useForm();

  const getProfile = async () => {
    try {
      const request = await axios.get('/profile/get-data');
      const {
        success,
        user: { userName, userLastName },
      } = request.data;

      if (success) {
        setData({ userName, userLastName });

        setValue('userName', userName);
        setValue('userLastName', userLastName);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => getProfile(), []);

  const updateProfile = async (data) => {
    try {
      const request = await axios.patch('/profile/update', data);
      const {
        success,
        data: { userName, userLastName },
        errors,
      } = request.data;

      if (errors) {
        return alert(errors[0].msg);
      }

      if (success) {
        setData({
          ...data,
          userName,
          userLastName,
        });
        setValue('userName', userName);
        setValue('userLastName', userLastName);

        alert('¡Successfully!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout className="bg-gray-50 flex justify-center items-center">
      <form className="w-80 shadow rounded p-3" onSubmit={handleSubmit(updateProfile)}>
        <FormGroup className="mb-3" label="Name">
          <Input
            type="text"
            name="userName"
            placeholder="Enter name..."
            defaultValue={data?.userName}
            register={register}
          />
        </FormGroup>

        <FormGroup className="mb-3" label="Last name">
          <Input
            type="text"
            name="userLastName"
            placeholder="Enter last name..."
            defaultValue={data?.userLastName}
            register={register}
          />
        </FormGroup>

        <FormGroup className="mb-3" label="Password">
          <Input type="password" name="userPassword" placeholder="**********" register={register} />
        </FormGroup>

        <button
          type="submit"
          className="w-full bg-blue-500 p-2.5 text-white text-sm rounded transition-all hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </Layout>
  );
};

export default Profile;
