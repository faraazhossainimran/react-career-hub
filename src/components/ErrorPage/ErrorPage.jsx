import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-5xl p-6 my-8">Oppsss! something is wrong</h1>
            <Link to="/">Go back to Home</Link>
        </div>
    )
}

export default ErrorPage