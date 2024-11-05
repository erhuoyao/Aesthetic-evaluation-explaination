import "@/app/globals.css";
import { useCallback, useEffect, useState } from "react";
import styles from "../select/index.module.css";
import { Button, Form, Input, Radio, Checkbox, Row, Col, Space } from "antd";
import { useLocal } from "@/hooks/local";
import DefaultLayout from "@/layout/Default/IndexLayout";
import { useRouter } from "next/router";

const FormPage = () => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };

  const [form] = Form.useForm();
  const router = useRouter();
  const onFinish = async (values: any) => {
    if (values) {
      localStorage.setItem("xiaofeizheUser", JSON.stringify(values));
      router.replace(`/consumer/0`);
      // const response = await fetch("/api/getImage?length=1");
      // if (response.status !== 200) {
      //   const param = await response.text();
      // }
      // if (response.status === 200) {
      //   const responseData = await response.json();
      //   // console.log(responseData.image);
      //   // const regex = /(\d+)/;
      //   // const result = responseData.image.match(regex);
      //   router.replace(`/consumer/0`);
      // }
    }
  };

  return (
    <DefaultLayout
      title="信息填写"
      headerChildren={
        <div className={styles.header}>
          <h1>消费者基本信息</h1>
        </div>
      }
    >
      <div style={{ width: "100%", height: 50 }}></div>
      <Form
        {...formItemLayout}
        layout="vertical"
        form={form}
        name="control-hooks"
        onFinish={onFinish}
      >
        {/* username */}
        <Form.Item
          label="姓名"
          name="姓名"
          rules={[{ required: true, message: "请输入您的姓名!" }]}
        >
          <Input />
        </Form.Item>
        {/* city */}
        <Form.Item
          label="城市"
          name="城市"
          rules={[{ required: true, message: "请输入您的姓名!" }]}
        >
          <Input />
        </Form.Item>
        {/* age */}
        <Form.Item
          label="年龄"
          name="年龄"
          rules={[{ required: true, message: "请输入您的年龄!" }]}
          // rules={[{ required: true, message: "请选择您的年龄区间!" }]}
        >
          <Input />
          {/* <Radio.Group>
            <Radio value="18以下"> 18以下 </Radio>
            <Radio value="18-30"> 18-30 </Radio>
            <Radio value="30-50"> 30-50 </Radio>
            <Radio value="50以上"> 50以上 </Radio>
          </Radio.Group> */}
        </Form.Item>
        {/* sex */}
        <Form.Item
          label="性别"
          name="性别"
          rules={[{ required: true, message: "请选择您的性别!" }]}
        >
          <Radio.Group>
            <Radio value="男"> 男 </Radio>
            <Radio value="女"> 女 </Radio>
          </Radio.Group>
        </Form.Item>
        {/* culture */}
        <Form.Item
          label="教育程度"
          name="教育程度"
          rules={[{ required: true, message: "请选择您的教育程度!" }]}
        >
          <Radio.Group>
            <Radio value="高中及以下"> 高中及以下 </Radio>
            <Radio value="大专与本科"> 大专与本科 </Radio>
            <Radio value="研究生及以上"> 研究生及以上 </Radio>
          </Radio.Group>
        </Form.Item>
        {/* income */}
        <Form.Item
          label="收入"
          name="收入"
          rules={[{ required: true, message: "请选择您的收入!" }]}
        >
          <Radio.Group>
            <Radio value="3000元及以下"> 3000元及以下 </Radio>
            <Radio value="3001-5000元/月"> 3001-5000元/月 </Radio>
            <Radio value="5001-10000元/月"> 5001-10000元/月 </Radio>
            <Radio value="10000元及以上"> 10000元及以上 </Radio>
          </Radio.Group>
        </Form.Item>
        {/* marriage */}
        <Form.Item
          label="婚姻"
          name="婚姻"
          rules={[{ required: true, message: "请选择您的婚姻状态!" }]}
        >
          <Radio.Group>
            <Radio value="已婚"> 已婚 </Radio>
            <Radio value="未婚"> 未婚 </Radio>
            <Radio value="离异"> 离异 </Radio>
            <Radio value="丧偶"> 丧偶 </Radio>
          </Radio.Group>
        </Form.Item>
        {/* xiaofei */}
        <Form.Item
          label="一个月内平均网络购物频率"
          name="一个月内平均网络购物频率"
          rules={[{ required: true, message: "请选择您一个月内平均网络购物频率!" }]}
        >
          <Radio.Group>
            <Radio value="低（0-5次/月）"> 低（0-5次/月） </Radio>
            <Radio value="中（5-10次/月）"> 中（5-10次/月） </Radio>
            <Radio value="高（10次及以上/月）"> 高（10次及以上/月） </Radio>
          </Radio.Group>
        </Form.Item>
        {/* zhiliang */}
        <Form.Item
          label="消费品所属质量档次"
          name="消费品所属质量档次"
          rules={[
            { required: true, message: "请选择您的消费品所属质量档次状态!" },
          ]}
        >
          <Radio.Group>
            <Radio value="低质量（低档）"> 低质量（低档） </Radio>
            <Radio value="普通质量（中档）"> 普通质量（中档） </Radio>
            <Radio value="高质量（高档）"> 高质量（高档） </Radio>
          </Radio.Group>
        </Form.Item>
        {/* location */}
        <Form.Item
          label="消费地理位置"
          name="消费地理位置"
          rules={[{ required: true, message: "请选择您的消费地理位置!" }]}
        >
          <Checkbox.Group>
            <Row>
              <Checkbox value="本土化消费" style={{ lineHeight: "32px" }}>
                本土化消费
              </Checkbox>
              <Checkbox value="全球化消费" style={{ lineHeight: "32px" }}>
                全球化消费
              </Checkbox>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item
          label="您对“归属感”（是否属于某类群体的感觉）的注重程度进行评分"
          name="您对“归属感”（是否属于某类群体的感觉）的注重程度进行评分"
          rules={[
            {
              required: true,
              message:
                "请选择您对“归属感”（是否属于某类群体的感觉）的注重程度评分!",
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
          label="您在日常生活中多大程度感受到自己被的“被拒绝”、“被遗弃”和“被忽视”而产生的心理空虚的感受"
          name="您在日常生活中多大程度感受到自己被的“被拒绝”、“被遗弃”和“被忽视”而产生的心理空虚的感受"
          rules={[{ required: true, message: "请选择评分!" }]}
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
          label="您更加注重产品的哪个方面？"
          name="您更加注重产品的哪个方面？"
          rules={[{ required: true, message: "请选择评分!" }]}
        >
          <Radio.Group>
            <Radio value="A:形式优越">A:形式优越</Radio>
            <Radio value="B:功能优越">B:功能优越</Radio>
            <Radio value="C:意义追求">C:意义追求 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label={<>对您来说产品的<strong>新颖性</strong>相比于<strong>典型性</strong></>}
          name="a.对您来说产品的新颖性相比于典型性"
          rules={[{ required: true, message: "请选择评分!" }]}
        >
          <Radio.Group>
            <Radio value="非常重要"> 非常重要 </Radio>
            <Radio value="有些重要"> 有些重要 </Radio>
            <Radio value="一样重要"> 一样重要 </Radio>
            <Radio value="有些不重要"> 有些不重要 </Radio>
            <Radio value="非常不重要"> 非常不重要 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label={<>对您来说产品的<strong>家族系列连续性</strong>相比于<strong>不可复制的独特性</strong></>}
          name="b.对您来说产品的家族系列连续性相比于不可复制的独特性"
          rules={[{ required: true, message: "请选择评分!" }]}
        >
          <Radio.Group>
            <Radio value="非常重要"> 非常重要 </Radio>
            <Radio value="有些重要"> 有些重要 </Radio>
            <Radio value="一样重要"> 一样重要 </Radio>
            <Radio value="有些不重要"> 有些不重要 </Radio>
            <Radio value="非常不重要"> 非常不重要 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label={<>对您来说产品的<strong>彰显的社会地位差异性</strong>相比于<strong>感觉到的社会群体的“归属感”</strong></>}
          name="c.对您来说产品彰显的社会地位差异性相比于感觉到的社会群体的“归属感”"
          rules={[{ required: true, message: "请选择评分!" }]}
        >
          <Radio.Group>
            <Radio value="非常重要"> 非常重要 </Radio>
            <Radio value="有些重要"> 有些重要 </Radio>
            <Radio value="一样重要"> 一样重要 </Radio>
            <Radio value="有些不重要"> 有些不重要 </Radio>
            <Radio value="非常不重要"> 非常不重要 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label={<>周围人或者您自己都认为自己具有好的审美品味，能够快速区分出审美的质量差异</>}
          name="周围人或者您自己都认为自己具有好的审美品味，能够快速区分出审美的质量差异"
          rules={[{ required: true, message: "请选择评分!" }]}
        >
          <Radio.Group>
            <Radio value="5分-非常赞同"> 5分-非常赞同 </Radio>
            <Radio value="4分-较赞同"> 4分-较赞同 </Radio>
            <Radio value="3分一般赞同"> 3分一般赞同 </Radio>
            <Radio value="2分-较不赞同"> 2分-较不赞同 </Radio>
            <Radio value="1分-非常不赞同"> 1分-非常不赞同 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label={<h2>人格特征</h2>}>
          <h2>请对您同如 下人格特征的符合程度进行打分</h2>
          <h3 style={{color: '#000', marginTop: 40}}>您认为您是一个...</h3>
          <p style={{color: '#000'}}>此处采用BFI10问卷</p>
        </Form.Item>
        <Form.Item
          label="拘谨的人"
          name="拘谨的人"
          rules={[{ required: true, message: "请选择您的分数!" }]}
        >
          <Radio.Group>
            <Radio value="1分-非常不同意"> 1分-非常不同意 </Radio>
            <Radio value="2分-较不同意"> 2分-较不同意 </Radio>
            <Radio value="3分-中等"> 3分-中等 </Radio>
            <Radio value="4分-较为同意"> 4分-较为同意 </Radio>
            <Radio value="5分-非常同意"> 5分-非常同意 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="常被他人信任的人"
          name="常被他人信任的人"
          rules={[{ required: true, message: "请选择您的分数!" }]}
        >
          <Radio.Group>
            <Radio value="1分-非常不同意"> 1分-非常不同意 </Radio>
            <Radio value="2分-较不同意"> 2分-较不同意 </Radio>
            <Radio value="3分-中等"> 3分-中等 </Radio>
            <Radio value="4分-较为同意"> 4分-较为同意 </Radio>
            <Radio value="5分-非常同意"> 5分-非常同意 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="倾向于懒惰的人"
          name="倾向于懒惰的人"
          rules={[{ required: true, message: "请选择您的分数!" }]}
        >
          <Radio.Group>
            <Radio value="1分-非常不同意"> 1分-非常不同意 </Radio>
            <Radio value="2分-较不同意"> 2分-较不同意 </Radio>
            <Radio value="3分-中等"> 3分-中等 </Radio>
            <Radio value="4分-较为同意"> 4分-较为同意 </Radio>
            <Radio value="5分-非常同意"> 5分-非常同意 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="很放松，能很好地应对压力的人"
          name="很放松，能很好地应对压力的人"
          rules={[{ required: true, message: "请选择您的分数!" }]}
        >
          <Radio.Group>
            <Radio value="1分-非常不同意"> 1分-非常不同意 </Radio>
            <Radio value="2分-较不同意"> 2分-较不同意 </Radio>
            <Radio value="3分-中等"> 3分-中等 </Radio>
            <Radio value="4分-较为同意"> 4分-较为同意 </Radio>
            <Radio value="5分-非常同意"> 5分-非常同意 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="对艺术不太感兴趣的人"
          name="对艺术不太感兴趣的人"
          rules={[{ required: true, message: "请选择您的分数!" }]}
        >
          <Radio.Group>
            <Radio value="1分-非常不同意"> 1分-非常不同意 </Radio>
            <Radio value="2分-较不同意"> 2分-较不同意 </Radio>
            <Radio value="3分-中等"> 3分-中等 </Radio>
            <Radio value="4分-较为同意"> 4分-较为同意 </Radio>
            <Radio value="5分-非常同意"> 5分-非常同意 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="外向的，善于交际的人"
          name="外向的，善于交际的人"
          rules={[{ required: true, message: "请选择您的分数!" }]}
        >
          <Radio.Group>
            <Radio value="1分-非常不同意"> 1分-非常不同意 </Radio>
            <Radio value="2分-较不同意"> 2分-较不同意 </Radio>
            <Radio value="3分-中等"> 3分-中等 </Radio>
            <Radio value="4分-较为同意"> 4分-较为同意 </Radio>
            <Radio value="5分-非常同意"> 5分-非常同意 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="即使工作再复杂困难也会很好完成的人"
          name="即使工作再复杂困难也会很好完成的人"
          rules={[{ required: true, message: "请选择您的分数!" }]}
        >
          <Radio.Group>
            <Radio value="1分-非常不同意"> 1分-非常不同意 </Radio>
            <Radio value="2分-较不同意"> 2分-较不同意 </Radio>
            <Radio value="3分-中等"> 3分-中等 </Radio>
            <Radio value="4分-较为同意"> 4分-较为同意 </Radio>
            <Radio value="5分-非常同意"> 5分-非常同意 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="较为容易紧张的人"
          name="较为容易紧张的人"
          rules={[{ required: true, message: "请选择您的分数!" }]}
        >
          <Radio.Group>
            <Radio value="1分-非常不同意"> 1分-非常不同意 </Radio>
            <Radio value="2分-较不同意"> 2分-较不同意 </Radio>
            <Radio value="3分-中等"> 3分-中等 </Radio>
            <Radio value="4分-较为同意"> 4分-较为同意 </Radio>
            <Radio value="5分-非常同意"> 5分-非常同意 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="想像力丰富的人"
          name="想像力丰富的人"
          rules={[{ required: true, message: "请选择您的分数!" }]}
        >
          <Radio.Group>
            <Radio value="1分-非常不同意"> 1分-非常不同意 </Radio>
            <Radio value="2分-较不同意"> 2分-较不同意 </Radio>
            <Radio value="3分-中等"> 3分-中等 </Radio>
            <Radio value="4分-较为同意"> 4分-较为同意 </Radio>
            <Radio value="5分-非常同意"> 5分-非常同意 </Radio>
          </Radio.Group>
        </Form.Item>
        {/* <Form.Item label={<h2>人格特征</h2>}>
          <h2>请对您同如 下人格特征的符合程度进行打分</h2>
        </Form.Item>
        <Form.Item
          label="我是一个具有开放性的人"
          name="我是一个具有开放性的人"
          rules={[{ required: true, message: "请选择您的分数!" }]}
          extra={
            <div>
              开放性指个体想像力以及好奇心程度，对经验持开放、探求态度，而不仅仅是一种人际意义上的开放。
              <div style={{ color: "#000" }}>
                <strong>
                  关键词：想象、审美、情感丰富、求异、创造、智能。
                </strong>
              </div>
              <div>
                高分特征：富有想象力和创造力，多样性、变革性；好奇，喜欢事物的新奇性；欣赏艺术，对美的事物比较敏感；具有求知欲、想象力和创造力。
              </div>
              <div>
                低分特征：喜欢在简单和朴素的条件下思考；讲求实际，偏爱常规，比较传统和保守。
              </div>
            </div>
          }
        >
          <Radio.Group>
            <Radio value="1分"> 1分 </Radio>
            <Radio value="2分"> 2分 </Radio>
            <Radio value="3分"> 3分 </Radio>
            <Radio value="4分"> 4分 </Radio>
            <Radio value="5分"> 5分 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="我是一个具有责任心的人"
          name="我是一个具有责任心的人"
          rules={[{ required: true, message: "请选择您的分数!" }]}
          extra={
            <div>
              责任性指我们如何自律、控制自已。控制、管理和调节自身冲动的方式，评估个体在目标导向行为上的组织、坚持和动机。这个维度把可靠的、讲究的、有能力的个体和懒散的、行为不规范的个体作比较。同时反映个体自我控制的程度以及延迟需求满足的能力。
              <div style={{ color: "#000" }}>
                <strong>
                  关键词：胜任、公正、条理、尽职、成就、自律、谨慎、克制
                </strong>
              </div>
              <div>
                高分特征：行为规范，可靠，有能力，有责任心；似乎总是能把事情做好，处处让人感到满意。
              </div>
              <div>低分特征：喜欢在行为不规范，粗心，做事效率低，不可靠。</div>
            </div>
          }
        >
          <Radio.Group>
            <Radio value="1分"> 1分 </Radio>
            <Radio value="2分"> 2分 </Radio>
            <Radio value="3分"> 3分 </Radio>
            <Radio value="4分"> 4分 </Radio>
            <Radio value="5分"> 5分 </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="我是一个具有外倾性的人"
          name="我是一个具有外倾性的人"
          rules={[{ required: true, message: "请选择您的分数!" }]}
          extra={
            <div>
              外倾性指个体对外部世界的积极投入程度。
              <div style={{ color: "#000" }}>
                <strong>关键词：热情、社交、果断、活跃、冒险、乐观。</strong>
              </div>
              <div>
                高分特征：性格外向，乐于和人相处，好交际，待人友好，充满活力，生气勃勃；常常怀有积极的情绪体验。
              </div>
              <div>
                低分特征：性格内向，缄默和恬静，往往安静，抑制，谨慎；对外部世界不太感兴趣，喜欢独处，独立活动，社交范围一般局限于少部分亲密的朋友，有时会被错认为不友好或傲慢。
              </div>
            </div>
          }
        >
          <Radio.Group>
            <Radio value="1分"> 1分 </Radio>
            <Radio value="2分"> 2分 </Radio>
            <Radio value="3分"> 3分 </Radio>
            <Radio value="4分"> 4分 </Radio>
            <Radio value="5分"> 5分 </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="我是一个具有宜人性的人"
          name="我是一个具有宜人性的人"
          rules={[{ required: true, message: "请选择您的分数!" }]}
          extra={
            <div>
              宜人性反应个体在合作与社会和谐性方面的差异。宜人性是考察个体对其他人所持的态度，这些态度一方面包括亲近人的、有同情心的、信任他人的、宽大的、心软的，另一方面包括敌对的、愤世嫉俗的、爱摆布人的、复仇心重的、无情的。宜人性代表了“爱”，对合作和人际和谐是否看重。
              <div style={{ color: "#000" }}>
                <strong>关键词：信任、利他、直率、依从、谦虚、移情。</strong>
              </div>
              <div>
                高分特征：重视和他人的和谐相处，体贴友好，大方乐于助人，愿意谦让。对于他人的需要、健康和快乐具有强烈的兴趣。是合意的，具有同情心的，善于与人合作的。
              </div>
              <div>
                低分特征：较少关注他人的需要，而更多地关注自己的利益和需要；有时候怀疑他人的动机。强硬的，苛求的，不妥协让步的。
              </div>
            </div>
          }
        >
          <Radio.Group>
            <Radio value="1分"> 1分 </Radio>
            <Radio value="2分"> 2分 </Radio>
            <Radio value="3分"> 3分 </Radio>
            <Radio value="4分"> 4分 </Radio>
            <Radio value="5分"> 5分 </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="我是一个情绪化的人"
          name="我是一个情绪化的人"
          rules={[{ required: true, message: "请选择您的分数!" }]}
          extra={
            <div>
              神经质性指个体体验消极情绪的倾向。神经质反映个体情感调节过程，反映个体体验消极情绪的倾向和情绪不稳定性。得分越低，表示情绪越稳定；得分越高，表示情绪越不稳定。
              <div style={{ color: "#000" }}>
                <strong>
                  关键词：焦虑、敌对、压抑、自我意识、冲动、脆弱。
                </strong>
              </div>
              <div>
                高分特征：容易心烦意乱，更容易体验到诸如愤怒、焦虑、抑郁等消极的情绪。对外界刺激反应比一般人强烈，对情绪的调节能力比较差，经常处于一种不良的情绪状态下。并且这些人思维、决策、以及有效应对外部压力的能力比较差。
              </div>
              <div>
                低分特征：较少烦恼，较少情绪化，比较平静，对于强烈的感情，并没有什么反应，即使是在多数人都感到压力的情形下。但这并不表明他们经常会有积极的情绪体验，积极情绪体验的频繁程度是外向性的主要内容。
              </div>
            </div>
          }
        >
          <Radio.Group>
            <Radio value="1分"> 1分 </Radio>
            <Radio value="2分"> 2分 </Radio>
            <Radio value="3分"> 3分 </Radio>
            <Radio value="4分"> 4分 </Radio>
            <Radio value="5分"> 5分 </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label={<h2>人格特征</h2>}>
          <h2>请对您选择适合自己的自我监控程度水平</h2>
        </Form.Item>

        <Form.Item
          label="自我监控程度水平"
          name="自我监控程度水平"
          rules={[{ required: true, message: "请选择您的自我监控程度水平!" }]}
        >
          <Radio.Group>
            <Row>
              <Col span={24} style={{ marginBottom: 20 }}>
                <Radio value=" 高自我监控">
                  高自我监控:{" "}
                  <strong>
                    我会在不同场合中，思考我该如何表现自己才显得更合时宜”会非常关注和敏感，我会根据他人的反应和当前所处环境所提供的线索，来不断矫正自己的行为表达和情绪态度
                  </strong>{" "}
                </Radio>
              </Col>
              <Col span={24}>
                <Radio value="低自我监控">
                  {" "}
                  低自我监控:{" "}
                  <strong>
                    我很少关心别人是怎么想的，不太在乎社会规范和他人的评价与眼光，我更愿意选择自己舒适的方式生活，行动上更加注重自我感受，我行我素。
                  </strong>{" "}
                </Radio>
              </Col>
            </Row>
          </Radio.Group>
        </Form.Item> */}
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button htmlType="reset">重置</Button>
          </Space>
        </Form.Item>
      </Form>
    </DefaultLayout>
  );
};

export default FormPage;
