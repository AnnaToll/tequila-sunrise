import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler (req, res) {
    
    await dbConnect()
    
    if (req.method === 'POST') {
        
        console.log(req.body);
        res.status(200).json({ message: 'response sent'});
        
        const user = new User(req.body)

        const isEmailAlreadyRegistered = await User.exists(email);
    
        if (isEmailAlreadyRegistered) {
            console.log("Email already in use")
            res.send({message: "This email is already in use"})
        } else {
            user.save()
            res.send({message: "You are now registerd"})
            console.log("user added to database")
    } 
                    
    }
  }