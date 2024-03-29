import { create } from 'zustand';
import { Seat } from 'types';

interface CartStore {
  seats: Seat[];
  soldSeats: Seat[];
  seatsLimit: number;
  defaultSeats: string[];
  syncSoldSeats: () => void;
  addSeat: (seat: Seat) => void;
  removeSeat: (seat: Seat) => void;
  total: () => number;
  setSeatsLimit: (limit: number) => void;
  setDefaultSeats: (defaultSeats: string[]) => void;
  discardSeats: () => void;
}

const useCartStore = create<CartStore>()((set, get) => ({
  seats: [],
  soldSeats: [],
  seatsLimit: 1,
  defaultSeats: [],
  syncSoldSeats: () => {
    set((state) => ({ soldSeats: [...state.soldSeats, ...state.seats] }));
    set(() => ({ seats: [] }));
  },
  addSeat: (seat: Seat) => set((state) => ({ seats: [...state.seats, seat] })),
  removeSeat: (seat: Seat) =>
    set((state) => ({ seats: state.seats.filter((item) => item.id !== seat.id) })),
  total: () => get().seats.filter((seat) => !seat.selectedByDefault).reduce((total, item) => Math.round((total + item.price) * 100) / 100, 0),
  setSeatsLimit: (limit: number) => set((state) => ({ seatsLimit: limit })),
  setDefaultSeats: (defaultSeats: string[]) => set(() => ({ defaultSeats })),
  discardSeats: () => set(() => ({ seats: [], soldSeats: [] })),
}));

export default useCartStore;
