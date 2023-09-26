
const DonationCard = ({donation}) => {
    const {thumbnail, category, title, colors} = donation;
    const {cardBg, categoryBg, textColorOrButtonBg} = colors;
    return (
        <div className={"rounded-lg"} style={{backgroundColor : cardBg}}>
            <img className="h-[200px] w-full" src={thumbnail} alt="" />
            <div className="p-4">
                <span className="font-medium px-2 py-1 rounded" style={{backgroundColor : categoryBg}}>{category}</span>
                <h2 className="mt-2 font-semibold text-xl" style={{color : textColorOrButtonBg}}>{title}</h2>
            </div>
        </div>
    );
};

export default DonationCard;