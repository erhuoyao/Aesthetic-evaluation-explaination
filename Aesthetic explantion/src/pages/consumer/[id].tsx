/* eslint-disable jsx-a11y/alt-text */
import "@/app/globals.css";
import { useCallback, useEffect, useState } from "react";
import styles from "./index.module.css";
import {
  Button,
  Form,
  Input,
  Radio,
  Checkbox,
  Row,
  Col,
  Space,
  Select,
} from "antd";
import { useLocal } from "@/hooks/local";
import DefaultLayout from "@/layout/Default/IndexLayout";
import { useRouter } from "next/router";
import { Image } from "antd";
import moment from "moment";
const _image2 = "image2!";
const _image = "image!";
const _image3 = "image3!";
const _cha = "1510chairs-logit!";

const ConsumerPage = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const { id } = router.query;
  const [num, setNum] = useState(1);
  const [imageName, setImageName] = useState(id);
  const [imageSrc, setImageSrc] = useState("");
  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);
      const localXiaoFeiStr = localStorage.getItem("xiaofeiImage");
      if (localXiaoFeiStr) {
        const localXiaoFei: any[] = JSON.parse(localXiaoFeiStr);
        const xiaofei = {
          图片: `${imageName}`,
          ...values,
        };
        const filter = localXiaoFei.findIndex(
          (item) => item["图片"] === `${imageName}`
        );
        if (filter >= 0) {
          localXiaoFei[filter] = xiaofei;
        } else {
          localXiaoFei.push(xiaofei);
        }
        if (localXiaoFei.length >= 80) {
          const localXiaoFeiZheStr = localStorage.getItem("xiaofeizheUser");
          const userStr = localStorage.getItem("user");
          const user = JSON.parse(userStr as any);
          const data = {
            phone: user.phone,
            dafen: localXiaoFeiStr,
            userInfo: localXiaoFeiZheStr ?? "当前用户未留存信息",
            createTime: moment().format("YYYY年MM月DD日 HH:mm:ss"),
          };
          localStorage.removeItem("acc-images");
          const response = await fetch("/api/submit", {
            method: "POST",
            body: JSON.stringify(data),
          });
          if (response.status !== 200) {
            const param = await response.text();
            alert("提交失败");
          }
          if (response.status === 200) {
            const responseData = await response.json();
            localStorage.removeItem("xiaofeizheUser");
            localStorage.removeItem("xiaofeiImage");
            alert("提交成功!");
            router.replace("/entrance");
          }
          return;
        }
        localStorage.setItem("xiaofeiImage", JSON.stringify(localXiaoFei));
      } else {
        const newLocal = [
          {
            图片: `${imageName}`,
            ...values,
          },
        ];
        localStorage.setItem("xiaofeiImage", JSON.stringify(newLocal));
      }
      form.resetFields();
      router.replace(`/consumer/${parseFloat(id as string) + 1}`);
      // let _imageName = "";
      // if (id) {
      //   if (id.indexOf(_image2) > -1) {
      //     _imageName = (id as string).replace(_image2, "第二次500中");
      //   }
      //   if (id.indexOf(_image) > -1) {
      //     _imageName = (id as string).replace(_image, "第一次1-500中");
      //   }
      //   if (id.indexOf(_image3) > -1) {
      //     _imageName = (id as string).replace(_image3, "第二次501-1013中");
      //   }
      //   if (id.indexOf(_cha) > -1) {
      //     _imageName = (id as string).replace(_cha, "1510chairs-logit中");
      //   }
      //   setImageName(_imageName);
      // }
      // if (localXiaoFeiStr) {
      //   const localXiaoFei: any[] = JSON.parse(localXiaoFeiStr);
      //   // 当为80张的时候就是提交到数据库
      //   if (localXiaoFei.length >= 80) {
      //     const localXiaoFeiZheStr = localStorage.getItem("xiaofeizheUser");
      //     const userStr = localStorage.getItem("user");
      //     const user = JSON.parse(userStr as any);
      // const data = {
      //   phone: user.phone,
      //   dafen: localXiaoFeiStr,
      //   userInfo: localXiaoFeiZheStr ?? "当前用户未留存信息",
      //   createTime: moment().format("YYYY年MM月DD日 HH:mm:ss"),
      // };
      // const response = await fetch("/api/submit", {
      //   method: "POST",
      //   body: JSON.stringify(data),
      // });
      // if (response.status !== 200) {
      //   const param = await response.text();
      //   alert("提交失败");
      // }
      // if (response.status === 200) {
      //   const responseData = await response.json();
      //   localStorage.removeItem("xiaofeizheUser");
      //   localStorage.removeItem("xiaofeiImage");
      //   alert("提交成功!");
      //   router.replace("/entrance");
      // }
      //     return;
      //   }
      //   const xiaofei = {
      //     图片: `${_imageName}`,
      //     ...values,
      //   };
      // const filter = localXiaoFei.findIndex(
      //   (item) => item["图片"] === `${_imageName}`
      // );
      // if (filter >= 0) {
      //   localXiaoFei[filter] = xiaofei;
      // } else {
      //   localXiaoFei.push(xiaofei);
      // }
      //   localStorage.setItem("xiaofeiImage", JSON.stringify(localXiaoFei));
      // } else {
      // const newLocal = [
      //   {
      //     图片: `${_imageName}`,
      //     ...values,
      //   },
      // ];
      // localStorage.setItem("xiaofeiImage", JSON.stringify(newLocal));
      // }
      // form.resetFields();
      // const response = await fetch(`/api/getImage?length=${num + 1}`);
      // if (response.status !== 200) {
      //   const param = await response.text();
      // }
      // if (response.status === 200) {
      //   const responseData = await response.json();
      //   // console.log(responseData.image);
      //   // const regex = /(\d+)/;
      //   // const result = responseData.image.match(regex);
      //   router.replace(`/consumer/${responseData.image}`);
      //   setNum(responseData.lengths);
      //   console.log("Success:", values);
      // }
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  // 上一页
  const onBack = useCallback(() => {
    if (id === "0") {
      alert("当前为第一页");
    } else {
      router.replace(`/consumer/${parseInt(id as string) - 1}`);
    }
    // const localXiaoFeiStr = localStorage.getItem("xiaofeiImage");
    // if (localXiaoFeiStr && id) {
    //   const localXiaoFei: any[] = JSON.parse(localXiaoFeiStr);
    //   let __imageName = "";
    //   if (id.indexOf(_image2) > -1) {
    //     __imageName = (id as string).replace(_image2, "第二次500中");
    //   }
    //   if (id.indexOf(_image) > -1) {
    //     __imageName = (id as string).replace(_image, "第一次1-500中");
    //   }
    //   if (id.indexOf(_image3) > -1) {
    //     __imageName = (id as string).replace(_image3, "第二次501-1013中");
    //   }
    //   if (id.indexOf(_cha) > -1) {
    //     __imageName = (id as string).replace(_cha, "1510chairs-logit中");
    //   }
    //   const filter = localXiaoFei.findIndex(
    //     (item) => item["图片"] === `${__imageName}`
    //   );
    //   console.log(filter);
    //   if (filter > 0) {
    //     const item = localXiaoFei[filter - 1];
    //     if (item) {
    //       const itemImage = item["图片"];
    //       console.log(itemImage);
    //       let _imageName = "";
    //       if (itemImage.indexOf("第二次500中") > -1) {
    //         _imageName = (itemImage as string).replace(
    //           "第二次500中",
    //           "image2!"
    //         );
    //       }
    //       if (itemImage.indexOf("第一次1-500中") > -1) {
    //         _imageName = (itemImage as string).replace(
    //           "第一次1-500中",
    //           "image!"
    //         );
    //       }
    //       if (itemImage.indexOf("第二次501-1013中") > -1) {
    //         console.log("执行");
    //         _imageName = (itemImage as string).replace(
    //           "第二次501-1013中",
    //           "image3!"
    //         );
    //       }
    //       if (itemImage.indexOf("1510chairs-logit中") > -1) {
    //         _imageName = (itemImage as string).replace(
    //           "1510chairs-logit中",
    //           "1510chairs-logit!"
    //         );
    //       }
    //       console.log(1, _imageName, id);
    //       router.replace(`/consumer/${_imageName}`);
    //     }
    //   } else {
    //     // 最后一页的话，就返回到list最后一项
    //     const item = localXiaoFei[localXiaoFei.length - 1];
    //     if (item) {
    //       const itemImage = item["图片"];
    //       const regex = /(\d+)/;
    //       const result = itemImage.match(regex);
    //       if (result) {
    //         const ids = result[1];
    //         let _imageName = "";
    //         if (itemImage.indexOf("第二次500中") > -1) {
    //           _imageName = (itemImage as string).replace(
    //             "第二次500中",
    //             "image2!"
    //           );
    //         }
    //         if (itemImage.indexOf("第一次1-500中") > -1) {
    //           _imageName = (itemImage as string).replace(
    //             "第一次1-500中",
    //             "image!"
    //           );
    //         }
    //         if (itemImage.indexOf("第二次501-1013中") > -1) {
    //           _imageName = (itemImage as string).replace(
    //             "第二次501-1013中",
    //             "image3!"
    //           );
    //         }
    //         if (itemImage.indexOf("1510chairs-logit中") > -1) {
    //           _imageName = (itemImage as string).replace(
    //             "1510chairs-logit中",
    //             "1510chairs-logit!"
    //           );
    //         }
    //         router.replace(`/consumer/${_imageName}`);
    //       }
    //     }
    //   }
    // }
  }, [id]);

  // 下一页
  const onGo = useCallback(() => {
    const localXiaoFeiStr = localStorage.getItem("xiaofeiImage");
    if (localXiaoFeiStr && id) {
      const localXiaoFei: any[] = JSON.parse(localXiaoFeiStr);
      let __imageName = "";
      if (id.indexOf(_image2) > -1) {
        __imageName = (id as string).replace(_image2, "第二次500中");
      }
      if (id.indexOf(_image) > -1) {
        __imageName = (id as string).replace(_image, "第一次1-500中");
      }
      if (id.indexOf(_image3) > -1) {
        __imageName = (id as string).replace(_image3, "第二次501-1013中");
      }
      if (id.indexOf(_cha) > -1) {
        __imageName = (id as string).replace(_cha, "1510chairs-logit中");
      }
      const filter = localXiaoFei.findIndex(
        (item) => item["图片"] === `${__imageName}`
      );
      console.log(filter);
      if (filter >= 0 && filter !== localXiaoFei.length - 1) {
        const item = localXiaoFei[filter + 1];
        if (item) {
          const itemImage = item["图片"];
          const regex = /(\d+)/;
          const result = itemImage.match(regex);
          if (result) {
            let _imageName = "";
            if (itemImage.indexOf("第二次500中") > -1) {
              _imageName = (itemImage as string).replace(
                "第二次500中",
                "image2!"
              );
            }
            if (itemImage.indexOf("第一次1-500中") > -1) {
              _imageName = (itemImage as string).replace(
                "第一次1-500中",
                "image!"
              );
            }
            if (itemImage.indexOf("第二次501-1013中") > -1) {
              _imageName = (itemImage as string).replace(
                "第二次501-1013中",
                "image3!"
              );
            }
            if (itemImage.indexOf("1510chairs-logit中") > -1) {
              _imageName = (itemImage as string).replace(
                "1510chairs-logit中",
                "1510chairs-logit!"
              );
            }
            router.replace(`/consumer/${_imageName}`);
          }
        }
      } else {
        alert("当前是最后一页");
      }
    }
  }, [id]);

  useEffect(() => {
    const localXiaoFeiStr = localStorage.getItem("xiaofeiImage");
    if (id) {
      const imagess = localStorage.getItem("acc-images");
      let _imageName = "";
      if (imagess) {
        const imagesss = JSON.parse(imagess);
        const item = imagesss[parseFloat(id as string)];
        _imageName = `${item}`
          .replace("!", "/")
          .replace("chairs", "椅子")
          .replace("watch", "手表")
          .replace("cars", "汽车");
        setImageSrc(`data-image/${item}`.replace("!", "/"));
        setImageName(_imageName);
        setNum(parseFloat(id as string) + 1);
      }
      if (localXiaoFeiStr) {
        const localXiaoFei: any[] = JSON.parse(localXiaoFeiStr);
        const filter = localXiaoFei.filter(
          (item) => item["图片"] === `${_imageName}`
        );
        if (filter.length) {
          form.setFieldValue(
            "您对该产品的美观程度打分",
            filter[0]["您对该产品的美观程度打分"]
          );
          form.setFieldValue(
            "您对该产品的喜爱程度打分",
            filter[0]["您对该产品的喜爱程度打分"]
          );
          form.setFieldValue(
            "您对支付该产品的意愿程度打分",
            filter[0]["您对支付该产品的意愿程度打分"]
          );
          form.setFieldValue(
            "您看到该产品时，如下哪一种情绪您能明确感受到",
            filter[0]["您看到该产品时，如下哪一种情绪您能明确感受到"]
          );
        }
      }
      // let _imageName = "";
      // if (id) {
      //   if (id.indexOf(_image2) > -1) {
      //     _imageName = (id as string).replace(_image2, "第二次500中");
      //   }
      //   if (id.indexOf(_image) > -1) {
      //     _imageName = (id as string).replace(_image, "第一次1-500中");
      //   }
      //   if (id.indexOf(_image3) > -1) {
      //     _imageName = (id as string).replace(_image3, "第二次501-1013中");
      //   }
      //   if (id.indexOf(_cha) > -1) {
      //     _imageName = (id as string).replace(_cha, "1510chairs-logit中");
      //   }
      //   console.log(id);
      //   setImageSrc((id as string).replace("!", "/"));
      //   setImageName(_imageName);
      // }
    }

    // if (localXiaoFeiStr && id) {
    //   let _imageName = "";
    //   if (id.indexOf(_image2) > -1) {
    //     _imageName = (id as string).replace(_image2, "第二次500中");
    //   }
    //   if (id.indexOf(_image) > -1) {
    //     _imageName = (id as string).replace(_image, "第一次1-500中");
    //   }
    //   if (id.indexOf(_image3) > -1) {
    //     _imageName = (id as string).replace(_image3, "第二次501-1013中");
    //   }
    //   if (id.indexOf(_cha) > -1) {
    //     _imageName = (id as string).replace(_cha, "1510chairs-logit中");
    //   }
    //   const localXiaoFei: any[] = JSON.parse(localXiaoFeiStr);
    //   setNum(localXiaoFei.length + 1);
    //   console.log(localXiaoFei);
    //   const filter = localXiaoFei.filter(
    //     (item) => item["图片"] === `${_imageName}`
    //   );
    //   if (filter.length) {
    //     form.setFieldValue("您是否喜爱该产品", filter[0]["您是否喜爱该产品"]);
    //     form.setFieldValue("喜爱程度打分", filter[0]["喜爱程度打分"]);
    //   }
    // }

    const handleBeforeUnload = (event: any) => {
      event.preventDefault();
      localStorage.removeItem("xiaofeiImage");
      localStorage.removeItem("acc-images");
      event.returnValue =
        "您确定要离开此页面吗？关闭或刷新页面可能会导致数据丢失。";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [id]);
  return (
    <DefaultLayout title="消费者页面" headerChildren={<div></div>}>
      <div className={styles.consumerPage}>
        <div className={styles.left}>
          <div className={styles.imageContainer}>
            {/* <img src={`/${imageSrc}`} alt="" /> */}
            <Image height={"100%"} src={`/${imageSrc}`} />
            {/* <Image src={`/public/${imageSrc}`} alt="" width={100} height={100} /> */}
          </div>
          <div className={styles.imageInfo}>
            <div className={styles.imageNum}>图片编号: {imageName}</div>
            <div className={styles.imageList}>{num}/80</div>
            <div className={styles.imageDesc}>（点击图片放大缩小）</div>
          </div>
          <div className={styles.imgDesc}>
            <h1 style={{ marginBottom: 20 }}>消费者选择</h1>
            <Form form={form} name="control-hooks">
              {/* marriage */}
              <Form.Item
                label="您对该产品的美观程度打分"
                name="您对该产品的美观程度打分"
                rules={[{ required: true, message: "请选择您的喜爱程度!" }]}
              >
                <Radio.Group>
                  <Radio value="1分"> 1 </Radio>
                  <Radio value="2分"> 2 </Radio>
                  <Radio value="3分"> 3 </Radio>
                  <Radio value="4分"> 4 </Radio>
                  <Radio value="5分"> 5 </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="您对该产品的喜爱程度打分"
                name="您对该产品的喜爱程度打分"
                rules={[
                  { required: true, message: "请选择您对该产品的喜爱程度!" },
                ]}
              >
                <Radio.Group>
                  <Radio value="1分"> 1 </Radio>
                  <Radio value="2分"> 2 </Radio>
                  <Radio value="3分"> 3 </Radio>
                  <Radio value="4分"> 4 </Radio>
                  <Radio value="5分"> 5 </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="您对支付该产品的意愿程度打分"
                name="您对支付该产品的意愿程度打分"
                rules={[
                  {
                    required: true,
                    message: "请选择您对支付该产品的意愿程度!",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="1分"> 1 </Radio>
                  <Radio value="2分"> 2 </Radio>
                  <Radio value="3分"> 3 </Radio>
                  <Radio value="4分"> 4 </Radio>
                  <Radio value="5分"> 5 </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="您看到该产品时，如下哪一种情绪您能明确感受到"
                name="您看到该产品时，如下哪一种情绪您能明确感受到"
                rules={[
                  {
                    required: true,
                    message: "请选择您对支付该产品的意愿程度!",
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                  options={[
                    {
                      label: '一种充满“同情/友善/尊重的感受',
                      value: '一种充满“同情/友善/尊重的感受',
                    },
                    {
                      label: '一种充满“喜爱/倾慕/梦幻/浪漫的感受',
                      value: '一种充满“喜爱/倾慕/梦幻/浪漫的感受',
                    },
                    {
                      label: '一种充满“崇拜感和欲望的感受',
                      value: '一种充满“崇拜感和欲望的感受',
                    },
                    {
                      label: '一种充满“愉悦的和开心享受的感受',
                      value: '一种充满“愉悦的和开心享受的感受',
                    },
                    {
                      label: '一种充满“乐观的期望满满的感受',
                      value: '一种充满“乐观的期望满满的感受',
                    },
                    {
                      label: '一种充满“惊喜的刺激充满冒险的感受',
                      value: '一种充满“惊喜的刺激充满冒险的感受',
                    },
                    {
                      label: '一种充满“信任/承诺/勇气与自豪感的感受',
                      value: '一种充满“信任/承诺/勇气与自豪感的感受',
                    },
                    {
                      label: '一种充满“有趣的和具有灵感启发的感受',
                      value: '一种充满“有趣的和具有灵感启发的感受',
                    },
                    {
                      label: '一种充满“惬意舒适的/放松的/无压力的感受',
                      value: '一种充满“惬意舒适的/放松的/无压力的感受',
                    },
                  ]}
                />
              </Form.Item>
            </Form>
          </div>
          <div className={styles.imgDesc}>
            <Space>
              <Button onClick={onBack}>上一页</Button>
              {num === 80 && (
                <Button type="primary" htmlType="submit" onClick={onCheck}>
                  提交
                </Button>
              )}
              {num < 80 && (
                <Button type="primary" htmlType="submit" onClick={onCheck}>
                  保存并下一页
                </Button>
              )}
              {/* <Button type="primary" htmlType="submit" onClick={onCheck}>
                                提交
                            </Button>
                            <Button onClick={onGo}>下一页</Button> */}
            </Space>
          </div>
          <div className={styles.imgDesc}>
            <h3>说明</h3>
            <p>
              1请仔细浏览左侧需要标注的图片，并认真填写右侧的标注尺寸。如果图片不清晰，您可以点击国片放大查看细节。此外，我们在每个标签下
              或右上角都有参考资料。
            </p>
            <p>
              2. 在注释过程中，请不要强制刷新当前页面。否则提交的数据将丢失，
              如果您需要返回上一张图片，请单击〝上一页〝按钮返回到上一张图片,并修改您的选择
            </p>
            <p>
              3.本任务没有绝对正确的答案，请完成所有标签井仔细检查您的答案，
              然后点击提交按钮进行下一步。
            </p>
          </div>
        </div>
        {/* <div className={styles.right} style={{ boxSizing: 'border-box', padding: 20 }}>
                    <h1 style={{ marginBottom: 20 }}>消费者选择</h1>
                    <Form form={form}
                        name="control-hooks" >
                        <Form.Item label="您是否喜爱该产品" name="您是否喜爱该产品" rules={[{ required: true, message: '请选择您是否喜爱!' }]}>
                            <Radio.Group>
                                <Radio value="是"> 是 </Radio>
                                <Radio value="否"> 否 </Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="请为产品进行喜爱程度打分" name="喜爱程度打分" rules={[{ required: true, message: '请选择您的喜爱程度!' }]}>
                            <Radio.Group>
                                <Radio value="1分"> 1 </Radio>
                                <Radio value="2分"> 2 </Radio>
                                <Radio value="3分"> 3 </Radio>
                                <Radio value="4分"> 4 </Radio>
                                <Radio value="5分"> 5 </Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Form>
                </div> */}
      </div>
    </DefaultLayout>
  );
};

export default ConsumerPage;
