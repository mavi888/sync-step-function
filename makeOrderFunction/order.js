const dynamodbManager = require('./dynamodbManager');
const restaurantManager = require('./restaurantManager');

exports.handler = async (event) => {
  console.log('Order function');

  const orderId = event;

  if (restaurantManager.order(orderId)) {
    await dynamodbManager.updateItem(orderId, 'ordered', 'true');
    console.log('end this thing')
    return {
      valid: true,
      orderId: orderId
    }
  } else {
    console.log('move to the failture function')
    return {
      valid: false,
      orderId: orderId
    }
  }
}