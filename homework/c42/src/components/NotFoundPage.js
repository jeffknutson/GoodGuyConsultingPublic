import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Nothing to see here...</h1>
      <p>
        Sorry, the content you are looking for is not here.
      </p>
      <p>
        I suggest you head back <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
