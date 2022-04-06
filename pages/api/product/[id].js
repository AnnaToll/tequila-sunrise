import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/Products";

export default async function handler(req, res) {
    try {
        await dbConnect();

        console.log(req.query.id);

        if (req.method === 'GET') {
            let data = await Product.findById(req.query.id);
            res.status(200).json(data);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}
