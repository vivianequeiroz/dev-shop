import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET_AUTH,

  session: {
    strategy: 'jwt',
  },

  jwt: {
    secret: process.env.SECRET_AUTH,
  },
});