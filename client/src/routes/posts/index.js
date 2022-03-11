import Layout from '../../components/ui/layout';

import { useForm } from 'react-hook-form';
import axios from '../../utils/axios';

// UI
import FormGroup from '../../components/ui/formGroup';
import { Input, Photo, TextArea } from '../../components/ui/input';

const PostPage = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const uploadPost = async (data, event) => {
    const { postTitle, postDescription, postImage } = data;
    const formData = new FormData();

    formData.append('postTitle', postTitle);
    formData.append('postDescription', postDescription);
    formData.append('postImage', postImage[0]);

    try {
      const request = await axios.post('/post/upload', formData);
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
      <form className="w-80 shadow rounded p-3" onSubmit={handleSubmit(uploadPost)}>
        <FormGroup className="mb-3" label="Title">
          <Input type="text" name="postTitle" placeholder="Enter title..." register={register} />
        </FormGroup>

        <FormGroup className="mb-3" label="Description">
          <TextArea
            type="text"
            name="postDescription"
            placeholder="Enter description..."
            register={register}
          />
        </FormGroup>

        <FormGroup className="mb-3" label="Image">
          <Photo name="postImage" placeholder="Enter image..." register={register} />
        </FormGroup>

        <button className="w-full bg-blue-500 p-2.5 text-white text-sm rounded transition-all hover:bg-blue-600">
          Upload post
        </button>
      </form>
    </Layout>
  );
};

export default PostPage;
