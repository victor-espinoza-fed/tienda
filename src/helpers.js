import { v4 as uuidv4 } from 'uuid';

export const base = 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/';

const getRandomCost = () => {
  const random = Math.random();
  const cost = random * 1000;
  return cost.toFixed(2);
}

export const categories = {
  'Hombre': {
    image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2Fhombre.jpg?alt=media&token=69d3c4a5-76a2-470b-8b43-7a5e5d7d90b0',
    products: [{
      id: uuidv4(),
      name: 'Camisa bajo curvo de rayas',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamisa%20bajo%20curvo%20de%20rayas%2Fcb1.jpg?alt=media&token=5f4c2cbd-d8d8-4ba9-ab48-b216025b15dc',
      colors: [{
        name: 'white',
        images: [
          'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamisa%20bajo%20curvo%20de%20rayas%2Fblanco%2Fcb1.jpg?alt=media&token=94c6c38b-7d9a-462a-be4c-6391ad445d94',
          'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamisa%20bajo%20curvo%20de%20rayas%2Fblanco%2Fcb2.jpg?alt=media&token=71b156f7-32b5-45f2-921c-2142b34e3682',
          'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamisa%20bajo%20curvo%20de%20rayas%2Fblanco%2Fcb3.jpg?alt=media&token=049bbf1f-46fd-4359-90ad-d570c693b432',
        ],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Nike',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Abercrombie',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Aeropostale',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }],
  },
  'Mujer': {
    image: "https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2Fba1.jpg?alt=media&token=6d885df6-e25c-46b4-9815-8ab0896f7c4a",
    products: [{
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20corte%20regular%20fit%2Fbc1.jpg?alt=media&token=3c9c9da9-e7b6-4be4-a1e9-fad5a65256b9',
      colors: [{
        name: 'blue',
        images: [
          'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20corte%20regular%20fit%2Fazul%2Fba1.jpg?alt=media&token=71bca902-6a4c-4ab6-9215-b939de46e0c1',
          'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20corte%20regular%20fit%2Fazul%2Fba2.jpg?alt=media&token=7e1554d9-2f56-4af0-920b-ada1b56308b7',
          'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20corte%20regular%20fit%2Fazul%2Fba3.jpg?alt=media&token=223ffc15-5b55-4d92-84fc-40cd80a09dd4',
        ],
      }, {
        name: 'white',
        images: [
          'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20corte%20regular%20fit%2Fblanco%2Fbc1..jpg?alt=media&token=94a49e6d-7629-4369-9321-b6e1525ba634',
          'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20corte%20regular%20fit%2Fblanco%2Fbc2.jpg?alt=media&token=925695e9-bec4-480a-adf4-fc111a453e55',
          'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20corte%20regular%20fit%2Fblanco%2Fbc3.jpg?alt=media&token=2be687af-3da5-4a04-a610-b72744e4aa12',
        ]
      }, {
        name: 'maroon',
        images: [
          'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20corte%20regular%20fit%2Fcafe%2Fbc1.jpg?alt=media&token=cbc17a48-d012-403c-8d53-94b9d0406805',
          'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20corte%20regular%20fit%2Fcafe%2Fbc2.jpg?alt=media&token=eac2e293-6d0b-40e9-87fb-ae47cf05b7db',
          'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20corte%20regular%20fit%2Fcafe%2Fbc3.jpg?alt=media&token=b1157812-2f41-4cef-9549-9930d7f4b267',
        ]
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }],
  },
  category3: {
    image: "https://via.placeholder.com/100x100",
    products: [{
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }],
  },
  category4: {
    image: "https://via.placeholder.com/100x100",
    products: [{
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'Azul',
        image: 'https://via.placeholder.com/100x100',
      }, {
        name: 'Rojo',
        image: 'https://via.placeholder.com/100x100',
      }],
      cost: getRandomCost(),
    }],
  },
}