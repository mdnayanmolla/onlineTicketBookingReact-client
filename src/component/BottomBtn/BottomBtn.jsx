import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const BottomBtn = ({title}) => {
    return (
        <div>
            <Link to='/home' type="submit" className='mt text-sm bg-[#dc3545]   rounded-md text-center w-full text-white py-3 hover:bg-[#c82333] duration-500'>{title} </Link>
        </div>
    );
};
BottomBtn.propTypes = {
    title: PropTypes.object
}
export default BottomBtn;