import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Auth, Hub } from 'aws-amplify';

interface IAwsProvider {
  user?: object;
}

const AwsProviderContext = createContext<IAwsProvider>({ user: undefined });

export interface AwsProviderProviderProps {
  children?: React.ReactElement;
}

export const AwsProvider: React.FC<AwsProviderProviderProps> = ({
  children,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<IAwsProvider>({ user: undefined });
  useEffect(() => {
    // const getUser = async () => {
    //   try {
    //     const userCV = await Auth.currentAuthenticatedUser();
    //     // console.log(userCV);
    //     setUser(userCV);
    //   } catch (e) {
    //     setUser({ user: undefined });
    //     console.log(e);
    //   }
    // };

    Hub.listen('auth', async ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          // getUser();
          break;
        case 'signOut':
          // setUser({ user: undefined });
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });
    // getUser();
  }, []);
  // console.log(user);
  return (
    <AwsProviderContext.Provider value={{ user: { ...user } }}>
      {children}
    </AwsProviderContext.Provider>
  );
};

export const useAuth = () => {
  const { user } = useContext(AwsProviderContext)!;
  console.log('ddđ', user);
  return useMemo(
    () => ({
      user,
    }),
    [user],
  );
};
