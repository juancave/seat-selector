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
