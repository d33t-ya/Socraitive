'use client';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';

import React, { useRef, useState } from 'react';

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    // Show the smaller navbar when scrolling down, hide when at the top
    if (latest > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div ref={ref} className={cn('fixed inset-x-0 top-0 z-40 w-full', className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      initial={false}
      animate={{
        backdropFilter: visible ? 'blur(10px)' : 'none',
        boxShadow: visible ? '0 0 24px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.1)' : 'none',
        width: visible ? '70%' : '100%',
        y: visible ? 20 : 0,
        opacity: 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      style={{
        minWidth: '320px',
      }}
      className={cn(
        'relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex',
        visible
          ? 'border border-zinc-800 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60'
          : 'bg-transparent',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-400 transition duration-200 hover:text-white lg:flex lg:space-x-2',
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-zinc-400 transition-colors duration-200 hover:text-white"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full overflow-hidden rounded-full bg-gradient-to-r from-[#4CAF50]/10 to-[#8BC34A]/10 backdrop-blur-sm"
              transition={{
                type: 'spring',
                bounce: 0.2,
                duration: 0.6,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {/* Subtle moving gradient effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#4CAF50]/5 via-transparent to-[#8BC34A]/5"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'mirror',
                  duration: 2,
                  ease: 'easeInOut',
                }}
              />

              {/* Bottom border */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      initial={false}
      animate={{
        backdropFilter: visible ? 'blur(10px)' : 'none',
        boxShadow: visible ? '0 0 24px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.1)' : 'none',
        width: visible ? '90%' : '100%',
        paddingRight: visible ? '12px' : '0px',
        paddingLeft: visible ? '12px' : '0px',
        borderRadius: visible ? '16px' : '9999px',
        y: visible ? 20 : 0,
        opacity: 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className={cn(
        'relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden',
        visible
          ? 'border border-zinc-800 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60'
          : 'bg-transparent',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => {
  return <div className={cn('flex w-full flex-row items-center justify-between', className)}>{children}</div>;
};

export const MobileNavMenu = ({ children, className, isOpen, onClose }: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            'absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg border border-zinc-800 bg-black/90 px-4 py-8 backdrop-blur supports-[backdrop-filter]:bg-black/70',
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return isOpen ? (
    <X className="size-5 text-white" onClick={onClick} />
  ) : (
    <Menu className="size-5 text-white" onClick={onClick} />
  );
};

export const NavbarLogo = ({ children }: { children?: React.ReactNode }) => {
  return (
    <a href="/" className="relative z-20 mr-4 flex items-center gap-2 font-medium">
      {children}
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = 'a',
  children,
  className,
  variant = 'primary',
  onClick,
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'gradient';
  onClick?: () => void;
} & (React.ComponentPropsWithoutRef<'a'> | React.ComponentPropsWithoutRef<'button'>)) => {
  const baseStyles =
    'group inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium relative hover:-translate-y-0.5 transition duration-200 overflow-hidden';

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] text-white shadow-md hover:shadow-[0_0_15px_rgba(76,175,80,0.4)]',
    secondary:
      'border border-zinc-800 bg-black/50 text-white hover:border-[#4CAF50]/40 hover:bg-[#4CAF50]/5 hover:text-white',
    dark: 'bg-zinc-900 text-white border border-zinc-800 hover:border-zinc-700',
    gradient: 'bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] text-white hover:shadow-lg',
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
      {...props}
    >
      {/* Inner animation effect for primary and gradient buttons */}
      {(variant === 'primary' || variant === 'gradient') && (
        <motion.span
          className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'linear',
            repeatType: 'loop',
          }}
        />
      )}

      {/* Secondary button hover effect */}
      {variant === 'secondary' && (
        <motion.span
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#4CAF50]/0 via-[#4CAF50]/5 to-[#4CAF50]/0 opacity-0 group-hover:opacity-100"
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
            repeatType: 'loop',
          }}
        />
      )}

      {children}
    </Tag>
  );
};
