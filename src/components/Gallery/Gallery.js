import React, { useState } from 'react';
import GalleryContent from './GalleryContent';

const Gallery = ({hamsterList}) => {

    const [selectedItem, setSelectedItem] = useState({})
    return (
    <div className = "gallery">

        <div className = "gallery-grid">
             {hamsterList.map((hamster) =>
                    <GalleryContent
                        key={hamster.id}
                        hamster={hamster}
                        displayDetails={setSelectedItem}
                    />
                )}
        </div>

                <div>
                    <h3>Det här är {selectedItem.name}!</h3>

                    <p>{selectedItem.name} är {selectedItem.age} år gammal och är en liten hamster som älskar att {selectedItem.loves}. Om {selectedItem.name} själv får välja så blir det {selectedItem.favFood} till middag.</p>
                </div>

        </div>
    );
};

export default Gallery;