// src/hocs/withAuth.js
"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '@/auth';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
      const checkAuth = async () => {
        const session = await auth();
        if (session?.user) {
          setIsAuthenticated(true);
        } else {
          Router.replace('/sign-in');
        }
      };

      checkAuth();
    }, [Router]);

    if (isAuthenticated === null) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
