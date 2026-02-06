# Farm2Customer Frontend Structure

This project has been restructured to focus on **Farmer Empowerment** and **Customer Transparency**. Below is the breakdown of the new premium frontend structure.

## 🎨 Design System (`src/index.css`)

- **Colors**: Organic Green (#1a5d1a), Sunlit Orange (#fb8c00), and Warm Neutrals.
- **Glassmorphism**: Premium cards and overlays using `backdrop-blur`.
- **Typography**: Clean, bold headers using system-ui/Inter.
- **Utilities**: Custom classes like `.premium-card`, `.icon-btn`, `.btn-primary` for consistent design.

## 🧱 Core Folder Structure

- `src/components/common/`: Shared components like `VoiceInput` and `Header`.
- `src/components/Auth/`:
  - `UserTypeSelection.jsx`: Visual choice between Farmer and Customer.
  - `Login.jsx`: OTP-based login with dynamic themes for each user type.
- `src/components/Vendor/`:
  - `Dashboard.jsx`: Ultra-simple, icon-based interface for farmers.
- `src/components/customer/`:
  - `Home.jsx`: Hyperlocal discovery with radius tracking and transparent cards.
  - `Cart.jsx`: One-page checkout with detailed price breakdowns.

## 🚀 Key Features Implemented (Mocked)

1. **Farmer-First UX**: Large touch targets, icon-only navigation, and voice-assisted input.
2. **Transparent Billing**: Customers see exactly how much goes to the farmer vs platform vs delivery.
3. **Hyperlocal Focus**: Discovery UI centered around distance from the consumer.
4. **Verified Trust**: Integrated badges for verified farmers and their story.

## 🛠️ How to Navigate

1. **Landing**: Starts at `/` (User Selection).
2. **Login**: Redirects to `/login?type=farmer` or `?type=customer`.
3. **Farmer View**: Navigate to `/farmer/dashboard` to see the simple listing tool.
4. **Customer View**: Navigate to `/customer/home` for the marketplace.
5. **Transparency**: Go to `/cart` to see the price breakdown.

_Backend API integration can be hooked into `services/` folder once ready._
