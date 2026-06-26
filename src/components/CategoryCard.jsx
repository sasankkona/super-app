function CategoryCard({cat, isSelected, onClick}) {
    return(
        <div onClick={onClick} className={`relative overflow-hidden rounded-xl p-4 cursor-pointer transition-transform hover:scale-105 h-40 flex flex-col justify-between ${isSelected?'border-4 border-brandGreen':''}`}>
            <h3 className="font-bold text-xl drop-shadow-md">{cat.id}</h3>
            <img src={cat.image} alt={cat.id} className="absolute bottom-0 right-0 w-full h-2/3 object-cover rounded--tl-xl opacity-90"/>
        </div>
    );
}

export default CategoryCard;