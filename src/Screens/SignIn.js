import logo from "../static/Images/logo.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <>
      <div className="bg-[#F9FAFB] h-[100vh] flex justify-center">
        <div className="w-[100%] sm:w-[448px]">
          <div className="flex items-center justify-center mt-60">
            <img src={logo} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold">Entrar na sua conta</h2>
            <p>
              Ou{" "}
              <span className="text-[#6875F5] font-semibold hover:cursor-pointer">
                <Link to="/register" className="navutils navlogo">
                  fazer cadastro
                </Link>
              </span>
            </p>
          </div>
          <form
            className="bg-white py-8 my-10 sm:w-[448px] sm:rounded-md p-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col items-start  mx-[10px] my-3 ">
              <p className="text-left text-md font-medium">E-mail</p>
              <input
                type="text"
                name="email"
                {...register("email", {
                  required: "Esse campo é obrigatório",
                  minLength: {
                    value: 3,
                    message: "O e-mail deve ser válido",
                  },
                })}
                className="w-[100%] focus:ring-0 border-[1px] decoration-0 outline-none py-2 px-4 rounded-md border-gray-300"
              />
              {errors.email && (
                <p className="text-xs italic text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start  mx-[10px] my-3">
              <p className="text-left text-lg font-medium">Senha</p>
              <input
                type="text"
                name="password"
                {...register("password", {
                  required: "Esse campo é obrigatório",
                })}
                className="w-[100%] focus:ring-0 border-[1px] decoration-0 outline-none py-2 px-4 rounded-md border-gray-300"
              />
              {errors.password && (
                <p className="text-xs italic text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex flex-col items-end  mx-[10px] mb-3">
              <p className="text-right text-sm text-[#5262ec] font-medium">
                Esqueceu a senha?
              </p>
            </div>
            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                className="bg-[#5262ec] text-white w-[90%] py-[6px] rounded-[4px]"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
