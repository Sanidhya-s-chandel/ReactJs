import React, { useId } from 'react'

const InputBox = ({ label, amount, onAmountChange, onCurrencyChange, amountDisabled = false, currencyDisable = false, currencyOptions = [], selectCurrency = "usd", className = "" }) => {
    const amountInputId = useId()

    return (
        <div className={`w-full h-1/4 flex justify-between rounded-2xl p-8 bg-amber-100 ${ className }`}>
            <div className='w-1/2 flex flex-col'>
                <label htmlFor={amountInputId} className='text-black/50 font-semibold text-lg mb-2 inline-block'>{label}</label>
                <input id={amountInputId} className="outline-none hover:border-yellow-600 focus:border-green-600 border-2 rounded-xl p-2 w-1/2 bg-gray-100 py-1.5" type="number" placeholder='Amount' disabled={amountDisabled} value={amount === 0 ? '' : amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <h1 className="text-black/50 font-semibold text-lg mb-2 w-full">Currency Type</h1>
                <select className="rounded-lg hover:border-yellow-600 focus:border-green-600 px-8 font-semibold uppercase py-2 border-2 bg-gray-100 cursor-pointer outline-none" onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable} value={selectCurrency}>
                    {currencyOptions.map((e) => {
                        return (
                            <option key={e} value={e}>
                                {e}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default InputBox