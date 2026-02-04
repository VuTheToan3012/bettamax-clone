const MMKV = require('react-native-mmkv').default;

export const storage = new MMKV({
  id: 'account-storage',
  encryptionKey: 'my-secret-key',
});