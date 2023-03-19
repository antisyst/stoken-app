import './showcase.scss';
import { motion } from "framer-motion";
import React from 'react';
import { MotionAnimate } from 'react-motion-animate'
import { AiTwotoneThunderbolt } from 'react-icons/ai'
import { useContext } from 'react';
import ShowBottom from '../../images/show-bottom';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { Link } from 'react-router-dom';
import { TransactionContext } from '../../context/TransactionContext';
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { useEffect } from 'react';


const Showcase = () => {
    const { currentAccount, connectWallet, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return(
        <div>
        <div className='bg-integration-black text-center custom-showcase-component flex-column justify-center'>
            <div className='flex-column justify-center justify-center align-center'>
                <MotionAnimate reset={true}>
                  <h1 className='color-advanced font-tilt custom-h1-component-showcase'><AiTwotoneThunderbolt className='inline-h1-svg-component_1'/>Send Crypto across the World<AiTwotoneThunderbolt className='inline-h1-svg-component_2'/></ h1>
                </MotionAnimate>
                <MotionAnimate reset={true}>
                <p className='color-advanced font-lexend custom-p-component-showcase font-bold text-center'>Explore New Crypto World. Discover the next generation in sending cryptocurrencies. Use the New Blockchain Technology.</p>
                </MotionAnimate>
                <MotionAnimate reset={true}>
                <div className='flex-row justify-center align-center custom-showcase-buttons'>
                {!currentAccount && (
                <button className='custom-cursor-pointer-element user-s-no' type="button"
                onClick={connectWallet} id='walletas'>Connect Wallet</button>
                )}
                   <Link to='/transaction'>Fast Send</Link>
                </div>
                <p className='color-advanced custom-showcase-bottom-element-warning font-bold'><IoMdInformationCircleOutline/>you only need to connect to the wallet once. No need to commit to the wallet a second time.</p>
                </MotionAnimate>
            </div>
        <ShowBottom/>
        </div>
            <h3 className='custom-showcase-h3-component color-advanced font-tilt'>Scroll Down</h3>
            </div>
    )
}

export default Showcase;