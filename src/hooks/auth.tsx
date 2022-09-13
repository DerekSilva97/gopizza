import React, { 
    createContext,
    useContext,
    ReactNode,
    useState,
} from 'react';
import { Alert } from 'react-native';

import auth from '@react-native-firebase/auth';

type AuthContextData ={
    signIn: (email: string, password: string) => Promise<void>;
    isLogging: boolean;
}

type AuthProvideProps = {
    children: ReactNode;
}


export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children } : AuthProvideProps){

    const [ isLogging, setIsLogging] = useState(false);

    async function signIn(email: string, password: string){
        if (!email || !password){
            return Alert.alert('Login', 'Informe o e-mail ou a senha')
        }

        setIsLogging(true);

        auth().signInWithEmailAndPassword(email, password)
        .then(account => {
            console.log(account);
        })
        .catch( error => {
            const { code } = error;

            if(code === 'auth/user_not_found' || code === 'auth/wrong_passoword') {
                return Alert.alert('Login', 'E-mail e/ou senha inválida');
            }else {
                return Alert.alert('Login', 'Não foi possivel realizar o login');
            }
        })
        .finally(() =>  setIsLogging(false));
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            isLogging
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context  =  useContext(AuthContext);
    
    return context;
}

export {AuthProvider, useAuth};