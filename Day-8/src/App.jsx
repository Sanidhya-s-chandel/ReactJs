import React, { useState } from 'react'
import BackgroundImage from './assets/bg.jpg'
import { InputBox } from './Components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo'


const App = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("inr")
  const [to, setTo] = useState("usd")
  const [convertedAmount, SetConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const currencyOptions = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    SetConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => { SetConvertedAmount(amount * currencyInfo[to]) }

  return (
    <div style={{ backgroundImage: `url('${ BackgroundImage }')` }} className='h-screen w-full bg-cover bg-no-repeat bg-center'>
      <div className='h-full w-full bg-black/60 flex items-center justify-center'>
        <div className='h-[65%] w-[60%] flex items-center justify-center bg-white/30 rounded-3xl border-4 border-white p-6'>
          <form onSubmit={(e) => { e.preventDefault(); convert() }} className='w-full h-[75%]'>
            <div className="w-full mb-2">
              <InputBox label="From" amount={amount} currencyOptions={currencyOptions} selectCurrency={from} onAmountChange={(amount)=> setAmount(amount)} onCurrencyChange={(curr)=> setFrom(curr)}/>
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-center uppercase font-medium border-2 border-black rounded-md bg-blue-600 hover:cursor-pointer text-white px-8 py-2 active:scale-95 transition-transform duration-150"
              >
                swap <i class="ri-arrow-up-down-line"></i>
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To" amount={convertedAmount} currencyOptions={currencyOptions} amountDisabled selectCurrency={to} onCurrencyChange={(curr)=> setTo(curr)} />
            </div>
            <button type="submit" className="w-full font-semibold hover:cursor-pointer border-2 border-black text-2xl bg-blue-600 text-white uppercase px-4 py-3 rounded-lg active:scale-95 transition-transform duration-150">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App;