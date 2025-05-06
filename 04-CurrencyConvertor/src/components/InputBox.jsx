import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    selectCurrency = 'usd',
    onCurrencyChange,
    currencyOptions = [],
    amountDisabled = false,
    
}) {

    const ID=useId('')

    // console.log(currencyOptions);
    

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label 
                htmlFor={ID}  
                className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    id= {ID}
                    value={amount}
                    onChange={(e)=> (onAmountChange(e.target.value))}
                    disabled={amountDisabled}

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => (onCurrencyChange(e.target.value))}
                >
                    
                    {currencyOptions.map((currency,idx)=>(
                        <option key={idx} value={currency}>
                            {currency}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox