import { useState } from 'react'
import InputBox from './components/inputBox'
import useCurrencyInfo from './hook/CurrencyInfo'


function App() {

    const [amount, setamount] = useState(1)
    const [resAmount, setResAmount] = useState(0)
    const [from, setFrom] = useState('USD')
    const [to, setTo] = useState('INR')

    const currencyInfo = useCurrencyInfo(from)
    // console.log("Currency Info:", currencyInfo);
    // console.log("To Currency:", to);
    // console.log("Conversion Rate for 'to':", currencyInfo[to]);

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setResAmount(amount)
        setamount(resAmount)
    }
    const convert = () => {
        // console.log("Amount:", amount);
        // console.log("Conversion Rate:", currencyInfo[to]);
        // console.log("Result:", amount * currencyInfo[to]);
       
        setResAmount(amount * currencyInfo[to]);
         
    }



    const BackgroundImage = 'https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&w=10000'
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={(amount) => setamount(amount)}
                                currencyOptions={options}
                                selectCurrency={from}
                                onCurrencyChange={(currency) => setFrom(currency.toUpperCase())}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}    >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={resAmount}
                                currencyOptions={options}
                                selectCurrency={to}
                                onCurrencyChange={(currency) => (setTo(currency.toUpperCase()))}
                                amountDisabled={true}
                                

                            />
                        </div>
                        <button type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                            onClick={convert}>
                            Convert {from} to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
