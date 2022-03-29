import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler (req, res) {
    
    await dbConnect()
    
    if(req.method === 'GET'){
      User.find()
      .then((data) => {
          res.status(200).json(data);
          console.log(data)
      })
  }
  }