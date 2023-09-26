import PropTypes from 'prop-types'
const PreDonatedCard = ({ donationData }) => {
    console.log(donationData);
    const { id, thumbnail, category, title, donationAmount, colors } = donationData;
    const { cardBg, categoryBg, textColorAndButtonBg } = colors;

    return (
        <div className="flex flex-col md:flex-row rounded-lg" style={{ backgroundColor: cardBg }}>
            <div>
                <img className="h-[200px] md:h-full w-full md:w-[250px] rounded-s-lg" src={thumbnail} alt="" />
            </div>
            <div className="p-5">
                <span className="px-2 py-1 rounded" style={{ backgroundColor: categoryBg, color: textColorAndButtonBg }}>{category}</span>
                <h2 className="my-2 font-bold text-2xl">{title}</h2>
                <p className="font-semibold" style={{ color: textColorAndButtonBg }}>${donationAmount}.00</p>
                <button className="mt-4 px-4 py-2 rounded font-semibold text-lg text-white" style={{ backgroundColor: textColorAndButtonBg }}>View Details</button>
            </div>
        </div>
    );
};
PreDonatedCard.propTypes = {
    donationData: PropTypes.object.isRequired
};
export default PreDonatedCard;