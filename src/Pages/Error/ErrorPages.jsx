import { Link } from "react-router-dom";

const ErrorPages = () => {
  return (
    <div>
      <h2>404</h2>
      <Link to='/'>
        <button className="btn btn-sm btn-error">Home</button>
      </Link>
    </div>
  );
};

export default ErrorPages;