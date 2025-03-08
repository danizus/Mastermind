'use client';

import { useEffect } from 'react';

export default function AosComponent() {
  useEffect(() => {
    import('aos').then((AOS) =>
      AOS.init({
        duration: 1000,
      })
    );
  }, []);

  return <></>;
}