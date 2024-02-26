import { AirplaneData, EmergencyExit, SeatState, SeatsRow } from "../types";

const generateFirstClassRow = (title: string): SeatsRow => ({
  title,
  leftSeats: [{ name: 'A', price: 30000, state: SeatState.AVAILABLE }, { name: 'B', price: 24000, state: SeatState.AVAILABLE }, { name: 'C', price: 20000, state: SeatState.AVAILABLE }],
  rightSeats: [{ name: 'D', price: 20000, state: SeatState.AVAILABLE }, { name: 'E', price: 24000, state: SeatState.AVAILABLE }, { name: 'K', price: 30000, state: SeatState.AVAILABLE }],
});

const generateEconomyRow = (title: string): SeatsRow => ({
  title,
  leftSeats: [{ name: 'A', price: 15000, state: SeatState.AVAILABLE }, { name: 'B', price: 12000, state: SeatState.AVAILABLE }, { name: 'C', price: 10000, state: SeatState.AVAILABLE }],
  rightSeats: [{ name: 'D', price: 10000, state: SeatState.AVAILABLE }, { name: 'E', price: 12000, state: SeatState.AVAILABLE }, { name: 'K', price: 15000, state: SeatState.AVAILABLE }],
});

const generateEmergencyExit = (): EmergencyExit => ({
  right: true,
  left: true,
});

export const airplaneDataMock: AirplaneData[] = [
  {
    title: 'First Class',
    rows: [
      generateFirstClassRow('1'),
      generateFirstClassRow('2'),
      generateEmergencyExit(),
      generateFirstClassRow('3'),
    ],
  },
  {
    title: 'Economy',
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
