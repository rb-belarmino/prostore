# Project Name: Prostore

## Description

This project is an example of an e-commerce platform built with the latest technologies in the JavaScript ecosystem, such as Next.js 15, React 19, and TypeScript. We utilize tools like Prisma ORM and Jest to ensure the project's quality and scalability, providing a high-level service to our customers.

## Key Features

- **Product Catalog:** Browse a wide variety of products with detailed descriptions, images, and prices.
- **Shopping Cart:** Easily and intuitively add and remove products from your shopping cart.
- **Simplified Checkout:** Fast and secure checkout process with flexible payment options.
- **Stripe Payment Methods:** We accept various payment methods through Stripe integration, ensuring security and convenience.
- **Order Summary:** View a complete summary of your order before finalizing the purchase, including products, prices, and fees.
- **Purchase History:** Track your past purchases with order details and delivery status.
- **User Registration and Authentication:** Create your account or log in to access exclusive and personalized features.
- **Smart Search:** Quickly find products using our advanced search tool.
- **Product Ratings and Reviews:** Share your opinion on products and see what other customers have to say.
- **Wish Lists:** Save your favorite products to buy later.

## Technologies Used

- **Frontend**:
  - [Next.js 15](https://nextjs.org/)
  - [React 19](https://react.dev/)
  - [React Hook Form](https://react-hook-form.com/)
  - [Shadcn UI](https://ui.shadcn.com/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Zod](https://zod.dev/)
- **Backend**:
  - [Next Auth](https://next-auth.js.org/)
  - [Prisma ORM](https://www.prisma.io/)
- **Testing**:
  - [Jest](https://jestjs.io/)

## Prerequisites

Before you begin, ensure you have the following tools installed:

- [Node.js](https://nodejs.org/) (minimum recommended version: 23.5.0)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Installation

1.  Clone the repository:

    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

    _Replace the bracketed link above with your github repo link, and replace "your-repo-name" with your repo name._

2.  Install dependencies:

    ```bash
    npm install # Or yarn install
    ```

3.  Configure environment variables:

    - Create a `.env.local` file in the project root.
    - Add the necessary environment variables (e.g., API keys, database URLs, etc.). Example:

      ```
      DATABASE_URL="your_database_url"
      NEXTAUTH_SECRET="your_nextauth_secret"
      NEXTAUTH_URL="http://localhost:3000"
      ```

4.  Run Prisma migrations:

    ```bash
    npx prisma migrate dev
    ```

5.  Start the development server:

    ```bash
    npm run dev # Or yarn dev
    ```

6.  Open your browser and navigate to `http://localhost:3000`.

## Testing

To run the tests, use the following command:

```bash
npm run test # Or yarn test
```
