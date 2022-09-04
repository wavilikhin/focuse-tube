import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';

const Home: NextPage = () => {
    const { data: session, status } = useSession();

    useEffect(() => {
        console.debug(status);
    }, [status]);

    return (
        <div>
            {session ? (
                <>
                    <p>You are logged in as {session.user?.email}</p>
                    <button onClick={() => signOut()}> Sign Out</button>
                </>
            ) : (
                <>
                    <p>Who are you?</p>
                    <button
                        style={{ backgroundColor: 'lightgrey' }}
                        onClick={() => signIn()}>
                        {' '}
                        Sign In
                    </button>
                </>
            )}
        </div>
    );
};

export default Home;
