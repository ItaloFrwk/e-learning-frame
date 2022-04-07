import { useCallback, useState } from 'react';

import storage from './storage';

const useStorage = (key: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [state, setState] = useState<any>(() => storage.get(key));

  const set = useCallback(
    (newValue: string) => {
      storage.set(key, newValue);
      setState(newValue);
    },
    [key]
  );

  const remove = useCallback(() => {
    storage.remove(key);
    setState(undefined);
  }, [key]);

  return [state, set, remove];
};

export default useStorage;
