import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnection from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
    CredentialsProvider({
      id: "credentials",
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await dbConnection();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordValid = await bcrypt.compare(
              credentials.password,
              user.password,
            );
            if (!isPasswordValid) {
              throw new Error("Incorrect credentials");
            }
            return user;
          } else {
            throw new Error("User not found");
          }
        } catch (e) {
          throw new Error(e.message);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
