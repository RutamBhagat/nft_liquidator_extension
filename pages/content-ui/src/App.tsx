import { Button } from '@extension/ui';
import { exampleThemeStorage } from '@extension/storage';
import { useEffect } from 'react';
import { useStorage } from '@extension/shared';

export default function App() {
  const theme = useStorage(exampleThemeStorage);

  useEffect(() => {
    console.log('content ui loaded');
  }, []);

  return <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"></div>;
}
