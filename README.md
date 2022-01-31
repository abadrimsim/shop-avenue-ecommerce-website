# Shop Avenue

![Logo](https://i.ibb.co/SmShYC9/shopave-prev.png)

## Description

An ecommerce website built with NextJS(SSR), Tailwind CSS, Redux Toolkit, NextAuth, Firebase and REST APIs.
The data in this website are being retrieved from an API called [Fake Store API](https://fakestoreapi.com/).

Here are the features of this simple ecommerce website:

- Authentication using [NextAuth.js](https://next-auth.js.org/getting-started/introduction). This is an open-source authentication solution for Next.js applications.
- Product search functionality. Users can type in their queries on the search box and this returns a number of products that matches that query. This feature is implemented using [Fuse.js](https://fusejs.io/)
- Option to add or remove products to cart. Using the [Redux Toolkit](https://redux-toolkit.js.org/), products can be added and removed from the cart. The number of products can be also seen beside the cart icon in the Navigation Bar.
- Checkout functionality. Only the logged in users are allowed to checkout the items from their cart. This feature is being implemented using [Stripe Checkout](https://stripe.com/docs/payments/checkout), currently in test mode, where shop coupons are automatically added from the user's purchase. Delivery options are also available upon checkout.
- Dynamic pages. Since the data is being retrieved from an API, dynamic pages are implemented where the users can check each of the product descriptions and add them to cart.

## Demo

This website is deployed on Vercel, please see this [live demo](https://shop-avenue.vercel.app/).

## Other Dependencies

- Moment.js
- React-Bootstrap
- React-Responsive-Carousel
- React-Img-Zoom
- Micro
- Hero Icons
- Axios


