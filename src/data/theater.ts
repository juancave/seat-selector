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

const generateVipRow = (title: string, emergencyExit?: EmergencyExit): SeatsRow => ({
  title,
  sectionsLocations: [SeatPosition.LEFT, SeatPosition.CENTER, SeatPosition.RIGHT],
  seats: [
    // ...Array(5).fill('').map((_, index) => generateSeat(title, String(index + 1), 30000, getSeatAvailability(`${title}${String(index + 1)}`), SeatType.FIRST_CLASS, SeatLocation.WINDOW, SeatPosition.LEFT)),
    generateVipSeat(title, '1', 30000, SeatLocation.LEFT, SeatPosition.LEFT),
    generateVipSeat(title, '2', 30000, SeatLocation.LEFT, SeatPosition.LEFT),
    generateVipSeat(title, '3', 30000, SeatLocation.LEFT, SeatPosition.LEFT),
    generateVipSeat(title, '4', 30000, SeatLocation.LEFT, SeatPosition.LEFT),
    // generateVipSeat(title, '5', 30000, SeatLocation.LEFT, SeatPosition.LEFT),
    // ...Array(12).fill('').map((_, index) => generateSeat(title, String(index + 1), 32000, getSeatAvailability(`${title}${String(index + 1)}`), SeatType.FIRST_CLASS, SeatLocation.WINDOW, SeatPosition.CENTER)),
    generateVipSeat(title, '1', 32000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateVipSeat(title, '2', 32000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateVipSeat(title, '3', 32000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateVipSeat(title, '4', 32000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateVipSeat(title, '5', 32000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateVipSeat(title, '6', 32000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateVipSeat(title, '7', 32000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateVipSeat(title, '8', 32000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateVipSeat(title, '9', 32000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateVipSeat(title, '10', 32000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateVipSeat(title, '11', 32000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateVipSeat(title, '12', 32000, SeatLocation.CENTER, SeatPosition.CENTER),
    // ...Array(5).fill('').map((_, index) => generateSeat(title, String(index + 1), 30000, getSeatAvailability(`${title}${String(index + 1)}`), SeatType.FIRST_CLASS, SeatLocation.WINDOW, SeatPosition.RIGHT)),
    generateVipSeat(title, '1', 30000, SeatLocation.RIGHT, SeatPosition.RIGHT),
    generateVipSeat(title, '2', 30000, SeatLocation.RIGHT, SeatPosition.RIGHT),
    generateVipSeat(title, '3', 30000, SeatLocation.RIGHT, SeatPosition.RIGHT),
    generateVipSeat(title, '4', 30000, SeatLocation.RIGHT, SeatPosition.RIGHT),
    // generateVipSeat(title, '5', 30000, SeatLocation.RIGHT, SeatPosition.RIGHT),
  ],
  emergencyExit,
});

const generatePlatinumRow = (title: string, seatType: SeatType, emergencyExit?: EmergencyExit): SeatsRow => ({
  title,
  sectionsLocations: [SeatPosition.LEFT, SeatPosition.CENTER, SeatPosition.RIGHT],
  seats: [
    generatePlatinumSeat(title, '1', 20000, SeatLocation.LEFT, SeatPosition.LEFT),
    generatePlatinumSeat(title, '2', 20000, SeatLocation.LEFT, SeatPosition.LEFT),
    generatePlatinumSeat(title, '3', 20000, SeatLocation.LEFT, SeatPosition.LEFT),
    generatePlatinumSeat(title, '4', 20000, SeatLocation.LEFT, SeatPosition.LEFT),
    generatePlatinumSeat(title, '5', 20000, SeatLocation.LEFT, SeatPosition.LEFT),

    generatePlatinumSeat(title, '1', 22000, SeatLocation.CENTER, SeatPosition.CENTER),
    generatePlatinumSeat(title, '2', 22000, SeatLocation.CENTER, SeatPosition.CENTER),
    generatePlatinumSeat(title, '3', 22000, SeatLocation.CENTER, SeatPosition.CENTER),
    generatePlatinumSeat(title, '4', 22000, SeatLocation.CENTER, SeatPosition.CENTER),
    generatePlatinumSeat(title, '5', 22000, SeatLocation.CENTER, SeatPosition.CENTER),
    generatePlatinumSeat(title, '6', 22000, SeatLocation.CENTER, SeatPosition.CENTER),
    generatePlatinumSeat(title, '7', 22000, SeatLocation.CENTER, SeatPosition.CENTER),
    generatePlatinumSeat(title, '8', 22000, SeatLocation.CENTER, SeatPosition.CENTER),
    generatePlatinumSeat(title, '9', 22000, SeatLocation.CENTER, SeatPosition.CENTER),
    generatePlatinumSeat(title, '10', 22000, SeatLocation.CENTER, SeatPosition.CENTER),
    generatePlatinumSeat(title, '11', 22000, SeatLocation.CENTER, SeatPosition.CENTER),
    generatePlatinumSeat(title, '12', 22000, SeatLocation.CENTER, SeatPosition.CENTER),

    generatePlatinumSeat(title, '1', 20000, SeatLocation.RIGHT, SeatPosition.RIGHT),
    generatePlatinumSeat(title, '2', 20000, SeatLocation.RIGHT, SeatPosition.RIGHT),
    generatePlatinumSeat(title, '3', 20000, SeatLocation.RIGHT, SeatPosition.RIGHT),
    generatePlatinumSeat(title, '4', 20000, SeatLocation.RIGHT, SeatPosition.RIGHT),
    generatePlatinumSeat(title, '5', 20000, SeatLocation.RIGHT, SeatPosition.RIGHT),
  ],
  emergencyExit,
});

const generateStandardRow = (title: string, seatType: SeatType, emergencyExit?: EmergencyExit): SeatsRow => ({
  title,
  sectionsLocations: [SeatPosition.LEFT, SeatPosition.CENTER, SeatPosition.RIGHT],
  seats: [
    generateBalconySeat(title, '1', 16000, SeatLocation.LEFT, SeatPosition.LEFT),
    generateBalconySeat(title, '2', 16000, SeatLocation.LEFT, SeatPosition.LEFT),
    generateBalconySeat(title, '3', 16000, SeatLocation.LEFT, SeatPosition.LEFT),
    generateBalconySeat(title, '4', 16000, SeatLocation.LEFT, SeatPosition.LEFT),
    generateBalconySeat(title, '5', 16000, SeatLocation.LEFT, SeatPosition.LEFT),

    generateBalconySeat(title, '1', 18000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateBalconySeat(title, '2', 18000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateBalconySeat(title, '3', 18000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateBalconySeat(title, '4', 18000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateBalconySeat(title, '5', 18000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateBalconySeat(title, '6', 18000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateBalconySeat(title, '7', 18000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateBalconySeat(title, '8', 18000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateBalconySeat(title, '9', 18000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateBalconySeat(title, '10', 18000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateBalconySeat(title, '11', 18000, SeatLocation.CENTER, SeatPosition.CENTER),
    generateBalconySeat(title, '12', 18000, SeatLocation.CENTER, SeatPosition.CENTER),

    generateBalconySeat(title, '1', 16000, SeatLocation.RIGHT, SeatPosition.RIGHT),
    generateBalconySeat(title, '2', 16000, SeatLocation.RIGHT, SeatPosition.RIGHT),
    generateBalconySeat(title, '3', 16000, SeatLocation.RIGHT, SeatPosition.RIGHT),
    generateBalconySeat(title, '4', 16000, SeatLocation.RIGHT, SeatPosition.RIGHT),
    generateBalconySeat(title, '5', 16000, SeatLocation.RIGHT, SeatPosition.RIGHT),
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
