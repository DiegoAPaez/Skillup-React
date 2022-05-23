import { Navigate, Link } from "react-router-dom";

function Listado () {

    // let navigate = useNavigate();
    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token === null) {
    //         navigate("/", { replace: true })
    //     }
    // }, []);// eslint-disable-line

    const token = localStorage.getItem('token')


    return (
        <>
        {!token && <Navigate to={'/'} replace/>}
        
        <div className="mx-auto w-11/12">
            <h2 className="font-bold text-center">Listado</h2>
            <div className="grid grid-cols-4 justify-items-center ">
                <div className="bg-white shadow-md shadow-slate-300 rounded p-3">
                    <img src="..." alt="..."/>
                    <div>
                        <h5 className="font-semibold text-center">Card Title</h5>
                        <p className="my-2 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta excepturi rerum ab nisi dolorum, tenetur necessitatibus quibusdam aliquam quod qui quae cum, sed magnam, sint ad provident illo doloremque.
                        </p>
                        <Link to={'/'} className="m-2 py-2 px-3 bg-green-500 text-white uppercase rounded-full font-bold">Enlace</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Listado