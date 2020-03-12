import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  const handleChange= e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = data => {
    setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            name="firstName"
            id="firstName"
            placeholder="bill"
            onChange={handleChange}
            value={data.firstName}
            ref={register({ required: true, maxLength: 15 })}
            />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            name="lastName"
            id="lastName"
            placeholder="luo"
            onChange={handleChange}
            value={data.lastName}
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input onChange={handleChange} value={data.email} name="email" id="email" ref={register({ required: true })} />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea onChange={handleChange} value={data.message} name="message"  id="message"ref={register({ required: false })} />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
