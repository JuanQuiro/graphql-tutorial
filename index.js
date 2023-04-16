import { ApolloServer } from 'apollo-server';
import {gql} from 'apollo-server';
const clientesVenezolanos = [

  {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 35,
    ciudad: 'Caracas',
    estado: 'Distrito Capital'
  },
  {
    nombre: 'María',
    apellido: 'García',
    edad: 28,
    ciudad: 'Maracaibo',
    estado: 'Zulia'
  },
  {
    nombre: 'Pedro',
    apellido: 'Rodríguez',
    edad: 42,
    ciudad: 'Valencia',
    estado: 'Carabobo'
  },
  {
    nombre: 'Luisa',
    apellido: 'Hernández',
    edad: 25,
    ciudad: 'Barquisimeto',
    estado: 'Lara'
  }
];

const typeDefs = gql`
type ClienteVenezolano {
    nombre: String
    apellido: String
    edad: Int
    ciudad: String
    estado: String
}
type Query {
    clientesVenezolanos: Int!
    allclientesVenezolanos: [ClienteVenezolano]!
}
`

const resolvers = {
    Query: {
        clientesVenezolanos: () => clientesVenezolanos.length,
        allclientesVenezolanos: () => clientesVenezolanos
    }
}
const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => { console.log(`Servidor corriendo en ${url}`)});