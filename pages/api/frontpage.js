// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
import dbConnect from '../../lib/dbConnect';
import Products from '../../models/Products'

export default async function frontpage(req, res) {

    await dbConnect()

    if(req.method === 'GET'){
        Products.find()
        .then((data) => {
            res.status(200).json(data);
            console.log(data)
        })
    }
}

