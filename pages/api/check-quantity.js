import dbConnect from "../../lib/dbConnect";
import Products from "../../models/Products"

export default async function handler (req, res) {
    
    await dbConnect()
    
    if (req.method === 'PATCH') {

        Products.findById(req.body.id)
            .then((product) => {
                if (req.body.changeQuantity <= product.quantity || req.body.changeQuantity < 0) {
                    product.quantity = product.quantity - req.body.changeQuantity;
                    product.save()
                        .then (() => {
                            res.status(200).json({ inStorage: true })
                        })
                } else {
                    res.status(200).json({ inStorage: false })
                }
            })
            // .catch(err => res.status(400).json({ error: err }))
    }
/*     if (req.method === 'PATCH') {

        Products.findById(req.body.id)
            .then((product) => {
                if (req.body.changeQuantity <= product.quantity) {
                    product.quantity = product.quantity - req.body.changeQuantity;
                    product.save()
                        .then (() => {
                            res.status(200).json({ inStorage: true })
                        })
                } else {
                    res.status(200).json({ inStorage: false })
                }
            })
            // .catch(err => res.status(400).json({ error: err }))
    } */

  }
