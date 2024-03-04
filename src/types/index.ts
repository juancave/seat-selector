import { IconNames } from "components/Icons";

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

export interface Aircraft {
  readonly reference: string;
  readonly model: string;
  readonly capacity: number;
}

export interface Schedule {
  readonly departure: string;
  readonly arrival: string;
  readonly timeInMinutes: number;
  readonly date: string;
}

export interface FlightReservation {
  readonly seats: number;
  readonly defaultSeats: string[];
  readonly name: string;
  readonly code: string;
}

export interface FlightInformation {
  readonly origin: Airport;
  readonly destination: Airport;
  readonly aircraft: Aircraft;
  readonly schedule: Schedule;
  readonly reservation: FlightReservation;
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

export interface LegendSeat {
  readonly styles: string;
  readonly text: string;
  readonly price: string;
  readonly icon: IconNames | null;
}
