import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
const DonationCard = ({donation}) => {
    const {id, thumbnail, category, title, colors} = donation;
    const {cardBg, categoryBg, textColorAndButtonBg} = colors;
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/${id}/details`)} className="rounded-lg cursor-pointer" style={{backgroundColor : cardBg}}>
            <img className="h-[200px] w-full" src={thumbnail} alt="" />
            <div className="p-4" style={{color : textColorAndButtonBg}}>
                <span className="font-medium px-2 py-1 rounded" style={{backgroundColor : categoryBg}}>{category}</span>
                <h3 className="mt-2 font-semibold text-xl">{title}</h3>
            </div>
        </div>
    );
};
DonationCard.propTypes = {
    donation : PropTypes.object.isRequired
};
export default DonationCard;