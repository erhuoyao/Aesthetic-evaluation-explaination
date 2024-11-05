import AdminLayout from "@/layout/Admin/IndexLayout";
import { Button, Modal, Table, message } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import styles from "./login.module.css";
import * as XLSX from "xlsx";

interface DataType {
  key: string;
  phone: string;
  password: string;
}

const AdminCheck = () => {
  const [data, setData] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [userInfo, setUserInfo] = useState({
    open: false,
    phone: "",
  });
  const [list, setList] = useState<any[]>([]);
  const columns: ColumnsType<DataType> = [
    {
      key: "phone",
      title: "手机号",
      dataIndex: "phone",
      align: "left",
    },
    {
      key: "password",
      title: "密码",
      dataIndex: "password",
      align: "left",
    },
    {
      key: "operator",
      title: "操作",
      dataIndex: "operator",
      width: 400,
      align: "center",
      render: (text, record) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                setUserInfo({
                  open: true,
                  phone: record.phone,
                });
                getData(record.phone);
              }}
            >
              查看用户答题记录
            </Button>
            <Button
              type="link"
              danger
              onClick={async () => {
                const response = await fetch("/api/deleteUser", {
                  method: "POST",
                  body: JSON.stringify({
                    phone: record.phone,
                  }),
                });
                if (response.status !== 200) {
                  const param = await response.text();
                  message.error(JSON.parse(param).msg);
                }
                if (response.status === 200) {
                  const responseData = await response.json();
                  message.success("删除成功!");
                  getUser();
                }
              }}
            >
              删除用户
            </Button>
          </>
        );
      },
    },
  ];
  const getUser = async () => {
    const response = await fetch("/api/getUser");
    if (response.status === 200) {
      const responseData = await response.json();
      setData(responseData.list ?? []);
    }
  };

  const getData = async (phone: string) => {
    const response = await fetch("/api/searchData", {
      method: "POST",
      body: JSON.stringify({ phone }),
    });
    if (response.status === 200) {
      const responseData = await response.json();
      setList(responseData.list ?? []);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  const handleOk = () => {
    const _userInfo = JSON.parse(JSON.stringify(userInfo));
    setUserInfo({
      open: false,
      phone: _userInfo.phone,
    });
  };

  const handleCancel = () => {
    const _userInfo = JSON.parse(JSON.stringify(userInfo));
    setUserInfo({
      open: false,
      phone: _userInfo.phone,
    });
  };

  const downloadExcelFile = (phone: string, dataStr: string) => {
    if (dataStr) {
      const data = JSON.parse(dataStr);
      if (data.dafen) {
      } else {
        const arr = [
          [
            "姓名",
            "图片",
            "是否同意AI意见",
            "局部问卷调查",
            "我的评分",
            "色彩评分",
            "布局评分",
            "景深评分",
            "光照评分",
            "质量评分",
            "最终评分",
            "借鉴程度",
          ],
        ];
        for (const category in data) {
          for (const item of data[category]) {
            if (item.id === "1") {
              const qustt: string[] = [];
              if (item.questionnaire) {
                qustt.push(
                  ...item.questionnaire.map(
                    (q: any) => `${q.value} ${q.fraction}`
                  )
                );
              }
              if (item.questionnaire2) {
                qustt.push(
                  ...item.questionnaire2.map(
                    (q: any) => `${q.value} ${q.fraction}`
                  )
                );
              }
              if (item.questionnaire3) {
                qustt.push(
                  `${item.questionnaire3.fraction}`
                );
              }
              console.log(item, "111");
              const row = [
                // `类别一中第${item.selectedValue}张图`,
                item.questionnaire4.fraction,
                `${item.selectedValue}`,
                item.agree ? "同意" : "不同意",
                item.questionnaire ? qustt.join(", ") : [],
                "当前类别无评分",
                "当前类别无评分",
                "当前类别无评分",
                "当前类别无评分",
                "当前类别无评分",
                "当前类别无评分",
                `${item.questionnaire3.fraction ? item.questionnaire3.fraction : '当前无最终评分'}`,
                `${item.questionnaire2 ? item.questionnaire2.map(
                  (q: any) => `${q.value} ${q.fraction}`
                ).join(',') : '当前暂无'} `
              ];
              arr.push(row as any);
            }

            if (item.id === "2") {
              const qustt: string[] = [];
              if (item.questionnaire) {
                qustt.push(
                  ...item.questionnaire.map(
                    (q: any) => `${q.value} ${q.fraction} `
                  )
                );
              }
              if (item.questionnaire2) {
                qustt.push(
                  ...item.questionnaire2.map(
                    (q: any) => `${q.value} ${q.fraction} `
                  )
                );
              }
              if (item.questionnair3) {
                qustt.push(
                  `${item.questionnair3.value} ${item.questionnair3.fraction} `
                );
              }
              console.log(item, "222");
              const row = [
                // `类别二中第${ item.selectedValue } 张图`,
                item.questionnaire4.fraction,
                `${parseFloat(item.selectedValue)} `,
                // `${ parseFloat(item.selectedValue) + 3 } `,
                item.agree ? "同意" : "不同意",
                item.questionnaire ? qustt.join(", ") : [],
                `${item.myFraction} `,
                "当前类别无评分",
                "当前类别无评分",
                "当前类别无评分",
                "当前类别无评分",
                "当前类别无评分",
                `${item.questionnaire3.fraction ? item.questionnaire3.fraction : '当前无最终评分'}`,
                `${item.questionnaire2 ? item.questionnaire2.map(
                  (q: any) => `${q.value} ${q.fraction}`
                ).join(',') : '当前暂无'} `
              ];
              arr.push(row as any);
            }

            if (item.id === "3") {
              const qustt: string[] = [];
              if (item.questionnaire) {
                qustt.push(
                  ...item.questionnaire.map(
                    (q: any) => `${q.value} ${q.fraction} `
                  )
                );
              }
              if (item.questionnaire2) {
                qustt.push(
                  ...item.questionnaire2.map(
                    (q: any) => `${q.value} ${q.fraction} `
                  )
                );
              }
              if (item.questionnaire3) {
                qustt.push(
                  `最终评分：${item.questionnaire3.fraction} `
                );
              }
              console.log(item, "qqqqq");
              const row = [
                item.questionnaire4.fraction,
                // `类别三中第${ item.selectedValue } 张图`,
                `${parseFloat(item.selectedValue) + 6 > 9
                  ? parseFloat(item.selectedValue)
                  : parseFloat(item.selectedValue) + 6
                } `,
                // `图${ parseFloat(item.selectedValue) + 6 } `,
                item.agree ? "同意" : "不同意",
                item.questionnaire ? qustt.join(", ") : [],
                `${item.myFraction} `,
                `${item.myDetailFraction.myColor ?? "1"} `,
                `${item.myDetailFraction.myComposition ?? "1"} `,
                `${item.myDetailFraction.myDepth ?? "1"} `,
                `${item.myDetailFraction.myLight ?? "1"} `,
                `${item.myDetailFraction.myQuality ?? "1"} `,
                `${item.questionnaire3.fraction ? item.questionnaire3.fraction : '当前无最终评分'}`,
                `${item.questionnaire2 ? item.questionnaire2.map(
                  (q: any) => `${q.value} ${q.fraction}`
                ).join(',') : '当前暂无'} `
              ];
              arr.push(row as any);
            }
          }
        }
        // 创建一个新的工作簿
        const workbook = XLSX.utils.book_new();

        // 将二维数组转换为工作表
        const worksheet = XLSX.utils.aoa_to_sheet(arr);

        // 将工作表添加到工作簿中
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

        // 将工作簿写入二进制字符串
        const binaryString = XLSX.write(workbook, {
          bookType: "xlsx",
          type: "binary",
        });

        // 将二进制字符串转换为 Blob 对象
        const blob = new Blob([s2ab(binaryString)], {
          type: "application/octet-stream",
        });

        // 创建一个下载链接并触发下载
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `${phone} 的答题记录.xlsx`;
        link.click();
      }
    }
  };

  const downloadExcelFile2 = (
    phone: string,
    dataStr: string,
    dataStr2: string
  ) => {
    if (dataStr) {
      const data = JSON.parse(dataStr);
      const arr = [
        [
          "姓名",
          "城市",
          "年龄",
          "性别",
          "教育程度",
          "收入",
          "婚姻",
          "一个月内平均网络购物频率",
          "消费品所属质量档次",
          "消费地理位置",
          "您对“归属感”（是否属于某类群体的感觉）的注重程度进行评分",
          "您在日常生活中多大程度感受到自己被的“被拒绝”、“被遗弃”和“被忽视”而产生的心理空虚的感受",
          "您更加注重产品的哪个方面？",
          "a.对您来说产品的新颖性相比于典型性",
          "b.对您来说产品的家族系列连续性相比于不可复制的独特性",
          "c.对您来说产品彰显的社会地位差异性相比于感觉到的社会群体的“归属感”",
          '周围人或者您自己都认为自己具有好的审美品味，能够快速区分出审美的质量差异',
          "您认为您是一个拘谨的人吗？",
          "您认为您是一个被他人信任的人吗？",
          "您认为您是一个懒惰的人吗？",
          "您认为您是一个很放松，能很好应对压力的人吗？",
          "您认为您是一个对艺术不太感兴趣的人吗？",
          "您认为您是一个外向善于交际的人吗？",
          "您认为您是一个即使工作再复杂困难也会很好完成的人吗？",
          "您认为您是一个较为容易紧张的人吗？",
          "您认为您是一个想像力丰富的人吗？",
        ],
      ];
      // arr.push([data]);
      const row: any[] = [];
      for (const a in data) {
        if (typeof data[a] === "string") {
          row.push(data[a]);
        } else {
          row.push(data[a].join());
        }
      }
      arr.push(row);
      const arr2 = [
        [
          "图片",
          "您对该产品的美观程度打分",
          "您对该产品的喜爱程度打分",
          "您对支付该产品的意愿程度打分",
          "您看到该产品时，如下哪一种情绪您能明确感受到",
        ],
      ];
      const data2 = JSON.parse(dataStr2);
      for (let i = 0; i < data2.length; i++) {
        const row2: any[] = [];
        for (const a in data2[i]) {
          if (typeof data2[i][a] === "string") {
            row2.push(data2[i][a]);
          } else {
            row2.push(data2[i][a].join());
          }
        }
        arr2.push(row2);
      }
      // arr2.push(row2);
      // 创建一个新的工作簿
      const workbook = XLSX.utils.book_new();

      // 将二维数组转换为工作表
      const worksheet = XLSX.utils.aoa_to_sheet(arr);
      // 将二维数组转换为工作表
      const worksheet2 = XLSX.utils.aoa_to_sheet(arr2);

      // 将工作表添加到工作簿中
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      XLSX.utils.book_append_sheet(workbook, worksheet2, "Sheet2");

      // 将工作簿写入二进制字符串
      const binaryString = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "binary",
      });

      // 将二进制字符串转换为 Blob 对象
      const blob = new Blob([s2ab(binaryString)], {
        type: "application/octet-stream",
      });

      // 创建一个下载链接并触发下载
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${phone} 的表单记录.xlsx`;
      link.click();
    }
  };

  // 将二进制字符串转换为 ArrayBuffer
  function s2ab(s: any) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  }

  return (
    <AdminLayout actvie="2">
      <div>
        {contextHolder}
        <Table columns={columns} dataSource={data} />
        <Modal
          title="Basic Modal"
          open={userInfo.open}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {list.map((item, index) => (
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              key={index}
            >
              <div>{item.createTime}</div>
              <div>
                {item.userInfo ? (
                  <Button
                    type="link"
                    onClick={() =>
                      downloadExcelFile2(item.phone, item.userInfo, item.dafen)
                    }
                  >
                    导出消费者表单及答题xlsx
                  </Button>
                ) : (
                  <Button
                    type="link"
                    onClick={() => downloadExcelFile(item.phone, item.data)}
                  >
                    导出答题xlsx
                  </Button>
                )}
              </div>
            </div>
          ))}
        </Modal>
      </div>
    </AdminLayout>
  );
};

export default AdminCheck;
