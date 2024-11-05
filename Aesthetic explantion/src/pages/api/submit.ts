import uiXiaofei from "@/lib/xiaofei";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest,
    res: NextApiResponse) {
    if (req.method === 'POST') {
        const body: {
            dafen: string;
            userInfo: string;
            phone: string;
            createTime: string;
        } = JSON.parse(req.body);
        const result = await uiXiaofei.createUser(body);
        if (!result) {
            res.status(405).json({ msg: "提交失败" });
        }
        res.status(200).json({
            success: true,
        })
    }
}