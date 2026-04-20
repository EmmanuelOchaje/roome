import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    dispatch(login({ email: form.email }));
    navigate("/");
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.password.trim()) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Form Side */}
      <div className="flex flex-col justify-center px-10 py-16 max-w-md mx-auto w-full">
        <Link to="/" className="text-2xl font-semibold text-stone-800 mb-10">
          Roomé
        </Link>

        <h1 className="text-3xl font-semibold text-stone-800 mb-2">
          Welcome back
        </h1>
        <p className="text-sm text-stone-400 mb-8">
          Sign in to your account to continue.
        </p>

        <div className="flex flex-col gap-4">
          {[
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
            Sign In
          </button>
        </div>

        <p className="text-sm text-stone-400 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-stone-700 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>

      {/* Image Side */}
      <div className="hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1687262304525-02287047d4d6?q=80&w=522&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  );
}
