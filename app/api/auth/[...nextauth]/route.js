
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// Crée un utilsiateur fictif

const user = { 
    id: 1,
    email: "ryan@gmail.com",
    name: "Ryan",
    lastName: "Smith",
    hashedPassword : "$2y$10$StsX04h/4UTFQiJKhh.J9Ohs7DAsXLLA7Gqplf6N/NA9kByAtWlEW",
    image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80"
}

// Credentials authorize

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          // Simulation de la vérfication du mot de passe
        throw new Error('Invalid credentials');
        } else if (!user || !user?.hashedPassword || credentials.email !== user.email || credentials.password !== "pass") {
            throw new Error('Invalid credentials');
        }

        return user;
      }
    })
  ],
  
  callbacks: {
    // Stocke les informations dans la session
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
        session.user.lastName = user.lastName;
        session.user.image = user.image;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 365 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };