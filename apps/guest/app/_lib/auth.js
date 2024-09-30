import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const users = [
          {
            id: 1,
            name: "Luffy",
            email: "luffy@strawhatpirates.org",
            password: "iloveadventure",
            image: "https://avatarfiles.alphacoders.com/375/375473.jpeg",
          },
        ];

        const user = users.find((user) => user.email === credentials.email);

        if (!user || user.password !== credentials.password) return null;

        return user;
      },
    }),
  ],
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        const existingGuest = await getGuest(user.email);

        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
