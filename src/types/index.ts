//Account
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
   {
    id: '3',
    email: '1',
    password: '1',
    name: 'User',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
];
// Store
export interface STORE {
  id: string;
  name: string;
  status: 'Open' | 'Deactivated';
  fulfillment: string;
  website: string;
  role: 'Owner' | 'Staff';
}


export const STORE_DATA: STORE[] = [
    {
        id: '1',
        name: 'Dianne Russell',
        fulfillment: 'Tu Nguyen',
        website: 'diannerussell.com',
        status: 'Open',
        role: 'Owner',
    },
    {
        id: '2',
        name: 'Nineteen Eighty-Four',
        fulfillment: 'Self fulfill store',
        website: 'nineteeneightyfour.shop',
        status: 'Open',
        role: 'Owner',
    },
    {
        id: '3',
        name: 'Starship Troopers',
        fulfillment: 'FusionEdge Fulfillment',
        website: 'starshiptroopers.us',
        status: 'Deactivated',
        role: 'Staff',
    },
];

interface StoreStats {
 
  revenue: number;
  profit: number;
  orders: number;
  conversionRate: number;
}

export const storePerformanceData: Record<string, {
    revenue: number[];
    previousRevenue: number[];
}> = {
    '1': {
        revenue: [7000, 9000, 6000, 10000, 4000, 8000, 5000, 9000, 3000, 6000],
        previousRevenue: [4200, 5200, 6100, 7000, 7800, 8600, 9300, 9800, 10200, 11000],
    },
    '2': { 
        revenue: [5000, 7000, 8000, 9000, 7500, 8500, 9500, 10000, 8000, 9000],
        previousRevenue: [3000, 4000, 5000, 6000, 6500, 7000, 7500, 8000, 8500, 9000],
    },
    '3': { 
        revenue: [3000, 4000, 3500, 5000, 4500, 6000, 5500, 7000, 6500, 8000],
        previousRevenue: [2000, 3000, 2500, 4000, 3500, 5000, 4500, 6000, 5500, 7000],
    },
};
export interface Product {
    id: string;
    name: string;
    subtotal: string;
    order: number;
    cr: string;
    image: string;
    traffic: string;
}

const DATA: Product[] = [
    {
        id: '1',
        name: 'iPad Pro 2017 Model',
        subtotal: '$9,876.54',
        order: 994,
        cr: '5%',
        image: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/65.jpg',
        traffic: ' facebook'
    },
    {
        id: '2',
        name: 'Gaming Chair, local pickup only',
        subtotal: '$7,890.76',
        order: 177,
        cr: '0.5%',
        image: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/65.jpg',
        traffic: ' facebook'
    },
    {
        id: '3',
        name: 'Air Jordan 1 Top 3 Sneakers',
        subtotal: '$2,109.87',
        order: 492,
        cr: '0.5%',
        image: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/65.jpg',
        traffic: ' facebook'
    },
    {
        id: '4',
        name: 'Playstation 4 Limited Edition',
        subtotal: '$265.40',
        order: 429,
        cr: '3.6%',
        image: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/65.jpg',
        traffic: ' facebook'
    },
    {
        id: '5',
        name: 'iPad Pro 2017 Model',
        subtotal: '$9,876.54',
        order: 994,
        cr: '5%',
        image: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/65.jpg',
        traffic: ' facebook'
    },
    {
        id: '6',
        name: 'Gaming Chair, local pickup only',
        subtotal: '$7,890.76',
        order: 177,
        cr: '0.5%',
        image: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/65.jpg',
        traffic: ' facebook'
    },
    {
        id: '7',
        name: 'Air Jordan 1 Top 3 Sneakers',
        subtotal: '$2,109.87',
        order: 492,
        cr: '0.5%',
        image: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/65.jpg',
        traffic: ' facebook'
    },
    {
        id: '8',
        name: 'Playstation 4 Limited Edition',
        subtotal: '$265.40',
        order: 429,
        cr: '3.6%',
        image: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/65.jpg',
        traffic: ' facebook'
    },
    {
        id: '9',
        name: 'iPad Pro 2017 Model',
        subtotal: '$9,876.54',
        order: 994,
        cr: '5%',
        image: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/65.jpg',
        traffic: ' facebook'
    },
    {
        id: '10',
        name: 'Gaming Chair, local pickup only',
        subtotal: '$7,890.76',
        order: 177,
        cr: '0.5%',
        image: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/65.jpg',
        traffic: ' facebook'
    },
    {
        id: '11',
        name: 'Air Jordan 1 Top 3 Sneakers',
        subtotal: '$2,109.87',
        order: 492,
        cr: '0.5%',
        image: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/65.jpg',
        traffic: ' facebook'
    },
    {
        id: '12',
        name: 'Playstation 4 Limited Edition',
        subtotal: '$265.40',
        order: 429,
        cr: '3.6%',
        image: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/65.jpg',
        traffic: ' facebook'
    }, {
        id: '13',
        name: 'iPad Pro 2017 Model',
        subtotal: '$9,876.54',
        order: 994,
        cr: '5%',
        image: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/65.jpg',
        traffic: ' facebook'
    },
    {
        id: '14',
        name: 'Gaming Chair, local pickup only',
        subtotal: '$7,890.76',
        order: 177,
        cr: '0.5%',
        image: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/65.jpg',
        traffic: ' facebook'
    },
    {
        id: '15',
        name: 'Air Jordan 1 Top 3 Sneakers',
        subtotal: '$2,109.87',
        order: 492,
        cr: '0.5%',
        image: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/65.jpg',
        traffic: ' facebook'
    },
    {
        id: '16',
        name: 'Playstation 4 Limited Edition',
        subtotal: '$265.40',
        order: 429,
        cr: '3.6%',
        image: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/65.jpg',
        traffic: ' facebook'
    },
];
export default DATA;

export interface Order {
  id: string;
  orderCode: string;
  orderNumber: number;
  date: string;
  time: string;
  total: number;
  currency: string;
  paymentStatus: "Paid" | "Unpaid" | "Refunded";
  fulfillmentStatus: "Fulfilled" | "Unfulfilled" | "Processing";
  taxIncluded: boolean;
  hasNote: boolean;
}
export const ORDERS: Order[] = [
  {
    id: "1",
    orderCode: "ZO3FA-180425-BYHFA",
    orderNumber: 12001,
    date: "2025-11-26",
    time: "17:00",
    total: 145.63,
    currency: "USD",
    paymentStatus: "Paid",
    fulfillmentStatus: "Unfulfilled",
    taxIncluded: true,
    hasNote: true,
  },
  {
    id: "2",
    orderCode: "AB2CD-190425-KLMNO",
    orderNumber: 12002,
    date: "2025-11-27",
    time: "09:30",
    total: 89.99,
    currency: "USD",
    paymentStatus: "Unpaid",
    fulfillmentStatus: "Processing",
    taxIncluded: false,
    hasNote: false,
  },
  {
    id: "3",
    orderCode: "ZX9PQ-200425-RTYUI",
    orderNumber: 12003,
    date: "2025-11-28",
    time: "14:45",
    total: 250.0,
    currency: "USD",
    paymentStatus: "Paid",
    fulfillmentStatus: "Fulfilled",
    taxIncluded: true,
    hasNote: true,
  },
];
