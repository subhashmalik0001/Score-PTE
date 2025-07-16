import React from "react";

const Card = ({ children, ...props }) => (
  <div {...props} style={{ border: '1px solid #eee', borderRadius: 8, margin: 8, padding: 8 }}>{children}</div>
);
const CardContent = ({ children, ...props }) => <div {...props}>{children}</div>;
const CardHeader = ({ children, ...props }) => <div {...props} style={{ marginBottom: 8 }}>{children}</div>;
const CardTitle = ({ children, ...props }) => <h3 {...props} style={{ fontWeight: 'bold' }}>{children}</h3>;

export { Card, CardContent, CardHeader, CardTitle }; 