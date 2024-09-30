import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { APIGatewayProxyHandler } from "aws-lambda";
import { v4 as uuidv4 } from 'uuid';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler: APIGatewayProxyHandler = async (event) => {

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing request body" }),
    };
  }

  const parkId = uuidv4();

  const command = new PutCommand({
    TableName: process.env.TABLE_NAME,
    Item: {
      park_id: parkId,
      created_at: new Date().toISOString(),
      ...JSON.parse(event.body)
    },
  });

  try {
    await docClient.send(command);
    return {
      statusCode: 201,
      body: JSON.stringify({ message: "Post created successfully", parkId }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error creating post in DynamoDB" }),
    };
  }
};