import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/Products";

export default async function handler(req, res) {
    await dbConnect();

    console.log(req.query.id);

    //lägg in try and catch
    if (req.method === 'GET') {
        Product.findById(req.query.id)
            .then((data) => {
                res.status(200).json(data);
            })
    }
}

// query: { id: '623c4bb7ad3085a867593522' }