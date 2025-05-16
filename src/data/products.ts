// Define product type
export interface Product {
  id: number;
  name: string;
  price: string;
  numericPrice: number;
  image: string;
  description: string;
  category: string;
}

// Mock products data (in a real app, this would come from an API or database)
export const allProducts: Product[] = [
  {
    id: 1,
    name: "Corsair Vengeance i7600",
    price: "$2,799.99",
    numericPrice: 2799.99,
    image: "/Product_Images/PC1_img.webp",
    description: "Corsair's Vengeance i7600 gaming PC stands out with its superior build quality, excellent gaming performance, quiet operation, and an extensive two-year warranty.",
    category: "desktop"
  },
  {
    id: 2,
    name: "CyberPowerPC Gamer Supreme",
    price: "$1,899.99",
    numericPrice: 1899.99,
    image: "/Product_Images/PC2_img.webp",
    description: "High-performance gaming desktop with AMD Ryzen 9, NVIDIA RTX 3080, 32GB RAM, 1TB NVMe SSD.",
    category: "desktop"
  },
  {
    id: 3,
    name: "HP Omen 45L",
    price: "$2,499.99",
    numericPrice: 2499.99,
    image: "/Product_Images/PC3_img.webp",
    description: "Premium gaming tower with Intel Core i9, RTX 3090, 64GB RAM, 2TB SSD, and innovative Cryo Chamber cooling.",
    category: "desktop"
  },
  {
    id: 4,
    name: "NZXT H7 Flow Gaming PC",
    price: "$1,699.99",
    numericPrice: 1699.99,
    image: "/Product_Images/PC4_img.webp",
    description: "Streamlined gaming PC with Intel i7, RTX 3070, 16GB RAM, 1TB SSD in a minimalist H7 Flow case with excellent airflow.",
    category: "desktop"
  },
  {
    id: 5,
    name: "Alienware Aurora R15",
    price: "$3,299.99",
    numericPrice: 3299.99,
    image: "/Product_Images/PC5_img.webp",
    description: "Iconic Alienware design with Intel i9, RTX 4080, 64GB RAM, and 2TB SSD + 2TB HDD combo for ultimate gaming performance.",
    category: "desktop"
  },
  {
    id: 6,
    name: "MSI Titan 18 HX AI",
    price: "$5,999.99",
    numericPrice: 5999.99,
    image: "/Product_Images/Laptop1_img.webp",
    description: "MSI's latest Titan delivers chart-topping performance, an extremely vibrant screen, and 6TB of SSD storage.",
    category: "laptop"
  },
  {
    id: 7,
    name: "ASUS ROG Zephyrus G14",
    price: "$1,699.99",
    numericPrice: 1699.99,
    image: "/Product_Images/Laptop2_img.webp",
    description: "Compact 14-inch gaming powerhouse with AMD Ryzen 9, RTX 4070, 32GB RAM, 1TB SSD, and 14-inch QHD 165Hz display.",
    category: "laptop"
  },
  {
    id: 8,
    name: "Razer Blade 16",
    price: "$3,299.99",
    numericPrice: 3299.99,
    image: "/Product_Images/Laptop3_img.webp",
    description: "Premium 16-inch gaming laptop with Intel i9, RTX 4080, 32GB RAM, 2TB SSD, and innovative dual-mode Mini-LED display.",
    category: "laptop"
  },
  {
    id: 9,
    name: "Lenovo Legion Pro 7i",
    price: "$2,499.99",
    numericPrice: 2499.99,
    image: "/Product_Images/Laptop4_img.webp",
    description: "Powerful gaming laptop with Intel i9, RTX 4080, 32GB RAM, 1TB SSD, and 16-inch QHD+ 240Hz display with advanced cooling.",
    category: "laptop"
  },
  {
    id: 10,
    name: "Alienware m18 R1",
    price: "$4,299.99",
    numericPrice: 4299.99,
    image: "/Product_Images/Laptop5_img.webp",
    description: "Massive 18-inch gaming laptop with Intel i9 HX, RTX 4090, 64GB RAM, 4TB SSD, and desktop-class performance in a portable form factor.",
    category: "laptop"
  },
  {
    id: 11,
    name: "NuPhy Field75 HE",
    price: "$169.99",
    numericPrice: 169.99,
    image: "/Product_Images/Keyboard1_img.jpg",
    description: "Customizable Hall effect switches that let you adjust key sensitivity, perfect for competitive gaming with features like rapid trigger.",
    category: "accessory"
  },
  {
    id: 12,
    name: "Corsair K100 RGB",
    price: "$229.99",
    numericPrice: 229.99,
    image: "/Product_Images/Keyboard2_img.jpg",
    description: "Premium mechanical gaming keyboard with CORSAIR OPX optical-mechanical switches, per-key RGB lighting, and 4K Hz polling rate.",
    category: "accessory"
  },
  {
    id: 13,
    name: "SteelSeries Apex Pro 2",
    price: "$199.99",
    numericPrice: 199.99,
    image: "/Product_Images/Keyboard3_img.jpg",
    description: "Adjustable OmniPoint 2.0 switches with 0.1-4.0mm actuation, 11x faster response, and aircraft-grade aluminum frame.",
    category: "accessory"
  },
  {
    id: 14,
    name: "Logitech G915 LIGHTSPEED",
    price: "$249.99",
    numericPrice: 249.99,
    image: "/Product_Images/Keyboard4_img.jpg",
    description: "Ultra-thin wireless mechanical keyboard with low-profile GL switches, LIGHTSPEED wireless, and customizable per-key RGB lighting.",
    category: "accessory"
  },
  {
    id: 15,
    name: "Razer BlackWidow V4 Pro",
    price: "$229.99",
    numericPrice: 229.99,
    image: "/Product_Images/Keyboard5_img.jpg",
    description: "High-end mechanical keyboard with Razer Green switches, 8000Hz polling rate, multi-function roller, and 3-side RGB underglow.",
    category: "accessory"
  }
];
