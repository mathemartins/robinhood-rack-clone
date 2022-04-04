import {createContext, useState, useEffect} from 'react';
import {useMoralis} from 'react-moralis'

export const RobinhoodContext = createContext();

export const RobinhoodProvider = function({children}) {

    const [currentAccount, setCurrentAccount] = useState('')
    const [formattedAccount, setFormattedAccount] = useState('')
    
    const {
        isAuthenticated, authenticate, user, logout, Moralis, enableWeb3
    } = useMoralis()

    useEffect(function(){
        if(isAuthenticated){
          const account = user.get('ethAddress');
          let formatAccount = account.slice(0, 3) + '..' + account.slice(-3)
          setFormattedAccount(formatAccount)
          setCurrentAccount(account)
        }
      }, [isAuthenticated, enableWeb3])

    useEffect(function(){
        if(!currentAccount)return;
        (async function(){
            const response = await fetch('/api/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    walletAddress: currentAccount,
                })
            })
            const data = await response.json()
        })
    }, [currentAccount])
    
    const connectWallet = function() {
        authenticate();
    }

    const signOut = function() {
        logout()
    }

    return (
        <RobinhoodContext.Provider value={{
            connectWallet, signOut, currentAccount, isAuthenticated, formattedAccount
        }}>
            {children}
        </RobinhoodContext.Provider>
    )
}