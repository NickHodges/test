import type { FormEvent } from "react";


const EmailInput: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const email = emailInput.value;
    console.log('Email Address:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Enter your email" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmailInput;
