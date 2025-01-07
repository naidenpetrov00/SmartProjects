import React from 'react';
import { Link } from 'react-router-dom';

interface LinkButtonUnderlineProps {
  children: React.ReactNode;
  to: string;
}

export const LinkButtonUnderline = ({
  children,
  to,
}: LinkButtonUnderlineProps) => {
  return (
    <Link
      to={to}
      style={{
        fontSize: 15,
        textDecoration: 'none',
      }}
      onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
      onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
    >
      {children}
    </Link>
  );
};
