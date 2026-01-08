import { JSX } from "react";

const Logo = ({ className }: { className?: string }): JSX.Element => {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <div className="bg-primary w-10 h-10 rounded-full"></div>
      <p className="text-primary font-bold text-2xl">Codebird</p>
    </div>
  );
};

export default Logo;
