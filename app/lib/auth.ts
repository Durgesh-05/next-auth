import CredentialsProvider from 'next-auth/providers/credentials';

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Email',
          type: 'text',
          placeholder: 'johndoe@email.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '**********',
        },
      },
      async authorize(credentials: any) {
        return {
          id: '1',
          name: 'Durgesh Dubey',
          email: 'durgesh.d1805@gmail.com',
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({ session, token, user }: any) => {
      if (session && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};
