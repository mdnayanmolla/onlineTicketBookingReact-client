import offerImg1 from '../../../assets/offer.jpg'
import offerImg2 from '../../../assets/offer2.jpg'
import offerImg3 from '../../../assets/offer3.jpg'
import offerImg4 from '../../../assets/offer4.jpg'

const Offer = () => {
    return (
        <div className="px-[2%] bg-white"> 
            <h4 className="text-sm font-bold text-center py-4">Bus Discount For You</h4>
            <div className="grid grid-cols-2 gap-5 ">
                <div className='rounded'>
                    <img src={offerImg1} alt="" className='rounded' />
                </div>
                <div className='rounded'>
                    <img src={offerImg2} alt="" className='rounded'/>
                </div>
                <div className='rounded'>
                    <img src={offerImg3} alt="" className='rounded' />
                </div>
                <div className='rounded'>
                    <img src={offerImg4} alt="" className='rounded' />
                </div>
            </div>
        </div>
    );
};

export default Offer;