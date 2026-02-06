import React from 'react';
import { EXPERT } from '../constants';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  className?: string;
  subtext?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  subtext
}) => {
  const baseClasses = "inline-flex flex-col items-center justify-center px-6 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg group";
  
  const variants = {
    primary: "bg-accent hover:bg-accent-hover text-white shadow-accent/30",
    secondary: "bg-primary hover:bg-slate-800 text-white shadow-primary/30",
    outline: "border-2 border-accent text-accent hover:bg-accent/10"
  };

  return (
    <a 
      href={EXPERT.whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <div className="flex items-center gap-2">
        <MessageCircle size={20} className={variant === 'outline' ? 'text-accent' : 'text-white'} />
        <span className="uppercase tracking-wide text-sm md:text-base">{text}</span>
      </div>
      {subtext && (
        <span className="text-[10px] font-normal opacity-90 mt-1 block">
          {subtext}
        </span>
      )}
    </a>
  );
};

export default Button;