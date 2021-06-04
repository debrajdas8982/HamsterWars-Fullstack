import React, { useEffect, useState } from 'react';
import GalleryContent from './GalleryContent';
import InputForm from './InputForm';
import Notification from './Notification';

const Gallery = ({hamsterList, update}) => {
 
    const [alertChange, setAlertChange] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    useEffect(() => {
        const start = Date.now()
        update(start)
    }, [alertMessage]);

    

   
    return (
    <div className = "gallery">

        <div className = "gallery-object">
            {alertChange
                    ? <Notification alert={setAlertChange} text={alertMessage} />
                    : null}

             {hamsterList.map((hamster) =>
                    <GalleryContent
                        key={hamster.id}
                        hamster={hamster}    
                        alert={setAlertChange}
                        alertMessage={setAlertMessage}    
                    />
                )}
        </div>

                <div className="display-details">
                    <h1>Please Insert a Hamster</h1>
                <InputForm alert={setAlertChange}
                    alertMessage={setAlertMessage}>
                </InputForm>
                   
                </div>
       

        </div>
    );
};

export default Gallery;