import dbConnect from "../../lib/dbConnect";
import Products from "../../models/Products"

export default async function handler (req, res) {
    
    await dbConnect()
    
    if (req.method === 'POST') {

        Products.findById(req.body.id)
            .then((data) => {
                res.status(200).json({ quantity: data.quantity })
            })
            .catch(err => res.status(400).json({ error: err }))
    }
  }
