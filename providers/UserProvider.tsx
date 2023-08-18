'use client'

import { MyUserContextProvider } from '@/hooks/useUser'

interface MyUserProviderProps {
  children: React.ReactNode
}

const UserProvider: React.FC<MyUserProviderProps> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>
}

export default UserProvider
