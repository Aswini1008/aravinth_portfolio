
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center text-center bg-light">
      <div>
        <h1 className="display-1 fw-bold mb-4">404</h1>
        <p className="fs-4 text-muted mb-4">Oops! Page not found</p>
        <Link to="/" className="btn btn-primary">
          Return to Home
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
