import React, { useState } from 'react';
import GalleryContent from './GalleryContent';

const Gallery = ({hamsterList}) => {

    const [selectedItem, setSelectedItem] = useState({})
    return (
    <div className = "gallery">

        <div className = "gallery-object">
             {hamsterList.map((hamster) =>
                    <GalleryContent
                        key={hamster.id}
                        hamster={hamster}
                        displayDetails={setSelectedItem}
                    />
                )}
        </div>

                <div className="display-details">
                    <h2>This is {selectedItem.name}</h2>
                    <ul>
                        <li>Loves : {selectedItem.loves}</li>
                        <li>{selectedItem.name} is {selectedItem.age} years old</li>
                        <li>Favorite Food : {selectedItem.favFood}</li>
                    </ul>
                   
                </div>
       

        </div>
    );
};

export default Gallery;