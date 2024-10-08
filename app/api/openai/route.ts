// // /pages/api/openai.ts
// import OpenAI from 'openai';
// import { json } from 'stream/consumers';

// const openai = new OpenAI({
//   apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
// });

// export async function POST(
//   req: Request,
// ) {
//       const {prompt} = req.json();

//       const response = await openai.chat.completions.create({
//         model: 'gpt-3.5-turbo',  // Update model if needed
//         messages: [{ role: 'user', content: prompt }],
//         max_tokens: 100,
//       })
//       console.log(response);
//       return Response.json({name:'Arpit'})

// }
