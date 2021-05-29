import React from 'react';

const FrontPage = () => {
    return (
        <div className = "front-page">
            <section className ="left-side">
            <h1>WELCOME TO HAMSTERS HOMEPAGE</h1>
            <p>Take a tour to visit the most adorable hamster</p>
            <p>Take your responsibility to vote the most adorable hamster. In every battle you can vote the most adorable hamster that you like the most.</p>
            <p>In the gallery page you can see all the hamster and see detailed information about it by clicking on it. You can add a hamster and also you can delete the hamster from the gallery.</p>
            </section>
            <section className ="right-side">
            <img src="/img/front-cover.jpg" alt="" />
            
            </section>
        </div>
    );
};

export default FrontPage;