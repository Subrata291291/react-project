import pro1 from './images/pro-1.jpg';
import pro2 from './images/pro-2.jpg';
import pro3 from './images/pro-3.jpg';
import pro4 from './images/pro-4.jpg';
import pro5 from './images/pro-5.jpg';
import pro6 from './images/pro-6.jpg';

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    description: "Perfect for video conferencing and virtual meetings. Features cutting-edge audio technology. Enjoy crisp highs and deep bass. Engineered for both casual listeners and audiophiles. Comes with a rechargeable battery that lasts for hours. Includes a travel case for added protection. Designed for long-lasting comfort and wearability. Built for premium performance across all devices. Enjoy crisp highs and deep bass. Experience immersive sound quality with every use. Premium drivers deliver studio-quality sound. Features cutting-edge audio technology. Bluetooth connectivity ensures seamless pairing. A stylish design that matches your aesthetic. Easy to use with intuitive controls.",
    price: 99.99,
    category: "Wireless",
    img: pro1,
    rating: 4.7
  },
  {
    id: 2,
    title: "Gaming Headset",
    description: "Includes a durable build for extended lifespan. Designed to minimize sound leakage. Sweat-resistant and perfect for workouts. Includes a durable build for extended lifespan. Experience immersive sound quality with every use. Equipped with noise-isolating ear cups. Easy to use with intuitive controls. Built for premium performance across all devices. Comes with a rechargeable battery that lasts for hours. Perfect for video conferencing and virtual meetings. Comes with a rechargeable battery that lasts for hours. Premium drivers deliver studio-quality sound. Engineered for both casual listeners and audiophiles. Designed for long-lasting comfort and wearability.",
    price: 79.99,
    category: "Gaming",
    img: pro2,
    rating: 4.4
  },
  {
    id: 3,
    title: "Over-Ear Headphones",
    description: "Comes with a rechargeable battery that lasts for hours. Built for premium performance across all devices. Ideal for travel, commuting, or at-home listening. Premium drivers deliver studio-quality sound. Engineered for both casual listeners and audiophiles. Foldable and lightweight for portability. Sweat-resistant and perfect for workouts. Features cutting-edge audio technology. Includes a durable build for extended lifespan. Designed to minimize sound leakage. Perfect for video conferencing and virtual meetings. Bluetooth connectivity ensures seamless pairing. ",
    price: 89.99,
    category: "Bluetooth",
    img: pro3,
    rating: 4.2
  },
  {
    id: 4,
    title: "Bluetooth Headphones",
    description: "Tangle-free listening with Bluetooth connectivity Comes with a rechargeable battery that lasts for hours. Built for premium performance across all devices. Ideal for travel, commuting, or at-home listening. Premium drivers deliver studio-quality sound. Engineered for both casual listeners and audiophiles. Foldable and lightweight for portability. Sweat-resistant and perfect for workouts. Features cutting-edge audio technology. Includes a durable build for extended lifespan. Designed to minimize sound leakage. Perfect for video conferencing and virtual meetings. Bluetooth connectivity ensures seamless pairing.",
    price: 59.99,
    category: "Bluetooth",
    img: pro4,
    rating: 4.6
  },
  {
    id: 5,
    title: "Noise Cancelling Headphones",
    description: "Block out distractions with active noise canceling Comes with a rechargeable battery that lasts for hours. Built for premium performance across all devices. Ideal for travel, commuting, or at-home listening. Premium drivers deliver studio-quality sound. Engineered for both casual listeners and audiophiles. Foldable and lightweight for portability. Sweat-resistant and perfect for workouts. Features cutting-edge audio technology. Includes a durable build for extended lifespan. Designed to minimize sound leakage. Perfect for video conferencing and virtual meetings. Bluetooth connectivity ensures seamless pairing.",
    price: 129.99,
    category: "Noise Cancelling",
    img: pro5,
    rating: 4.9
  },
  {
    id: 6,
    title: "Studio Monitor Headphones",
    description: "Precision audio for music professionals Comes with a rechargeable battery that lasts for hours. Built for premium performance across all devices. Ideal for travel, commuting, or at-home listening. Premium drivers deliver studio-quality sound. Engineered for both casual listeners and audiophiles. Foldable and lightweight for portability. Sweat-resistant and perfect for workouts. Features cutting-edge audio technology. Includes a durable build for extended lifespan. Designed to minimize sound leakage. Perfect for video conferencing and virtual meetings. Bluetooth connectivity ensures seamless pairing.",
    price: 149.99,
    category: "Studio",
    img: pro6,
    rating: 4.7
  },
  {
    id: 7,
    title: "Kids Safe Headphones",
    description: "Volume-limited headphones safe for children Comes with a rechargeable battery that lasts for hours. Built for premium performance across all devices. Ideal for travel, commuting, or at-home listening. Premium drivers deliver studio-quality sound. Engineered for both casual listeners and audiophiles. Foldable and lightweight for portability. Sweat-resistant and perfect for workouts. Features cutting-edge audio technology. Includes a durable build for extended lifespan. Designed to minimize sound leakage. Perfect for video conferencing and virtual meetings. Bluetooth connectivity ensures seamless pairing.",
    price: 39.99,
    category: "Kids",
    img: pro1,
    rating: 5.0
  },
  {
    id: 8,
    title: "Sports Headphones",
    description: "Sweat-resistant headphones for active use. Comes with a rechargeable battery that lasts for hours. Built for premium performance across all devices. Ideal for travel, commuting, or at-home listening. Premium drivers deliver studio-quality sound. Engineered for both casual listeners and audiophiles. Foldable and lightweight for portability. Sweat-resistant and perfect for workouts. Features cutting-edge audio technology. Includes a durable build for extended lifespan. Designed to minimize sound leakage. Perfect for video conferencing and virtual meetings. Bluetooth connectivity ensures seamless pairing. ",
    price: 49.99,
    category: "Sports",
    img: pro2,
    rating: 4.7
  },
  {
    id: 9,
    title: "Wired Headphones",
    description: "Reliable wired headphones with 3.5mm jack. Comes with a rechargeable battery that lasts for hours. Built for premium performance across all devices. Ideal for travel, commuting, or at-home listening. Premium drivers deliver studio-quality sound. Engineered for both casual listeners and audiophiles. Foldable and lightweight for portability. Sweat-resistant and perfect for workouts. Features cutting-edge audio technology. Includes a durable build for extended lifespan. Designed to minimize sound leakage. Perfect for video conferencing and virtual meetings. Bluetooth connectivity ensures seamless pairing. ",
    price: 29.99,
    category: "DJ",
    img: pro3,
    rating: 4.3
  },
  {
    id: 10,
    title: "Foldable Headphones",
    description: "Compact and foldable for easy portability. Comes with a rechargeable battery that lasts for hours. Built for premium performance across all devices. Ideal for travel, commuting, or at-home listening. Premium drivers deliver studio-quality sound. Engineered for both casual listeners and audiophiles. Foldable and lightweight for portability. Sweat-resistant and perfect for workouts. Features cutting-edge audio technology. Includes a durable build for extended lifespan. Designed to minimize sound leakage. Perfect for video conferencing and virtual meetings. Bluetooth connectivity ensures seamless pairing. ",
    price: 64.99,
    category: "Foldable",
    img: pro4,
    rating: 4.1
  },
  {
    id: 11,
    title: "DJ Headphones",
    description: "Rotating ear cups and heavy bass for DJs. Comes with a rechargeable battery that lasts for hours. Built for premium performance across all devices. Ideal for travel, commuting, or at-home listening. Premium drivers deliver studio-quality sound. Engineered for both casual listeners and audiophiles. Foldable and lightweight for portability. Sweat-resistant and perfect for workouts. Features cutting-edge audio technology. Includes a durable build for extended lifespan. Designed to minimize sound leakage. Perfect for video conferencing and virtual meetings. Bluetooth connectivity ensures seamless pairing. ",
    price: 99.99,
    category: "DJ",
    img: pro5,
    rating: 4.3
  },
  {
    id: 12,
    title: "Budget Headphones",
    description: "Affordable headphones with decent sound. Comes with a rechargeable battery that lasts for hours. Built for premium performance across all devices. Ideal for travel, commuting, or at-home listening. Premium drivers deliver studio-quality sound. Engineered for both casual listeners and audiophiles. Foldable and lightweight for portability. Sweat-resistant and perfect for workouts. Features cutting-edge audio technology. Includes a durable build for extended lifespan. Designed to minimize sound leakage. Perfect for video conferencing and virtual meetings. Bluetooth connectivity ensures seamless pairing. ",
    price: 19.99,
    category: "DJ",
    img: pro6,
    rating: 4.7
  },
  {
    id: 13,
    title: "ANC Headphones",
    description: "Wireless headphones with active noise cancellation. Equipped with noise-isolating ear cups. Ideal for travel, commuting, or at-home listening. Foldable and lightweight for portability. Bluetooth connectivity ensures seamless pairing. Ideal for travel, commuting, or at-home listening. Enjoy crisp highs and deep bass. Designed to minimize sound leakage. Built for premium performance across all devices. Includes a durable build for extended lifespan. Built for premium performance across all devices. Foldable and lightweight for portability. ",
    price: 119.99,
    category: "Luxury",
    img: pro1,
    rating: 4.2
  },
  {
    id: 14,
    title: "Hi-Fi Headphones",
    description: "True-to-life sound with hi-fi capability. Equipped with noise-isolating ear cups. Ideal for travel, commuting, or at-home listening. Foldable and lightweight for portability. Bluetooth connectivity ensures seamless pairing. Ideal for travel, commuting, or at-home listening. Enjoy crisp highs and deep bass. Designed to minimize sound leakage. Built for premium performance across all devices. Includes a durable build for extended lifespan. Built for premium performance across all devices. Foldable and lightweight for portability. ",
    price: 149.99,
    category: "Luxury",
    img: pro2,
    rating: 4.5
  },
  {
    id: 15,
    title: "Neckband Headphones",
    description: "Neckband design with all-day comfort. Equipped with noise-isolating ear cups. Ideal for travel, commuting, or at-home listening. Foldable and lightweight for portability. Bluetooth connectivity ensures seamless pairing. Ideal for travel, commuting, or at-home listening. Enjoy crisp highs and deep bass. Designed to minimize sound leakage. Built for premium performance across all devices. Includes a durable build for extended lifespan. Built for premium performance across all devices. Foldable and lightweight for portability. ",
    price: 74.99,
    category: "Luxury",
    img: pro3,
    rating: 4.1
  },
  {
    id: 16,
    title: "Leather Headphones",
    description: "Premium headphones with leather padding. Equipped with noise-isolating ear cups. Ideal for travel, commuting, or at-home listening. Foldable and lightweight for portability. Bluetooth connectivity ensures seamless pairing. Ideal for travel, commuting, or at-home listening. Enjoy crisp highs and deep bass. Designed to minimize sound leakage. Built for premium performance across all devices. Includes a durable build for extended lifespan. Built for premium performance across all devices. Foldable and lightweight for portability. ",
    price: 199.99,
    category: "Luxury",
    img: pro4,
    rating: 4.0
  },
  {
    id: 17,
    title: "Reference Headphones",
    description: "Uncolored sound for mixing and mastering. Equipped with noise-isolating ear cups. Ideal for travel, commuting, or at-home listening. Foldable and lightweight for portability. Bluetooth connectivity ensures seamless pairing. Ideal for travel, commuting, or at-home listening. Enjoy crisp highs and deep bass. Designed to minimize sound leakage. Built for premium performance across all devices. Includes a durable build for extended lifespan. Built for premium performance across all devices. Foldable and lightweight for portability. ",
    price: 179.99,
    category: "Reference",
    img: pro5,
    rating: 4.7
  },
  {
    id: 18,
    title: "RGB Gaming Headset",
    description: "Gaming headset with RGB and surround sound. Equipped with noise-isolating ear cups. Ideal for travel, commuting, or at-home listening. Foldable and lightweight for portability. Bluetooth connectivity ensures seamless pairing. Ideal for travel, commuting, or at-home listening. Enjoy crisp highs and deep bass. Designed to minimize sound leakage. Built for premium performance across all devices. Includes a durable build for extended lifespan. Built for premium performance across all devices. Foldable and lightweight for portability. ",
    price: 89.99,
    category: "Reference",
    img: pro6,
    rating: 4.1
  },
  {
    id: 19,
    title: "Compact Headphones",
    description: "Great for travel with folding mechanism. Equipped with noise-isolating ear cups. Ideal for travel, commuting, or at-home listening. Foldable and lightweight for portability. Bluetooth connectivity ensures seamless pairing. Ideal for travel, commuting, or at-home listening. Enjoy crisp highs and deep bass. Designed to minimize sound leakage. Built for premium performance across all devices. Includes a durable build for extended lifespan. Built for premium performance across all devices. Foldable and lightweight for portability. ",
    price: 34.99,
    category: "Reference",
    img: pro1,
    rating: 4.7
  },
  {
    id: 20,
    title: "True Wireless Earbuds",
    description: "In-ear earbuds with charging case and mic. Equipped with noise-isolating ear cups. Ideal for travel, commuting, or at-home listening. Foldable and lightweight for portability. Bluetooth connectivity ensures seamless pairing. Ideal for travel, commuting, or at-home listening. Enjoy crisp highs and deep bass. Designed to minimize sound leakage. Built for premium performance across all devices. Includes a durable build for extended lifespan. Built for premium performance across all devices. Foldable and lightweight for portability. ",
    price: 99.99,
    category: "Luxury",
    img: pro2,
    rating: 4.2
  }
];

export default products;
