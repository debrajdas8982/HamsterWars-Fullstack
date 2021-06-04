import axios from 'axios';
import React, { useState } from 'react';

const InputForm = ({ alert, alertMessage }) => {

    const [hamsterName, setHamstername] = useState("hamster")
    const [newHamster, setNewHamster] = useState({
        name: "",
        age: "",
        favFood: "",
        loves: "",
        imgName: ""
    })
    const [nameTouched, setNameTouched] = useState(false)
    const [ageTouched, setAgeTouched] = useState(false)
    const [loveTouched, setLoveTouched] = useState(false)
    const [foodTouched, setFoodTouched] = useState(false)
    const [imgTouched, setImgTouched] = useState(false)

    function addHamster(event) {
        event.preventDefault();
        let newHamsterCopy = newHamster;
        try {
            newHamsterCopy.age = parseInt((newHamsterCopy.age) ,10 )
            console.log(newHamsterCopy);
        } catch (error) {
            console.log(error.message);
        }

        axios.post("/hamsters", newHamsterCopy)
            .then(response => {
                console.log(response.data); setAlert();
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response);
                }
            });
           
    }
    function setAlert() {
        alertMessage(`${newHamster.name} Insert in Database. Welcome ${newHamster.name}`)
        alert(true)
    }
    function showName(evt) {
        if (evt.target.value) {
            setHamstername(evt.target.value)
        } else (setHamstername("hamster"))
    }


    const handleChange = e => {
        const { name, value } = e.target;
        setNewHamster({
            ...newHamster,
            [name]: value
        });
        
    };

    function checkURL(url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

    let nameIsValid = true
    let nameErrorMessage = ''
    if (newHamster.name === '') {
        nameIsValid = false
        nameErrorMessage = 'Please type a name.'
    }
    let nameClass = ''
    if (nameTouched) {
        nameClass = (nameIsValid ? 'valid' : 'error')
    }

    // let allowedAgeCharacters = "0123456789"
    let ageIsValid = true
    let ageErrorMessage = ''

    if (newHamster.age === "") {
        ageIsValid = false
        ageErrorMessage = 'Please type a valid age.'

    }
    // else if (!newHamster.age.split('').every(char => allowedAgeCharacters.includes(char)) ) {
    //     ageIsValid = false
    //     ageErrorMessage = 'Please use numbers only'
    // }
    let ageClass = ''
    if (ageTouched) {
        ageClass = (ageIsValid ? 'valid' : 'error')
    }

    let loveIsValid = true
    let loveErrorMessage = ''
    if (newHamster.loves === '') {
        loveIsValid = false
        loveErrorMessage = 'Please fill something hamster loves.'
    }
    let loveClass = ''
    if (loveTouched) {
        loveClass = (loveIsValid ? 'valid' : 'error')
    }

    let foodIsValid = true
    let foodErrorMessage = ''
    if (newHamster.favFood === '') {
        foodIsValid = false
        foodErrorMessage = 'Fill something what hamster loves to eat.'
    }
    let foodClass = ''
    if (foodTouched) {
        foodClass = (foodIsValid ? 'valid' : 'error')
    }

    let imgIsValid = true
    let imgErrorMessage = ''
    if (newHamster.imgName === '') {
        imgIsValid = false
        imgErrorMessage = 'Please enter a image name'
    } else if (checkURL(newHamster.imgName) === false) {
        imgIsValid = false;
        imgErrorMessage = "link must me ends with .jpeg / .jpg / .png or .gif"
    }

    let imgClass = ''
    if (imgTouched) {
        imgClass = (imgIsValid ? 'valid' : 'error')
    }

    let formIsInvalid = !nameIsValid || !ageIsValid || !foodIsValid || !loveIsValid || !imgIsValid
    return (
        <div className="input-form">
            {newHamster.imgName
                ? <div className="img-holder">
                    <img
                        src={newHamster.imgName} alt="hamster" />
                </div> : <div className="img-holder"><img
                    src="/img/front-cover.jpg" alt="hamster" /></div>}

            <div className="row">
                <div className="input-fields">
                    <label htmlFor="name">Name:
                <input
                            className={nameClass}
                            value={newHamster.name}
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleChange}
                            onBlur={(evt) => { showName(evt); setNameTouched(true); }}
                        />
                    </label>
                    <label htmlFor="age">Age:
                <input
                            className={ageClass}
                            type="number"
                            name="age"
                            id="age"
                            onBlur={() => setAgeTouched(true)}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="loves">Loves:
                <input
                            className={loveClass}
                            type="text"
                            name="loves"
                            id="loves"
                            onChange={handleChange}
                            onBlur={() => setLoveTouched(true)}
                        />
                    </label>


                </div>

                <div className="input-fields">

                    <label htmlFor="favFood">Favorite Food:
                <input
                            className={foodClass}
                            type="text"
                            name="favFood"
                            id="favFood"
                            onChange={handleChange}
                            onBlur={() => setFoodTouched(true)}
                        />
                    </label>

                    <label htmlFor="image-link">Image-url:
                <input
                            className={imgClass}
                            type="url"
                            name="imgName"
                            id="imgName"
                            onChange={handleChange}
                            onBlur={() => setImgTouched(true)} />
                    </label>

                </div>
            </div>
            {nameTouched ? <div className="message"> {nameErrorMessage} </div> : null}
            {ageTouched ? <div className="message"> {ageErrorMessage} </div> : null}
            {loveTouched ? <div className="message"> {loveErrorMessage} </div> : null}
            {foodTouched ? <div className="message"> {foodErrorMessage} </div> : null}
            {imgTouched ? <div className="message"> {imgErrorMessage} </div> : null}
            <button
                onClick={addHamster}
                disabled={formIsInvalid}>
                {`Add ${hamsterName}`}
            </button>
        </div>
    );
};

export default InputForm;