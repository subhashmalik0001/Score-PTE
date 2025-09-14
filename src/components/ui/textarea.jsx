import React from "react";

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${className}`}
    {...props}
  />
);

export { Textarea };
