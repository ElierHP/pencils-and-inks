import Layout from "../components/layout/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "../utils/api";
import { userSchema } from "../validations/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const LoginUser = async (data) => {
    // Send login request to server
    const res = await axios.post(`${BASE_URL}/login`, data, {
      withCredentials: true,
    });

    // Redirect to home page if successful
    if (res.status === 200) {
      router.push("/");
    }
  };

  const onSubmit = (data) => LoginUser(data);

  return (
    <Layout>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{errors.email?.message}</p>
        <label htmlFor="">Email: </label>
        <input type="email" {...register("email")} />
        <p>{errors.password?.message}</p>
        <label htmlFor="">Password: </label>
        <input type="password" {...register("password")} />
        <input type="submit" />
      </form>
    </Layout>
  );
}
