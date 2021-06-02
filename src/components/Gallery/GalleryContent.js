import axios from 'axios';
import React from 'react';

const GalleryContent = ({ hamster}) => {

    function deleteHamster() {
        axios.delete(`/hamsters/${hamster.id}`)
            .then(response => console.log(response));
            alert("Hamster Deleted Successfully")
    }

    return (

        <div
            // onClick={() => displayDetails(hamster)}
            className="gallery-content">
            <h3>{hamster.name}</h3>
            <img
                src={`/img/${hamster.imgName}`}
                alt=""
            />
            <div className = "hamster-details">
                    <ul>
                        <li>Loves : {hamster.loves}</li>
                        <li>{hamster.name} is {hamster.age} years old</li>
                        <li>Favorite Food : {hamster.favFood}</li>
                    </ul>
                <div id="erase-btn" onClick={() => deleteHamster()}>
                    <button>Delete {hamster.name}</button>
                </div>
            </div>

        </div>



        
    );
};

export default GalleryContent;



// const [selectedItem, setSelectedItem] = useState("");

    // function changeSelected() {
    //     if (selectedItem){
    //         setSelectedItem("");
    //     }else{
    //         setSelectedItem(hamster.id);
    //     }
    // }

    // const showDetails = (
    //     <div>
    //         <ul>
    //             <li>Ålder: {hamster.age}</li>
    //             <li>Favoritmat: {hamster.favFood}</li>
    //             <li>Älskar att: {hamster.loves}</li>
    //             <li>wins: {hamster.wins} games {hamster.games} defeats {hamster.defeats}</li>
    //         </ul>
    //     </div>
    // )

    //     <div onMouseEnter={changeSelected} onMouseLeave={changeSelected} className="gallery-item">
        //     {selectedItem ? <div >
        //         <strong>{hamster.name}</strong>
        //     </div> : <img
        //             src={`http://localhost:2000/img/${hamster.imgName}`}
        //         alt="hamster"
        //         height="100px" />}
        //     <div >{selectedItem
        //         ? showDetails 
        //         : <span></span>
        //     }</div>
        // </div>