import React from 'react';
import GalleryContent from './GalleryContent';

const Gallery = ({hamsterList}) => {

   
    return (
    <div className = "gallery">

        <div className = "gallery-object">
             {hamsterList.map((hamster) =>
                    <GalleryContent
                        key={hamster.id}
                        hamster={hamster}
                        
                    />
                )}
        </div>

                <div className="display-details">
                    <h1>GALLERY</h1>
                    {/* <ul>
                        <li>Loves : {selectedItem.loves}</li>
                        <li>{selectedItem.name} is {selectedItem.age} years old</li>
                        <li>Favorite Food : {selectedItem.favFood}</li>
                    </ul> */}
                   
                </div>
       

        </div>
    );
};

export default Gallery;