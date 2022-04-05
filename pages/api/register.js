import dbConnect from "../../lib/dbConnect";
import User from "../../models/User"; 

export default async function handler (req, res) {
    
    await dbConnect()
    
    if (req.method === 'POST') {
        
        const newUser = new User(req.body)
        const newUserEmail = newUser.email
        const isEmailAlreadyRegistered = await User.find({ email: newUserEmail })
        
       if (isEmailAlreadyRegistered.length === 0 ) {
           newUser.save()
           res.status(200).json({message: "Du är nu registrerad"})
        } else {
            res.status(401).json({message: "Eposten du angav används redan"})
    }
                    
    }
  }