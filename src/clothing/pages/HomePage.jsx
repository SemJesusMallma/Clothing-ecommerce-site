import React from 'react';
import { Link } from 'react-router-dom';
import useCartItems from '../hooks/useCartItems';

export const HomePage = () => {
    const { getTotalItems } = useCartItems()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <section className="hero">
                <div className="hero__content">
                    <h2 className="hero__title">Bienvenido a nuestra tienda de ropa <span className="hero__span">Freelancer</span> </h2>
                    <p className="hero__text">¡Encuentra tu look perfecto entre nuestras opciones únicas!</p>
                </div>
            </section>

            <main className="container shadow">
                <h2>Nuestros Productos</h2>
                <div className="grid">
                    <div className="product">
                        <Link to="/detalles/1">
                            <picture>
                                <source className="product__image" srcSet="img/poloN.avif" type="image/avif" />
                                <source className="product__image" srcSet="img/poloN.webp" type="image/webp" />
                                <img className="product__image" loading="lazy" src="img/poloN.jpg" alt="Black Polo for Men" />
                            </picture>
                            <div className="product__information">
                                <p className="product__name">Polo Negro Hombre</p>
                                <p className="product__price">S/24</p>
                            </div>
                        </Link>
                    </div>
                    <div className="product">
                        <Link to="/detalles/2">
                            <picture>
                                <source className="product__image" srcSet="img/poloB.avif" type="image/avif" />
                                <source className="product__image" srcSet="img/poloB.webp" type="image/webp" />
                                <img className="product__image" loading="lazy" src="img/poloB.jpg" alt="White Polo for Men" />
                            </picture>
                            <div className="product__information">
                                <p className="product__name">Polo Blanco Hombre</p>
                                <p className="product__price">S/24</p>
                            </div>
                        </Link>
                    </div>
                    <div className="product">
                        <Link to="/detalles/3">
                            <picture>
                                <source className="product__image" srcSet="img/poloV.avif" type="image/avif" />
                                <source className="product__image" srcSet="img/poloV.webp" type="image/webp" />
                                <img className="product__image" loading="lazy" src="img/poloV.jpg" alt="Wine Polo for Men" />
                            </picture>
                            <div className="product__information">
                                <p className="product__name">Polo Vino Hombre</p>
                                <p className="product__price">S/24</p>
                            </div>
                        </Link>
                    </div>
                    <div className="product">
                        <Link to="/detalles/6">
                            <picture>
                                <source className="product__image" srcSet="img/poloMR.avif" type="image/avif" />
                                <source className="product__image" srcSet="img/poloMR.webp" type="image/webp" />
                                <img className="product__image" loading="lazy" src="img/poloMR.jpg" alt="Pink Polo for Women" />
                            </picture>
                            <div className="product__information">
                                <p className="product__name">Polo Rosa Mujer</p>
                                <p className="product__price">S/27</p>
                            </div>
                        </Link>
                    </div>
                    <div className="product">
                        <Link to="/detalles/7">
                            <picture>
                                <source className="product__image" srcSet="img/poloMN.avif" type="image/avif" />
                                <source className="product__image" srcSet="img/poloMN.webp" type="image/webp" />
                                <img className="product__image" loading="lazy" src="img/poloMN.jpg" alt="Black Polo for Women" />
                            </picture>
                            <div className="product__information">
                                <p className="product__name">Polo Negro Mujer</p>
                                <p className="product__price">S/27</p>
                            </div>
                        </Link>
                    </div>
                    <div className="product">
                        <Link to="/detalles/8">
                            <picture>
                                <source className="product__image" srcSet="img/poloMB.avif" type="image/avif" />
                                <source className="product__image" srcSet="img/poloMB.webp" type="image/webp" />
                                <img className="product__image" loading="lazy" src="img/poloMB.jpg" alt="Beige Polo for Women" />
                            </picture>
                            <div className="product__information">
                                <p className="product__name">Polo Beige Mujer</p>
                                <p className="product__price">S/27</p>
                            </div>
                        </Link>
                    </div>

                    <div className="graph tshirt--graph">
                        <Link to="/productos" className="button" onClick={scrollToTop}>
                            Ver Más
                        </Link>
                    </div>
                    {/*  Icono Carrito */}
                    <Link to="/carrito">
                        <div className="carrito-icon">
                            <img src="/img/shopping-cart.svg" alt="Carrito" />
                            <div className="carrito-indicador">{getTotalItems()}</div>
                        </div>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default HomePage;