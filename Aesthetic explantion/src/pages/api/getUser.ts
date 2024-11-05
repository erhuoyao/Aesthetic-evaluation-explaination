import uiUsers from "@/lib/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest,
    res: NextApiResponse) {
    if (req.method === 'GET') {
        const result = await uiUsers.findUser({});
        res.status(200).json({
            msg: '获取成功',
            list: result,
        })
    }
    if (req.method === 'POST') {
        const body: {
            phone: string;
            password: string;
        } = JSON.parse(req.body);
        const result = await uiUsers.findUser({
            phone: body.phone,
            password: body.password
        });
        if (result?.length) {
            res.status(200).json({
                msg: '获取成功',
                list: result[0],
            })
        } else {
            res.status(405).json({
                msg: '当前账号不存在',
            })
        }

    }
}