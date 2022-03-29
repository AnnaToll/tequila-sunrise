import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler (req, res) {
    
    await dbConnect()
    
    if(req.method === 'POST'){
      const userId = req.body
      console.log(userId)

      const findUser = await User.find({ id : userId })
      console.log(findUser)
      .then((data) => {
          res.status(200).json(data);
          console.log(data)
      })
  }
  }