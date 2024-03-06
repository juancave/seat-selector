import { seatStyles } from 'components/Seat';
import {
  SeatsSectionData,
  EmergencyExit,
  Seat,
  SeatState,
  SeatType,
  SeatsRow,
  SeatLocation,
  SeatPosition,
  LegendSeat,
} from "types";
import { EventInformation } from 'types/theater';

const unavailableSeats = [
  `A3-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `A4-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `A5-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `A6-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `A7-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `A8-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `A9-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `B5-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `B6-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `B7-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `B8-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `C5-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `C7-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `C8-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `D6-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `D7-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `D8-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `E6-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `E11-${SeatType.VIP}-${SeatLocation.CENTER}`,
  `E12-${SeatType.VIP}-${SeatLocation.CENTER}`,

  `F3-${SeatType.PLATINUM}-${SeatLocation.RIGHT}`,
  `F4-${SeatType.PLATINUM}-${SeatLocation.RIGHT}`,
  `F5-${SeatType.PLATINUM}-${SeatLocation.RIGHT}`,

  `A3-${SeatType.BALCONY}-${SeatLocation.CENTER}`,
  `A4-${SeatType.BALCONY}-${SeatLocation.CENTER}`,
  `A5-${SeatType.BALCONY}-${SeatLocation.CENTER}`,
  `A8-${SeatType.BALCONY}-${SeatLocation.CENTER}`,
  `A9-${SeatType.BALCONY}-${SeatLocation.CENTER}`,
  `A12-${SeatType.BALCONY}-${SeatLocation.CENTER}`,
];

const getSeatAvailability = (seat: string) => unavailableSeats.includes(seat) ? SeatState.UNAVAILABLE : SeatState.AVAILABLE;

const generateSeat = (row: string, name: string, price: number, type: SeatType, location: SeatLocation, position: SeatPosition): Seat => {
  const id = `${row}${name}-${type}-${location}`;

  return {
    id,
    row,
    name,
    price,
    state: getSeatAvailability(id),
    type,
    location,
    position,
  }
};

const generateVipSeat = (row: string, name: string, price: number, location: SeatLocation, position: SeatPosition): Seat =>
  (generateSeat(row, name, price, SeatType.VIP, location, position));
const generatePlatinumSeat = (row: string, name: string, price: number, location: SeatLocation, position: SeatPosition): Seat =>
  (generateSeat(row, name, price, SeatType.PLATINUM, location, position));
const generateBalconySeat = (row: string, name: string, price: number, location: SeatLocation, position: SeatPosition): Seat =>
  (generateSeat(row, name, price, SeatType.BALCONY, location, position));

enum SEATS {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
  H = 'H',
  I = 'I',
  J = 'J',
  K = 'K',
  L = 'L',
  M = 'M',
  N = 'N',
};

const generateArray = (value: number) => (Array.from(Array(value).keys()).map((val) => String(val + 1)));

const generateVipRow = (title: string, emergencyExit?: EmergencyExit): SeatsRow => ({
  title,
  sectionsLocations: [SeatPosition.LEFT, SeatPosition.CENTER, SeatPosition.RIGHT],
  seats: [
    ...generateArray(5).map((value) => generateVipSeat(title, String(value), 30000, SeatLocation.LEFT, SeatPosition.LEFT)),
    ...generateArray(12).map((value) => generateVipSeat(title, String(value), 32000, SeatLocation.CENTER, SeatPosition.CENTER)),
    ...generateArray(5).map((value) => generateVipSeat(title, String(value), 30000, SeatLocation.RIGHT, SeatPosition.RIGHT)),
  ],
  emergencyExit,
});

