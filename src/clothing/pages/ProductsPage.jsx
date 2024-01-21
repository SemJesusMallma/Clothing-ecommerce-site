import React from 'react';
import { Link } from 'react-router-dom';
import useCartItems from '../hooks/useCartItems';

export const ProductsPage = () => {
    const { getTotalItems } = useCartItems();

    return (
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
                    <Link to="/detalles/4">
                        <picture>
                            <source className="product__image" srcSet="img/poloR.avif" type="image/avif" />
                            <source className="product__image" srcSet="img/poloR.webp" type="image/webp" />
                            <img className="product__image" loading="lazy" src="img/poloR.jpg" alt="Red Polo for Men" />
                        </picture>
                        <div className="product__information">
                            <p className="product__name">Polo Rojo Hombre</p>
                            <p className="product__price">S/24</p>
                        </div>
                    </Link>
                </div>
                <div className="product">
                    <Link to="/detalles/5">
                        <picture>
                            <source className="product__image" srcSet="img/poloA.avif" type="image/avif" />
                            <source className="product__image" srcSet="img/poloA.webp" type="image/webp" />
                            <img className="product__image" loading="lazy" src="img/poloA.jpg" alt="Blue Polo for Men" />
                        </picture>
                        <div className="product__information">
                            <p className="product__name">Polo Azul Hombre</p>
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
                <div className="product">
                    <Link to="/detalles/9">
                        <picture>
                            <source className="product__image" srcSet="img/poleraBeige.avif" type="image/avif" />
                            <source className="product__image" srcSet="img/poleraBeige.webp" type="image/webp" />
                            <img className="product__image" loading="lazy" src="img/poleraBeige.jpg" alt="Beige T-shirt for Men" />
                        </picture>
                        <div className="product__information">
                            <p className="product__name">Polera Beige Hombre</p>
                            <p className="product__price">S/72</p>
                        </div>
                    </Link>
                </div>
                <div className="product">
                    <Link to="/detalles/10">
                        <picture>
                            <source className="product__image" srcSet="img/poleraBlanco.avif" type="image/avif" />
                            <source className="product__image" srcSet="img/poleraBlanco.webp" type="image/webp" />
                            <img className="product__image" loading="lazy" src="img/poleraBlanco.jpg" alt="White T-shirt for Men" />
                        </picture>
                        <div className="product__information">
                            <p className="product__name">Polera Blanco Hombre</p>
                            <p className="product__price">S/72</p>
                        </div>
                    </Link>
                </div>
                <div className="product">
                    <Link to="/detalles/11">
                        <picture>
                            <source className="product__image" srcSet="img/poleraNegro.avif" type="image/avif" />
                            <source className="product__image" srcSet="img/poleraNegro.webp" type="image/webp" />
                            <img className="product__image" loading="lazy" src="img/poleraNegro.jpg" alt="Black T-shirt for Men" />
                        </picture>
                        <div className="product__information">
                            <p className="product__name">Polera Negra Hombre</p>
                            <p className="product__price">S/72</p>
                        </div>
                    </Link>
                </div>
                <div className="product">
                    <Link to="/detalles/12">
                        <picture>
                            <source className="product__image" srcSet="img/jeansPantsV.avif" type="image/avif" />
                            <source className="product__image" srcSet="img/jeansPantsV.webp" type="image/webp" />
                            <img className="product__image" loading="lazy" src="img/jeansPantsV.jpg" alt="Men's jean pants" />
                        </picture>
                        <div className="product__information">
                            <p className="product__name">Pantalón Jean Hombre</p>
                            <p className="product__price">S/90</p>
                        </div>
                    </Link>
                </div>
                <div className="product">
                    <Link to="/detalles/13">
                        <picture>
                            <source className="product__image" srcSet="img/jeansPantsM.avif" type="image/avif" />
                            <source className="product__image" srcSet="img/jeansPantsM.webp" type="image/webp" />
                            <img className="product__image" loading="lazy" src="img/jeansPantsM.jpg" alt="Women's jean pants" />
                        </picture>
                        <div className="product__information">
                            <p className="product__name">Pantalón Jean Mujer</p>
                            <p className="product__price">S/90</p>
                        </div>
                    </Link>
                </div>

                <div className="graph__polo polos--graph"></div>
                
                <Link to="/carrito">
                    <div className="carrito-icon">
                        <img src="img/shopping-cart.svg" alt="Carrito" />
                        <div className="carrito-indicador">{getTotalItems()}</div>
                    </div>
                </Link>
            </div>
        </main>
    )
}

export default ProductsPage;