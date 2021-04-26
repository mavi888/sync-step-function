
const dynamodbManager = require('./dynamodbManager');
const paymentManager = require('./paymentManager');
exports.handler = async (event) => {
    console.log('Order failure function');
    console.log(event);
    const orderId = event;

    await dynamodbManager.updateItem(orderId, 'ordered', 'error');
    paymentManager.widrawPayment(orderId)
    await dynamodbManager.updateItem(orderId, 'payment', 'widrawn');

    console.log('order failure process completed')
  }