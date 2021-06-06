import axios from 'axios';
import React, { useEffect, useState } from 'react';

const WinList = ({loser}) => {

    const [name, setName] = useState("")
    useEffect(() => {
        function getLoser(){
            axios.get(`hamsters/${loser}`)
            .then(response => setName(response.data.name))
            .catch(function (error) {
                setName("");
                console.log(error);
            })
        }
        getLoser()
    }, [loser])
    return (
        <div>
           <span>
            {name ? <span className="won-over">{name}</span> : null}
        </span> 
        </div>
    );
};

export default WinList;