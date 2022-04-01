import dbConnect from "../../lib/dbConnect";
import Products from "../../models/Products"

export default async function handler (req, res) {
    
    await dbConnect()
    
    if (req.method === 'PATCH') {

        Products.findById(req.body.id)
            .then((product) => {
                product.quantity = product.quantity + req.body.returnQuantity;
                product.save()
                    .then (() => {
                        res.status(200).json({ success: true })
                    })
                    .catch(err => res.status(400).json({ success: false, err: err }))
            })
    }

  }
