# Krishna Marbles Ecommerce Website

[Repo Link](https://github.com/codemonkey-sagar/km_ecommerce)

## Student Information

- **Name:** Sagar Budhathoki
- **Student Number:** 8955192
- **Date:** 19-07-2024

## Technology Stack

- **Frontend:** React, Redux
- **Backend:** Node.js with Express
- **Database:** MongoDB (Atlas)

## Project Overview

Krishna Marbles Ecommerce Website is a full-stack web application designed to facilitate the online sale of marble products. The project uses modern web technologies to provide a robust and scalable ecommerce platform.

## Setup and Running the Project

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB Atlas account for database setup

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/codemonkey-sagar/km_ecommerce.git
   cd km_ecommerce
   ```

2. Install dependencies for both frontend and backend:
   ```sh
   npm install
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

### Run Frontend and Backend Concurrently (to fire up project)

(it will run both the Frontend `using vite` and backend)

```sh
npm run dev
```

## Database Schema Design

### Products Schema (MongoDB)

```json
{
  "name": "String",
  "image": "String",
  "brand": "String",
  "category": "String",
  "description": "String",
  "reviews": [
    {
      "name": "String",
      "rating": "Number",
      "comment": "String",
      "user": "ObjectId (ref: User)",
      "timestamps": "true"
    }
  ],
  "rating": "Number (default: 0)",
  "numReviews": "Number (default: 0)",
  "price": "Number (default: 0)",
  "countInStock": "Number (default: 0)",
  "user": "ObjectId (ref: User)",
  "timestamps": "true"
}
```

### User Schema

```json
{
  "name": "String",
  "email": "String (unique)",
  "password": "String",
  "isAdmin": "Boolean (default: false)",
  "timestamps": "true"
}
```

### Order Schema

```json
{
  "user": "ObjectId (ref: User)",
  "orderItems": [
    {
      "name": "String",
      "qty": "Number",
      "image": "String",
      "price": "Number",
      "product": "ObjectId (ref: Product)"
    }
  ],
  "shippingAddress": {
    "address": "String",
    "city": "String",
    "postalCode": "String",
    "country": "String"
  },
  "paymentMethod": "String",
  "paymentResult": {
    "id": "String",
    "status": "String",
    "email_address": "String",
    "updated_time": "String"
  },
  "itemsPrice": "Number (default: 0.0)",
  "taxPrice": "Number (default: 0.0)",
  "shippingPrice": "Number (default: 0.0)",
  "totalPrice": "Number (default: 0.0)",
  "isPaid": "Boolean (default: false)",
  "paidAt": "Date",
  "isDelivered": "Boolean (default: false)",
  "deliveredAt": "Date",
  "timestamps": "true"
}
```

### Order Schema

```json
{
  "orderId": "ObjectId",
  "userId": "ObjectId",
  "products": [
    {
      "productId": "ObjectId",
      "quantity": "Number"
    }
  ],
  "totalPrice": "Number",
  "orderDate": "Date"
}
```
