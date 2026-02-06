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

export const storePerformanceData: Record<string, {
    revenue: number[];
    previousRevenue: number[];
}> = {
    '1': { // Dianne Russell
        revenue: [7000, 9000, 6000, 10000, 4000, 8000, 5000, 9000, 3000, 6000],
        previousRevenue: [4200, 5200, 6100, 7000, 7800, 8600, 9300, 9800, 10200, 11000],
    },
    '2': { // Nineteen Eighty-Four
        revenue: [5000, 7000, 8000, 9000, 7500, 8500, 9500, 10000, 8000, 9000],
        previousRevenue: [3000, 4000, 5000, 6000, 6500, 7000, 7500, 8000, 8500, 9000],
    },
    '3': { // Starship Troopers
        revenue: [3000, 4000, 3500, 5000, 4500, 6000, 5500, 7000, 6500, 8000],
        previousRevenue: [2000, 3000, 2500, 4000, 3500, 5000, 4500, 6000, 5500, 7000],
    },
};