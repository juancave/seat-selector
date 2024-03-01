export type AirplaneData = {
  readonly title: string;
  readonly leftHeaders: string[];
  readonly rightHeaders: string[];
  readonly rows: (SeatsRow | EmergencyExit)[];
}

export interface SeatsRow {
  readonly title: string;
  readonly leftSeats: Seat[];
  readonly rightSeats: Seat[];
}

export interface Airport {
  readonly city: string;
  readonly state: string;
  readonly country: string;
  readonly code: string;
}

export interface Plane {
  readonly reference: string;
  readonly model: string;
  readonly capacity: number;
}

export interface FlightInformation {
  readonly origin: Airport;
  readonly destiny: Airport;
  readonly plane: Plane;
}

export enum SeatState {
  AVAILABLE = 'available',
  BUSY = 'busy',
  UNAVAILABLE = 'unavailable',
}

export enum SeatType {
  ECONOMY = 'economy',
  FIRST_CLASS = 'first_class',
}

export enum SeatLocation {
  CORRIDOR = 'corridor',
  WINDOW = 'window',
  STANDARD = 'standard',
}

export interface Seat {
  readonly row: string;
  readonly price: number;
  readonly state: SeatState;
  readonly name: string;
  readonly type: SeatType;
  readonly location: SeatLocation;
}

export interface EmergencyExit {
  readonly right: boolean;
  readonly left: boolean;
}

export function isSeatType(row: SeatsRow | EmergencyExit): row is SeatsRow {
  return 'title' in row;
}
