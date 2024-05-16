import {fromCognitoIdentityPool} from "@aws-sdk/credential-providers";
import {S3Client, PutObjectCommand} from "@aws-sdk/client-s3";

import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // For generating unique request IDs
import AWS from 'aws-sdk';

const getCredentials = async (idToken) => {
    let idTokenString = idToken.toString()
    let COGNITO_ID = idToken.payload.iss.replace('https://', '');
    let loginData = {
      [COGNITO_ID]: idTokenString,
    };
   

    return fromCognitoIdentityPool({
        clientConfig: { region: process.env.REACT_APP_REGION }, // Configure the underlying CognitoIdentityClient.
        identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID, // The ID of the Cognito Identity Pool.
        logins: loginData
      })
}

const uploadFileToS3 = async (file, idToken, bucket, key) => {
    const credentials = getCredentials(idToken)
    
    

    const s3Client = new S3Client({
        region: process.env.REACT_APP_REGION,
        credentials: credentials
    })

    const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: file,
    });

    try {
        const response = await s3Client.send(command);
        return true
    } catch (err) {
        console.log('Error', err)
        return false
    }
}

const executeApi = async (method, url, idToken) => {
    let credentials = await getCredentials(idToken)
    credentials = await credentials()
    
    const request = new AWS.HttpRequest(url, process.env.REACT_APP_REGION);

    request.method = method;
    // request.headers['host'] = new URL(url).host;
   //request.headers['x-amz-date'] = new Date().toISOString();
    request.headers['x-amz-security-token'] = credentials.sessionToken;
    //request.headers['x-amz-request-id'] = uuidv4(); // Unique request ID
    delete request.headers['X-Amz-User-Agent'];
    request.headers['Host'] = new URL(url).host;
    const signer = new AWS.Signers.V4(request, 'execute-api');

    signer.addAuthorization(credentials, new Date());



    const axiosConfig = {
        method: method,
        url: url,
        headers: request.headers,
      };


      
    try {
    const response = await axios(axiosConfig);
    console.log('Response:', response.data);
    } catch (error) {
    console.error('Error:', error);
    }

//     const apiUrl = new URL(url);

//     const sigv4 = new SignatureV4({
//     service: 'execute-api',
//     region: process.env.REACT_APP_REGION,
//     credentials: {
//         accessKeyId: credentials.accessKeyId,
//         secretAccessKey: credentials.secretAccessKey,
//         sessionToken: credentials.sessionToken,
//     },
//     sha256: Sha256,
//     });

//     const signed = await sigv4.sign({
//         method: method,
//         hostname: apiUrl.host,
//         path: apiUrl.pathname,
//         protocol: apiUrl.protocol,
//         headers: {
//         'Content-Type': 'application/json',
//         host: apiUrl.hostname, // compulsory
//         },
//     });

    

//     delete signed.headers['host'];

//     console.log('Signed', signed)

//     try {
//         const { data } = await axios({
//         ...signed,
//         url: url, // compulsory
//         });

//         console.log('Successfully received data: ', data);
//         return data;
//     } catch (error) {
//         console.log('An error occurred', error);

//         throw error;
//     }
};


export { getCredentials, uploadFileToS3, executeApi }