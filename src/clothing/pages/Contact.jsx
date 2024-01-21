import React from 'react';
import { Link } from 'react-router-dom';
import useCartItems from '../hooks/useCartItems';

export const Contac = () => {
    const { getTotalItems } = useCartItems()

    return (
        <>
            <section className="hero__contacto">
                <div className="contacto__content">
                    <h2 className="contacto__title">Estamos aquí para responder tus preguntas <span className="contacto__span">¡Envíanos un mensaje!</span> </h2>
                </div>
            </section>

            <main className="container shadow">
                <section className="contacto">
                    <h2>Contactanos</h2>

                    <form className="form">
                        <fieldset>
                            <legend>
                                para obtener más informacion complete los campos
                            </legend>
                            <div className="fields-container">
                                <div className="field mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input className="form-control" type="text" placeholder="Nombre" required />
                                </div>
                                <div className="field mb-3">
                                    <label className="form-label">Teléfono</label>
                                    <input className="form-control" type="tel" placeholder="teléfono" required />
                                </div>
                                <div className="field mb-3">
                                    <label className="form-label">Email</label>
                                    <input className="form-control" type="email" placeholder="Email" required />
                                </div>
                                <div className="field">
                                    <label className="form-label">Mensaje</label>
                                    <textarea className="form-control" rows="8"></textarea>
                                </div>
                            </div>

                            <div className="form__button--alignRight">
                                <input className="btn" type="submit" value="Enviar" />
                            </div>
                        </fieldset>
                    </form>

                </section>

                <Link to="/carrito">
                    <div className="carrito-icon">
                        <img src="img/shopping-cart.svg" alt="Carrito" />
                        <div className="carrito-indicador">{getTotalItems()}</div>
                    </div>
                </Link>
            </main>
        </>
    )
}

export default Contac;