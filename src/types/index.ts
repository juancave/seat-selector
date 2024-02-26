export type AirplaneData = {
  title: string,
  rows: (SeatsRow | EmergencyExit)[]
}

export interface SeatsRow {
  readonly title: string;
  readonly leftSeats: Seat[];
  readonly rightSeats: Seat[];
}

export enum SeatState {
  AVAILABLE = 'available',
  BUSY = 'busy',
  UNAVAILABLE = 'unavailable',
}

export interface Seat {
  readonly price: number;
  readonly state: SeatState;
  readonly name: string;
}

export interface EmergencyExit {
  readonly right: boolean;
  readonly left: boolean;
}

export function isSeatType(row: SeatsRow | EmergencyExit): row is SeatsRow {
  return 'title' in row;
}
