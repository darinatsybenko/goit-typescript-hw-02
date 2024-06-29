import { FC } from "react";

interface ErrorProps {
  error: boolean;
}

const ErrorMessage: FC<ErrorProps> = ({ error }) => {
  return (
    <div>
      <p>{error}</p>
    </div>
  );
};

export default ErrorMessage;
