import React from 'react';

const styles = {
    inputAmount: 'w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-transparent mt-6 text-white placeholder:text-white',
    formContainer: 'flex items-center',
    select: 'w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-transparent mt-6 text-white placeholder:text-white',
    options: 'w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-black mt-6 text-white placeholder:text-white',
    noticeCTA: 'font-bold text-purple-500 cursor-pointer mt-5'
}

export default function BuyTokens() {
    return (
        <form className={styles.formContainer}>
            <div className='flex h-full w-full flex-col items-center'>
                <select className={styles.select}>
                    <option className={styles.options} >BTC</option>
                    <option className={styles.options} >ETH</option>
                    <option className={styles.options} >SOL</option>
                    <option className={styles.options} >USDC</option>
                </select>
                <input className={styles.inputAmount} placeholder='Amount..' type='text' />
                <button className={styles.noticeCTA} type='submit'>Send </button>
            </div>
        </form>
    )
}