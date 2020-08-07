import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/42820357?s=460&u=374ced4e3e53aef5d956088adcafc7a26e829c41&v=4" alt="Lucas Alves" />
            <div>
                <strong>Lucas Alves</strong>
                <span>Desenvolvimento Mobile</span>
            </div>
        </header>
        <p>
            Especialista em desenvolvimento mobile.
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 15,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="WhatsApp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;