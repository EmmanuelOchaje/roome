const products = [
  {
    id: 1,
    name: "Scandinavian Lounge Chair",
    price: 450,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
    description:
      "Minimalist lounge chair with solid oak legs and premium fabric upholstery.",
  },
  {
    id: 2,
    name: "Velvet Accent Chair",
    price: 310,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500",
    description:
      "Bold velvet accent chair with tapered legs, perfect for any corner.",
  },
  {
    id: 3,
    name: "Wicker Rattan Chair",
    price: 195,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500",
    description:
      "Handwoven rattan chair with a soft cushioned seat, ideal for boho interiors.",
  },
  {
    id: 4,
    name: "Mid-Century Armchair",
    price: 520,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
    description:
      "Classic mid-century design with walnut legs and wool blend upholstery.",
  },
  {
    id: 5,
    name: "Eames-Style Shell Chair",
    price: 275,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500",
    description:
      "Molded plastic shell chair on metal dowel legs — timeless and versatile.",
  },
  {
    id: 6,
    name: "Papasan Bowl Chair",
    price: 230,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=500",
    description: "Deep bowl-shaped chair with plush cushion and rattan base.",
  },
  {
    id: 7,
    name: "Wingback Reading Chair",
    price: 680,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
    description:
      "Traditional wingback silhouette reupholstered in modern boucle fabric.",
  },
  {
    id: 8,
    name: "Ghost Chair",
    price: 340,
    category: "Chairs",
    image:
      "https://images.unsplash.com/photo-1616497633466-6c3f7a0cfa93?q=80&w=392&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Transparent polycarbonate chair — sleek, light, and statement-making.",
  },
  {
    id: 9,
    name: "Tulip Pedestal Chair",
    price: 390,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=500",
    description:
      "Iconic single-stem base chair in fiberglass with cushioned seat.",
  },
  {
    id: 10,
    name: "Barrel Club Chair",
    price: 475,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500",
    description:
      "Curved barrel back chair in cognac leather with brass nail-head trim.",
  },
  {
    id: 11,
    name: "Sling Leather Chair",
    price: 560,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500",
    description:
      "Suspended leather sling on a solid steel frame — raw and refined.",
  },
  {
    id: 12,
    name: "Zen Floor Chair",
    price: 120,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500",
    description:
      "Low-profile floor chair with back support, perfect for meditation spaces.",
  },
  {
    id: 13,
    name: "Cantilever S-Chair",
    price: 295,
    category: "Chairs",
    image:
      "https://images.unsplash.com/photo-1707135874025-067a353c0c48?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Sprung steel cantilever base with upholstered seat — a Bauhaus classic.",
  },
  {
    id: 14,
    name: "Egg Chair",
    price: 820,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?w=500",
    description:
      "Iconic cocoon silhouette in premium wool with swivel aluminum base.",
  },
  {
    id: 15,
    name: "Wishbone Y-Chair",
    price: 360,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=500",
    description:
      "Hand-woven paper cord seat with a solid beech Y-shaped backrest.",
  },
  {
    id: 16,
    name: "Hammock Swing Chair",
    price: 210,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
    description:
      "Hanging macramé swing chair for indoor or covered outdoor use.",
  },
  {
    id: 17,
    name: "Chesterfield Armchair",
    price: 730,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500",
    description:
      "Deep-buttoned leather armchair with rolled arms and classic stud detailing.",
  },
  {
    id: 18,
    name: "Molded Plywood Chair",
    price: 180,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500",
    description:
      "Bent plywood shell on slim metal legs — lightweight and sculptural.",
  },
  {
    id: 19,
    name: "Sherpa Accent Chair",
    price: 415,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500",
    description:
      "Ultra-plush sherpa fabric accent chair with a solid pine swivel base.",
  },
  {
    id: 20,
    name: "Tolix-Style Metal Chair",
    price: 145,
    category: "Chairs",
    image:
      "https://images.unsplash.com/photo-1691036562015-56ebf6648f8c?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Industrial pressed steel chair, stackable and weather-resistant.",
  },
  {
    id: 21,
    name: "Woven Rattan Pendant",
    price: 155,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500",
    description:
      "Handwoven rattan pendant that casts warm, dappled light over dining areas.",
  },
  {
    id: 22,
    name: "Arched Floor Lamp",
    price: 265,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
    description:
      "Tall arc floor lamp with a marble base and adjustable linen shade.",
  },
  {
    id: 23,
    name: "Geometric Brass Chandelier",
    price: 480,
    category: "Lighting",
    image:
      "https://images.unsplash.com/photo-1552650302-9d429a1e59d4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Six-arm brass chandelier with Edison bulbs and a sculptural open frame.",
  },
  {
    id: 24,
    name: "Concrete Table Lamp",
    price: 110,
    category: "Lighting",
    image:
      "https://images.unsplash.com/photo-1576961167032-6866e0be262b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Raw cast concrete base with a white linen drum shade — industrial minimalism.",
  },
  {
    id: 25,
    name: "Sputnik Ceiling Light",
    price: 340,
    category: "Lighting",
    image:
      "https://plus.unsplash.com/premium_photo-1704921873137-53562c5b97db?q=80&w=786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Mid-century sputnik fixture with 12 adjustable arms and matte gold finish.",
  },
  {
    id: 26,
    name: "Mushroom Table Lamp",
    price: 135,
    category: "Lighting",
    image:
      "https://plus.unsplash.com/premium_photo-1705700604934-adb60cc34444?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Retro mushroom-shaped lamp in frosted glass with a chrome stem.",
  },
  {
    id: 27,
    name: "Plug-In Wall Sconce",
    price: 95,
    category: "Lighting",
    image:
      "https://images.unsplash.com/photo-1765012737631-3ce00b94aef1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Minimalist plug-in sconce with a rotating arm and matte black finish.",
  },
  {
    id: 28,
    name: "Globe Cluster Pendant",
    price: 390,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=500",
    description:
      "Cluster of 9 smoky glass globes on a canopy mount — dramatic and elegant.",
  },
  {
    id: 29,
    name: "Tripod Floor Lamp",
    price: 175,
    category: "Lighting",
    image:
      "https://images.unsplash.com/photo-1764551118616-bcafc13f921c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Wooden tripod base with a tapered fabric shade — warm Scandinavian style.",
  },
  {
    id: 30,
    name: "LED Strip Neon Light",
    price: 65,
    category: "Lighting",
    image:
      "https://images.unsplash.com/photo-1628084726625-6002133bb325?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Flexible neon LED strip for accent shelving, desks, or headboards.",
  },
];

export default products;
