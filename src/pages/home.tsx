import type { NextPage } from 'next';

import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  console.info('user is logged in:', session);
  console.info('user is logged in:', session);

  return (
    <div>
      <h1>Home</h1>
      <p>status: {status}</p>
    </div>
  );
};

export default Home;
