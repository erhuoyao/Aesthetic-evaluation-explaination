import uiUsers from "@/lib/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest,
    res: NextApiResponse) {
        if (req.method === 'POST') {
            const body: {
                phone: string;
                password: string;
            } = JSON.parse(req.body);
            const result = await uiUsers.findUser({
                phone: body.phone,
            });
            if (result &&  result?.length > 0) {
                res.status(405).json({ msg: "当前账户已存在" });
            }

            await uiUsers.createUser(body);
            res.status(200).json({
                msg: '创建成果',
                ...body,
            })
        }
}