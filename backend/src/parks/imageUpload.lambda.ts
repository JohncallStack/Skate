import { APIGatewayProxyHandler } from 'aws-lambda';
import { S3 } from 'aws-sdk';

const s3 = new S3();

export const handler: APIGatewayProxyHandler = async (event) => {

    try{
        const body = JSON.parse(event.body || '{}');
        const { filename, fileContent, mimeType } = body;
    

    if (!filename || !fileContent || !mimeType) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Missing required fields" }),
        };
    }

    const buffer = Buffer.from(fileContent, 'base64');
    const key = `uploads/${Date.now()}-${filename}`;

    await s3.putObject({
        Bucket: process.env.UPLOAD_BUCKET!,
        Key: key,
        Body: buffer,
        ContentType: mimeType,
    }).promise();

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
            // Optional: add CORS headers if not handled elsewhere
            "Access-Control-Allow-Origin": "*",
          },
        body: JSON.stringify({ message: "File uploaded successfully", key }),
    };

    }catch (error) {
        return{
            statusCode: 500,
            headers: {
                "Content-Type": "application/json",
                // Optional: add CORS headers if not handled elsewhere
                "Access-Control-Allow-Origin": "*",
              },
            body: JSON.stringify({ message: "Error uploading file", error }),
        };
    }

};