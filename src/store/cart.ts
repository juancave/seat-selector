import { create } from 'zustand';
import { Seat } from 'types';

interface CartStore {
  seats: Seat[];
  soldSeats: Seat[];
  syncSoldSeats: () => void;
  addSeat: (seat: Seat) => void;
  removeSeat: (seat: Seat) => void;
  total: () => number;
}

const useCartStore = create<CartStore>()((set, get) => ({
  seats: [],
  soldSeats: [],
  syncSoldSeats: () => {
    set((state) => ({ soldSeats: [...state.soldSeats, ...state.seats] }));
    set(() => ({ seats: [] }));
  },
  addSeat: (seat: Seat) => set((state) => ({ seats: [...state.seats, seat] })),
  removeSeat: (seat: Seat) =>
    set((state) => ({ seats: state.seats.filter((item) => item.name !== seat.name || item.row !== seat.row) })),
  total: () => get().seats.reduce((total, item) => Math.round((total + item.price) * 100) / 100, 0)
}));

export default useCartStore;
