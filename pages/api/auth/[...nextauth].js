import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare, hash } from 'bcrypt'
import { GraphQLClient, gql } from 'graphql-request'

const client = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
})

const GetUserByEmail = gql`
  query GetUserByEmail($email: String!) {
    user: nextUser(where: { email: $email }, stage: DRAFT) {
      id
      password
    }
  }
`

const CreateNextUserByEmail = gql`
  mutation CreateNextUserByEmail($email: String!, $password: String!) {
    newUser: createNextUser(data: { email: $email, password: $password }) {
      id
    }
  }
`

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'signin',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials

        // gets user from database
        const { user } = await client.request(GetUserByEmail, {
          email,
        })

        // if user does not exist, throw an error
        if (!user) {
          throw new Error('user does not exist')
        }

        // if user exists, check if password is valid
        const isValid = await compare(password, user.password)

        // if password is not valid, throw an error
        if (!isValid) {
          throw new Error('password is not valid')
        }

        // if password is valid, return user and token
        if (isValid) {
          return {
            user,
          }
        }
      },
    }),
    CredentialsProvider({
      id: 'signup',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials

        // gets user from database
        const { user } = await client.request(GetUserByEmail, {
          email,
        })

        // if user exists, throw an error
        if (user) {
          throw new Error('User already exists. Try again.')
        }

        // if user does not exist, create a new user
        if (!user) {
          const { newUser } = await client.request(CreateNextUserByEmail, {
            email,
            password: await hash(password, 12),
          })

          return {
            id: newUser.id,
            username: email,
            email,
          }
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
})
