import React from "react";


const Contact = () =>{
    return <section className="contact" id="contact">
        <p className="contact__title">Vous êtes intéressés par mon profil? Discutons de la manière de faire un beau travail ensemble</p>

        <form className="form">
            <div className="form__group" data-aos="zoom-in-right">
                <input type="text" className="form__field" required/>
                <label className="form__label">Prénom</label>
            </div>
            <div className="form__group" data-aos="zoom-in-right">
                <input type="text" className="form__field" required/>
                <label className="form__label">Sujet</label>
            </div>
            <div className="form__group" data-aos="zoom-in-right">
                <input type="text" className="form__field" required/>
                <label className="form__label">Email</label>
            </div>
            <div className="form__group" data-aos="zoom-in-right">
                <label className="form__label form__label--textarea">Message</label>
                <textarea type="text" rows="5" className="form__field form__group-fullBorder" required></textarea>
            </div>

            <button type="submit" className="form__submit" data-aos="zoom-in-right">Envoyer</button>
        </form>
    </section>
}

export default Contact;