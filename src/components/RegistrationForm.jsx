import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore";

const Register = () => {
  const setUser = useStore((state) => state.setUser);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const tempErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!formData.name.trim()) {
      tempErrors.name = "Field is required";
    }
    if (!formData.username.trim()) {
      tempErrors.username = "Field is required";
    }
    if (!emailPattern.test(formData.email)) {
      tempErrors.email = "Field is required";
    }
    if (!phonePattern.test(formData.mobile)) {
      tempErrors.mobile = "Field is required";
    }
    if(!formData.checkbox) {
        tempErrors.checkbox = "Check this box if you want to proceed";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setUser(formData);
      navigate("/categories");
    }
  };

  return (
    <>
    <form onSubmit={handleFormSubmission} className="w-full max-w-md flex flex-col gap-4">
      <div>
        <input
          type="text"
          value={formData.name}
          placeholder="Name"
          className={`w-full p-4 bg-cardBg rounded focus:outline-none ${errors.name ? 'border border-red-500' : ''}`}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
      </div>
      <div>
        <input
          type="text"
          value={formData.username}
          placeholder="UserName"
          className={`w-full p-4 bg-cardBg rounded focus:outline-none ${errors.username ? 'border border-red-500' : ''}`}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        {errors.username && <span className="text-red-500 text-sm mt-1">{errors.username}</span>}
      </div>
      <div>
        <input
          type="email"
          value={formData.email}
          placeholder="Email"
          className={`w-full p-4 bg-cardBg rounded focus:outline-none ${errors.email ? 'border border-red-500' : ''}`}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
      </div>
      <div>
        <input
          type="text"
          value={formData.mobile}
          placeholder="Mobile"
          className={`w-full p-4 bg-cardBg rounded focus:outline-none ${errors.mobile ? 'border border-red-500' : ''}`}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        />
        {errors.mobile && <span className="text-red-500 text-sm mt-1">{errors.mobile}</span>}
      </div>
      <div className="mt-2">
        <label className="flex items-center gap-2 text-gray-400 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={formData.checkbox}
            className="w-4 h-4 accent-brandGreen"
            onChange={(e) => setFormData({ ...formData, checkbox: e.target.checked })}
          /> Share my registration data with Superapp
        </label>
        {errors.checkbox && <span className="text-red-500 text-sm mt-1">{errors.checkbox}</span>}
      </div>
      <button type="submit" className="w-full bg-brandGreen text-black font-bold text-lg p-3 rounded-full mt-4 hover:bg-green-400 transition-colors">SIGN UP</button>
    </form>
    <p style={{color: '#7c7c7c'}}>By clicking on Sign up. you agree to Superapp <a href="#" style={{color: '#72db73'}}>Terms and <br/>Conditions of Use</a></p>
    <p style={{color: '#7c7c7c'}} className="mt-1">To learn more about how Superapp collects, uses, shares and <br/>projects your personal data please head superapp <a href="#" style={{color: '#72db73'}}>Privacy <br/>Policy</a></p>
    </>
  );
};

export default Register;