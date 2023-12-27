import httpClient from "../config/httpClient";
import marketSection from '../assets/images/market-section.jpg';
const properties = [
    { 
        id: 1,
        title: 'Res. Onix.',
        address:'Trigal Centro, Valencia' ,
        image: marketSection, 
        price: '$80.700',
        agent: {
            name: 'Juan Perez',
            phone: '0414-1234567',
            email: 'juanperez@gmail.com',
        },
        images: [
            marketSection,
            marketSection,
            marketSection,
        ],
        featured: true,
        props: {
            rooms: 3,
            bathrooms: 2,
            parking: 2,
            area: 120,
        }
    },
    { 
        id: 2,
        title: 'Res. Onix.',
        address:'Trigal Centro, Valencia' ,
        image: marketSection, 
        price: '$80.700',
        agent: {
            name: 'Juan Perez',
            phone: '0414-1234567',
            email: 'juanperez@gmail.com',
        },
        images: [
            marketSection,
            marketSection,
            marketSection,
        ],
        featured: true,
        props: {
            rooms: 3,
            bathrooms: 2,
            parking: 2,
            area: 120,
        }
    },
    { 
        id: 3,
        title: 'Res. Onix.',
        address:'Trigal Centro, Valencia' ,
        image: marketSection, 
        price: '$80.700',
        agent: {
            name: 'Juan Perez',
            phone: '0414-1234567',
            email: 'juanperez@gmail.com',
        },
        images: [
            marketSection,
            marketSection,
            marketSection,
        ],
        featured: true,
        props: {
            rooms: 3,
            bathrooms: 2,
            parking: 2,
            area: 120,
        }
    },
    { 
        id: 4,
        title: 'Res. Onix.',
        address:'Trigal Centro, Valencia' ,
        image: marketSection, 
        price: '$80.700',
        agent: {
            name: 'Juan Perez',
            phone: '0414-1234567',
            email: 'juanperez@gmail.com',
        },
        images: [
            marketSection,
            marketSection,
            marketSection,
        ],
        featured: false,
        props: {
            rooms: 3,
            bathrooms: 2,
            parking: 2,
            area: 120,
        }
    },
    { 
        id: 5,
        title: 'Res. Onix.',
        address:'Trigal Centro, Valencia' ,
        image: marketSection, 
        price: '$80.700',
        agent: {
            name: 'Juan Perez',
            phone: '0414-1234567',
            email: 'juanperez@gmail.com',
        },
        images: [
            marketSection,
            marketSection,
            marketSection,
        ],
        featured: false,
        props: {
            rooms: 3,
            bathrooms: 2,
            parking: 2,
            area: 120,
        }
    },
    { 
        id: 6,
        title: 'Res. Onix.',
        address:'Trigal Centro, Valencia' ,
        image: marketSection, 
        price: '$80.700',
        agent: {
            name: 'Juan Perez',
            phone: '0414-1234567',
            email: 'juanperez@gmail.com',
        },
        images: [
            marketSection,
            marketSection,
            marketSection,
        ],
        featured: false,
        props: {
            rooms: 3,
            bathrooms: 2,
            parking: 2,
            area: 120,
        }
    },
    { 
        id: 7,
        title: 'Res. Onix.',
        address:'Trigal Centro, Valencia' ,
        image: marketSection, 
        price: '$80.700',
        agent: {
            name: 'Juan Perez',
            phone: '0414-1234567',
            email: 'juanperez@gmail.com',
        },
        images: [
            marketSection,
            marketSection,
            marketSection,
        ],
        featured: false,
        props: {
            rooms: 3,
            bathrooms: 2,
            parking: 2,
            area: 120,
        }
    },
    { 
        id: 8,
        title: 'Res. Onix.',
        address:'Trigal Centro, Valencia' ,
        image: marketSection, 
        price: '$80.700',
        agent: {
            name: 'Juan Perez',
            phone: '0414-1234567',
            email: 'juanperez@gmail.com',
        },
        images: [
            marketSection,
            marketSection,
            marketSection,
        ],
        featured: false,
        props: {
            rooms: 3,
            bathrooms: 2,
            parking: 2,
            area: 120,
        }
    },
    { 
        id: false,
        title: 'Res. Onix.',
        address:'Trigal Centro, Valencia',
        image: marketSection, 
        price: '$80.700',
        agent: {
            name: 'Juan Perez',
            phone: '0414-1234567',
            email: 'juanperez@gmail.com',
        },
        images: [
            marketSection,
            marketSection,
            marketSection,
        ],
        featured: false,
        props: {
            rooms: 3,
            bathrooms: 2,
            parking: 2,
            area: 120,
        }
    },
  ];


export const getEstates = async (page, limit, query) => {
  try {
    // const response = await  httpClient.get(`/estates/list?page=${page}&limit=${limit}${query? `&${query}` : ''}`)
    // return response.data
    return properties;
  } catch (e) {
    console.log("Error during the fetching", e)
  }
}

export const getEstate = async (id) => {
    try {
      // const response = await  httpClient.get(`/estates/${id}`)
      // return response.data
      return properties.find(property => property.id === Number(id)); 
    } catch (e) {
      console.log("Error during the fetching", e)
    }
  }
