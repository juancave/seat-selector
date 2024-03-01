import { AirplaneData, EmergencyExit, Seat, SeatState, SeatType, SeatsRow, SeatLocation } from "types";

const generateSeat = (row: string, name: string, price: number, state: SeatState, type: SeatType, location: SeatLocation): Seat => ({
  row,
  name,
  price,
  state,
  type,
  location,
});

const generateFirstClassRow = (title: string): SeatsRow => ({
  title,
  leftSeats: [generateSeat(title, 'A', 30000, SeatState.UNAVAILABLE, SeatType.FIRST_CLASS, SeatLocation.WINDOW), generateSeat(title, 'B', 24000, SeatState.AVAILABLE, SeatType.FIRST_CLASS, SeatLocation.STANDARD)],
  rightSeats: [generateSeat(title, 'D', 20000, SeatState.AVAILABLE, SeatType.FIRST_CLASS, SeatLocation.CORRIDOR), generateSeat(title, 'E', 24000, SeatState.AVAILABLE, SeatType.FIRST_CLASS, SeatLocation.WINDOW)],
});

const generateEconomyRow = (title: string): SeatsRow => ({
  title,
  leftSeats: [generateSeat(title, 'A', 15000, SeatState.AVAILABLE, SeatType.ECONOMY, SeatLocation.WINDOW), generateSeat(title, 'B', 12000, SeatState.AVAILABLE, SeatType.ECONOMY, SeatLocation.STANDARD), generateSeat(title, 'C', 10000, SeatState.AVAILABLE, SeatType.ECONOMY, SeatLocation.CORRIDOR)],
  rightSeats: [generateSeat(title, 'D', 10000, SeatState.AVAILABLE, SeatType.ECONOMY, SeatLocation.CORRIDOR), generateSeat(title, 'E', 12000, SeatState.AVAILABLE, SeatType.ECONOMY, SeatLocation.STANDARD), generateSeat(title, 'K', 15000, SeatState.AVAILABLE, SeatType.ECONOMY, SeatLocation.WINDOW)],
});

const generateEmergencyExit = (): EmergencyExit => ({
  right: true,
  left: true,
});

export const airplaneDataMock: AirplaneData[] = [
  {
    title: 'First Class',
    leftHeaders: ['A', 'B'],
    rightHeaders: ['C', 'D'],
    rows: [
      generateFirstClassRow('1'),
      generateFirstClassRow('2'),
      generateEmergencyExit(),
      generateFirstClassRow('3'),
    ],
  },
  {
    title: 'Economy',
    leftHeaders: ['A', 'B', 'C'],
    rightHeaders: ['D', 'E', 'K'],
    rows: [
      generateEconomyRow('4'),
      generateEconomyRow('5'),
      generateEconomyRow('6'),
      generateEconomyRow('7'),
      generateEconomyRow('8'),
      generateEmergencyExit(),
      generateEconomyRow('9'),
      generateEconomyRow('10'),
      generateEconomyRow('11'),
      generateEconomyRow('12'),
      generateEconomyRow('13'),
      generateEconomyRow('14'),
      generateEconomyRow('15'),
      generateEconomyRow('16'),
      generateEconomyRow('17'),
      generateEconomyRow('18'),
      generateEmergencyExit(),
      generateEconomyRow('19'),
      generateEconomyRow('20'),
    ],
  },
];
