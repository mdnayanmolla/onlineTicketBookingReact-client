import basImg from '../../../assets/bus.svg'
import supportImg from '../../../assets/support.svg'
import drivesImg from '../../../assets/drives.svg'
import tracking from '../../../assets/tracking.svg'


const WhyChoose = () => {
    return (
        <div className="bg-[#ffc107] px-[2%] py-6">
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white px-4 py-4 rounded"> 
                  <img src={basImg} alt="" />
                  <h4 className="text-sm font-bold py-2">Safe And Hygenic <br></br>Vehicles</h4>
                </div>
                <div className="bg-white px-4 py-4 rounded"> 
                <img src={supportImg} alt="" />
                    <h4 className="text-sm font-bold py-2">Best Customer <br></br> Support</h4> 
                </div>
                <div className="bg-white px-4 py-4 rounded"> 
                <img src={tracking} alt="" />
                    <h4 className="text-sm font-bold py-2">Live Tracking Your <br></br> Journey</h4>    
                </div>
                <div className="bg-white px-4 py-4 rounded"> 
                <img src={drivesImg} alt="" />
                    <h4 className="text-sm font-bold py-2">Verified Drivers <br></br>and Vehicles</h4>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;