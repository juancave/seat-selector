export interface Theater {
  readonly name: string;
  readonly code: string;
  readonly capacity: number;
  readonly address: string;
  readonly city: string;
  readonly state: string;
  readonly country: string;
}

export interface EventInformation {
  readonly title: string;
  readonly date: string;
  readonly time: string;
  readonly theater: Theater;
  readonly seats: number;
}
