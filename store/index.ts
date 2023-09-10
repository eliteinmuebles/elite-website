import create from 'zustand';

interface ModalState {
    show: boolean;
    setShow: (show: boolean) => void;
  }

export const useModalStore = create<ModalState>((set) => ({
  show: false,
  setShow: (show) => set({ show }),
}));