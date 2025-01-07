import { Link } from 'react-router-dom';

interface LinkButtonProps {
  children: React.ReactNode;
  backgoundColor?: string;
  to: string;
}

export const LinkButton = ({
  backgoundColor,
  to,
  children,
}: LinkButtonProps) => {
  return (
    <Link
      style={{
        display: 'flex',
        justifySelf: 'center',
        marginBottom: 16,
        backgroundColor: backgoundColor,
        padding: '8px 16px',
        borderRadius: 24,
        color: 'white',
        textDecoration: 'none',
      }}
      to={to}
    >
      {children}
    </Link>
  );
};
