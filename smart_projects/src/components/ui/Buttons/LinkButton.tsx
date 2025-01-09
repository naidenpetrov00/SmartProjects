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
    <div>
      <Link
        style={{
          display: 'flex',
          justifyContent: 'center',
          justifySelf: 'center',
          marginBottom: 16,
          backgroundColor: backgoundColor,
          padding: '8px 16px',
          borderRadius: 24,
          color: 'white',
          textDecoration: 'none',
          marginLeft: 32,
          marginRight: 32,
        }}
        to={to}
      >
        {children}
      </Link>
    </div>
  );
};
