import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { useStore } from "../store/useStore";
import CategoryCard from "../components/CategoryCard";
import "../App.css"

const CATE = [
    {id:"Action", color: "#ff5209", image:"../assets/action.png"},
    {id: "Drama", color: "#d7a4ff", image: "../assets/drama.png"},
    {id: "Romance", color: "#148a08", image: "../assets/romance.png"},
    {id: "Thriller", color: "#84c2ff", image: "../assets/thriller.png"},
    {id: "Western", color: "#902500", image: "../assets/western.png"},
    {id: "Horror", color: "#7358ff", image: "../assets/horror.png"},
    {id: "Fantasy", color: "#ff4ade", image: "../assets/fantasy.png"},
    {id: "Music", color: "#e61e32", image: "../assets/music.png"},
    {id: "Fiction", color: "#6cd061", image: "../assets/fiction.png"}
];

function Categories() {
    const [selected,setSelected] = useState([]);
    const navigate = useNavigate();
    const setGCategories = useStore((state)=>state.setCategories);

    const toggleCategory = (id) => {
        if(selected.includes(id)) {
            setSelected(selected.filter((item)=>item!==id));
        }
        else {
            setSelected([...selected,id]);
        }
    }

    const handleNext = () => {
        if(selected.length>=3) {
            setGCategories(selected);
            navigate("/dashboard");
        }
    }

    return(
        <div className="min-h-screen bg-darkBg text-white p-8 md:p-16 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3 flex flex-col justify-content">
                <h2 className="nice mb-4 text-5xl">Super app</h2>
                <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Choose your<br/>entertainment<br/>category</h1>
                <div className="flex flex-wrap gap-4 mb-4">
                    {selected.map((itemcategory)=>(
                        <div key={itemcategory} className="itemcategory text-black px-4 py-2 rounded-full gap-2 font-medium">
                            {itemcategory} <span onClick={()=>toggleCategory(itemcategory)} className="cursor-pointer text-black hover:text-red-700 font-bold">X</span>
                        </div>
                    ))}
                </div>
                {selected.length < 3 && <p className="text-red-500 font-medium">⚠️ Minimum 3 category required</p>}
            </div>
            <div className="md:w-2/3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {CATE.map((itemcategory)=>(
                        <CategoryCard key={itemcategory.id} cat={itemcategory} isSelected={selected.includes(itemcategory.id)} onClick={()=>toggleCategory(itemcategory.id)}/>
                    ))}
                </div>
                <div className="flex justify-end mt-12">
                    <button onClick={handleNext} className={`px-8 py-2 rounded-full font-bold transition-colors ${selected.length>=3?'bg-brandGreen text-black hover:bg-green-400':'bg-gray-600 text-gray-400 cursor-not-allowed'}`}>Next Page</button>
                </div>
            </div>
        </div>
    )
}

export default Categories;