interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit';
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  type = 'button' 
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-200";
  
  const variants = {
    primary: "bg-escribano-verde text-white hover:bg-escribano-verde-light",
    secondary: "bg-escribano-rojo text-white hover:bg-escribano-rojo-light",
    outline: "border-2 border-escribano-verde text-escribano-verde hover:bg-escribano-verde hover:text-white"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}