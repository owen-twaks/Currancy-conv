import React from 'react'

/**we taking our valuble props in to our Objects*/
function CurrencyRow(props) {
  const {
      CurrencyOptions,
      selectedCurrency,
      onChangeCurrency,
      onChangeAmount,
      amount
  } = props
/* we put Onchange event for each and every one selecters */
    return (
        <div>
        <input type='mumber' className='input' value={amount} onChange={onChangeAmount}/>
        <select value={selectedCurrency}  onChange={ onChangeCurrency}>
            {CurrencyOptions.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
            <option value='Hi'>Hi</option>
        </select>
        </div>
    )  
}

export default CurrencyRow
