import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurreny = "usd",

    amountDisable = false,
    currencyDisable = false,
     className = "", 
}) {
   
 const amountInputId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  htmlFor={amountInputId} 
                className="text-black/40 mb-2 inline-block">

                    {label}

                </label>
                <input
                    id={amountInputId}

                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                     disabled={amountDisable}

                    value={amount}

                    onChange={ (e) =>                                          //i.e har input box pr ek onchannge value aana//
                        onAmmountChange &&                                             // ek checker h , i.e ye exist krta h ya nhi//
                        onAmmountChange(Number(e.target.value)                                     // JS kai br events k andr jo value h unko str format m leleti h ,so, number m wrap krdeege
                      ) }              
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurreny}
                    onChange={ (e) => {
                        onCurrencyChange &&           //may be onCurrencyChange m koi value hi na ho , so && lga k checker lga diya then , we know wo str m dega , but hume yaha pr no. m change krne ki jrurt ni kiuki wo already str format m hoga this time USD , .........
                        onCurrencyChange(e.target.value)
                         disabled={currencyDisable}
                    } }
                >

                    
                        {currencyOptions.map( (currency) => (                                            /* // har ek value milegi is cllback m and {} iske wjh se return krna pdega kuch so , we avoid this and instead this we give () // */           // & niche, ek component return kra//
                             <option key={currency} value= {currency}>                     
                            {currency}
                            </option>
                        ) )}      
                  
                </select>
            </div>
        </div>
    );
}

export default InputBox;
    

// * Imp Point//
// jab bhi Looop lgayge jsx m , to ek Key={} pass krni hi pdegi for performance. //
// agr performance laani h Looooop k andr , elements ko repeat krne k liye to * key={} pass krni hi chaiye. performance degrade ho jati h warna// 