const generatePlatinumRow = (title: string, seatType: SeatType, emergencyExit?: EmergencyExit): SeatsRow => ({
  title,
  sectionsLocations: [SeatPosition.LEFT, SeatPosition.CENTER, SeatPosition.RIGHT],
  seats: [
    ...generateArray(5).map((value) => generatePlatinumSeat(title, String(value), 20000, SeatLocation.LEFT, SeatPosition.LEFT)),
    ...generateArray(12).map((value) => generatePlatinumSeat(title, String(value), 22000, SeatLocation.CENTER, SeatPosition.CENTER)),
    ...generateArray(5).map((value) => generatePlatinumSeat(title, String(value), 20000, SeatLocation.RIGHT, SeatPosition.RIGHT)),
  ],
  emergencyExit,
});

const generateStandardRow = (title: string, seatType: SeatType, emergencyExit?: EmergencyExit): SeatsRow => ({
  title,
  sectionsLocations: [SeatPosition.LEFT, SeatPosition.CENTER, SeatPosition.RIGHT],
  seats: [
    ...generateArray(5).map((value) => generateBalconySeat(title, String(value), 16000, SeatLocation.LEFT, SeatPosition.LEFT)),
    ...generateArray(12).map((value) => generateBalconySeat(title, String(value), 18000, SeatLocation.CENTER, SeatPosition.CENTER)),
    ...generateArray(5).map((value) => generateBalconySeat(title, String(value), 16000, SeatLocation.RIGHT, SeatPosition.RIGHT)),
  ],
  emergencyExit,
});

export const theaterSeatsDataMock: SeatsSectionData[] = [
  {
    title: 'VIP',
    rows: [
      generateVipRow(SEATS.A),
      generateVipRow(SEATS.B),
      generateVipRow(SEATS.C),
      generateVipRow(SEATS.D),
      generateVipRow(SEATS.E),
    ],
  },
  {
    title: 'Platinum',
    rows: [
      generatePlatinumRow(SEATS.F, SeatType.PLATINUM),
      generatePlatinumRow(SEATS.G, SeatType.PLATINUM),
      generatePlatinumRow(SEATS.H, SeatType.PLATINUM),
      generatePlatinumRow(SEATS.I, SeatType.PLATINUM),
      generatePlatinumRow(SEATS.J, SeatType.PLATINUM),
      generatePlatinumRow(SEATS.K, SeatType.PLATINUM),
      generatePlatinumRow(SEATS.L, SeatType.PLATINUM),
      generatePlatinumRow(SEATS.M, SeatType.PLATINUM),
      generatePlatinumRow(SEATS.N, SeatType.PLATINUM),
    ],
  },
  {
    title: 'Balcony',
    rows: [
      generateStandardRow(SEATS.A, SeatType.BALCONY),
      generateStandardRow(SEATS.B, SeatType.BALCONY),
      generateStandardRow(SEATS.C, SeatType.BALCONY),
      generateStandardRow(SEATS.D, SeatType.BALCONY),
      generateStandardRow(SEATS.E, SeatType.BALCONY),
      generateStandardRow(SEATS.F, SeatType.BALCONY),
      generateStandardRow(SEATS.G, SeatType.BALCONY),
    ],
  },
];

export const legendSeatsMockData: LegendSeat[] = [
  {
    icon: null,
    styles: `${seatStyles.disabled} ${seatStyles.sizeSm}`,
    text: 'Unavailable',
    price: '$...',
  },
  {
    icon: null,
    styles: `${seatStyles.selected} ${seatStyles.sizeSm}`,
    text: 'Selected',
    price: '$...',
  },
  {
    icon: null,
    styles: `${seatStyles.available} ${seatStyles.sizeSm}`,
    text: 'Seat',
    price: 'From $16000',
  },
];

export const eventInformationDataMock: EventInformation = {
  title: 'Quilapayún + Inti Illimani',
  date: 'Saturday, 27 April 2024',
  time: '20:00',
  theater: {
    name: 'Teatro Metropolitano',
    code: 'TMM',
    capacity: 500,
    address: 'Cl. 41 #57-30',
    city: 'Medellín',
    state: 'Antioquia',
    country: 'Colombia',
  },
  seats: 10,
};
