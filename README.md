# NeoEcommerce
Ecommerce Website with a Minimalistic Modern Feel

![Home Page](/public/Screenshots/Home_Page.png)

## Features
- Modern UI with responsive design
- Shopping cart functionality
- Stripe payment integration
- Product catalog with detailed product pages
- Responsive design for mobile and desktop
- Modern animations and transitions

## Technologies Used

- Next.js - React framework
- TypeScript - Type-safe JavaScript
- Tailwind CSS - Utility-first CSS framework
- Stripe API - Payment processing
- React Context API - State management for shopping cart

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- Stripe account for payment processing

### Installation
1. Clone the repository
```bash
git clone https://github.com/ChenHY1217/NeoEcommerce.git
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
   - Copy `.env.local.example` to `.env.local`
   - Add your Stripe API keys to `.env.local` file
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
   STRIPE_SECRET_KEY=your_secret_key
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Screenshots

### Featured Products
![Featured Products](/public/Screenshots/Featured_Products.png)

### Product Listings
![Product Listings 1](/public/Screenshots/Products1.png)
![Product Listings 2](/public/Screenshots/Products2.png)

### Individual Product Pages
![Individual Product 1](/public/Screenshots/Individual_Product1.png)
![Individual Product 2](/public/Screenshots/Individual_Product2.png)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
