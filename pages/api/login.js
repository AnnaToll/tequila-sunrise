import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler (req, res) {
    
    await dbConnect()
    
    if (req.method === 'POST') {
        
        const user = new User(req.body)
        const isPasswordCorecct = user.password
    
        const doesEmailExist = await User.exists(user.email);
        const isEmailCorecct = await User.find(user.email)
    
        if (doesEmailExist) {
            for(i of isEmailCorecct){
            }
            const correcctPassword = i.password
            if (isEmailCorecct && correcctPassword == isPasswordCorecct) {
                res.send({
                    message: "You are now logged in"
                })
                console.log("You are now logged in")
            } else {
                console.log("Details does not match")
                res.send({message: "Details does not match"})
            }
        }else {
            console.log("Details does not match")
            res.send({message: "Details does not match"})
        }  
    }
  }