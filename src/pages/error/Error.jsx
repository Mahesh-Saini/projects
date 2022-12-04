import "./Error.scss"
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div className="ErrorPage">
            <div className="error_body">
                <h1>Oops!</h1>
                <h2>404 Page Not Found</h2>
                <p>Sorry, What you want to see either does not exist or has been deleted</p>
                <Link to="/">
                    <button>Go to Home Page</button>
                </Link>
            </div>
        </div>
    )
}

export default Error