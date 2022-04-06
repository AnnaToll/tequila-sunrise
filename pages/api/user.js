import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler (req, res) {
    
    await dbConnect()
    
    if (req.method === 'POST') {

        const userId = req.body
        
        const findUser = await User.findById(userId)
        res.send(findUser) 
    }

    if (req.method === 'PATCH') {

        const findUser = await User.findById(req.body.id)
        const updatedBuyHistory = findUser.buyhistory;

        for (let purchase of req.body.purchases) {
            updatedBuyHistory.push(purchase);
        }

        findUser.buyhistory = updatedBuyHistory;
        findUser.save()
            .then (() => {
                res.status(200).json({ success: true })
            })
            .catch(err => res.status(400).json({ success: false, err: err }))
    }
    
}