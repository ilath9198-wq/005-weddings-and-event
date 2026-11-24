'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ConsultationContextType {
  isOpen: boolean;
  prefilledTarget: string;
  openConsultation: (target?: string) => void;
  closeConsultation: () => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledTarget, setPrefilledTarget] = useState('');

  const openConsultation = (target?: string) => {
    setPrefilledTarget(target || '');
    setIsOpen(true);
  };

  const closeConsultation = () => {
    setIsOpen(false);
  };

  return (
    <ConsultationContext.Provider
      value={{
        isOpen,
        prefilledTarget,
        openConsultation,
        closeConsultation
      }}
    >
      {children}
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error('useConsultation must be used within a ConsultationProvider');
  }
  return context;
}
