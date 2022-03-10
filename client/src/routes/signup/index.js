import Layout from '../../components/ui/layout';

// UI
import FormGroup from '../../components/ui/formGroup';
import { Input, Photo } from '../../components/ui/input';
import { RadioGroup, Radio } from '../../components/ui/radio';

const SignUp = () => {
  return (
    <Layout className="bg-gray-50 flex justify-center items-center">
      <form className="w-80 shadow rounded p-3">
        <FormGroup className="mb-3" label="Name">
          <Input type="text" name="name" placeholder="Enter name..." />
        </FormGroup>

        <FormGroup className="mb-3" label="Last name">
          <Input type="text" name="lastname" placeholder="Enter last name..." />
        </FormGroup>

        <RadioGroup className="mb-3" label="Gender" value="gender">
          <Radio value="male" isChecked>
            Male
          </Radio>
          <Radio value="female">Female</Radio>
          <Radio value="other">Other</Radio>
        </RadioGroup>

        <FormGroup className="mb-3" label="Email">
          <Input type="text" name="email" placeholder="Enter email..." />
        </FormGroup>

        <FormGroup className="mb-3" label="Password">
          <Input type="password" name="password" placeholder="Enter password..." />
        </FormGroup>

        <FormGroup className="mb-3" label="Photo">
          <Photo name="password" placeholder="Enter photo..." />
        </FormGroup>

        <button className="w-full bg-blue-500 p-2.5 text-white text-sm rounded transition-all hover:bg-blue-600">
          Continue
        </button>
      </form>
    </Layout>
  );
};

export default SignUp;
