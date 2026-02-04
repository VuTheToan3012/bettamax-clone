export interface Account {
  id: string;
  email: string;
  password: string;
  name: string;
  avatar?: string;
}

export const USERS: Account[] = [
  {
    id: '1',
    email: 'admin@gmail.com',
    password: '123456',
    name: 'Admin',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    email: 'user@gmail.com',
    password: '111111',
    name: 'User',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
];

interface StoreStats {
  storeId: string;
  revenue: number;
  profit: number;
  orders: number;
  conversionRate: number;
}
