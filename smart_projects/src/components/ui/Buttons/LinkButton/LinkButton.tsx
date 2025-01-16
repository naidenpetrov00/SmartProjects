import { Link } from 'react-router-dom';
import { linkButtonStyles } from './LinkButton.styles';

interface LinkButtonProps {
  children: React.ReactNode;
  backgroundColor?: string; // Fixed typo
  to: string;
}

export const LinkButton = ({
  backgroundColor,
  to,
  children,
}: LinkButtonProps) => {
  return (
    <div>
      <Link
        style={linkButtonStyles.link(backgroundColor)}
        to={to}
        aria-label={`Navigate to ${children}`}
      >
        {children}
      </Link>
    </div>
  );
};
