import { useState } from 'react'
import { InputBox } from '../components'
import useCurrencyInfo from '../hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] =useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap  = () => {
    setTo(from)
    setFrom(to)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  

  return (
    <div className=' w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/1209982/pexels-photo-1209982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
    }}>
      
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form 
          onSubmit={(e)=>{
            e.preventDefault();
            convert()
          }}>
            <div className=' w-full mb-1'>
              <InputBox label="From"
              amount={amount}
              currencyOption={options}
              onCurrencyChange={(currency) => setAmount(amount)}
              onAmountChange={(amount) => setAmount(amount)}
              selectCurrency={from} />
            </div>
            <div className='relative w-full h-0.5'>
              <button type="button"
              className=' absolute left-1/2 -translate-x-1/2 translate-y-1/2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}>swap</button>
            </div>
            <div className=' w-full mt-1 mb-4'>
              <InputBox label="To"
              amount={convertedAmount}
              currencyOption={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={from}
              amountDisable/>
            </div>
            <button type="submit"
            className=' w-full bg-green-600 text-white px-4 py-4 rounded-lg'>convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
