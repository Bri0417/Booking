import { useState } from "react";

const Step3Details = ({ details, setDetails }) => {
  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    let error = "";

    if (field === "name" && value.trim() === "") {
      error = "Name is required";
    }

    if (field === "email") {
      if (!value) error = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(value))
        error = "Invalid email";
    }

    if (field === "phone") {
      if (!value) error = "Phone is required";
      else if (!/^\d{10}$/.test(value))
        error = "Enter valid 10 digit number";
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field, value) => {
    setDetails((prev) => ({ ...prev, [field]: value }));
    validate(field, value);
  };

  return (
    <div className="form-container">
      <h2>Your Details</h2>

      {/* NAME */}
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={details.name || ""}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      {/* EMAIL */}
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={details.email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      {/* PHONE */}
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          value={details.phone || ""}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
    </div>
  );
};

export default Step3Details;