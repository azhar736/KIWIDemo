import logo from "../static/Images/logo.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
function SignUp() {
  const [Error, setError] = useState("");
  const [checbox, setChecbox] = useState(false);
  const [checboxError, setChecboxError] = useState("");

  useEffect(() => {
    document.title = "Cadastro";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("onsubmit");
    if (data.email !== data.r_email) {
      setError("Os dois e-mails devem ser iguais.");
    }
    if (!checbox) {
      setChecboxError("(Esse campo é obrigatório)");
    }
  };
  return (
    <>
      <div className="bg-[#F9FAFB] h-[100vh] flex justify-center">
        <div>
          <div className="flex items-center justify-center mt-60">
            <img src={logo} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold">Criar nova conta</h2>
            <p>
              Ou{" "}
              <span className="text-[#6875F5] font-semibold">
                <Link to="/" className="navutils navlogo">
                  entrar na sua conta existente
                </Link>
              </span>
            </p>
          </div>
          <form
            className="bg-white py-5 my-10 sm:w-[448px] sm:rounded-md p-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col items-start  mx-[10px] my-3">
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
              <p className="text-left text-lg font-medium">Repetir e-mail</p>
              <input
                type="text"
                name="r_email"
                {...register("r_email", {
                  required: "Esse campo é obrigatório",
                  minLength: {
                    value: 3,
                    message: "O e-mail deve ser válido",
                  },
                })}
                className="w-[100%] focus:ring-0 border-[1px] decoration-0 outline-none py-2 px-4 rounded-md border-gray-300"
              />
              {errors.r_email && (
                <p className="text-xs italic text-red-500">
                  {errors.r_email.message}
                </p>
              )}
              {Error && <p className="text-xs italic text-red-500">{Error}</p>}
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
            <div className="flex  mx-[10px]">
              <div className="w-[15%] bg-lightColor flex justify-center pt-5">
                <input
                  type="checkbox"
                  onClick={() => {
                    setChecbox(!checbox);
                    console.log(checbox);
                  }}
                  checked={checbox}
                  className="h-5 w-5  border-none focus:ring-0  rounded-md"
                />
              </div>

              <div className="w-[85%]">
                <p className="font-text text-sm font-semibold my-4">
                  Eu li e aceito os{" "}
                  <span className="underline">
                    termos de uso, termos de licença de uso de software,
                    política de conteúdo
                  </span>{" "}
                  da Kiwify
                </p>
              </div>
            </div>
            {checboxError !== "" && (
              <p className="text-xs italic text-red-500 mb-4">{checboxError}</p>
            )}
            <div className="flex items-center justify-center w-full">
              <button className="bg-[#5262ec] text-white w-[90%] py-[6px] rounded-[4px]">
                Criar conta
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
