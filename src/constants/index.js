import { food1,food2,food3, food4, pasta } from "../assets"

export const popularDishes = [
    {
        id: 1,
        image: food1,
        name: 'Butter Chicken',
        numberOfOrders: 250,
    },
    {
        id: 2,
        image: food2,
        name: 'Butter Chicken',
        numberOfOrders: 250,
    },
    {
        id: 3,
        image: food3,
        name: 'Butter Chicken',
        numberOfOrders: 250,
    },
    {
        id: 4,
        image: food4,
        name: 'Butter Chicken',
        numberOfOrders: 250,
    },
    {
        id: 5,
        image: pasta,
        name: 'Butter Chicken',
        numberOfOrders: 250,
    },
    {
        id: 6,
        image: food1,
        name: 'Butter Chicken',
        numberOfOrders: 250,
    },
    {
        id: 7,
        image: food2,
        name: 'Butter Chicken',
        numberOfOrders: 250,
    },
    {
        id: 8,
        image: food3,
        name: 'Butter Chicken',
        numberOfOrders: 250,
    },
    {
        id: 9,
        image: food4,
        name: 'Butter Chicken',
        numberOfOrders: 250,
    },
    {
        id: 10,
        image: pasta,
        name: 'Butter Chicken',
        numberOfOrders: 250,
    },
]

export const tables = [
    {id: 1, name: 'Table 1', status: 'booked', initial: 'AM', seats: 4},
    {id: 2, name: 'Table 2', status: 'available', initial: 'PM', seats: 4},
    {id: 3, name: 'Table 3', status: 'booked', initial: 'AM', seats: 4},
    {id: 4, name: 'Table 4', status: 'available', initial: 'PM', seats: 4},
    {id: 5, name: 'Table 5', status: 'available', initial: 'AM', seats: 4},
    {id: 6, name: 'Table 6', status: 'booked', initial: 'PM', seats: 4},
    {id: 7, name: 'Table 7', status: 'available', initial: 'AM', seats: 4},
    {id: 8, name: 'Table 8', status: 'booked', initial: 'PM', seats: 4},
    {id: 9, name: 'Table 9', status: 'booked', initial: 'AM', seats: 4},
    {id: 10, name: 'Table 10', status: 'available', initial: 'PM', seats: 4},
    {id: 11, name: 'Table 11', status: 'available', initial: 'AM', seats: 4},
    {id: 12, name: 'Table 12', status: 'booked', initial: 'PM', seats: 4},
]

export const salads = [
    {
        id: 1,
        name: 'Caesar Salad',
        price: 250,
        category: 'Vegetarian',
    },
    {
        id: 2,
        name: 'Greek Salad',
        price: 250,
        category: 'Vegetarian',
    },
    {
        id: 3,
        name: 'Fruit Salad',
        price: 250,
        category: 'Vegetarian',
    },
    {
        id: 4,
        name: 'Caesar Salad',
        price: 250,
        category: 'Vegetarian',
    },
    {
        id: 5,
        name: 'Caesar Salad',
        price: 250,
        category: 'Vegetarian',
    },
]

export const desserts = [
    {
        id: 1,
        name: 'Chocolate Cake',
        price: 250,
        category: 'Vegetarian',
    },
    {
        id: 2,
        name: 'Chocolate Cake',
        price: 250,
        category: 'Vegetarian',
    },
    {
        id: 3,
        name: 'Chocolate Cake',
        price: 250,
        category: 'Vegetarian',
    },
    {
        id: 4,
        name: 'Chocolate Cake',
        price: 250,
        category: 'Vegetarian',
    },
    {
        id: 5,
        name: 'Chocolate Cake',
        price: 250,
        category: 'Vegetarian',
    },
]

export const pizzas = [
    {
        id: 1,
        name: 'Cheese Pizza',
        price: 250,
        category: 'Pizza',
    }
]

export const alchoholicDrinks = [
    {
        id: 1,
        name: 'Wine',
        price: 250,
        category: 'Alchoholic',
    }
]

export const menus = [
    {id: 1,bgColor: "#025cca", name: 'Starters', icon: 1, items: salads},
    {id: 2,bgColor: "#be3e3f", name: 'Main Course', icon: 6,items: desserts},
    {id: 3,bgColor: "#02ca3a", name: 'Beverages', icon: 6,items: pizzas},
    {id: 4,bgColor: "#f6b100", name: 'Soups', icon: 6,items: alchoholicDrinks},
    {id: 5,bgColor: "#025cca", name: 'Desserts', icon: 4,items: salads},
    {id: 6,bgColor:"#be3e3f" , name: 'Pizzas', icon: 3,items: salads},
    {id: 7,bgColor: "#f6b100", name: 'Alcoholic Drinks', icon: 6,items: salads},
    {id: 8,bgColor: "#02ca3a", name: 'Salads', icon: 5,items: salads},
]


export const itemsData = [
    {title: "Total Categories", percentage: "12%", value: "8", color: "#5b45b0", isIncrease: true},
    {title: "Total Dishes", percentage: "12%", value: "50", color: "#285430", isIncrease: true},
    {title: "Active Orders", percentage: "12%", value: "12", color: "#735f32", isIncrease: true},
    {title: "Total Tables", percentage: "12%", value: "10", color: "#7f167f"},
]

export const metricsData = [
    {title: "Revenue", percentage: "12%", value: "50", color: "blue"},
    {title: "Outbound Clicks", percentage: "16%", value: "50", color: "#288830", isIncrease: true},
    {title: "Total Customer", percentage: "10%", value: "50", color: "blue", isIncrease: true},
    {title: "Event Count", percentage: "10%", value: "50", color: "#770000"},
  ]


export const orders = [
    {
        id: "101",
        customer: "Amrit Raj",
        status: "Ready",
        dateTime: "January 18, 2025 08: 32 PM",
        items: 8,
        tableNo: 3,
        total: 250.0,
    },
    {
        id: "102",
        customer: "Amrit Raj",
        status: "In Progress",
        dateTime: "January 18, 2025 08: 32 PM",
        items: 8,
        tableNo: 3,
        total: 250.0,
    },
]