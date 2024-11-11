'use client';

import * as React from 'react';
import { Sheet, SheetContent } from '@/components/ui/sheet';

interface CustomSheetProps {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string; 
}

const CustomSheet: React.FC<CustomSheetProps> = ({
  children,
  isOpen,
  onOpenChange,
  className,
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="top" className={`h-auto ${className}`}>
        <div className="p-4">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheet;
