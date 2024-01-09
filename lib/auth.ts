import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import client from '@/prisma/client'
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import prisma from "@/prisma/client"
import { compare } from "bcrypt"


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(client),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: "/login"
    },
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: "Username", type: "text", placeholder: "username"},
          password: { label: "Password", type: "password", placeholder: "password" }
        },
        async authorize(credentials, req) {

            if(!credentials?.username || !credentials.password){
                return null
            }
  
          const user = await prisma.user.findUnique({
            where: {username: credentials.username}
          })

          if(!user){
            throw new Error('User tidak ditemukan')
          } 
          if(credentials.password !== user?.password){
            throw new Error('Password tidak sesuai')
          }
          

          if (user) {
            return user
          }
          // Return null if user data could not be retrieved
          return null
        }
      })
    ],
    callbacks:{
        async jwt({token, user}){
            if(user){
                return {
                    ...token,
                    username: user.username,
                    role: user.role
                }
            }
            return token
        },
        async session({session, user, token}){
            return {
                ...session,
                user:{
                    ...session.user,
                    username: token.username,
                    role: token.role
                }
            }
        }
    }
  }