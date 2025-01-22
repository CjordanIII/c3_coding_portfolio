
import {sendEmailAction} from "../actions/email.actions"
import {useState } from "react";

const Mail = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  
    
    const { name, email, message } = formData;

    const templateParams = {
      to_name: 'Recipient Name', // replace with actual recipient's name if known
      from_name: name,
      user_email: email,
      message: message,
    };
  
    sendEmailAction(templateParams);
  
    // Reset the form inputs by updating the state
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamically update the state based on input name
    });
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
            Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name} // Bind input value to state
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email} // Bind input value to state
              autoComplete="email"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="message" className="block text-sm/6 font-medium text-gray-900">
              Message
            </label>
          </div>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              rows="4"
              cols="50"
              required
              value={formData.message} // Bind input value to state
              onChange={handleChange}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Contact Me
          </button>
        </div>
      </form>
    </div>
  );
};

export default Mail