import { useNavigate } from "react-router-dom";


export default function LoginOrRegister() {
    const navigate = useNavigate()

    const hangleNavReg = () => {
        navigate('/register')
    }
    const hangleNavLog = () => {
        navigate('/login')
    }


    return (
        <div>
            <button onClick={hangleNavLog}>Login</button>
            <button onClick={hangleNavReg}>Register</button>
        </div>
    )
}