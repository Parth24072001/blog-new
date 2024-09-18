// src/components/NotFound.tsx
import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="mt-2">Sorry, the page youre looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
