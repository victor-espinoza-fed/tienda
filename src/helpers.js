import { v4 as uuidv4 } from 'uuid';

const getRandomCost = () => {
  const random = Math.random();
  const cost = random * 1000;
  return cost.toFixed(2);
}

export const categories = {
  'Playeras hombre': {
    image: "https://via.placeholder.com/286x286",
    products: [{
      id: uuidv4(),
      name: 'Camiseta Adidas',
      image: 'https://via.placeholder.com/100x100',
      colors: [{
        name: 'blue',
        images: ['https://via.placeholder.com/100x100', 'https://via.placeholder.com/100x100'],
      }, {
        name: 'red',
        images: ['https://via.placeholder.com/100x100', 'https://via.placeholder.com/100x100'],
      }, {
        name: 'black',
        images: ['https://via.placeholder.com/100x100', 'https://via.placeholder.com/100x100'],
      }, {
        name: 'maroon',
        images: ['https://via.placeholder.com/100x100', 'https://via.placeholder.com/100x100'],
      }, {
        name: 'white',
        images: ['https://via.placeholder.com/100x100', 'https://via.placeholder.com/100x100'],
      }, {
        name: 'yellow',
        images: ['https://via.placeholder.com/100x100', 'https://via.placeholder.com/100x100'],
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
  category2: {
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