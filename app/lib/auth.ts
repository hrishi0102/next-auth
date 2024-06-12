import CredentialsProvider from "next-auth/providers/credentials";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "johndoe@gmail.com",
        },
        password: { label: "Password", type: "password", placeholder: "123" },
      },
      async authorize(credentials: any) {
        return {
          id: "user1",
          name: "hrishi",
          email: "abc@123.com",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  //extra access to fields after auth
  callbacks: {
    //jwt not needed
    // jwt: async ({ user, token }: any) => {
    //   if (user) {
    //     token.uid = user.id;
    //   }
    //   return token;
    // },

    //session callback is useful to get access to userid
    session: ({ session, token, user }: any) => {
      if (session.user) {
        session.user.id = token.uid;
      }
      return session;
    },
  },
};
