import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "@/utils/validationSchemas";

interface SignInFormProps {
  onSubmit: (data: SignInFormData) => void;
}

interface SignInFormData {
  email: string;
  password: string;
}

const SignInForm = ({ onSubmit }: SignInFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInSchema),
  });

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
           Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={`bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="name@company.com"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password")}
          className={`bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 ${
            errors.password ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="••••••••"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>
      <button type="submit" className="w-full text-white bg-teal-600 py-1.5 px-4 rounded font-bold">
        Sign in
      </button>
    </form>
  );
};

export default SignInForm;
