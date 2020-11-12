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
      name: 'Camisa de hombres bajo curvo con estampado de grullas',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamisa%20de%20hombres%20bajo%20curvo%20con%20estampado%20de%20grullas%2Fcv1.jpg?alt=media&token=6a06a3d0-39bf-434f-ba77-716331c91ae8',
      colors: [{
        name: 'green',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamisa%20de%20hombres%20bajo%20curvo%20con%20estampado%20de%20grullas%2Fverde%2Fcv1.jpg?alt=media&token=0265896a-7517-4d7e-a1a8-52657b4d66b8', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamisa%20de%20hombres%20bajo%20curvo%20con%20estampado%20de%20grullas%2Fverde%2Fcv2.jpg?alt=media&token=478abe08-9971-4fc6-a6fe-f8cffddc64fd', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamisa%20de%20hombres%20bajo%20curvo%20con%20estampado%20de%20grullas%2Fverde%2Fcv3.jpg?alt=media&token=5fc3008f-94b3-440a-a9e9-36a42abfcb75'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camisas para hombre Botón delantero Monocolor Calle',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamisas%20para%20hombre%20Bot%C3%B3n%20delantero%20Monocolor%20Calle%2Fcnb.jpg?alt=media&token=3e300491-42b6-41d2-a111-65a507b3b73b',
      colors: [{
        name: 'white',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamisas%20para%20hombre%20Bot%C3%B3n%20delantero%20Monocolor%20Calle%2Fblanco%2Fcbn1.jpg?alt=media&token=02b35734-a11f-413b-9162-ea9af0fa9b09', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamisas%20para%20hombre%20Bot%C3%B3n%20delantero%20Monocolor%20Calle%2Fblanco%2Fcnb.jpg?alt=media&token=4ffb0f58-d844-4d07-b56a-34cf6b7edbab', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamisas%20para%20hombre%20Bot%C3%B3n%20delantero%20Monocolor%20Calle%2Fblanco%2Fcnb2.jpg?alt=media&token=8902cc32-90c6-479a-99b5-d146fa9242d2'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camisas para hombre Floral Azul Marino Vacación',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamisas%20para%20hombre%20Floral%20Azul%20Marino%20Vacaci%C3%B3n%2Fca1.jpg?alt=media&token=8599063c-2e0c-4776-9093-cc0efe1f7c06',
      colors: [{
        name: 'blue',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamisas%20para%20hombre%20Floral%20Azul%20Marino%20Vacaci%C3%B3n%2Fazul%2Fca1.jpg?alt=media&token=e4a43545-f9ff-462e-8f75-ee281e9a7000', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamisas%20para%20hombre%20Floral%20Azul%20Marino%20Vacaci%C3%B3n%2Fazul%2Fca2.jpg?alt=media&token=55a0ff63-a032-439a-aa8a-64698e0d79e9'],
      }],
      cost: getRandomCost(),
    },
    {
      id: uuidv4(),
      name: 'Camiseta con botón delantero unicolor',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20con%20bot%C3%B3n%20delantero%20unicolor%2Fcg1.jpg?alt=media&token=54bb5925-3051-492e-b061-17b474caa35e',
      colors: [{
        name: 'gray',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20con%20bot%C3%B3n%20delantero%20unicolor%2Fgris%2Fcg1.jpg?alt=media&token=3de27040-aaa2-4673-b96e-e92f8fb4d3c9', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20con%20bot%C3%B3n%20delantero%20unicolor%2Fgris%2Fcg2.jpg?alt=media&token=f6cfbdf2-679e-4933-be4a-8cf4048ffc1b', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20con%20bot%C3%B3n%20delantero%20unicolor%2Fgris%2Fcg3.jpg?alt=media&token=7c75e28b-53b2-4812-98cb-bdf32f1c0c92'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta con cinta de hombros caídos',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20con%20cinta%20de%20hombros%20ca%C3%ADdos%2Fca1.jpg?alt=media&token=524e11f4-7db6-4167-8d36-de521773b1ca',
      colors: [{
        name: 'yellow',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20con%20cinta%20de%20hombros%20ca%C3%ADdos%2Famarillo%2Fca1.jpg?alt=media&token=05b16c5a-b001-4f47-824c-9c573d73b6be', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20con%20cinta%20de%20hombros%20ca%C3%ADdos%2Famarillo%2Fca2.jpg?alt=media&token=23eebdca-2924-402a-826f-2338b2903de2', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20con%20cinta%20de%20hombros%20ca%C3%ADdos%2Famarillo%2Fca3.jpg?alt=media&token=e0e1ca79-811d-4ac6-9d53-14c732020dbc'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta de hombre con estampado de slogans',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20de%20hombre%20con%20estampado%20de%20slogans%2Fcd1.jpg?alt=media&token=3dfc39ce-5eba-424f-8eb1-6a869195900d',
      colors: [{
        name: 'blue',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20de%20hombre%20con%20estampado%20de%20slogans%2FAzul%2Fcd1.jpg?alt=media&token=168fd24b-4eb8-4926-ab3c-5c14d12c15d2', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20de%20hombre%20con%20estampado%20de%20slogans%2FAzul%2Fcd2.jpg?alt=media&token=93822a82-d328-42cd-9f8d-8464bcfc30a6', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20de%20hombre%20con%20estampado%20de%20slogans%2FAzul%2Fcg3.jpg?alt=media&token=f193619b-6891-46dc-9fd7-a181d397fd16'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta de manga corta de hombres con costura',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20de%20manga%20corta%20de%20hombres%20con%20costura%2Fcr1.jpg?alt=media&token=78318eea-81b2-4675-be27-00504edbd63a',
      colors: [{
        name: 'red',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20de%20manga%20corta%20de%20hombres%20con%20costura%2Frojo%2Fcr.jpg?alt=media&token=f5aa208e-7c2b-4365-996d-df7443825982', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20de%20manga%20corta%20de%20hombres%20con%20costura%2Frojo%2Fcr1.jpg?alt=media&token=4980f183-afee-40e4-81ef-be4ff65c3255'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta de tie dye con estampado de slogan',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20de%20tie%20dye%20con%20estampado%20de%20slogan%2Fcnb1.jpg?alt=media&token=4f556f03-cd2e-4dd6-82ab-2ac603132972',
      colors: [{
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20de%20tie%20dye%20con%20estampado%20de%20slogan%2Fnegro%2Fcnb1.jpg?alt=media&token=3a70fdc0-cda2-4c6a-bcbf-88b2829fcddd', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20de%20tie%20dye%20con%20estampado%20de%20slogan%2Fnegro%2Fcnb2.jpg?alt=media&token=7299b6b7-0df3-4e78-9edf-8a463d607b9a', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCamiseta%20de%20tie%20dye%20con%20estampado%20de%20slogan%2Fnegro%2Fcnb3.jpg?alt=media&token=14948453-9ed8-4ee5-b766-6338acd5ee45'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Cazadora de bombardero de hombres con cremallera con cinta de rayas',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCazadora%20de%20bombardero%20de%20hombres%20con%20cremallera%20con%20cinta%20de%20rayas%2Fcbr1.jpg?alt=media&token=9dfb2e74-c9d0-475c-a064-45073213098b',
      colors: [{
        name: 'white',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCazadora%20de%20bombardero%20de%20hombres%20con%20cremallera%20con%20cinta%20de%20rayas%2Fblanco%2Fcbr1.jpg?alt=media&token=71bdb3b3-9be1-4428-8d34-4b254c80370c', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCazadora%20de%20bombardero%20de%20hombres%20con%20cremallera%20con%20cinta%20de%20rayas%2Fblanco%2Fcbr2.jpg?alt=media&token=6e3238dd-8f6b-4ef0-8877-d02ce1773047'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Cazadora tapeta con botón con bordado de letra',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCazadora%20tapeta%20con%20bot%C3%B3n%20con%20bordado%20de%20letra%2Fca1.jpg?alt=media&token=2d3f5f08-5890-49c4-8996-a997dacec2c8',
      colors: [{
        name: 'yellow',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCazadora%20tapeta%20con%20bot%C3%B3n%20con%20bordado%20de%20letra%2Fca1.jpg?alt=media&token=2d3f5f08-5890-49c4-8996-a997dacec2c8', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCazadora%20tapeta%20con%20bot%C3%B3n%20con%20bordado%20de%20letra%2Fca2.jpg?alt=media&token=521e4748-5a42-448b-8e60-df1d6d772325', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCazadora%20tapeta%20con%20bot%C3%B3n%20con%20bordado%20de%20letra%2Fca3.jpg?alt=media&token=b2e756e7-d138-463c-9f35-206a728b7f62'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Cazadora viento de color combinado con cremallera media delantera',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCazadora%20viento%20de%20color%20combinado%20con%20cremallera%20media%20delantera%2Fcm2.jpg?alt=media&token=fe58ddf7-2e9e-42bf-8f1f-5ac918b94c76',
      colors: [{
        name: 'violet',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCazadora%20viento%20de%20color%20combinado%20con%20cremallera%20media%20delantera%2Fmorado%2Fcm1.jpg?alt=media&token=0cef242c-442b-4c4a-9680-4bc37ad4010c', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FCazadora%20viento%20de%20color%20combinado%20con%20cremallera%20media%20delantera%2Fmorado%2Fcm2.jpg?alt=media&token=37a84893-f9d2-44f5-b3c5-929f2755d8d3'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Chaqueta con capucha con cremallera de tie dye con estampado de letra',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FChaqueta%20con%20capucha%20con%20cremallera%20de%20tie%20dye%20con%20estampado%20de%20letra%2Fsa2.jpg?alt=media&token=a3dbcbd1-910d-4ed8-9a28-7719da618878',
      colors: [{
        name: 'blue',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FChaqueta%20con%20capucha%20con%20cremallera%20de%20tie%20dye%20con%20estampado%20de%20letra%2Fazul%2Fsa2.jpg?alt=media&token=72588e86-7a97-42d9-8ee2-61fddb7be55f', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FChaqueta%20con%20capucha%20con%20cremallera%20de%20tie%20dye%20con%20estampado%20de%20letra%2Fazul%2Fsa3.jpg?alt=media&token=e5ecc58f-90b9-481b-91d5-aacfbe0f7093'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Chaqueta de guingán con cremallera con cuello',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FChaqueta%20de%20guing%C3%A1n%20con%20cremallera%20con%20cuello%2Fcca1.jpg?alt=media&token=cc514243-c4ec-4a8f-9def-b26d821af08c',
      colors: [{
        name: 'blue',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FChaqueta%20de%20guing%C3%A1n%20con%20cremallera%20con%20cuello%2Fazul%2Fcca.jpg?alt=media&token=d36b2c92-6fb8-41b2-b2cd-22d47f204a73', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FChaqueta%20de%20guing%C3%A1n%20con%20cremallera%20con%20cuello%2Fazul%2Fcca1.jpg?alt=media&token=b6674a18-8de4-42e2-830c-0d5620e1bd43', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FChaqueta%20de%20guing%C3%A1n%20con%20cremallera%20con%20cuello%2Fazul%2Fcca2.jpg?alt=media&token=68bbcfa8-4f6d-4a30-9fce-6eb479909115'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Chaqueta de hombres Cremallera A rayas Casual',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FChaqueta%20de%20hombres%20Cremallera%20A%20rayas%20Casual%2Fcr1.jpg?alt=media&token=472f4f78-7898-48d8-aead-4d67eb029520',
      colors: [{
        name: 'red',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FChaqueta%20de%20hombres%20Cremallera%20A%20rayas%20Casual%2Frojo%2Fcr1.jpg?alt=media&token=47108dc0-2868-4465-a3c0-9546e6399c1d', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FChaqueta%20de%20hombres%20Cremallera%20A%20rayas%20Casual%2Frojo%2Fcr2.jpg?alt=media&token=dbe97133-4448-485e-a7fd-cbc10d9b9bc1', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FChaqueta%20de%20hombres%20Cremallera%20A%20rayas%20Casual%2Frojo%2Fcr3.jpg?alt=media&token=59040e2f-4a28-4b6d-ac75-690469f289ee'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Chaqueta de hombres Cremallera Monocolor Casual',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FChaqueta%20de%20hombres%20Cremallera%20Monocolor%20Casual%2Fca1.jpg?alt=media&token=0580b961-42f2-45ea-b148-d79b8e3a5173',
      colors: [{
        name: 'blue',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FChaqueta%20de%20hombres%20Cremallera%20Monocolor%20Casual%2Fazul%2Fca1.jpg?alt=media&token=8223f367-a52c-4fdd-973b-50efe80f2307', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FChaqueta%20de%20hombres%20Cremallera%20Monocolor%20Casual%2Fazul%2Fca2.jpg?alt=media&token=441cfd16-40fd-484d-8523-cdbbec672ed2', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FChaqueta%20de%20hombres%20Cremallera%20Monocolor%20Casual%2Fazul%2Fca3.jpg?alt=media&token=ec325c16-81b8-44e8-b75a-876d469dd100'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Chaqueta de hombres Cremallera Monocolor Preppy',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FChaqueta%20de%20hombres%20Cremallera%20Monocolor%20Preppy%2Fcna1.jpg?alt=media&token=674ad1b1-93f4-480d-89c5-82d6bbe693ba',
      colors: [{
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FChaqueta%20de%20hombres%20Cremallera%20Monocolor%20Preppy%2Fnegro%2Fcan3.jpg?alt=media&token=67fa387e-c200-46dc-baa1-2f6a2799fcea', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FChaqueta%20de%20hombres%20Cremallera%20Monocolor%20Preppy%2Fnegro%2Fcna1.jpg?alt=media&token=84d70966-a8b5-4e5d-9ee0-a59f6392935d'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Pantalones a medida con estampado de rayas',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20a%20medida%20con%20estampado%20de%20rayas%2Fpr1.jpg?alt=media&token=6172e010-1436-4508-9933-7216950d74d7',
      colors: [{
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20a%20medida%20con%20estampado%20de%20rayas%2Fnegro%2Fpr1.jpg?alt=media&token=3a77742e-b579-44db-9d4a-8d68e320cf45', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20a%20medida%20con%20estampado%20de%20rayas%2Fnegro%2Fpr2.jpg?alt=media&token=f49ad3be-7e4b-4d19-848c-ef64c8cc40db', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20a%20medida%20con%20estampado%20de%20rayas%2Fnegro%2Fpr3.jpg?alt=media&token=5befac34-5f85-4ce4-98e8-9d7c5ece7759'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Pantalones cargo con cordón con bolsillo con solapa con estampado de camuflaje',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20cargo%20con%20cord%C3%B3n%20con%20bolsillo%20con%20solapa%20con%20estampado%20de%20camuflaje%2Fpm2.jpg?alt=media&token=f8f5dcbb-e3f0-4cb7-b493-884135c4b758',
      colors: [{
        name: 'green',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20cargo%20con%20cord%C3%B3n%20con%20bolsillo%20con%20solapa%20con%20estampado%20de%20camuflaje%2Fverde%2Fpm2.jpg?alt=media&token=e0ad7d60-d327-4401-a192-cba2b19171b1'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Pantalones cargo con parche de slogan de cintura con cordón',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20cargo%20con%20parche%20de%20slogan%20de%20cintura%20con%20cord%C3%B3n%2Fpr1.jpg?alt=media&token=18036745-dee8-40bb-8261-8ea44a14dc3a',
      colors: [{
        name: 'pink',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20cargo%20con%20parche%20de%20slogan%20de%20cintura%20con%20cord%C3%B3n%2Frosa%2Fpr1.jpg?alt=media&token=db1bc585-017a-48f4-9bf4-dee29631dc8a', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20cargo%20con%20parche%20de%20slogan%20de%20cintura%20con%20cord%C3%B3n%2Frosa%2Fpr2.jpg?alt=media&token=a82e1cf9-55d7-45d0-8e06-3681a4eefe43', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20cargo%20con%20parche%20de%20slogan%20de%20cintura%20con%20cord%C3%B3n%2Frosa%2Fpr3.jpg?alt=media&token=54b5edf4-aaf4-4be2-b1f8-35fdb713d0bc'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Pantalones cargo de pana con parche con letra',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20cargo%20de%20pana%20con%20parche%20con%20letra%2Fpc1.jpg?alt=media&token=d2843171-2256-461d-ac4a-b4a4da5bd257',
      colors: [{
        name: 'green',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20cargo%20de%20pana%20con%20parche%20con%20letra%2Fcolores%2Fpc1.jpg?alt=media&token=5e8d47bf-7a9f-4b6f-9d10-13b5a471aed8', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20cargo%20de%20pana%20con%20parche%20con%20letra%2Fcolores%2Fpc2.jpg?alt=media&token=aa61fb11-39e7-43c6-9bd8-442e2e4cb352', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20cargo%20de%20pana%20con%20parche%20con%20letra%2Fcolores%2Fpc3.jpg?alt=media&token=960801ae-221b-45bb-9620-fb0f7f09947d'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Pantalones cargos con bolsillo con solapa',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20cargos%20con%20bolsillo%20con%20solapa%2Fpcg1.jpg?alt=media&token=dd598820-54c4-461c-bd1a-4708486eb8b1',
      colors: [{
        name: 'gray',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20cargos%20con%20bolsillo%20con%20solapa%2Fgris%2Fpcg1.jpg?alt=media&token=9e7956f4-c95a-402c-8b23-5aefd5725228', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20cargos%20con%20bolsillo%20con%20solapa%2Fgris%2Fpcg2.jpg?alt=media&token=565bab6e-5bd6-4edf-81b7-3392ec245eaf', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20cargos%20con%20bolsillo%20con%20solapa%2Fgris%2Fpcg3.jpg?alt=media&token=e1321c72-72f5-4e89-b893-94cdc4c9dbc8'],
      }, {
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20cargos%20con%20bolsillo%20con%20solapa%2Fnegro%2Fpcn2.jpg?alt=media&token=37c88088-a780-43ad-b966-ca88c42f287f', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20cargos%20con%20bolsillo%20con%20solapa%2Fnegro%2Fpcn3.jpg?alt=media&token=c8f3d3d6-81c6-42a5-9693-d2246976fc13'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Pantalones deportivos de hombres con cordón con estampado de slogan',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20deportivos%20de%20hombres%20con%20cord%C3%B3n%20con%20estampado%20de%20slogan%2Fpngb2.jpg?alt=media&token=42dbb345-9f43-437c-aecf-d0c6e5469701',
      colors: [{
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20deportivos%20de%20hombres%20con%20cord%C3%B3n%20con%20estampado%20de%20slogan%2Fnegro%2Fpngb1.jpg?alt=media&token=fb54239e-48dc-456c-b61a-e7ca569c467b', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20deportivos%20de%20hombres%20con%20cord%C3%B3n%20con%20estampado%20de%20slogan%2Fnegro%2Fpngb2.jpg?alt=media&token=db2b649d-1958-49b8-a594-76864b141f97'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Pantalones deportivos de hombres con estampado de letra panel en contraste',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20deportivos%20de%20hombres%20con%20estampado%20de%20letra%20panel%20en%20contraste%2Fpna1.jpg?alt=media&token=98e1eb50-96da-4c37-9df5-aee922c4e039',
      colors: [{
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20deportivos%20de%20hombres%20con%20estampado%20de%20letra%20panel%20en%20contraste%2Fnegro%2Fpna1.jpg?alt=media&token=3047e49e-5721-4443-9ed8-f66e81b048fa', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20deportivos%20de%20hombres%20con%20estampado%20de%20letra%20panel%20en%20contraste%2Fnegro%2Fpna2.jpg?alt=media&token=8fbbae28-91cf-4efd-a64b-07f80f20c402', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FPantalones%20deportivos%20de%20hombres%20con%20estampado%20de%20letra%20panel%20en%20contraste%2Fnegro%2Fpna3.jpg?alt=media&token=43d4bd76-3fe8-47ad-9d92-89e5c6eafb8d'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Shorts de hombres con estampado de palta de cintura con cordón',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FShorts%20de%20hombres%20con%20estampado%20de%20palta%20de%20cintura%20con%20cord%C3%B3n%2Fsa1.jpg?alt=media&token=83a01c2f-e10c-4530-9ff9-63c1e8697e6e',
      colors: [{
        name: 'blue',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FShorts%20de%20hombres%20con%20estampado%20de%20palta%20de%20cintura%20con%20cord%C3%B3n%2Fazul%2Fsa1.jpg?alt=media&token=fe66c225-38b2-41a3-ba9d-878fc4c3e80f', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FShorts%20de%20hombres%20con%20estampado%20de%20palta%20de%20cintura%20con%20cord%C3%B3n%2Fazul%2Fsa2.jpg?alt=media&token=f446c4cb-c847-45d5-b2d0-d62d59330c53', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FShorts%20de%20hombres%20con%20estampado%20de%20palta%20de%20cintura%20con%20cord%C3%B3n%2Fazul%2Fsa3.jpg?alt=media&token=16daa51a-61f4-434d-b161-9ec7e263be92'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Shorts de hombres de rayas con bolsillo de cintura con cordón',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FShorts%20de%20hombres%20de%20rayas%20con%20bolsillo%20de%20cintura%20con%20cord%C3%B3n%2Fsrn1.jpg?alt=media&token=015e614a-eb98-4438-98aa-d6f5da4228cf',
      colors: [{
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FShorts%20de%20hombres%20de%20rayas%20con%20bolsillo%20de%20cintura%20con%20cord%C3%B3n%2Fnegro%2Fsrn1.jpg?alt=media&token=b7d0e08b-029b-47ee-afe0-9963c6ca5497', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FShorts%20de%20hombres%20de%20rayas%20con%20bolsillo%20de%20cintura%20con%20cord%C3%B3n%2Fnegro%2Fsrn2.jpg?alt=media&token=7cf2bd4c-a4e7-4335-adb8-88872bc94787', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FShorts%20de%20hombres%20de%20rayas%20con%20bolsillo%20de%20cintura%20con%20cord%C3%B3n%2Fnegro%2Fsrn3.jpg?alt=media&token=9c63d0a9-4b10-444f-bcd0-31c638e15d35'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Shorts de hombres de rayas de cintura elástica con cordón',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FShorts%20de%20hombres%20de%20rayas%20de%20cintura%20el%C3%A1stica%20con%20cord%C3%B3n%2Fsrn1.jpg?alt=media&token=7d1d97ec-3153-425b-9bd4-3cf9273c63d2',
      colors: [{
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FShorts%20de%20hombres%20de%20rayas%20de%20cintura%20el%C3%A1stica%20con%20cord%C3%B3n%2Fnegro%2Fsrn1.jpg?alt=media&token=72a15007-32dd-4e4a-8652-8ad0248ecbeb', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FShorts%20de%20hombres%20de%20rayas%20de%20cintura%20el%C3%A1stica%20con%20cord%C3%B3n%2Fnegro%2Fsrn2.jpg?alt=media&token=b858bdcc-3bab-47b0-b825-735a744bdd8d', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FShorts%20de%20hombres%20de%20rayas%20de%20cintura%20el%C3%A1stica%20con%20cord%C3%B3n%2Fnegro%2Fsrn3.jpg?alt=media&token=f1de56bd-b700-4f9c-81a0-49b4f5ff2c3e'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      cost: getRandomCost(),
      name: 'Top de hombres de rayas con letra y dibujo',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FTop%20de%20hombres%20de%20rayas%20con%20letra%20y%20dibujo%2Fcn2.jpg?alt=media&token=4aaaa332-53af-4bc8-9582-258385361a1c',
      colors: [{
        name: 'orange',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FTop%20de%20hombres%20de%20rayas%20con%20letra%20y%20dibujo%2Fnaranja%2Fcn2.jpg?alt=media&token=5b084d98-afbd-499e-92c3-c66d4587e695', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2FTop%20de%20hombres%20de%20rayas%20con%20letra%20y%20dibujo%2Fnaranja%2Fcn3.jpg?alt=media&token=e7422977-b80c-42d3-adbd-2ca254fe1c91'],
      }],
    }, {
      id: uuidv4(),
      cost: getRandomCost(),
      name: 'chaqueta con estampado de fuego con solapa de hombros caídos',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2Fchaqueta%20con%20estampado%20de%20fuego%20con%20solapa%20de%20hombros%20ca%C3%ADdos%2Fcf1.jpg?alt=media&token=6518a222-7814-400c-bf0c-3341e4683a9b',
      colors: [{
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2Fchaqueta%20con%20estampado%20de%20fuego%20con%20solapa%20de%20hombros%20ca%C3%ADdos%2Fnegro%2Fcf1.jpg?alt=media&token=55236f7f-1501-4e7e-964f-c2de7e87bba6', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2Fchaqueta%20con%20estampado%20de%20fuego%20con%20solapa%20de%20hombros%20ca%C3%ADdos%2Fnegro%2Fcf2.jpg?alt=media&token=39f17e63-9d5c-42a8-8d70-b2d899ff239c', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/hombre%2Fchaqueta%20con%20estampado%20de%20fuego%20con%20solapa%20de%20hombros%20ca%C3%ADdos%2Fnegro%2Fcf3.jpg?alt=media&token=e5227ded-5296-491b-a083-b9ed5088e0b7'],
      }],
    }],
  },
  'Mujer': {
    image: "https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2Fba1.jpg?alt=media&token=6d885df6-e25c-46b4-9815-8ab0896f7c4a",
    products: [{
      id: uuidv4(),
      name: 'Blusa corte regular fit',
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
      name: 'Blusa GAP lisa con nudo manga corta',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20GAP%20lisa%20con%20nudo%20manga%20corta%2Fbt1.jpg?alt=media&token=792e3803-94c1-4ca7-8184-734363552026',
      colors: [{
        name: 'blue',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20GAP%20lisa%20con%20nudo%20manga%20corta%2Fazul%2Fba1.jpg?alt=media&token=5df8d656-e66d-47ec-8ce8-8baa66406738'],
      }, {
        name: 'white',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20GAP%20lisa%20con%20nudo%20manga%20corta%2Fblanco%2Fbb1.jpg?alt=media&token=e21325ad-a3c1-4fc9-b8a2-faa3e3db3de8'],
      }, {
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20GAP%20lisa%20con%20nudo%20manga%20corta%2Fnegro%2Fbn1.jpg?alt=media&token=e9f88112-f898-4899-9678-03b8b7e7ef70', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20GAP%20lisa%20con%20nudo%20manga%20corta%2Fnegro%2Fbn2.jpg?alt=media&token=74a07eaf-84ac-48a3-afba-5327dd172ee4', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20GAP%20lisa%20con%20nudo%20manga%20corta%2Fnegro%2Fbn3.jpg?alt=media&token=22ece450-d087-4b9b-ae69-99c954e10d62'],
      }, {
        name: 'maroon',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20GAP%20lisa%20con%20nudo%20manga%20corta%2Ftinto%2Fbt1.jpg?alt=media&token=082eb69e-dd97-456b-b519-344ad4e37177'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Blusas Volante fruncido todo estampado Elegante',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusas%20Volante%20fruncido%20todo%20estampado%20Elegante%2Febn.jpg?alt=media&token=95317eee-81e6-4883-a85b-235881a98e9c',
      colors: [{
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusas%20Volante%20fruncido%20todo%20estampado%20Elegante%2Fnegro%2Febn.jpg?alt=media&token=553b2059-58b2-4aba-a1f0-9ca23f789651', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusas%20Volante%20fruncido%20todo%20estampado%20Elegante%2Fnegro%2Febn1.jpg?alt=media&token=a21191f1-79ba-41ee-8201-a0fc261ab662', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusas%20Volante%20fruncido%20todo%20estampado%20Elegante%2Fnegro%2Febn2.jpg?alt=media&token=656bcdc7-4ce6-46f7-9c0e-716c75c63755'],
      }, {
        name: 'green',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusas%20Volante%20fruncido%20todo%20estampado%20Elegante%2Fverde%2Fetc.jpg?alt=media&token=c39bc006-aef4-4472-b337-389d3fa5db4e', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusas%20Volante%20fruncido%20todo%20estampado%20Elegante%2Fverde%2Fetv1.jpg?alt=media&token=4fb52ebc-8250-4df5-9fda-ddb994a862dc', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusas%20Volante%20fruncido%20todo%20estampado%20Elegante%2Fverde%2Fetv2.jpg?alt=media&token=8a21abd6-bf92-43ad-8572-87351909d5d8'],
      }, {
        name: 'maroon',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusas%20Volante%20fruncido%20todo%20estampado%20Elegante%2Fcafe%2Fetc1.jpg?alt=media&token=f8072e85-5990-4f50-8d48-7d148677191e', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusas%20Volante%20fruncido%20todo%20estampado%20Elegante%2Fcafe%2Fetc2.jpg?alt=media&token=008f6d3a-ae78-4c0a-a485-fd92010e5982', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusas%20Volante%20fruncido%20todo%20estampado%20Elegante%2Fcafe%2Fetc3.jpg?alt=media&token=001e3108-1a97-4566-ad07-50e6f6116b0c'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camisa con botón con encaje guipure',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCamisa%20con%20bot%C3%B3n%20con%20encaje%20guipure%2Fbr2.jpg?alt=media&token=544808b1-7037-45da-9cfd-fe710e2ffbc4',
      colors: [{
        name: 'white',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCamisa%20con%20bot%C3%B3n%20con%20encaje%20guipure%2Fblanco%2Fbb1.jpg?alt=media&token=3d9dc558-6b69-4784-b2dc-9b3d151883b1', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCamisa%20con%20bot%C3%B3n%20con%20encaje%20guipure%2Fblanco%2Fbb2.jpg?alt=media&token=0392798a-c4ac-4f73-b7bf-eb0e54b7e238', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCamisa%20con%20bot%C3%B3n%20con%20encaje%20guipure%2Fblanco%2Fbb3.jpg?alt=media&token=365e8208-bbbf-4b21-86bb-274e59e5e162'],
      }, {
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCamisa%20con%20bot%C3%B3n%20con%20encaje%20guipure%2Fnegro%2Fbn1.jpg?alt=media&token=1ace33c1-4a36-4814-855a-6008de38b299', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCamisa%20con%20bot%C3%B3n%20con%20encaje%20guipure%2Fnegro%2Fbn2.jpg?alt=media&token=7e277e61-f8cf-41cf-9006-a577d9d87fee', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCamisa%20con%20bot%C3%B3n%20con%20encaje%20guipure%2Fnegro%2Fbn3.jpg?alt=media&token=710b4b38-98b8-4619-bbf4-da1e63bda0ca'],
      }, {
        name: 'red',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCamisa%20con%20bot%C3%B3n%20con%20encaje%20guipure%2Frojo%2Fbr1.jpg?alt=media&token=b16bc31d-5123-47d8-9caf-e9c63ab529e3', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCamisa%20con%20bot%C3%B3n%20con%20encaje%20guipure%2Frojo%2Fbr2.jpg?alt=media&token=643bc9d6-cfdb-4aa7-9cb1-d900bc821ba9', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCamisa%20con%20bot%C3%B3n%20con%20encaje%20guipure%2Frojo%2Fbr3.jpg?alt=media&token=0fc8442d-b1a6-4b96-ad9b-8d5b5c135be8'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Cazadora con capucha con cordón con cremallera',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20con%20capucha%20con%20cord%C3%B3n%20con%20cremallera%2Fchn1.jpg?alt=media&token=6138619c-4d11-41e1-8f18-08700fabe7f5',
      colors: [{
        name: 'blue',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20con%20capucha%20con%20cord%C3%B3n%20con%20cremallera%2Fazul%2Fcha1.jpg?alt=media&token=edf28755-7ba9-4c73-8cce-1b32024c0156', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20con%20capucha%20con%20cord%C3%B3n%20con%20cremallera%2Fazul%2Fcha2.jpg?alt=media&token=74d5577f-9c99-4f98-b432-edfc8de8749d'],
      }, {
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20con%20capucha%20con%20cord%C3%B3n%20con%20cremallera%2Fnegro%2Fchn1.jpg?alt=media&token=a00f8fb8-aa1c-4c27-9964-0e15680eead2', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20con%20capucha%20con%20cord%C3%B3n%20con%20cremallera%2Fnegro%2Fchn2.jpg?alt=media&token=73e70af5-6308-45c5-953f-e8c9935942a1'],
      }, {
        name: 'green',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20con%20capucha%20con%20cord%C3%B3n%20con%20cremallera%2Fverde%2Fchv1.jpg?alt=media&token=fc7a5bfc-3303-40f9-97b0-1e39e1296d5f', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20con%20capucha%20con%20cord%C3%B3n%20con%20cremallera%2Fverde%2Fchv2.jpg?alt=media&token=efda0537-b54c-46c4-89fb-93691c40c6c2'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Cazadora de manga farol con bolsillo con solapa con botón delantero de pana',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20de%20manga%20farol%20con%20bolsillo%20con%20solapa%20con%20bot%C3%B3n%20delantero%20de%20pana%2Fcc1.jpg?alt=media&token=f03b77bf-ed06-4f31-9238-e79f2278607a',
      colors: [{
        name: 'maroon',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20de%20manga%20farol%20con%20bolsillo%20con%20solapa%20con%20bot%C3%B3n%20delantero%20de%20pana%2Fcafe%2Fcc1.jpg?alt=media&token=c36ca136-c0f8-466d-96db-38bf385319eb', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20de%20manga%20farol%20con%20bolsillo%20con%20solapa%20con%20bot%C3%B3n%20delantero%20de%20pana%2Fcafe%2Fcc2.jpg?alt=media&token=5c34968d-e305-46c9-ba73-b275b16d8897'],
      }, {
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20de%20manga%20farol%20con%20bolsillo%20con%20solapa%20con%20bot%C3%B3n%20delantero%20de%20pana%2Fnegro%2Fcn1.jpg?alt=media&token=e1a6f336-dd5a-4187-a659-fb2608b7fd1b', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20de%20manga%20farol%20con%20bolsillo%20con%20solapa%20con%20bot%C3%B3n%20delantero%20de%20pana%2Fnegro%2Fcn2.jpg?alt=media&token=318fd356-508e-49a7-a861-3d2d35c51ffe']
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Cazadora multicolor',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20multicolor%2Fcr1.jpg?alt=media&token=2d8eb3e7-0c7b-40cb-88ed-ecac8d60b141',
      colors: [{
        name: 'pink',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20multicolor%2Fcafe%2Fcc1.jpg?alt=media&token=6bc242a1-ed88-4916-bb42-a8c47a93d75e', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20multicolor%2Fcafe%2Fcc2.jpg?alt=media&token=954ded09-675d-4118-b0ff-05c863515f39'],
      }, {
        name: 'green',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20multicolor%2Frosa%2Fcr1.jpg?alt=media&token=f8532ece-6d47-43e4-ae8b-25038cb6aa88', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20multicolor%2Frosa%2Fcr2.jpg?alt=media&token=b7fbe38e-57fa-4d89-8687-53fd8044ecda'],
      }, {
        name: 'maroon',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20multicolor%2Fverde%2Fcv1.jpg?alt=media&token=82a29459-a4cc-42cb-80a3-854c7ff301fe', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20multicolor%2Fverde%2Fcv2.jpg?alt=media&token=17bff61c-3adf-481c-9fdf-66814d7e6e00'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Cazadora teddy bajo con cordón',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20teddy%20bajo%20con%20cord%C3%B3n%2Fcc1.jpg?alt=media&token=7737f727-bec8-4000-93bf-8f01c682700d',
      colors: [{
        name: 'gray',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20teddy%20bajo%20con%20cord%C3%B3n%2Fgris%2Fcg1.jpg?alt=media&token=894d6654-5228-4bfb-a164-a9e0ce35811e', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20teddy%20bajo%20con%20cord%C3%B3n%2Fgris%2Fcg2.jpg?alt=media&token=5f154bbd-dabf-4c7d-b0d2-42ee5d6d2040'],
      }, {
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20teddy%20bajo%20con%20cord%C3%B3n%2Fnegro%2Fcn1.jpg?alt=media&token=10e01e2e-acd3-4d2a-af80-64f8beb63e61', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20teddy%20bajo%20con%20cord%C3%B3n%2Fnegro%2Fcn2.jpg?alt=media&token=3f2b1616-735c-4b20-a4c0-9c393d9edcdd'],
      }, {
        name: 'maroon',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20teddy%20bajo%20con%20cord%C3%B3n%2Fcafe%2Fcc1.jpg?alt=media&token=da3da98b-a16f-41b1-bf33-4fee56e19117', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadora%20teddy%20bajo%20con%20cord%C3%B3n%2Fcafe%2Fcc2.jpg?alt=media&token=128398a6-9ba0-4f41-a767-0d97dfdbe3dc'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Cazadoras Cremallera Liso Casual',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Cremallera%20Liso%20Casual%2Fcm1.jpg?alt=media&token=c404f023-fcfc-4b15-bad2-9cbf9385910e',
      colors: [{
        name: 'pink',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Cremallera%20Liso%20Casual%2Fpink%2Fcr1.jpg?alt=media&token=ccc23e59-daad-4f9a-8647-492c5c911150', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Cremallera%20Liso%20Casual%2Fpink%2Fcr2.jpg?alt=media&token=f4d84a5b-3989-47b7-a03f-17a6754c1ad7'],
      }, {
        name: 'violet',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Cremallera%20Liso%20Casual%2Fviolet%2Fcm1.jpg?alt=media&token=079bc20f-093b-4314-8c54-df79b5022ba6', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Cremallera%20Liso%20Casual%2Fviolet%2Fcm2.jpg?alt=media&token=d18f2955-fa12-4ff7-9040-f79dd201faab'],
      }, {
        name: 'maroon',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Cremallera%20Liso%20Casual%2Fcafe%2Fcc1.jpg?alt=media&token=a33f7ca6-a7c9-4725-8d9e-2f7af37d7636', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Cremallera%20Liso%20Casual%2Fcafe%2Fcc2.jpg?alt=media&token=77969d3d-1754-4c06-bb92-d730a8e551cb'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Cazadoras Cremallera Monocolor',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Cremallera%20Monocolor%2Fcg1.jpg?alt=media&token=61f4c450-0673-4364-baf5-11684b90bac8',
      colors: [{
        name: 'blue',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Cremallera%20Monocolor%2Fazul%2Fca1.jpg?alt=media&token=a83bf2b2-7d59-4e47-bbdc-0646f328c22f', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Cremallera%20Monocolor%2Fazul%2Fca2.jpg?alt=media&token=c97d5411-fa05-4f3b-ac83-dcb281141b8b'],
      }, {
        name: 'gray',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Cremallera%20Monocolor%2Fgris%2Fcg1.jpg?alt=media&token=35300a0e-37b6-4cf6-8bcb-e8760b38063d', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Cremallera%20Monocolor%2Fgris%2Fcg2.jpg?alt=media&token=2ca1711a-3204-4833-a860-c595a5f417f6'],
      }, {
        name: 'pink',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Cremallera%20Monocolor%2Frosa%2Fcr1.jpg?alt=media&token=4bcec598-036d-4a14-9a51-0ecce90eb04e', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Cremallera%20Monocolor%2Frosa%2Fcr2.jpg?alt=media&token=770b002f-2e4a-4ad7-bd2c-d2af14cb0e41'],
      }, {
        name: 'green',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Cremallera%20Monocolor%2Fverde%2Fcv1.jpg?alt=media&token=6005587f-33e8-40f6-9403-fb410bf36cbf', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Cremallera%20Monocolor%2Fverde%2Fcv2.jpg?alt=media&token=42b6c36a-7531-4dd6-9fc4-fb52843dbe59'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Cazadoras Liso Casual',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Liso%20Casual%2Fcr1.jpg?alt=media&token=e840c100-be90-40c7-abec-e75bffa4588b',
      colors: [{
        name: 'blue',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Liso%20Casual%2Fazul%2Fca1.jpg?alt=media&token=7ba4f84f-3d5c-471a-a025-924942292ce5', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Liso%20Casual%2Fazul%2Fca2.jpg?alt=media&token=26518a7c-b591-4291-b802-22c3e26f4891'],
      },{
        name: 'white',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Liso%20Casual%2Fblanco%2Fcb1.jpg?alt=media&token=b0a0b1c8-e300-4718-8488-2626d8701b62', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Liso%20Casual%2Fblanco%2Fcb2.jpg?alt=media&token=56aacde1-7109-45a2-905d-5e7b8e14aa72'],
      },{
        name: 'pink',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Liso%20Casual%2Frosa%2Fcr1.jpg?alt=media&token=1c7ef94b-cd98-4703-b202-98731e6b0943', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FCazadoras%20Liso%20Casual%2Frosa%2Fcr2.jpg?alt=media&token=14b88910-ce56-4ff2-b0cc-f4298207bf92'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Chaqueta biker con tachuela con bordado floral',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20biker%20con%20tachuela%20con%20bordado%20floral%2Fcn1.jpg?alt=media&token=4b3f563e-16db-4e53-9a0a-f93305fd1a84',
      colors: [{
        name: 'white',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20biker%20con%20tachuela%20con%20bordado%20floral%2Fblanco%2Fcb1.jpg?alt=media&token=59995bec-0d5d-41bf-8840-4a4784a651c1', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20biker%20con%20tachuela%20con%20bordado%20floral%2Fblanco%2Fcb2.jpg?alt=media&token=b131e472-ef0f-4289-9151-f91b4dc0608e'],
      }, {
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20biker%20con%20tachuela%20con%20bordado%20floral%2Fnegro%2Fcn1.jpg?alt=media&token=ae00752e-b60e-43e2-a2fc-5137af9c7cdb', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20biker%20con%20tachuela%20con%20bordado%20floral%2Fnegro%2Fcn2.jpg?alt=media&token=00df1880-a51d-46f7-af92-fa084ee54d8f'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Chaqueta con capucha bajo con cordón con cremallera',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20con%20capucha%20bajo%20con%20cord%C3%B3n%20con%20cremallera%2Fcg1.jpg?alt=media&token=92ccd7ae-d510-4151-83ea-65cb30d0d3f6',
      colors: [{
        name: 'blue',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20con%20capucha%20bajo%20con%20cord%C3%B3n%20con%20cremallera%2Fazul%20Marino%2Fca1.jpg?alt=media&token=a52fb67a-9fd1-424e-b1ec-b2a8aeb2280d', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20con%20capucha%20bajo%20con%20cord%C3%B3n%20con%20cremallera%2Fazul%20Marino%2Fca2.jpg?alt=media&token=15c0bd42-308a-4491-87c2-7d37e67890ec'],
      }, {
        name: 'gray',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20con%20capucha%20bajo%20con%20cord%C3%B3n%20con%20cremallera%2Fgris%2Fcg1.jpg?alt=media&token=724127bf-7f71-4c9b-8f88-171cf3c1910a', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20con%20capucha%20bajo%20con%20cord%C3%B3n%20con%20cremallera%2Fgris%2Fcg2.jpg?alt=media&token=fddb7352-ca32-4b1e-aabf-7cfc1a667dfd'],
      }, {
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20con%20capucha%20bajo%20con%20cord%C3%B3n%20con%20cremallera%2Fnegro%2Fcn1.jpg?alt=media&token=06cc4a58-76c3-455a-be4e-3841343d6b59', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20con%20capucha%20bajo%20con%20cord%C3%B3n%20con%20cremallera%2Fnegro%2Fcn2.jpg?alt=media&token=d2b4bba6-bfd1-4749-a68d-cf813682edd9'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Chaqueta de pana de tartán de manga farol',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20de%20pana%20de%20tart%C3%A1n%20de%20manga%20farol%2Fcv1.jpg?alt=media&token=cfc4fd86-2d7d-40cc-bd0c-32262a95822f',
      colors: [{
        name: 'maroon',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20de%20pana%20de%20tart%C3%A1n%20de%20manga%20farol%2Fcafe%2Fcc1.jpg?alt=media&token=029c7cb5-fdc6-4ae5-9548-0f6b52875463', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20de%20pana%20de%20tart%C3%A1n%20de%20manga%20farol%2Fcafe%2Fcc2.jpg?alt=media&token=abab31e4-11cf-4a18-9ff5-c47a89bb782f'],
      }, {
        name: 'pink',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20de%20pana%20de%20tart%C3%A1n%20de%20manga%20farol%2Frosa%2Fcr1.jpg?alt=media&token=4cbc4314-7005-47fe-ada5-6d2bfd60d444', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20de%20pana%20de%20tart%C3%A1n%20de%20manga%20farol%2Frosa%2Fcr2.jpg?alt=media&token=90481c52-13fe-4e0a-8964-6636bd3adc7f'],
      }, {
        name: 'green',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20de%20pana%20de%20tart%C3%A1n%20de%20manga%20farol%2Fverde%2Fcv1.jpg?alt=media&token=eb62664b-475b-4073-9b8d-965953f2302a', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FChaqueta%20de%20pana%20de%20tart%C3%A1n%20de%20manga%20farol%2Fverde%2Fcv2.jpg?alt=media&token=03f1699d-d08f-47a6-99e9-321ac096985e'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Pantalones con estampado de mariposa',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20con%20estampado%20de%20mariposa%2Fpam1.jpg?alt=media&token=722ddc77-ee32-471d-9879-4bdc6efb7ada',
      colors: [{
        name: 'blue',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20con%20estampado%20de%20mariposa%2Fazul%2Fpam1.jpg?alt=media&token=c8608f30-ec67-4ac1-a69a-a9d357a4046c', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20con%20estampado%20de%20mariposa%2Fazul%2Fpam2.jpg?alt=media&token=8c99e8b6-0ef6-4866-ae60-83cefa6b2ee5'],
      }, {
        name: 'gray',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20con%20estampado%20de%20mariposa%2Fgris%2Fpgm1.jpg?alt=media&token=6cb09bce-5171-4265-998d-28a80f9e798e', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20con%20estampado%20de%20mariposa%2Fgris%2Fpgm2.jpg?alt=media&token=ad12535d-3ab7-4ba8-89f0-5128906e9ae1'],
      }, {
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20con%20estampado%20de%20mariposa%2Fnegro%2Fpnm1.jpg?alt=media&token=54b0aed2-c73e-4692-b58b-6a0414cc7823', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20con%20estampado%20de%20mariposa%2Fnegro%2Fpnm2.jpg?alt=media&token=0ba13c2c-0803-46f0-8103-bd1ecee20f37'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Pantalones cónicos de lunares de cintura alta',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20c%C3%B3nicos%20de%20lunares%20de%20cintura%20alta%2Fppn3.jpg?alt=media&token=5c9ceedb-63c9-4492-afd6-6312b3ca8c9e',
      colors: [{
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20c%C3%B3nicos%20de%20lunares%20de%20cintura%20alta%2Fnegro%2Fppn1.jpg?alt=media&token=5f4cb89b-1640-4f00-abdc-68c38cc0fe33', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20c%C3%B3nicos%20de%20lunares%20de%20cintura%20alta%2Fnegro%2Fppn2.jpg?alt=media&token=60ca3bf8-e7ae-4480-9d90-af9995f28bca', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20c%C3%B3nicos%20de%20lunares%20de%20cintura%20alta%2Fnegro%2Fppn3.jpg?alt=media&token=9bb6249e-625b-4632-a754-3e659aaebf27'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Pantalones de cintura alta de tartán',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20de%20cintura%20alta%20de%20tart%C3%A1n%2Fpc3.jpg?alt=media&token=9dfa65f1-67b2-41b8-b72d-70c792b0f520',
      colors: [{
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20de%20cintura%20alta%20de%20tart%C3%A1n%2Fnegro%2Fpc1.jpg?alt=media&token=89db731d-5d02-400b-be00-08edfd230e55', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20de%20cintura%20alta%20de%20tart%C3%A1n%2Fnegro%2Fpc2.jpg?alt=media&token=4cb03905-de3e-4a4f-843a-b167a73f6841', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20de%20cintura%20alta%20de%20tart%C3%A1n%2Fnegro%2Fpc3.jpg?alt=media&token=d69b055b-172a-452e-a155-2b329a0763eb'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Pantalones de pierna ancha de lunares',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20de%20pierna%20ancha%20de%20lunares%2Fpan1.jpg?alt=media&token=8315d9ec-f306-4eac-a497-566e86dc5e1c',
      colors: [{
        name: 'maroon',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20de%20pierna%20ancha%20de%20lunares%2Fcafe%2Fpac.jpg?alt=media&token=57c989ce-8959-4163-8844-ef7e05cbc987', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20de%20pierna%20ancha%20de%20lunares%2Fcafe%2Fpac2.jpg?alt=media&token=8548e075-aceb-4621-b646-4a2a3c384d11'],
      }, {
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20de%20pierna%20ancha%20de%20lunares%2Fnegro%2FPan2.jpg?alt=media&token=ba2c379b-f6a8-44c8-8892-7c3b625b96ef', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20de%20pierna%20ancha%20de%20lunares%2Fnegro%2Fpan1.jpg?alt=media&token=28bcf294-d270-48a2-80ec-f9a3f1dfe301'],
      }, {
        name: 'green',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20de%20pierna%20ancha%20de%20lunares%2Fverde%2Fpar1.jpg?alt=media&token=e4215c62-0460-4e0b-8cd2-f466017867ea', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20de%20pierna%20ancha%20de%20lunares%2Fverde%2Fpar2.jpg?alt=media&token=b9de26a2-a6b1-402d-995c-1f90adda7f7e'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Pantalones deportivos con cordón de Tie Dye',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20deportivos%20con%20cord%C3%B3n%20de%20Tie%20Dye%2Fptd3.jpg?alt=media&token=5479f5fb-e612-402f-a6b0-cf689b780593',
      colors: [{
        name: 'gray',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20deportivos%20con%20cord%C3%B3n%20de%20Tie%20Dye%2Fgris%2Fptd1.jpg?alt=media&token=454b8f56-2f33-464c-8e47-8a90f7e5777b', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20deportivos%20con%20cord%C3%B3n%20de%20Tie%20Dye%2Fgris%2Fptd2.jpg?alt=media&token=e335d0d2-98de-4ec1-b598-76ecbf788734', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20deportivos%20con%20cord%C3%B3n%20de%20Tie%20Dye%2Fgris%2Fptd3.jpg?alt=media&token=1ebb8fcd-d8e6-4a6e-8342-3be7d1d7beed'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Pantalones deportivos de cintura con cordón de lado de rayas de arcoíris',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20deportivos%20de%20cintura%20con%20cord%C3%B3n%20de%20lado%20de%20rayas%20de%20arco%C3%ADris%C3%A7%2Fpan2.jpg?alt=media&token=72c245ad-c327-4e35-957b-3c9867112b64',
      colors: [{
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20deportivos%20de%20cintura%20con%20cord%C3%B3n%20de%20lado%20de%20rayas%20de%20arco%C3%ADris%C3%A7%2Fnegro%2Fpan.jpg?alt=media&token=3df118a4-22ab-43d9-8e5e-d49c81467402', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20deportivos%20de%20cintura%20con%20cord%C3%B3n%20de%20lado%20de%20rayas%20de%20arco%C3%ADris%C3%A7%2Fnegro%2Fpan2.jpg?alt=media&token=ccb3eca2-b3d3-4c8a-acf2-d866731e94f2'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Pantalones deportivos de dos colores',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20deportivos%20de%20dos%20colores%2Fpmr2.jpg?alt=media&token=9409d87a-3423-4a69-886d-3db5a81b96bf',
      colors: [{
        name: 'maroon',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20deportivos%20de%20dos%20colores%2Fcafe%2Fpcn2.jpg?alt=media&token=bc9efb9e-8bfc-4da9-8d22-619748d20152'],
      }, {
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20deportivos%20de%20dos%20colores%2Fnegro%2Fpng2.jpg?alt=media&token=d5c5ed26-1b53-4ead-8408-8c74e0c5b5a3'],
      }, {
        name: 'pink',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPantalones%20deportivos%20de%20dos%20colores%2FRosa%2Fpmr2.jpg?alt=media&token=935ec096-f311-4b4d-8559-3bbdcb1f72b6'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Playera Banana Republic algodón',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Banana%20Republic%20algod%C3%B3n%2Fbr1.jpg?alt=media&token=43f7ed6e-b871-458e-be45-eafbeb173877',
      colors: [{
        name: 'white',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Banana%20Republic%20algod%C3%B3n%2Fblanco%2Fbb1.jpg?alt=media&token=fba5e33d-1789-4ff6-bc57-cfa78290308b', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Banana%20Republic%20algod%C3%B3n%2Fblanco%2Fbb2.jpg?alt=media&token=1ad4cd4b-b127-461c-8ac9-4018ed5a5ded'],
      }, {
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Banana%20Republic%20algod%C3%B3n%2Fnegro%2Fbn1.jpg?alt=media&token=9e1497bf-15f8-4f09-a071-92d22119bea2', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Banana%20Republic%20algod%C3%B3n%2Fnegro%2Fbn2.jpg?alt=media&token=c82052d3-4486-4f40-852e-325e95daff44'],
      }, {
        name: 'pink',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Banana%20Republic%20algod%C3%B3n%2Frosa%2Fbr1.jpg?alt=media&token=0a22713b-2451-46ac-aa87-5b91d52ac2cf', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Banana%20Republic%20algod%C3%B3n%2Frosa%2Fbr2.jpg?alt=media&token=dc36405c-a0b4-4b5e-91db-4e28f88572bf'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Playera Punt Roma cuello redondo',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Punt%20Roma%20cuello%20redondo%2Fnegra%201.jpg?alt=media&token=9a1618be-824b-4a7a-bc06-636c11f415e8',
      colors: [{
        name: 'white',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Punt%20Roma%20cuello%20redondo%2Fblanco%2Fblanco%201.jpg?alt=media&token=271a4d5d-6842-4d15-92e5-def86a37bf04', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Punt%20Roma%20cuello%20redondo%2Fblanco%2Fblanco%202.jpg?alt=media&token=2c1960a5-ef6f-4e6c-9c8f-1d1ca30d6fe6', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Punt%20Roma%20cuello%20redondo%2Fblanco%2Fblanco%203.jpg?alt=media&token=035ceaea-7644-4d80-8bf8-19319b03f07f'],
      }, {
        name: 'violet',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Punt%20Roma%20cuello%20redondo%2Fmorado%2Flila.jpg?alt=media&token=817db3ec-bd3e-43fb-aa60-69cd6bdc53b6', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Punt%20Roma%20cuello%20redondo%2Fmorado%2Flila2.jpg?alt=media&token=e3d944bd-3fc3-4287-8e0e-9a632a244264', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Punt%20Roma%20cuello%20redondo%2Fmorado%2Flila3.jpg?alt=media&token=53de6ddf-a290-4730-b308-4d41bb51745d'],
      }, {
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Punt%20Roma%20cuello%20redondo%2Fnegro%2Fnegra%201.jpg?alt=media&token=b1590c06-4e46-4ed4-bb89-1a16fab4db10', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Punt%20Roma%20cuello%20redondo%2Fnegro%2Fnegra%202.jpg?alt=media&token=67ae6173-7998-471f-a72f-ddbd949d4e96', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Punt%20Roma%20cuello%20redondo%2Fnegro%2Fnegra%203.jpg?alt=media&token=f2162f79-d14b-4624-b769-c70afd6e08e6'],
      }, {
        name: 'red',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Punt%20Roma%20cuello%20redondo%2Frojo%2Frojo%203.jpg?alt=media&token=46dc10c1-8e35-4092-9dd7-bc2672f839df', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Punt%20Roma%20cuello%20redondo%2Frojo%2Frojo1.jpg?alt=media&token=39eb68cc-45c8-48d3-bde9-d675882122f9', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FPlayera%20Punt%20Roma%20cuello%20redondo%2Frojo%2Frojo2.jpg?alt=media&token=c682816e-d54b-43d5-bc56-a810bc1a6c71'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Top con cordón lateral cruzado con plantas',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20con%20cord%C3%B3n%20lateral%20cruzado%20con%20plantas%2Ffab1.jpg?alt=media&token=0f245edc-bb5d-4be0-a342-a3ad48a73a43',
      colors: [{
        name: 'blue',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20con%20cord%C3%B3n%20lateral%20cruzado%20con%20plantas%2Fazul%2Ffab1.jpg?alt=media&token=b42cb9ad-1bc9-494e-bf20-ce504c5992db', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20con%20cord%C3%B3n%20lateral%20cruzado%20con%20plantas%2Fazul%2Ffab2.jpg?alt=media&token=9f9c0ed2-7c50-4fe9-a4e7-e6869fa6dfac', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20con%20cord%C3%B3n%20lateral%20cruzado%20con%20plantas%2Fazul%2Ffab3.jpg?alt=media&token=6e762329-181e-4c47-8595-6c66515b83b7'],
      }, {
        name: 'red',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20con%20cord%C3%B3n%20lateral%20cruzado%20con%20plantas%2Frojo%2Ffr1.jpg?alt=media&token=ed916359-3d49-488e-8a73-8f08ffe6296b', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20con%20cord%C3%B3n%20lateral%20cruzado%20con%20plantas%2Frojo%2Ffr2.jpg?alt=media&token=ce7e3245-3428-4ec3-976a-f01608054d18', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20con%20cord%C3%B3n%20lateral%20cruzado%20con%20plantas%2Frojo%2Ffr3.jpg?alt=media&token=3be19e57-a780-48e7-9082-70fd37c95f7a'],
      }, {
        name: 'green',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20con%20cord%C3%B3n%20lateral%20cruzado%20con%20plantas%2Fverde%2Ffv1.jpg?alt=media&token=8d2c9bba-d8cb-48a7-969a-6266fde27a1c', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20con%20cord%C3%B3n%20lateral%20cruzado%20con%20plantas%2Fverde%2Ffv2.jpg?alt=media&token=a6346140-9155-4523-af82-d6d90ecc4ffa', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20con%20cord%C3%B3n%20lateral%20cruzado%20con%20plantas%2Fverde%2Ffv3.jpg?alt=media&token=22efaee3-e96b-4be2-aaef-549611b5c9b1'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Top unicolor con cremallera',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20unicolor%20con%20cremallera%2Fcm3.jpg?alt=media&token=4571977a-cc3d-4470-804b-cd6585801f97',
      colors: [{
        name: 'maroon',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20unicolor%20con%20cremallera%2Fcafe%2Fcm1.jpg?alt=media&token=9ba0d2c1-ff62-464c-8113-50b8e2e2b7d5', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20unicolor%20con%20cremallera%2Fcafe%2Fcm2.jpg?alt=media&token=80fbcef2-ebe1-4a4b-885d-94e7eb91b0b3', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20unicolor%20con%20cremallera%2Fcafe%2Fcm3.jpg?alt=media&token=597598a3-b585-41fe-b4d8-4c83e2961484'],
      }, {
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20unicolor%20con%20cremallera%2Fnegro%2Fn1.jpg?alt=media&token=0824a065-8341-49cc-93b6-ba5d05f3dfa2', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20unicolor%20con%20cremallera%2Fnegro%2Fn2.jpg?alt=media&token=5557d22f-c353-436d-aa0c-f9c6af1be2b2', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20unicolor%20con%20cremallera%2Fnegro%2Fn3.jpg?alt=media&token=e230c84a-57c5-48b8-8c11-73fdf227b67e'],
      }, {
        name: 'red',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20unicolor%20con%20cremallera%2Ftinto%2Fr1.jpg?alt=media&token=a260aaac-acc7-4579-af81-410d9ad5cd55', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20unicolor%20con%20cremallera%2Ftinto%2Fr2.jpg?alt=media&token=8b504051-e7e5-4ba8-a921-91da2312fbd9', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FTop%20unicolor%20con%20cremallera%2Ftinto%2Fr3.jpg?alt=media&token=fe8fd395-9cc4-4c59-a5e3-951ed12be3f4'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Vestido ajustado con estampado geométrico',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FVestido%20ajustado%20con%20estampado%20geom%C3%A9trico%2Fvn1.jpg?alt=media&token=eeb69679-94ef-42ac-a840-4df2695784f4',
      colors: [{
        name: 'white',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FVestido%20ajustado%20con%20estampado%20geom%C3%A9trico%2Fblanco%2Fvb1.jpg?alt=media&token=4128dc93-5253-4ba7-88eb-4bf4d1455be3', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FVestido%20ajustado%20con%20estampado%20geom%C3%A9trico%2Fblanco%2Fvb2.jpg?alt=media&token=3c751288-326e-4930-84fc-8a35d5ac8021'],
      }, {
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FVestido%20ajustado%20con%20estampado%20geom%C3%A9trico%2Fnegro%2Fvn1.jpg?alt=media&token=f6cccb64-f3c3-4692-a43f-10dd5bbe2c3a', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FVestido%20ajustado%20con%20estampado%20geom%C3%A9trico%2Fnegro%2Fvn2.jpg?alt=media&token=ed7ba52f-b934-4626-8469-eb86ac26c546'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Vestido de cuadros ribete',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FVestido%20de%20cuadros%20ribete%2Fvn1.jpg?alt=media&token=7cf8b5a1-f3c4-41dc-84b2-a56185bfe7b6',
      colors: [{
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FVestido%20de%20cuadros%20ribete%2Fnegro%2Fvn1.jpg?alt=media&token=5f1f075b-57c1-4092-947b-4767fb7ef256', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FVestido%20de%20cuadros%20ribete%2Fnegro%2Fvn2.jpg?alt=media&token=e0a97287-6006-4e0a-97b4-5edb4f238622'],
      }, {
        name: 'red',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FVestido%20de%20cuadros%20ribete%2Frojo%2Fvr1.jpg?alt=media&token=8d81764b-da4b-41c3-8954-4e648d622254', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FVestido%20de%20cuadros%20ribete%2Frojo%2Fvr2.jpg?alt=media&token=11d4215d-bcdf-4328-9683-92d002fc4fb2'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Vestido de tirantes de lunares de cuello V doble',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FVestido%20de%20tirantes%20de%20lunares%20de%20cuello%20V%20doble%2Fva1.jpg?alt=media&token=0669e9b5-9b57-448b-807f-dc4a6b7bd278',
      colors: [{
        name: 'yellow',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FVestido%20de%20tirantes%20de%20lunares%20de%20cuello%20V%20doble%2Famarillo%2Fvam.jpg?alt=media&token=32cb1e6c-aa5f-4ca4-8051-a4d81c38d5d8', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FVestido%20de%20tirantes%20de%20lunares%20de%20cuello%20V%20doble%2Famarillo%2Fvam1.jpg?alt=media&token=44c40b52-28e0-4fa7-9a61-e63a77404a8c'],
      }, {
        name: 'blue',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FVestido%20de%20tirantes%20de%20lunares%20de%20cuello%20V%20doble%2Fazul%2Fva1.jpg?alt=media&token=3fb45fd2-c106-468a-af14-732b084011ee', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FVestido%20de%20tirantes%20de%20lunares%20de%20cuello%20V%20doble%2Fazul%2Fva2.jpg?alt=media&token=ec5ed27b-f9cd-4f10-bc3a-9a23f8b4fee6'],
      }, {
        name: 'red',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FVestido%20de%20tirantes%20de%20lunares%20de%20cuello%20V%20doble%2Frojo%2Fvr.jpg?alt=media&token=e6cf4165-7eb6-47ba-9a09-44385fd07919', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FVestido%20de%20tirantes%20de%20lunares%20de%20cuello%20V%20doble%2Frojo%2Fvr1.jpg?alt=media&token=19cbff75-a574-479d-9e47-7601e4c6aaef'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Blusa manga larga',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20manga%20larga%2Fca2.jpg?alt=media&token=5612e932-14a0-45a2-954f-20320d7ab0e0',
      colors: [{
        name: 'yellow',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20manga%20larga%2Famarillo%2Fca1.jpg?alt=media&token=76fc638d-b11b-4704-bc96-8759d050d235', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20manga%20larga%2Famarillo%2Fca2.jpg?alt=media&token=c9474bde-bc7c-47a4-b79a-6216bf2523f1', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20manga%20larga%2Famarillo%2Fca3.jpg?alt=media&token=9051e049-89a4-4716-bddb-e757d8960f27'],
      }, {
        name: 'black',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20manga%20larga%2Fnegro%2Fcn1.jpg?alt=media&token=3d824463-c26e-47d2-8413-b3d689781aba', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20manga%20larga%2Fnegro%2Fcn2.jpg?alt=media&token=528144e4-b654-483e-8bb1-49ef2dbb9dc9', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20manga%20larga%2Fnegro%2Fcn3.jpg?alt=media&token=17a75fa4-18f7-4110-b830-2cb311cc77e4'],
      }, {
        name: 'red',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20manga%20larga%2Frojo%2Fca2.jpg?alt=media&token=0ea723ef-244f-40e6-8408-67c3603f3434', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20manga%20larga%2Frojo%2Fcar.jpg?alt=media&token=41de9de4-e5fc-4c9c-9ded-6cdfc585fb78', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/mujer%2FBlusa%20manga%20larga%2Frojo%2Fcar1.jpg?alt=media&token=b6545847-54e5-4691-8266-3b5451546283'],
      }],
      cost: getRandomCost(),
    }],
  },
  'Niños': {
    image: "https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2Fpr1.jpg?alt=media&token=3ec3602a-b3ee-4ab6-b554-2e1156ea9966",
    products: [{
      id: uuidv4(),
      name: 'Camisa con lazo delantero de cuadros de tartán con pantalones de tiras',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FCamisa%20con%20lazo%20delantero%20de%20cuadros%20de%20tart%C3%A1n%20con%20pantalones%20de%20tiras%2Ft1.jpg?alt=media&token=83a0c635-afa1-4355-ac32-7334db8ad7ae',
      colors: [{
        name: 'red',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FCamisa%20con%20lazo%20delantero%20de%20cuadros%20de%20tart%C3%A1n%20con%20pantalones%20de%20tiras%2Frojo%2Ft1.jpg?alt=media&token=5b868234-68de-4c0b-b1a4-2517d131be5d', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FCamisa%20con%20lazo%20delantero%20de%20cuadros%20de%20tart%C3%A1n%20con%20pantalones%20de%20tiras%2Frojo%2Ft2.jpg?alt=media&token=32c18411-376f-4b84-9a6d-adb0d8058ab5'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta con fruncido con estampado de letra con pantalones de tiras de leopardo',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FCamiseta%20con%20fruncido%20con%20estampado%20de%20letra%20con%20pantalones%20de%20tiras%20de%20leopardo%2Fcc.jpg?alt=media&token=903ed86d-43f4-4741-91f7-c4cadacc9b34',
      colors: [{
        name: 'maroon',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FCamiseta%20con%20fruncido%20con%20estampado%20de%20letra%20con%20pantalones%20de%20tiras%20de%20leopardo%2Fcafe%2Fcc.jpg?alt=media&token=44dcca25-9750-4cfb-88d3-5de3c1c88ebe', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FCamiseta%20con%20fruncido%20con%20estampado%20de%20letra%20con%20pantalones%20de%20tiras%20de%20leopardo%2Fcafe%2Fcc1.jpg?alt=media&token=88471b7d-e2a5-4467-b066-eeb88f01eb7c'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Camiseta de niñitas con estampado de conejo con lazo delantero con pantalones con volante',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FCamiseta%20de%20ni%C3%B1itas%20con%20estampado%20de%20conejo%20con%20lazo%20delantero%20con%20pantalones%20con%20volante%2Fr2.jpg?alt=media&token=55f7aab4-463b-422f-a388-bcfda0fae632',
      colors: [{
        name: 'pink',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FCamiseta%20de%20ni%C3%B1itas%20con%20estampado%20de%20conejo%20con%20lazo%20delantero%20con%20pantalones%20con%20volante%2Frosa%2Fr2.jpg?alt=media&token=b834e9bc-e910-4605-821c-eaffddc68642'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      name: 'Capucha con estampado 3D con estampado de tie dye con pantalones deportivos',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FCapucha%20con%20estampado%203D%20con%20estampado%20de%20tie%20dye%20con%20pantalones%20deportivos%2Fpc2.jpg?alt=media&token=c9a1a469-5ad9-4c3a-b7bb-4ba12f978ca6',
      colors: [{
        name: 'white',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FCapucha%20con%20estampado%203D%20con%20estampado%20de%20tie%20dye%20con%20pantalones%20deportivos%2Fblanco%2Fpc2.jpg?alt=media&token=35511686-eef9-437d-a9d0-2e5097556446'],
      }],
      cost: getRandomCost(),
    }, {
      id: uuidv4(),
      cost: getRandomCost(),
      name: 'Capucha con estampado 3D con estampado de tie dye con pantalones deportivos',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FCapucha%20con%20estampado%203D%20con%20estampado%20de%20tie%20dye%20con%20pantalones%20deportivos%2Fpc2.jpg?alt=media&token=c9a1a469-5ad9-4c3a-b7bb-4ba12f978ca6',
      colors: [{
        name: 'white',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FCapucha%20con%20estampado%203D%20con%20estampado%20de%20tie%20dye%20con%20pantalones%20deportivos%2Fblanco%2Fpc2.jpg?alt=media&token=35511686-eef9-437d-a9d0-2e5097556446'],
      }],
    }, {
      id: uuidv4(),
      cost: getRandomCost(),
      name: 'Mono de niñitas de cintura reunida con nudo unicolor',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FMono%20de%20ni%C3%B1itas%20de%20cintura%20reunida%20con%20nudo%20unicolor%2Fpa2.jpg?alt=media&token=f797f150-925e-4924-9556-8eb61d72e1e0',
      colors: [{
        name: 'yellow',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FMono%20de%20ni%C3%B1itas%20de%20cintura%20reunida%20con%20nudo%20unicolor%2Famarillo%2Fpa2.jpg?alt=media&token=a74c90e6-040b-4424-8fc1-3d6cd1aa93be'],
      }],
    }, {
      id: uuidv4(),
      cost: getRandomCost(),
      name: 'Mono de niñitas ribete fruncido con pantalones floral de margarita con diademas',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FMono%20de%20ni%C3%B1itas%20ribete%20fruncido%20con%20pantalones%20floral%20de%20margarita%20con%20diademas%2Frm2.jpg?alt=media&token=9d66619a-e701-489a-a73a-7cf7211b31d2',
      colors: [{
        name: 'pink',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FMono%20de%20ni%C3%B1itas%20ribete%20fruncido%20con%20pantalones%20floral%20de%20margarita%20con%20diademas%2Frosa%2Frm2.jpg?alt=media&token=bb1c0d40-c8bd-4a44-b245-27aca9fc941a'],
      }],
    }, {
      id: uuidv4(),
      cost: getRandomCost(),
      name: 'Sudadera con estampado de dinosaurio de dibujos animados con pantalones',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FSudadera%20con%20estampado%20de%20dinosaurio%20de%20dibujos%20animados%20con%20pantalones%2Fd1.jpg?alt=media&token=e82cb28a-d8d9-4d08-9f2d-bf5e11c647dd',
      colors: [{
        name: 'yellow',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FSudadera%20con%20estampado%20de%20dinosaurio%20de%20dibujos%20animados%20con%20pantalones%2Famarillo%2Fd1.jpg?alt=media&token=552580ae-8f3c-404d-859a-46a791013cd5', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FSudadera%20con%20estampado%20de%20dinosaurio%20de%20dibujos%20animados%20con%20pantalones%2Famarillo%2Fd2.jpg?alt=media&token=1cc829af-9d9f-47e3-9a98-2482d2314462'],
      }],
    }, {
      id: uuidv4(),
      cost: getRandomCost(),
      name: 'Sudadera de niñitos con estampado de letra y camuflaje con pantalones deportivos',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FSudadera%20de%20ni%C3%B1itos%20con%20estampado%20de%20letra%20y%20camuflaje%20con%20pantalones%20deportivos%2Fpa1.jpg?alt=media&token=2db30591-3bee-41eb-99e4-5ee2011c60a9',
      colors: [{
        name: 'yellow',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FSudadera%20de%20ni%C3%B1itos%20con%20estampado%20de%20letra%20y%20camuflaje%20con%20pantalones%20deportivos%2Famarillo%2Fpa1.jpg?alt=media&token=d67a1251-136f-428c-a0b0-a310c0d1966a', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FSudadera%20de%20ni%C3%B1itos%20con%20estampado%20de%20letra%20y%20camuflaje%20con%20pantalones%20deportivos%2Famarillo%2Fpa2.jpg?alt=media&token=395849ca-e31e-4300-af6d-c534b1a61f3f'],
      }],
    }, {
      id: uuidv4(),
      cost: getRandomCost(),
      name: 'Sudadera de niñitos con parche con letra con pantalones de rayas',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FSudadera%20de%20ni%C3%B1itos%20con%20parche%20con%20letra%20con%20pantalones%20de%20rayas%2Fpr1.jpg?alt=media&token=137f71ea-c767-4496-a643-e4242e31d5af',
      colors: [{
        name: 'red',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FSudadera%20de%20ni%C3%B1itos%20con%20parche%20con%20letra%20con%20pantalones%20de%20rayas%2Frojo%2Fpr1.jpg?alt=media&token=977af024-0cf5-46fb-8586-a805f693f479', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FSudadera%20de%20ni%C3%B1itos%20con%20parche%20con%20letra%20con%20pantalones%20de%20rayas%2Frojo%2Fpr2.jpg?alt=media&token=865f089e-5bf9-4dbf-b220-7ce8a55891fd'],
      }],
    }, {
      id: uuidv4(),
      cost: getRandomCost(),
      name: 'Vestido con lazo ribete con fruncido',
      image: 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FVestido%20con%20lazo%20ribete%20con%20fruncido%2Fvt1.jpg?alt=media&token=6f74d7f5-fd33-4b04-95e5-062d8ee969c7',
      colors: [{
        name: 'maroon',
        images: ['https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FVestido%20con%20lazo%20ribete%20con%20fruncido%2Ftinto%2Fvt1.jpg?alt=media&token=5f578b99-7082-4ea3-9616-827150f51353', 'https://firebasestorage.googleapis.com/v0/b/tienda-5f376.appspot.com/o/ninos%2FVestido%20con%20lazo%20ribete%20con%20fruncido%2Ftinto%2Fvt2.jpg?alt=media&token=29302e07-16cd-4b18-b97a-da8f6eac6174'],
      }],
    }],
  },
}