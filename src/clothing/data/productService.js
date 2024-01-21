export const products = [
    {
        'id': '1',
        'name': 'Polo Negro Hombre',
        'price': 'S/24',
        'image': '/ecomerce-site/img/poloN.jpg',
        'description': 'Polo Negro de Algodón para Hombre'
    },
    {
        'id': '2',
        'name': 'Polo Blanco Hombre',
        'price': 'S/24',
        'image': '/ecomerce-site/img/poloB.jpg',
        'description': 'Polo Blanco de Algodón para Hombre'
    },
    {
        'id': '3',
        'name': 'Polo Vino Hombre',
        'price': 'S/24',
        'image': '/ecomerce-site/img/poloV.jpg',
        'description': 'Polo Color Vino de Algodón para Hombre'
    },
    {
        'id': '4',
        'name': 'Polo Rojo Hombre',
        'price': 'S/24',
        'image': '/ecomerce-site/img/poloR.jpg',
        'description': 'Polo Rojo de Algodón para Hombre'
    },
    {
        'id': '5',
        'name': 'Polo Azul Hombre',
        'price': 'S/24',
        'image': '/ecomerce-site/img/poloA.jpg',
        'description': 'Polo Azul de Algodón para Hombre'
    },
    {
        'id': '6',
        'name': 'Polo Rosa Mujer',
        'price': 'S/27',
        'image': '/ecomerce-site/img/poloMR.jpg',
        'description': 'Polo Manga Corta Color Rosa para Mujer con Estanpado'
    },
    {
        'id': '7',
        'name': 'Polo Negro Mujer',
        'price': 'S/27',
        'image': '/ecomerce-site/img/poloMN.jpg',
        'description': 'Polo Manga Corta Color Negro para Mujer con Estamapdo'
    },
    {
        'id': '8',
        'name': 'Polo Beige Mujer',
        'price': 'S/27',
        'image': '/ecomerce-site/img/poloMB.jpg',
        'description': 'Polo Manga Corta Color Beige para Mujer con Estampado'
    },
    {
        'id': '9',
        'name': 'Polera Beige Hombre',
        'price': 'S/72',
        'image': '/ecomerce-site/img/poleraBeige.jpg',
        'description': 'Polera para Hombre Color Beige con Estampado'
    },
    {
        'id': '10',
        'name': 'Polera Blanco Hombre',
        'price': 'S/72',
        'image': '/ecomerce-site/img/poleraBlanco.jpg',
        'description': 'Polera para Hombre Color Blanco con Estampado'
    },
    {
        'id': '11',
        'name': 'Polera Negra Hombre',
        'price': 'S/72',
        'image': '/ecomerce-site/img/poleraNegro.jpg',
        'description': 'Polera para Hombre Color Negro con Estampado'
    },
    {
        'id': '12',
        'name': 'Pantalón Jean Hombre',
        'price': 'S/90',
        'image': '/ecomerce-site/img/jeansPantsV.jpg',
        'description': 'Pantalón Jean para Hombre Color Azul'
    },
    {
        'id': '13',
        'name': 'Pantalón Jean Mujer',
        'price': 'S/90',
        'image': '/ecomerce-site/img/jeansPantsM.jpg',
        'description': 'Pantalón Jean Modelo Baggy para Mujer Color Azul Noche'
    },
]

export function getProductDetailsById(productId) {
    return products.find(product => product.id === productId)
}