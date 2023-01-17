let info: {
  officeId: number;
  isOpened: boolean;
  contacts: {
    phone: string;
    email: string;
    address: {
      city: string;
    };
  };
};

info = {
  officeId: 45,
  isOpened: false,
  contacts: {
    phone: '123456',
    email: '123@mail.ru',
    address: {
      city: 'Москва',
    },
  },
};
