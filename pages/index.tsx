import {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import { useState } from 'react';

const connection = new Connection('https://api.devnet.solana.com');

export default function Home() {
  const [keypair, setKeypair] = useState<Keypair>();
  const [solAddress, setSolAddress] = useState<string>('');
  const [solAmount, setSolAmount] = useState<number>(0);

  const generateKeyPair = () => {};

  const airdropSOL = async () => {};

  const sendSOL = async (amount: number) => {};

  const refreshBalance = async () => {
    if (!keypair) return;
    const newBalance = await connection.getBalance(keypair.publicKey);
    setSolAmount(newBalance / LAMPORTS_PER_SOL);
  };

  return (
    <div className='flex items-center justify-center p-5'>
      <div className='mt-10'>
        <button
          onClick={generateKeyPair}
          className='mt-5 btn btn-primary w-full'
        >
          Generate Key Pair
        </button>
        <button onClick={airdropSOL} className='mt-5 btn btn-primary w-full'>
          Airdrop SOL
        </button>
        <input
          type='text'
          placeholder='Enter SOL Adress'
          className='input input-bordered input-primary w-full  mt-5'
          onChange={(e) => setSolAddress(e.target.value)}
        />
        <button
          onClick={() => sendSOL(0.5)}
          className='btn btn-primary w-full mt-5'
        >
          Send SOL to Address
        </button>
        <button
          onClick={refreshBalance}
          className='btn btn-primary w-full mt-5'
        >
          Refresh Balance
        </button>

        {keypair && (
          <div className='mt-10'>
            <h1>Public Key: {keypair.publicKey.toBase58()}</h1>
            <h1>Solana Amount: {solAmount}</h1>
          </div>
        )}
      </div>
    </div>
  );
}
