import './services.scss';
import { MdOutlineSecurity } from 'react-icons/md';
import { AiFillThunderbolt } from 'react-icons/ai';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { SiBlockchaindotcom } from 'react-icons/si';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { FaSortAmountUpAlt } from 'react-icons/fa';
import { MotionAnimate } from 'react-motion-animate'
import { BiBitcoin } from 'react-icons/bi';
import { BiSupport } from 'react-icons/bi';

const Services = () => {
    return(
        <div className='text-center custom-services-component' id='‎'>
            <div className='flex-row justify-center align-center text-center flex-wrap custom-service-container' >
               <MotionAnimate reset={true}>
                    <div className='custom-service-container_item justify-start  flex-column bg-integration-back'>
                        <div className='color-advanced flex-row justify-start custom-ss-inline-port align-center'>
                            <MdOutlineSecurity/>
                            <h1 className='font-chakra font-bold'>security</h1>
                        </div>
                        <p className='color-advanced font-poppins font-bold text-left'>Secure your send with new fully encrypted technology.</p>
                    </div>
                </MotionAnimate>
               <MotionAnimate reset={true}>
                    <div className='custom-service-container_item justify-start flex-column bg-integration-back'>
                        <div className='color-advanced flex-row justify-start custom-ss-inline-port align-center'>
                            <AiFillThunderbolt/>
                            <h1 className='font-chakra font-bold'>fast</h1>
                        </div>
                        <p className='color-advanced font-poppins font-bold text-left'>Faster sending through improved system.</p>
                    </div>
                </MotionAnimate>
               <MotionAnimate reset={true}>
                    <div className='custom-service-container_item justify-start flex-column bg-integration-back'>
                        <div className='color-advanced flex-row justify-start custom-ss-inline-port align-center'>
                            <BsFillPersonCheckFill/>
                            <h1 className='font-chakra font-bold'>reliability</h1>
                        </div>
                        <p className='color-advanced font-poppins font-bold text-left'>Exactly reliable shipping and trust.</p>
                    </div>
                </MotionAnimate>
               <MotionAnimate reset={true}>
                    <div className='custom-service-container_item justify-start flex-column bg-integration-back'>
                        <div className='color-advanced flex-row justify-start custom-ss-inline-port align-center'>
                            <SiBlockchaindotcom/>
                            <h1 className='font-chakra font-bold'>generation</h1>
                        </div>
                        <p className='color-advanced font-poppins font-bold text-left'>Developed Cryptocurrencies sending system.</p>
                    </div>
                </MotionAnimate>
               <MotionAnimate reset={true}>
                    <div className='custom-service-container_item justify-start flex-column bg-integration-back'>
                        <div className='color-advanced flex-row justify-start custom-ss-inline-port align-center'>
                            <RiMoneyDollarCircleFill/>
                            <h1 className='font-chakra font-bold'>low fees</h1>
                        </div>
                        <p className='color-advanced font-poppins font-bold text-left'>Reduced fees at the time of sending.</p>
                    </div>
                </MotionAnimate>
               <MotionAnimate reset={true}>
                    <div className='custom-service-container_item justify-start flex-column bg-integration-back'>
                        <div className='color-advanced flex-row justify-start custom-ss-inline-port align-center'>
                            <FaSortAmountUpAlt/>
                            <h1 className='font-chakra font-bold'>unlimited</h1>
                        </div>
                        <p className='color-advanced font-poppins font-bold text-left'>Sending the amount you want.</p>
                    </div>
                </MotionAnimate>
               <MotionAnimate reset={true}>
                    <div className='custom-service-container_item justify-start flex-column bg-integration-back'>
                        <div className='color-advanced flex-row justify-start custom-ss-inline-port align-center'>
                            <BiBitcoin/>
                            <h1 className='font-chakra font-bold'>coins</h1>
                        </div>
                        <p className='color-advanced font-poppins font-bold text-left'>Sending many crypto and tokens.</p>
                    </div>
                </MotionAnimate>
               <MotionAnimate reset={true}>
                    <div className='custom-service-container_item justify-start flex-column bg-integration-back'>
                        <div className='color-advanced flex-row justify-start custom-ss-inline-port align-center'>
                            <BiSupport/>
                            <h1 className='font-chakra font-bold'>support</h1>
                        </div>
                        <p className='color-advanced font-poppins font-bold text-left'>7/24 support available.</p>
                    </div>
                </MotionAnimate>
            </div>
        </div>
    )
}

export default Services;