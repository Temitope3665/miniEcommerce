import React, { useState } from 'react';
import { useRouter } from 'next/router';
// import Cookies from 'js-cookie';
import CustomButton from '../common/button';
import FormBox from '../common/formBox';
import TextInput from '../common/input';
import { backArrow } from '../Svg';

const NumberForm = () => {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setInput(e.currentTarget.value);
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Cookies.set('email', input);
  };
  return (
    <FormBox>
      <form onSubmit={onSubmit}>
        <TextInput label="How many do you want?" type="text" placeholder="Eg. 2" value={input} onChange={handleInput} />
        <CustomButton>Continue</CustomButton>
        <div className="flex justify-center gap-x-3.5 mt-3.5 cursor-pointer" onClick={() => router.back()} aria-hidden="true">
          {backArrow}
          Back
        </div>
      </form>
    </FormBox>
  );
};

export default NumberForm;
