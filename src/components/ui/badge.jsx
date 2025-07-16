import React from "react";

const Badge = ({ children, ...props }) => (
  <span {...props} style={{ background: '#eee', borderRadius: 4, padding: '2px 8px', fontSize: 12 }}>{children}</span>
);

export { Badge }; 