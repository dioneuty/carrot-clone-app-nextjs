import {NextApiRequest, NextApiResponse} from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(req:NextApiRequest, res:NextApiResponse){
    /*await client.user.create({data: {
        email: "hi",
        name: "hi",
    }});

    res.json({
        ok:true, data:'client test'
    })

    if(req.method !== 'POST'){
        res.status(401).end();
    }
    console.log(req.body['email']);
     res.json({ok:true});

    */
  console.log(req.body);

    return res.status(200).end();
}

export default withHandler('POST', handler);