import { ChatOpenAI } from '@langchain/openai';
import 'dotenv/config' 
const model = new ChatOpenAI(
    {
        apiKey: process.env.API_KEY,
        configuration: {
            baseURL: process.env.BASE_URL,
        },
        modelName: process.env.MODEL_NAME,
        temperature: Number(process.env.TEMPERATURE),
        verbose: true,
    }
);
const res = await model.invoke('你好')
console.log(res.content)
// const res = await model.batch(['你好', '你好吗？'])
// const res = model.streamEvents('给张建芳写一首诗', { version: '2.0' })
// for await (const event of res) {
//     console.log(event.delta?.text)
    
//     // if (event.event === 'content-block-delta' && event.delta?.type === 'text-delta') {
//     //     process.stdout.write(event.delta.text)
//     // }
// }
