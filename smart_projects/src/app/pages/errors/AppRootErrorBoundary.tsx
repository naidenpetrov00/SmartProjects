import { useRouteError } from 'react-router-dom';

export const AppRootErrorBoundary = () => {
  const error = useRouteError() as any;
  const data = JSON.parse(error.data);

  return (
    <div role="alert">
      <h1>{error.status}</h1>
      <h2>{data.sorry}</h2>
      <p>
        Go ahead and email {data.hrEmail} if you feel like this is a mistake.
      </p>
    </div>
  );
};
