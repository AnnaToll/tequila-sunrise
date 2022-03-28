import dbConnect from "../../lib/dbConnect";
import Product from "../../models/Products"

export default async function handler (req, res) {
    
    await dbConnect()
    
    if (req.method === 'GET') {
    
        
        Product.find()
        .then((data) => {
            res.status(200).json(data);
        })
                    
    }
                
                
    // const { method } = req
  
    // switch (method) {
    //   case 'GET':
    //     try {
    //       const users = await User.find({})
    //       res.status(200).json({ success: true, data: users })
    //     } catch (error) {
    //       res.status(400).json({ success: false })
    //     }
    //     break
    //   case 'POST':
    //     try {
    //       const user = await User.create(req.body)
    //       res.status(201).json({ success: true, data: user })
    //     } catch (error) {
    //       res.status(400).json({ success: false })
    //     }
    //     break
    //   default:
    //     res.status(400).json({ success: false })
    //     break
    // }
  }
