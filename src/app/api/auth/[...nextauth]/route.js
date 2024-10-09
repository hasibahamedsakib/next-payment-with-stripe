import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import jwt from 'jsonwebtoken'


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    session: {
        strategy: "jwt",
      },
      jwt: {
        encryption: false, // Ensure encryption is disabled if you don't need it
      },
      secret: process.env.NEXTAUTH_SECRET,
      callbacks: {
        async signIn({ user, account, profile }) {
          try {
            await connectDB();
    
            // Split full name into firstName and lastName
            const [firstName, ...lastNameParts] = user.name.split(' ');
            const lastName = lastNameParts.join(' ');
    
            // Check if user already exists
            const existingUser = await User.findOne({ email: user.email });
    
            if (!existingUser) {
              // Insert new user
              await User.create({
                firstName,
                lastName,
                email: user.email,
                provider: account?.provider,
                profileImg: user.image, // Use user.image as profileImg
              });
            }
    
            return true; // Continue the sign-in process
          } catch (error) {
            console.error("Error saving user to database", error);
            return false; // Block sign-in
          }
        },
    
        async session({ session, token }) {
          session.user.id = token.sub; // Add user ID to session
          session.user.profileImg = token.profileImg; // Add profileImg to session
          return session;
        },
    
        async jwt({ token, user, account, profile }) {
            if (user) {
                token.firstName = user.name?.split(' ')[0];
                token.lastName = user.name?.split(' ').slice(1).join(' ');
                token.profileImg = user.image;
              }
              return token;
        },
      },
      cookies: {
        sessionToken: {
          name: `next-auth.session-token`,
          options: {
            httpOnly: true,
            sameSite: 'lax',
            path: '/',
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
          },
        },
      },
})

export { handler as GET, handler as POST }