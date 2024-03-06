import { IconNames } from "components/Icons";

export type AirplaneData = {
  readonly title: string;
  readonly leftHeaders?: string[];
  readonly rightHeaders?: string[];
  readonly rows: SeatsRow[];
}

export interface SeatsRow {
  readonly title: string;
  readonly seats: Seat[];
  readonly sectionsLocations: SeatPosition[];
  readonly emergencyExit?: EmergencyExit;
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

  VIP = 'vip',
  PLATINUM = 'platinum',
  BALCONY = 'balcony',
}

export const SeatTypeName = {
  [SeatType.ECONOMY]: 'Economy',
  [SeatType.FIRST_CLASS]: 'First Class',

  [SeatType.VIP]: 'VIP',
  [SeatType.PLATINUM]: 'Platinum',
  [SeatType.BALCONY]: 'Balcony',
};

export enum SeatLocation {
  CORRIDOR = 'corridor',
  WINDOW = 'window',
  STANDARD = 'standard',

  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export const SeatLocationName = {
  [SeatLocation.CORRIDOR]: 'Corridor',
  [SeatLocation.WINDOW]: 'Window',
  [SeatLocation.STANDARD]: 'Standard',

  [SeatLocation.LEFT]: 'Left',
  [SeatLocation.RIGHT]: 'Right',
  [SeatLocation.CENTER]: 'Center',
};

export enum SeatPosition {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export interface Seat {
  readonly id: string;
  readonly row: string;
  readonly price: number;
  readonly state: SeatState;
  readonly name: string;
  readonly type: SeatType;
  readonly location: SeatLocation;
  readonly position: SeatPosition;
  readonly selectedByDefault?: boolean;
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
