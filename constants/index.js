export const categories = ["CAM", "CHUỐI", "DỨA", "TÁO", "MẬN"];
export const featuredFruits = [
  {
    name: "Cam Úc",
    price: "40.000",
    stars: 4,
    desc: "Ngọt và mọng nước",
    shadow: "orange",
    image: require("../assets/images/orange.png"),
    color: (opacity) => `rgba(251, 216, 146, ${opacity})`,
  },
  {
    name: "Mận đỏ",
    shadow: "red",
    price: "12.000",
    stars: 3,
    desc: "Ngọt và mọng nước",
    image: require("../assets/images/peach.png"),
    color: (opacity) => `rgba(255, 170, 157, ${opacity})`,
  },

  {
    name: "Nho đen",
    price: "40.000",
    stars: 4,
    desc: "Ngọt và mọng nước",
    shadow: "purple",
    image: require("../assets/images/grapes.png"),
    color: (opacity) => `rgba(214, 195, 246, ${opacity})`,
  },

  {
    name: "Nho đỏ",
    price: "30.000",
    stars: 4,
    desc: "Ngọt và mọng nước",
    shadow: "red",
    image: require("../assets/images/redOrange.png"),
    color: (opacity) => `rgba(255, 163, 120, ${opacity})`,
  },
  {
    name: "Táo xanh",
    price: "15.000",
    stars: 4,
    desc: "Ngọt và mọng nước",
    shadow: "green",
    image: require("../assets/images/greenApple.png"),
    color: (opacity) => `rgba(139, 243, 139, ${opacity})`,
  },
];

export const cartItems = [
  {
    name: "Cam úc",
    price: "40.000",
    qty: 4,
    desc: "Ngọt và mọng nước",
    shadow: "orange",
    image: require("../assets/images/orange.png"),
    color: (opacity) => `rgba(251, 216, 146, ${opacity})`,
  },
  {
    name: "Mận đỏ",
    shadow: "red",
    price: "12.000",
    qty: 3,
    desc: "Ngọt và mọng nước",
    image: require("../assets/images/peach.png"),
    color: (opacity) => `rgba(255, 170, 157, ${opacity})`,
  },

  {
    name: "Nho đen",
    price: "40.000",
    qty: 2,
    desc: "Ngọt và mọng nước",
    shadow: "purple",
    image: require("../assets/images/grapes.png"),
    color: (opacity) => `rgba(214, 195, 246, ${opacity})`,
  },
  {
    name: "Táo xanh",
    price: "15.000",
    qty: 2,
    desc: "Ngọt và mọng nước",
    shadow: "green",
    image: require("../assets/images/greenApple.png"),
    color: (opacity) => `rgba(139, 243, 139, ${opacity})`,
  },
];
