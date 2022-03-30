import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler (req, res) {
    
    await dbConnect()
    
    if (req.method === 'POST') {

        const userId = req.body._id

        const findUser = await User.findById(userId)
        res.send(findUser) 
    }
}