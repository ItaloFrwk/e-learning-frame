import Cookie from 'js-cookie';

interface IStorage {
  set(key: string, value: string): unknown;
  get(key: string): unknown;
  remove(key: string): unknown;
}

const storage: IStorage = {
  set: () => false,
  get: () => false,
  remove: () => false,
};

try {
  if (!window.localStorage) {
    throw Error('no local storage');
  }

  storage.set = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value));

  storage.get = (key: string) => {
    const item = localStorage.getItem(key);
    try {
      const parseItem = item || '';
      return JSON.parse(parseItem);
    } catch (e) {
      return null;
    }
  };
  storage.remove = (key) => localStorage.removeItem(key);
} catch (e) {
  storage.set = Cookie.set;
  storage.get = Cookie.get;
  storage.remove = Cookie.remove;
}

export default storage;
