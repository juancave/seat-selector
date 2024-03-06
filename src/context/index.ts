import { createContext } from 'react';

export enum ContextType {
  THEATER = 'theater',
  AIRPLANE = 'airplane',
  NONE = 'none'
}

export const SeatsContext = createContext(ContextType.NONE);
