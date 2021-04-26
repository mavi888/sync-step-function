const {v4 : uuidv4} = require('uuid')
const dynamodbManager = require('./dynamodbManager');
const paymentManager = require('./paymentManager');

exports.handler = async (event) => {
  console.log('payment function')
  console.log(event);

  const order = {
    id : uuidv4(),
    products : event.products,
    customer: event.customer,
    amount: event.amount,
    payment : 'false',
    ordered : 'false'
  }

  console.log(order);

  await dynamodbManager.saveItem(order);

  if (paymentManager.pay(order)) {
    await dynamodbManager.updateItem(order.id, 'payment', 'true');
    console.log('next function')
    return {
      valid: true,
      orderId: order.id
    }
  
  } else {
    await dynamodbManager.updateItem(order.id, 'payment', 'error');
    console.log('there was an error - exit')
    return {
      valid: false,
      orderId: order.id
    }
  }
}