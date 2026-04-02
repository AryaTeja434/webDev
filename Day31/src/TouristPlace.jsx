
function Touristplace(props){
    return (
        <>
            <div className="flex flex-col w-62 p-2 text-center text-neutral-700 border border-neutral-200 rounded-xl m-5">
                <div className="flex relative">
                    <img src={props.img} alt="" className="h-62 w-62 object-cover rounded-xl" />
                    {(props.price <= 12000) && <p className="absolute bottom-1 right-1 px-2 bg-green-400 text-white rounded-full">Cheaper</p>}
                </div>
                <h1 className="font-semibold text-center text-2xl">{props.name}</h1>
                <p className="text-center">{props.desc}</p>
                <p className="italic border-2 mx-4 bg-orange-400 text-white rounded-full">{props.season} favourite</p>
                <div className="flex justify-between italic mx-1">
                    <p>Cost: Rs {props.price}</p>
                    <p>ratings: {props.ratings}</p>
                </div>
            </div>
        </>
    )
}

export default Touristplace;