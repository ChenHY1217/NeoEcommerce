# NeoEcommerce
Ecommerce Website with a Minimalistic Modern Feel

## Features
- Modern UI with responsive design
- Shopping cart functionality
- Stripe payment integration
- Product catalog

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- Stripe account for payment processing

### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/NeoEcommerce.git
cd NeoEcommerce
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
