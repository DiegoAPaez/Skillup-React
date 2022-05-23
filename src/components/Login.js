import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

function Login() {
    let navigate = useNavigate();
    const token = localStorage.getItem('token')
  
    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/; // eslint-disable-line

        const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        });

        if (email === "" || password === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Debes completar todos los campos!",
        });
        return;
        }
        if (email !== "" && !regexEmail.test(email)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Datos Incorrectos!",
        });
        return;
        }
        // email: challenge@alkemy.org pass: react
        axios
        .post("http://challenge-react.alkemy.org", { email, password })
        .then((res) => {
            const userToken = res.data.token;
            localStorage.setItem("token", userToken);
                Toast.fire({
                    icon: "success",
                    title: "Ingreso Correcto",
                });
            navigate("/listado", { replace: true });
            });
    };

  return (
    <>
      {token && <Navigate to={'/listado'}/>}
      <div className="min-w-fit mx-auto my-2 w-1/4 bg-white shadow-md shadow-slate-300 rounded">
        <h2 className="text-center font-bold text-lg py-2">
          Formulario de Login
        </h2>
        <form onSubmit={submitHandler} className="mx-auto px-4 py-2">
          <label>
            <span>Email:</span>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50"
              type="email"
              name="email"
            />
          </label>
          <br />
          <label>
            <span>Contraseña:</span>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50"
              type="password"
              name="password"
            />
          </label>
          <br />
          <button
              className="m-2 py-2 px-3 bg-cyan-500 text-white uppercase rounded-full font-bold"
              type="submit"
          >
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
