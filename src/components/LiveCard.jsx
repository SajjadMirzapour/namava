export default function LiveCard({ name, image, detail, time }) {
    return (
        <div className="container text-[rgb(255,255,255)] text-[10px] md:text-[14px]">
            <a href="#">
                <img className="rounded" src={image} alt="#" />
                <div className="bg-[#222327] p-3 rounded">
                    <div className="mb-2">{name}</div>
                    <div className="mb-2 last:mb-0">{detail}</div>
                    <div className="mb-2 last:mb-0">{time}</div>
                </div>
            </a>
        </div>
    )
}