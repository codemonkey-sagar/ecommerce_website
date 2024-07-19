# Krishna Marbles Ecommerce Website

## Student Information

- **Name:** Sagar Budhathoki
- **Student Number:** 8955192
- **Date:** 19-07-2024

## Technology Stack

- **Frontend:** ReactJS
- **Backend:** Node.js with Express
- **Database:** MongoDB (Atlas)

## Database Schema Design

### Products Schema (MongoDB)

```json
{
  "productId": "ObjectId",
  "name": "String",
  "description": "String",
  "category": "String",
  "stock": "Number",
  "imageUrls": ["String"],
  "relatedWebsites": ["String"]
}
```

### User Schema

```json
{
  "userId": "ObjectId",
  "username": "String",
  "password": "String",
  "email": "String",
  "address": "String"
}
```

### Price Schema

```json
{
  "priceId": "ObjectId",
  "productId": "ObjectId",
  "userId": "ObjectId", // Can be null for default prices
  "price": "Number"
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
