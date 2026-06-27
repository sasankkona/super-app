import RegistrationForm from "../components/RegistrationForm";
import "../App.css"

function Register() {
    return(
        <div className="flex min-h-screen w-full bg-darkBg text-white">
            <div className="flex md:flex flex-col justify-end w-full md:w-1/2 p-12 bg-cover bg-center relative register">

                <h1 className="text-5xl font-bold font-sans z-10 leading-tight">Discover new things on <br/>Superapp</h1>
                <div className="absolute inset-0 bg-black bg-opacity-40 w-full h-full"></div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 overflow-y-auto">
                <h2 className="nice mb-4 text-5xl">Super app</h2>
                <p className="nice1">Create your new account</p>
                <RegistrationForm/>
            </div>
        </div>
    )
}

export default Register;