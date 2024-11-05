import uiUsers from "@/lib/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest,
    res: NextApiResponse) {
        if (req.method === 'POST') {
            const body: {
                phone: string;
            } = JSON.parse(req.body);
            const result = await uiUsers.findUser({
                phone: body.phone,
            });
            if (result &&  result?.length > 0) {
                await uiUsers.deleteUser(body);
                res.status(200).json({
                    msg: '删除成功',
                    ...body,
                })
               
            }

            res.status(405).json({ msg: "当前账户不存在" });

           
        }
}