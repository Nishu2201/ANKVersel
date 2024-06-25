import React, { useState } from 'react';
import './Home5.css';
import axios from 'axios';
import bg from '../../../images/Homepage/form/bg_.png';

const Card = (props) => (
  <div className="form-div flex rounded-md rounded-lg ">
    {props.children}
  </div>
);

const Form = (props) => (
  <form className="fields space-y-2 " onSubmit={props.onSubmit}>
    {props.children}
  </form>
);

const TextInput = (props) => (
  <div className="relative mb-1 sm:mb-2 " style={{ width: '100%' }}>
    <label
      className={`absolute left-3 -top-2.5 px-1 z-10 text-white  rounded-md transition-all duration-200 ease-in-out ${props.focus ? 'bg-slate-500 px-6 py-1' : ''} ${props.focus || props.value ? 'bg-slate-500 px-6 py-1 text-sm' : 'top-3 text-sm'}`}
      htmlFor={props.id}
    >
      {props.label}
    </label>
    <input
      className={`block w-full px-4 py-2 text-base text-white bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 ease-in-out ${props.focus || props.value ? 'bg-transparent pt-6' : 'pt-3'}`}
      type="text"
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      style={{ zIndex: 0 }}
      required
      autoComplete={props.autoComplete}
    />
    {props.error && <p className="text-red-500 text-xs mt-1">{props.error}</p>}
  </div>
);

const TextArea = (props) => (
  <div className="relative mb-2">
    <label
      className={`absolute left-3 -top-2.5 px-1 z-10 text-white  rounded-md transition-all duration-200 ease-in-out ${props.focus || props.value ? 'text-sm bg-slate-500 px-6 py-1' : 'top-3 text-sm'}`}
      htmlFor={props.id}
    >
      {props.label}
    </label>
    <textarea
      className={`mt-4 block w-full h-36 px-4 py-2 text-base text-white bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 z-0 focus:border-transparent transition-all duration-200 ease-in-out ${props.focus || props.value ? 'pt-6' : 'pt-3'}`}
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      style={{ zIndex: 0 }}
      required
      autoComplete={props.autoComplete}
    />
    {props.error && <p className="text-red-500 text-xs mt-1">{props.error}</p>}
  </div>
);

const Button = (props) => (
  <button className='form-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A] py-3 sm:py-4 px-16 sm:px-24 mt-2 text-white text-lg font-bold'>
    {props.children}
  </button>
);

const Modal = ({ show, onClose, message }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md text-center">
        <p className="mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Home5 = () => {
  const [formData, setFormData] = useState({
    name: { id: 'name', name: 'name', label: 'Full name', value: '', focus: false, error: '', autoComplete: 'name' },
    email: { id: 'email', name: 'email', label: 'E-mail Id', value: '', focus: false, error: '', autoComplete: 'email' },
    company: { id: 'company', name: 'company', label: 'Company Name', value: '', focus: false, error: '', autoComplete: 'organization' },
    address: { id: 'address', name: 'address', label: 'Address', value: '', focus: false, error: '', autoComplete: 'address-line1' },
    product: { id: 'product', name: 'product', label: 'Products', value: '', focus: false, error: '', autoComplete: 'off' },
    phone: { id: 'phone', name: 'phone', label: 'Contact no.', value: '', focus: false, error: '', autoComplete: 'tel' },
    message: { id: 'message', name: 'message', label: 'Description', value: '', focus: false, error: '', autoComplete: 'off' },
  });

  const [showModal, setShowModal] = useState(false);

  const handleFocus = (e) => {
    const { name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: { ...prev[name], focus: true, error: '' },
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: { ...prev[name], focus: false },
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: { ...prev[name], value, error: '' },
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(String(phone));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: formData.name.value,
      email: formData.email.value,
      phone: formData.phone.value,
      message: formData.message.value,
    };

    let isValid = true;

    if (!validateEmail(data.email)) {
      setFormData((prev) => ({
        ...prev,
        email: { ...prev.email, error: 'Invalid email format' },
      }));
      isValid = false;
    }

    if (!validatePhone(data.phone)) {
      setFormData((prev) => ({
        ...prev,
        phone: { ...prev.phone, error: 'Invalid phone number' },
      }));
      isValid = false;
    }

    if (!isValid) return;

    try {
      const config = {
        method: 'post',
        url: 'http://89.116.34.245:6001/api/v1/auth/addFeedback',
        data,
      };
      const response = await axios(config);
      setShowModal(true); // Show the success modal

      // Reset the form fields
      setFormData({
        name: { id: 'name', name: 'name', label: 'Full name', value: '', focus: false, error: '', autoComplete: 'name' },
        email: { id: 'email', name: 'email', label: 'E-mail Id', value: '', focus: false, error: '', autoComplete: 'email' },
        company: { id: 'company', name: 'company', label: 'Company Name', value: '', focus: false, error: '', autoComplete: 'organization' },
        address: { id: 'address', name: 'address', label: 'Address', value: '', focus: false, error: '', autoComplete: 'address-line1' },
        product: { id: 'product', name: 'product', label: 'Products', value: '', focus: false, error: '', autoComplete: 'off' },
        phone: { id: 'phone', name: 'phone', label: 'Contact no.', value: '', focus: false, error: '', autoComplete: 'tel' },
        message: { id: 'message', name: 'message', label: 'Description', value: '', focus: false, error: '', autoComplete: 'off' },
      });
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className='home5 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bg})` }}>
      <div className="frm-div flex items-center justify-center">
        <div className=" form-cont ">
          <Card>
            <Form onSubmit={handleSubmit}>
              <h1 className="form-head text-white">Request a Quote Today</h1>
              <div className="field-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div className="col-span-1 sm:col-span-2">
    <TextInput
      {...formData.name}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  </div>
  <div className="col-span-1 sm:col-span-2">
    <TextInput
      {...formData.phone}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  </div>
</div>
              <div className="field-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextInput
                  {...formData.email}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <TextInput
                  {...formData.company}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="field-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextInput
                  {...formData.address}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <TextInput
                  {...formData.product}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <TextArea
                {...formData.message}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <div className="flex justify-center">
                <Button>Submit</Button>
              </div>
            </Form>
          </Card>
        </div>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} message="Message sent successfully!" />
    </div>
  );
};

export default Home5;
