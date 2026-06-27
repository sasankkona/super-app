import React from "react";
import useStore from "../store/useStore";

function NotesWidget() {
    const {notes, setNotes} = useStore();
    
    return(
        <div className="bg-[#f1c75b] text-black w-full md:w-1/2 rounded-3xl p-6 shadow-lg flex flex-col">
            <h2 className="text-2xl font-bold mb-4">All notes</h2>
            <textarea placeholder="Type your notes here..." value={notes} className="w-full h-full bg-transparent resize-none focus:outline-none placeholder-gray-800" onChange={(event)=>setNotes(event.target.value)}/>
        </div>
    );
}

export default NotesWidget;