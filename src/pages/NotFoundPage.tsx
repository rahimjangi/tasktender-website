import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>404 Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default NotFoundPage;
