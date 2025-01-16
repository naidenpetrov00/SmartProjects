import React from 'react';
import { Link } from 'react-router-dom';
import { linkButtonStyles } from './LinkButton.styles';

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
      style={linkButtonStyles.linkUnderline}
      onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
      onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
      aria-label={`Navigate to ${children}`}
    >
      {children}
    </Link>
  );
};
