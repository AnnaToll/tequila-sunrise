import dbConnect from "../../lib/dbConnect";
import User from "../../models/User"; 

export default async function handler (req, res) {
    
    await dbConnect()
    
    if (req.method === 'POST') {
        
        
        console.log(req.body);
        res.status(200).json({ message: 'response sent'});
        
        const newUser = new User(req.body)
        const newUserEmail = newUser.email

        const isEmailAlreadyRegistered = await User.find({ email: newUserEmail })
        console.log(isEmailAlreadyRegistered)
        
       if (isEmailAlreadyRegistered.length === 0 ) {
           newUser.save()
           console.log("user added to database")
           res.status(200).json({message: "user added to database"})
        } else {
            console.log("Email already in use")
    }
                    
    }
  }