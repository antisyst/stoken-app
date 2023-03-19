import './actionpath.scss';
import { useContext } from 'react';
import React from 'react';
import Loader from '../loader/loader';
import { useEffect } from 'react';
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { FaEthereum } from 'react-icons/fa'
import { TransactionContext } from '../../context/TransactionContext';

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      min="0"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className='custom-input-column-element custom-cursor-pointer-element'
    />
  );

const ActionPath = () => {
    const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

    

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;
    
        e.preventDefault();
    
        if (!addressTo || !amount || !keyword || !message) return;
    
        sendTransaction();
      };
    
     

        
    return(
        <div className='transaction-action-full-router-context flex-column justify-center align-center fadeInDown'>
          <div className='action-form-align-container flex-column justify-center align-center'>
              <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
              <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
              <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
              <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

              <div className='field-bottom-like-border-transaction'/>
              { isLoading ? (
                  <Loader/>
              ) : (
                  <button type='button' className='transaction-last-step-custom-button font-chakra font-bold custom-cursor-pointer-element' id='action-success'     onClick={handleSubmit}>
                      Send Now
                  </button>
              ) }
            </div>
        </div>
    )
}

export default ActionPath;