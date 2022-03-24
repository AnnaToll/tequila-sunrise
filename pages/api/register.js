import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler (req, res) {
    
    await dbConnect()
    
    if (req.method === 'POST') {
        
        console.log(req.body);
        res.status(200).json({ message: 'response sent'});
        
        User.find()
        .then((data) => console.log(data));
                    
    }
  }