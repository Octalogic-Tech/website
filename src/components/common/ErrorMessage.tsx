import React from "react";
interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = "We're having trouble loading the page content.",
  onRetry,
}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <h2 className="text-2xl font-bold text-red-600">Something went wrong!</h2>{" "}
      <p className="text-gray-600">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
