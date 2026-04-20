import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.password.trim()) newErrors.password = "Password is required";
    if (form.password !== form.confirm)
      newErrors.confirm = "Passwords do not match";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    navigate("/login");
  };

  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Form Side */}
      <div className="flex flex-col justify-center px-10 py-16 max-w-md mx-auto w-full">
        <Link to="/" className="text-2xl font-semibold text-stone-800 mb-10">
          Roomé
        </Link>

        <h1 className="text-3xl font-semibold text-stone-800 mb-2">
          Create account
        </h1>
        <p className="text-sm text-stone-400 mb-8">
          Join Roomé and start designing your space.
        </p>

        <div className="flex flex-col gap-4">
          {[
            {
              label: "Full Name",
              name: "fullName",
              type: "text",
              placeholder: "John Doe",
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "john@example.com",
            },
            {
              label: "Password",
              name: "password",
              type: "password",
              placeholder: "••••••••",
            },
            {
              label: "Confirm Password",
              name: "confirm",
              type: "password",
              placeholder: "••••••••",
            },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name} className="flex flex-col gap-1">
              <label className="text-xs text-stone-500">{label}</label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className={`border rounded-xl px-4 py-2.5 text-sm outline-none text-stone-700 placeholder:text-stone-300 transition
                  ${errors[name] ? "border-red-400" : "border-stone-200 focus:border-stone-400"}`}
              />
              {errors[name] && (
                <p className="text-xs text-red-400">{errors[name]}</p>
              )}
            </div>
          ))}

          <button
            onClick={handleSubmit}
            className="mt-2 w-full bg-stone-800 hover:bg-stone-700 text-white text-sm py-3 rounded-full transition"
          >
            Create Account
          </button>
        </div>

        <p className="text-sm text-stone-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-stone-700 font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>

      {/* Image Side */}
      <div className="hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"
          alt="Interior"
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  );
}
