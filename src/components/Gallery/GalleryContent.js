import React from 'react';

const GalleryContent = ({ hamster, displayDetails }) => {

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


    return (

        <div
            onClick={() => displayDetails(hamster)}
            className="gallery-content">
            <h3>{hamster.name}</h3>
            <img
                src={` /img/${hamster.imgName}`}
                alt=""
            />

        </div>



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
    );
};

export default GalleryContent;