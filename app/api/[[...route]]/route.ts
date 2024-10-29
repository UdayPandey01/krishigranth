import  Crop  from "@/models/schema";
import connectDb from "@/utils/dbConnect"
import {Hono} from "hono"

const app = new Hono()

app.post('/sell-crop',
    async(c) => {
        await connectDb();

        try{
            const data = await c.req.json()
            const NewCrop = new Crop(data)
            await NewCrop.save()
            return c.json({
                message : "Crop successfully added!",
                crop : NewCrop
            }, 201)
        }catch(error){
            return c.json({
                message : "Error saving crop",
                error
            }, 500)
        }
    }
)

export default app