'use strict';

const AWS = require('aws-sdk');
let dynamo = new AWS.DynamoDB.DocumentClient();

const ORDERS_TABLE = process.env.ORDERS_TABLE;

module.exports.saveItem = async item => {
	const params = {
		TableName: ORDERS_TABLE,
		Item: item
	};

	return dynamo
		.put(params)
		.promise()
		.then(() => {
			return item.id;
		});
};


module.exports.updateItem = async (id, paramsName, paramsValue) => {
	const params = {
		TableName: ORDERS_TABLE,
		Key: {
			id
		},
		ConditionExpression: 'attribute_exists(id)',
		UpdateExpression: 'set ' + paramsName + ' = :v',
		ExpressionAttributeValues: {
			':v': paramsValue
		},
		ReturnValues: 'ALL_NEW'
	};

	return dynamo
		.update(params)
		.promise()
		.then(response => {
			return response.Attributes;
		});
};