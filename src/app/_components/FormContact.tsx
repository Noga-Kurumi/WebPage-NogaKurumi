import React from 'react'

export const FormContact = () => {
    return (
        <div>
            <form action="https://formspree.io/f/xovlabzn" method="POST">
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Tu nombre"
                    required
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Tu correo"
                    required
                />
                <textarea
                    id="mensaje"
                    name="mensaje"
                    // rows="5"
                    placeholder="Tu mensaje"
                    required
                ></textarea>
                <button type="submit" className="button" style={{ alignSelf: "center" }}>
                    Enviar
                </button>
            </form>
        </div>
    )
}
