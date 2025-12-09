import { useState } from "react";
import Logoespeto from "../assets/Logoespeto.png";

const menuItems = [
  {
    id: 1,
    category: "Espetos de Carne",
    name: "Contra-filé",
    description: "Na brasa, tempero da casa.",
    price: 9.9,
    image: "/src/assets/items/contra-file.png",
  },
  {
    id: 2,
    category: "Espetos de Carne",
    name: "Picanha",
    description: "Seleção especial.",
    price: 14.9,
    image: "/src/assets/items/picanha.png",
  },
  {
    id: 3,
    category: "Espetos de Carne",
    name: "Linguiça Toscana",
    description: "Artesanal.",
    price: 7.5,
    image: "/src/assets/items/linguica.png",
  },

  {
    id: 4,
    category: "Espetos de Frango",
    name: "Frango com Bacon",
    description: "Cubos envoltos em bacon.",
    price: 8.9,
    image: "/src/assets/items/frango-bacon.png",
  },
  {
    id: 5,
    category: "Espetos de Frango",
    name: "Frango Temperado",
    description: "Coxa e sobrecoxa desossada.",
    price: 7.9,
    image: "/src/assets/items/frango-temperado.png",
  },

  {
    id: 6,
    category: "Gourmet",
    name: "Espeto de Legumes",
    description: "Legumes selecionados na brasa.",
    price: 8.5,
    image: "/src/assets/items/legumes.png",
  },
  {
    id: 7,
    category: "Gourmet",
    name: "Queijo Coalho",
    description: "Com orégano.",
    price: 9.0,
    image: "/src/assets/items/queijo-coalho.png",
  },

  {
    id: 8,
    category: "Combos",
    name: "Combo Casal",
    description: "6 espetos + porção + 2 refri.",
    price: 79.9,
    image: "/src/assets/items/combo-casal.png",
  },
  {
    id: 9,
    category: "Combos",
    name: "Combo Família",
    description: "12 espetos + 2 porções + refri 2L.",
    price: 149.9,
    image: "/src/assets/items/combo-familia.png",
  },

  {
    id: 10,
    category: "Bebidas",
    name: "Refrigerante Lata",
    description: "Diversos sabores.",
    price: 6.0,
    image: "/src/assets/items/refrigerante.png",
  },
  {
    id: 11,
    category: "Bebidas",
    name: "Água Mineral",
    description: "Com ou sem gás.",
    price: 4.0,
    image: "/src/assets/items/agua.png",
  },
  {
    id: 12,
    category: "Bebidas",
    name: "Chopp 300ml",
    description: "Geladíssimo.",
    price: 9.0,
    image: "/src/assets/items/chopp.png",
  },
];

export default function Menu() {
  const [selected, setSelected] = useState("Todos");

  const categories = [
    "Todos",
    "Espetos de Carne",
    "Espetos de Frango",
    "Gourmet",
    "Combos",
    "Bebidas",
  ];

  const filtered =
    selected === "Todos"
      ? menuItems
      : menuItems.filter((item) => item.category === selected);

  return (
    <div className="container">
      <header className="center header">
        <img src={Logoespeto} alt="Logo Espetim do Nin" className="logo" />

        <h1 className="title">ESPETIM DO NIN</h1>
        <p className="subtitle">Cardápio Digital</p>
      </header>

      {/* CATEGORIAS */}
      <div className="category-row">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`category-btn ${selected === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* LISTA */}
      <div className="list">
        {filtered.map((item) => (
          <div key={item.id} className="card">
            {/* IMAGEM */}
            <img src={item.image} alt={item.name} className="item-image" />

            <div className="card-main">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="tag">{item.category}</span>
            </div>

            <div className="price">
              R$ {item.price.toFixed(2).replace(".", ",")}
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Espetim do Nin — Todos os direitos
        reservados
      </footer>
    </div>
  );
}
