import { IconNames } from "components/Icons";
import { seatStyles } from 'components/Seat';
import {
  AirplaneData,
  EmergencyExit,
  Seat,
  SeatState,
  SeatType,
  SeatsRow,
  SeatLocation,
  FlightInformation,
  LegendSeat,
  SeatPosition,
} from "types";

const unavailableSeats = ['1A', '1D', '3C', '4C', '6B', '6C', '8D', '8E', '8K', '13D', '15K', '18A', '19D', '19K'];

const getSeatAvailability = (seat: string) => unavailableSeats.includes(seat) ? SeatState.UNAVAILABLE : SeatState.AVAILABLE;

const generateSeat = (row: string, name: string, price: number, state: SeatState, type: SeatType, location: SeatLocation, position: SeatPosition): Seat => ({
  row,
  name,
  price,
  state,
  type,
  location,
  position,
});

enum SEATS {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  K = 'K'
};

const generateFirstClassRow = (title: string): SeatsRow => ({
  title,
  seats: [
    generateSeat(title, SEATS.A, 30000, getSeatAvailability(`${title}${SEATS.A}`), SeatType.FIRST_CLASS, SeatLocation.WINDOW, SeatPosition.LEFT),
    generateSeat(title, SEATS.B, 24000, getSeatAvailability(`${title}B`), SeatType.FIRST_CLASS, SeatLocation.STANDARD, SeatPosition.LEFT),
    generateSeat(title, SEATS.D, 24000, getSeatAvailability(`${title}D`), SeatType.FIRST_CLASS, SeatLocation.CORRIDOR, SeatPosition.RIGHT),
    generateSeat(title, SEATS.E, 30000, getSeatAvailability(`${title}E`), SeatType.FIRST_CLASS, SeatLocation.WINDOW, SeatPosition.RIGHT),
  ],
  leftSeats: [
    generateSeat(title, SEATS.A, 30000, getSeatAvailability(`${title}${SEATS.A}`), SeatType.FIRST_CLASS, SeatLocation.WINDOW, SeatPosition.LEFT),
    generateSeat(title, SEATS.B, 24000, getSeatAvailability(`${title}B`), SeatType.FIRST_CLASS, SeatLocation.STANDARD, SeatPosition.LEFT),
  ],
  rightSeats: [
    generateSeat(title, SEATS.D, 24000, getSeatAvailability(`${title}D`), SeatType.FIRST_CLASS, SeatLocation.CORRIDOR, SeatPosition.RIGHT),
    generateSeat(title, SEATS.E, 30000, getSeatAvailability(`${title}E`), SeatType.FIRST_CLASS, SeatLocation.WINDOW, SeatPosition.RIGHT),
  ],
});

const generateEconomyRow = (title: string): SeatsRow => ({
  title,
  seats: [
    generateSeat(title, SEATS.A, 15000, getSeatAvailability(`${title}${SEATS.A}`), SeatType.ECONOMY, SeatLocation.WINDOW, SeatPosition.LEFT),
    generateSeat(title, SEATS.B, 12000, getSeatAvailability(`${title}${SEATS.B}`), SeatType.ECONOMY, SeatLocation.STANDARD, SeatPosition.LEFT),
    generateSeat(title, SEATS.C, 10000, getSeatAvailability(`${title}${SEATS.C}`), SeatType.ECONOMY, SeatLocation.CORRIDOR, SeatPosition.LEFT),
    generateSeat(title, SEATS.D, 10000, getSeatAvailability(`${title}${SEATS.E}`), SeatType.ECONOMY, SeatLocation.CORRIDOR, SeatPosition.RIGHT),
    generateSeat(title, SEATS.E, 12000, getSeatAvailability(`${title}${SEATS.E}`), SeatType.ECONOMY, SeatLocation.STANDARD, SeatPosition.RIGHT),
    generateSeat(title, SEATS.K, 15000, getSeatAvailability(`${title}${SEATS.K}`), SeatType.ECONOMY, SeatLocation.WINDOW, SeatPosition.RIGHT),
  ],
  leftSeats: [
    generateSeat(title, SEATS.A, 15000, getSeatAvailability(`${title}${SEATS.A}`), SeatType.ECONOMY, SeatLocation.WINDOW, SeatPosition.LEFT),
    generateSeat(title, SEATS.B, 12000, getSeatAvailability(`${title}${SEATS.B}`), SeatType.ECONOMY, SeatLocation.STANDARD, SeatPosition.LEFT),
    generateSeat(title, SEATS.C, 10000, getSeatAvailability(`${title}${SEATS.C}`), SeatType.ECONOMY, SeatLocation.CORRIDOR, SeatPosition.LEFT),
  ],
  rightSeats: [
    generateSeat(title, SEATS.D, 10000, getSeatAvailability(`${title}${SEATS.E}`), SeatType.ECONOMY, SeatLocation.CORRIDOR, SeatPosition.RIGHT),
    generateSeat(title, SEATS.E, 12000, getSeatAvailability(`${title}${SEATS.E}`), SeatType.ECONOMY, SeatLocation.STANDARD, SeatPosition.RIGHT),
    generateSeat(title, SEATS.K, 15000, getSeatAvailability(`${title}${SEATS.K}`), SeatType.ECONOMY, SeatLocation.WINDOW, SeatPosition.RIGHT),
  ],
});

const generateEmergencyExit = (): EmergencyExit => ({
  right: true,
  left: true,
});

export const airplaneSeatsDataMock: AirplaneData[] = [
  {
    title: 'First Class',
    leftHeaders: [SEATS.A, SEATS.B],
    rightHeaders: [SEATS.C, SEATS.D],
    rows: [
      generateFirstClassRow('1'),
      generateFirstClassRow('2'),
      generateEmergencyExit(),
      generateFirstClassRow('3'),
    ],
  },
  {
    title: 'Economy',
    leftHeaders: [SEATS.A, SEATS.B, SEATS.C],
    rightHeaders: [SEATS.D, SEATS.E, SEATS.K],
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

export const legendSeatsMockData: LegendSeat[] = [
  {
    icon: IconNames.BUSY_SEAT,
    styles: seatStyles.disabled,
    text: 'Unavailable',
    price: '$...',
  },
  {
    icon: IconNames.SELECTED_SEAT,
    styles: seatStyles.selected,
    text: 'Selected',
    price: '$...',
  },
  {
    icon: IconNames.PREMIUN_SEAT,
    styles: seatStyles.available,
    text: 'First Class',
    price: 'From $20000',
  },
  {
    icon: IconNames.BEST_SEAT,
    styles: seatStyles.available,
    text: 'Best View',
    price: 'From $15000',
  },
  {
    icon: null,
    styles: seatStyles.available,
    text: 'Standart Seat',
    price: 'From $10000',
  },
];

export const airplaneInformationDataMock: FlightInformation = {
  origin: {
    city: 'Medellín',
    state: 'Antioquia',
    country: 'Colombia',
    code: 'MDE',
  },
  destination: {
    city: 'Miami',
    state: 'Florida',
    country: 'United States of America',
    code: 'MIA',
  },
  schedule: {
    departure: '9:23 am',
    arrival: '10:52 am',
    timeInMinutes: 235,
    date: 'December 28th, 2024',
  },
  aircraft: {
    model: 'Airbus',
    reference: '380',
    capacity: 80,
  },
  reservation: {
    seats: 3,
    defaultSeats: ['20D', '20E', '20K'],
    name: 'Juan Camilo Velásquez',
    code: 'RES7566',
  },
};
