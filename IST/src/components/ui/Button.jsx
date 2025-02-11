export const Button = ({ children, className, ...props }) => {
    return (
      <button
        {...props}
        className={`px-4 py-2  text-white rounded-md  transition ${className}`}
      >
        {children}
      </button>
    );
  };
  