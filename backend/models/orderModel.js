import mongoose from 'mongoose';
import { boolean } from 'webidl-conversions';

// Order Schema
const orderSchema = mongoose.Schema(
  {
    // User link with the order
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    orderItems: [
      {
        name: { type: String, requried: true },
        qty: { type: Number, requried: true },
        image: { type: String, requried: true },
        price: { type: Number, requried: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      email_address: { type: String },
      updated_time: { type: String },
    },
    itemsPrice: {
      type: Number,
      default: 0.0,
      required: true,
    },
    taxPrice: {
      type: Number,
      default: 0.0,
      required: true,
    },
    shippingPrice: {
      type: Number,
      default: 0.0,
      required: true,
    },
    totalPrice: {
      type: Number,
      default: 0.0,
      required: true,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      requried: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timeStamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
