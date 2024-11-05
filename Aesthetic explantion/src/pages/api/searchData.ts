import uiData from "@/lib/data";
import uiXiaofei from '@/lib/xiaofei';
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
        if (result && result?.length > 0) {
            const list = await uiData.findUser(body);
            const list2 = await uiXiaofei.findUser(body);
            if (list?.length && !list2?.length) {
                res.status(200).json({
                    msg: '查询成功',
                    list: [...list],
                })
            } else if (!list?.length && list2?.length) {
                res.status(200).json({
                    msg: '查询成功',
                    list: [...list2],
                })
            } else if (list?.length && list2?.length) {
                res.status(200).json({
                    msg: '查询成功',
                    list: [...list, ...list2],
                })
            } else {
                res.status(200).json({
                    msg: '查询成功',
                    list: [],
                })
            }
            

        }
        res.status(405).json({ msg: "当前账户不存在" });
    }
}