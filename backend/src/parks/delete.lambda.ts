import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import type { APIGatewayProxyHandler } from "aws-lambda";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler: APIGatewayProxyHandler = async (event) => {
  
  const parkId = event.queryStringParameters?.parkId;

  if (!parkId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing parkId parameter" }),
    };
  }

  const command = new DeleteCommand({
    TableName: process.env.TABLE_NAME,
    Key: {
      park_id: parkId,
    },
  });

  try {
    await docClient.send(command);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Post deleted successfully" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error deleting post from DynamoDB" }),
    };
  }
};