// app/not-found.js
'use client';

import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen text-center">
      <div>
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-2">Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
        <Button
          onPress={() => router.push('/')}
          color="primary"
          className="mt-4"
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
}
