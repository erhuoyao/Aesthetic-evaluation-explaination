import React, { useCallback, useEffect, useState } from "react";
import styles from "@/pages/detail3/index.module.css";
import "@/app/globals.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { getDetailContent, randomBetween } from "@/hooks/detail";
import EchartsLine from "@/components/Echarts";
import {
  InputNumber,
  Button,
  Modal,
  Radio,
  RadioChangeEvent,
  Table,
  Input,
} from "antd";
import { IFormat, useLocal } from "@/hooks/local";
import DefaultLayout from "@/layout/Default/IndexLayout";
import Nine from "../../../../public/select-image/9.png";

const Detail3ImagePage = React.memo(() => {
  const router = useRouter();
  const { detailId, categoryId } = router.query;
  const [columns, setColumns] = useState<any[]>([]);
  const [imageContent, setImageContent] = useState<any>(null);
  /**
   * 总分
   */
  const [myFraction, setMyFraction] = useState(1);
  const [myQuality, setMyQuality] = useState(1);
  const [myColor, setMyColor] = useState(1);
  const [myComposition, setMyComposition] = useState(1);
  const [myDepth, setMyDepth] = useState(1);
  const [myLight, setLight] = useState(1);
  const [shide, setBuzhanshi] = useState(false);
  const [bushi, setBushi] = useState(false);
  /**
   * 是否同意
   */
  const [agree, setAgree] = useState(false);
  /**
   * 隐藏答题，并显示答案
   */
  const [isSuccess, setIsSuccess] = useState(false);

  const desty = () => {
    setMyFraction(1);
    setMyQuality(1);
    setMyColor(1);
    setMyComposition(1);
    setMyDepth(1);
    setLight(1);
    setIsSuccess(false);
  };
  const [buxiangxie, setBuxiangxie] = useState(randomBetween());
  useEffect(() => {
    const imageContent = getDetailContent(
      detailId as string,
      categoryId as string
    );
    console.log(imageContent, "imageContent");
    localStorage.removeItem("acc-images");
    if (imageContent?.type === "compared") {
      setColumns([
        {
          title: "图片展示",
          dataIndex: "image",
          key: "image",
          render: (text: any) => <Image src={text} width={160} alt="" />,
        },
        {
          title: "图片编号",
          dataIndex: "number",
          key: "number",
        },
        {
          title: "美学评分",
          dataIndex: "fraction",
          key: "fraction",
          render: (text: any, record: any) => {
            if (record.number === "当前图片") {
              return <div style={{ color: "#1890FF" }}>{text}</div>;
            }
            if (record.number === "案例一") {
              return <div style={{ color: "#000" }}>{text}</div>;
            }
            return <div style={{ color: "rgba(0, 0, 0, 0.45)" }}>{text}</div>;
          },
        },
        {
          title: "布局",
          dataIndex: "composition",
          key: "composition",
          render: (text: any, record: any) => {
            if (record.number === "当前图片") {
              return <div style={{ color: "#1890FF" }}>{text}</div>;
            }
            if (record.number === "案例二") {
              return <div style={{ color: "#000" }}>{text}</div>;
            }
            return <div style={{ color: "rgba(0, 0, 0, 0.45)" }}>{text}</div>;
          },
        },
        {
          title: "质量",
          dataIndex: "quality",
          key: "quality",
          render: (text: any, record: any) => {
            if (record.number === "当前图片") {
              return <div style={{ color: "#1890FF" }}>{text}</div>;
            }
            if (record.number === "案例三") {
              return <div style={{ color: "#000" }}>{text}</div>;
            }
            return <div style={{ color: "rgba(0, 0, 0, 0.45)" }}>{text}</div>;
          },
        },
        {
          title: "色彩",
          dataIndex: "color",
          key: "color",
          render: (text: any, record: any) => {
            if (record.number === "当前图片") {
              return <div style={{ color: "#1890FF" }}>{text}</div>;
            }
            if (record.number === "案例四") {
              return <div style={{ color: "#000" }}>{text}</div>;
            }
            return <div style={{ color: "rgba(0, 0, 0, 0.45)" }}>{text}</div>;
          },
        },
        {
          title: "景深",
          dataIndex: "depth",
          key: "depth",
          render: (text: any, record: any) => {
            if (record.number === "当前图片") {
              return <div style={{ color: "#1890FF" }}>{text}</div>;
            }
            if (record.number === "案例五") {
              return <div style={{ color: "#000" }}>{text}</div>;
            }
            return <div style={{ color: "rgba(0, 0, 0, 0.45)" }}>{text}</div>;
          },
        },
        {
          title: "光照",
          dataIndex: "light",
          key: "light",
          render: (text: any, record: any) => {
            if (record.number === "当前图片") {
              return <div style={{ color: "#1890FF" }}>{text}</div>;
            }
            if (record.number === "案例六") {
              return <div style={{ color: "#000" }}>{text}</div>;
            }
            return <div style={{ color: "rgba(0, 0, 0, 0.45)" }}>{text}</div>;
          },
        },
      ]);
      console.log(imageContent.exampleList);
    }
    if (imageContent && imageContent.exampleList && imageContent.exampleList.length > 1) {
      // setBuxiangxie(parseFloat(imageContent?.exampleList[0].fraction));
      setBuxiangxie(imageContent.fraction);
      imageContent.exampleList[0].fraction = `${imageContent.fraction}`;
      //@ts-ignore
      // imageContent?.exampleList[0].fraction = `${imageContent.fraction}`;
    }
    setImageContent(imageContent);
    return () => {
      desty();
    };
  }, [detailId, categoryId]);

  useEffect(() => {
    if (shide) {
      const imageContent = getDetailContent(
        detailId as string,
        categoryId as string
      );

      if (imageContent && imageContent.exampleList && imageContent.exampleList.length > 1) {
        setBuxiangxie(parseFloat(imageContent?.exampleList[0].fraction));
      }
      setImageContent(imageContent);
    }
    return () => {
      desty();
    };
  }, [shide])
  const [wuliao, setWuliao] = useState(false);
  const onCheckFraction = useCallback(() => {
    setIsSuccess(true);
    setWuliao(false);
    // const _imageContent = JSON.parse(JSON.stringify(imageContent));
    const _imageContent: any = getDetailContent(
      detailId as string,
      categoryId as string
    );
    const exampleList = _imageContent.exampleList;
    if (exampleList && exampleList.length) {
      exampleList.splice(1, 0, {
        image: Nine,
        number: "您给出的分数",
        fraction: myFraction,
        composition: myComposition,
        quality: myQuality,
        color: myColor,
        light: myLight,
        depth: myDepth,
      });
    }
    console.log('detailId', detailId, 'categoryId', categoryId)
    if (detailId === "1" && categoryId === '3' && shide) {
      _imageContent.fraction = randomBetween(1.02, 1.92);
      setBuxiangxie(randomBetween(1.02, 1.92));
      console.log(randomBetween(1.02, 1.92));
    }
    if (detailId === "2" && categoryId === '3' && shide) {
      _imageContent.fraction = randomBetween(3.00, 3.50);
      setBuxiangxie(randomBetween(3.00, 3.50));
      console.log(randomBetween(3.00, 3.50));
    }
    setImageContent(_imageContent);
    if (_imageContent && _imageContent.exampleList && _imageContent.exampleList.length > 1) {
      setBuxiangxie(parseFloat(_imageContent?.exampleList[0].fraction));
      if (!shide) {
        _imageContent.exampleList[0].fraction = '4.04'
      }
    }

  }, [
    myFraction,
    myQuality,
    myComposition,
    myColor,
    myDepth,
    myLight,
    imageContent,
    shide
  ]);

  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState<
    {
      parentIndex: number; // 0
      childIndex: number; // 1
    }[]
  >([]);
  const onsubmit = (v: "yes" | "no") => {
    showModal();
    switch (v) {
      case "yes":
        setAgree(true);
        break;
      case "no":
        setAgree(false);
        break;
      default:
        setAgree(false);
        break;
    }
  };

  const onChange = useCallback(
    (e: RadioChangeEvent, item: any) => {
      if (imageContent) {
        const parentIndex = imageContent.questionnaire.findIndex(
          (it: any) => it.value === item.value
        );
        const childIndex = item.list.findIndex(
          (it: any) => it.value === e.target.value
        );
        const _question = JSON.parse(JSON.stringify(question)) ?? [];
        if (_question.length) {
          const isShow = _question.findIndex(
            (_q: any) => _q.parentIndex === parentIndex
          );
          if (isShow >= 0) {
            _question[isShow].childIndex = childIndex;
          } else {
            _question.push({
              parentIndex,
              childIndex,
            });
          }
        } else {
          _question.push({
            parentIndex,
            childIndex,
          });
        }

        setQuestion(_question);
      }
    },
    [imageContent, question]
  );
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const [fenshu, setFenshu] = useState(1);
  const [name, setName] = useState('');
  const [youyongma, setYouyongma] = useState("");
  const [xiayibu, setXiayibu] = useState(false);
  const onXiayibu = useCallback(() => {
    if (!fenshu || !youyongma || !name) {
      alert("请填写问卷!");
      return;
    }
    setXiayibu(true);
  }, [name, fenshu, youyongma, categoryId, detailId, agree, question, imageContent]);
  //111
  const onChange123 = useCallback(
    (e: RadioChangeEvent, item: any) => {
      console.log(e, item);
      setYouyongma(e.target.value);
    },
    [imageContent]
  );

  const hideModal = useCallback(() => {
    if (question.length < 4) {
      alert("请选择晚所有的问卷后进行下一步");
      return false;
    }
    setXiayibu(false);
    const res: IFormat = {
      id: categoryId as string,
      selectedValue: detailId as string,
      agree,
      questionnaire: [],
      questionnaire2: [],
      questionnaire3: {
        value: imageContent.questionnaire2.value,
        fraction: fenshu,
      },
      questionnaire4: {
        value: '姓名',
        fraction: name,
      },
      myFraction: myFraction,
      myDetailFraction: {
        myColor,
        myComposition,
        myDepth,
        myLight,
        myQuality,
      },
    };
    console.log(question);
    const q = imageContent.questionnaire.map((item: any, index: number) => ({
      value: item.value,
      fraction: question[index]
        ? item.list[question[index].childIndex].value
        : "1",
    }));
    const b = imageContent.questionnaire2.map((item: any, index: number) => ({
      value: item.value,
      fraction: youyongma
    }));
    res.questionnaire2 = b;
    res.questionnaire = q;
    console.log([res]);
    useLocal.set({
      id: categoryId as string,
      value: [res],
    });
    router.replace(`/category`);
    // router.replace(`/decisionMaking/${categoryId}`)
  }, [
    categoryId,
    detailId,
    agree,
    question,
    imageContent,
    myFraction,
    myQuality,
    myComposition,
    myComposition,
    myDepth,
    myLight,
    fenshu,
    xiayibu,
    youyongma,
    name,
  ]);

  return (
    <DefaultLayout
      title="详情页"
      footerChildren={
        <>
          {isSuccess && (
            <>
              <p className={styles.demo}>您是否同意AI助手给出的图片审美评分</p>
              <div className={styles.flex20}>
                <Button type="primary" onClick={() => onsubmit("yes")}>
                  同意
                </Button>
                {detailId === "4" || detailId === "5" || detailId === "6" ? (
                  <Button onClick={() => onsubmit("no")}>不同意</Button>
                ) : (
                  ""
                )}

                {/* <Button>不同意</Button> */}
                {
                  detailId !== '4' && detailId !== '5' && detailId !== '6' ? <Button onClick={() => onsubmit('no')}>放弃</Button> : null
                }
                {/* {detailId !== "4" && detailId !== "5" && detailId !== "6" ? (
                  <Button
                    danger
                    onClick={() => {
                      setIsSuccess(false);
                      setBuzhanshi(true);
                      setBushi(true);
                    }}
                  >
                    返回修改
                  </Button>
                ) : null} */}
              </div>
            </>
          )}
        </>
      }
    >
      <div className={styles.page}>
        <main>
          <div className={styles.sado}>
            <div className={styles.imageView}>
              {imageContent && imageContent.image && (
                <Image src={imageContent.image} alt="" width={592} />
              )}
              {
                isSuccess && detailId !== '4' && detailId !== '5' && detailId !== '6' ? <Button danger onClick={() => {
                  setIsSuccess(false);
                  setBuzhanshi(true);
                  setBushi(true);
                  setWuliao(true);
                  setBuzhanshi(true);
                }} style={{ marginTop: 20 }}>返回修改至满意</Button> : null
              }
            </div>
            {!isSuccess && (
              <div className={styles.answerView}>
                {
                  !wuliao && <h3>
                    请您对该图片给出您的审美评分（5分制）
                  </h3>
                }
                {
                  wuliao && <h3>
                    请您对该图片再次给出您的审美评分，AI将结合您的判断给出新的分数
                  </h3>
                }
                <div className={styles.fractionView}>
                  <InputNumber
                    max={5}
                    min={0}
                    defaultValue={myFraction}
                    onChange={(v) => setMyFraction(v ?? 0)}
                  />
                </div>
                <h3>请您对该图片的如下各个特征项给出您的评分（5分制）</h3>
                <ul className={styles.fractionListView}>
                  <li>
                    <div className={styles.liTitle}>质量：</div>
                    <InputNumber
                      max={5}
                      min={0}
                      defaultValue={myQuality}
                      onChange={(v) => setMyQuality(v ?? 0)}
                    />
                  </li>
                  <li>
                    <div className={styles.liTitle}>布局：</div>
                    <InputNumber
                      max={5}
                      min={0}
                      defaultValue={myComposition}
                      onChange={(v) => setMyComposition(v ?? 0)}
                    />
                  </li>
                  <li>
                    <div className={styles.liTitle}>色彩：</div>
                    <InputNumber
                      max={5}
                      min={0}
                      defaultValue={myColor}
                      onChange={(v) => setMyColor(v ?? 0)}
                    />
                  </li>
                  <li>
                    <div className={styles.liTitle}>景深：</div>
                    <InputNumber
                      max={5}
                      min={0}
                      defaultValue={myDepth}
                      onChange={(v) => setMyDepth(v ?? 0)}
                    />
                  </li>
                  <li>
                    <div className={styles.liTitle}>光照：</div>
                    <InputNumber
                      max={5}
                      min={0}
                      defaultValue={myLight}
                      onChange={(v) => setLight(v ?? 0)}
                    />
                  </li>
                </ul>
                <Button type="primary" onClick={() => onCheckFraction()}>
                  确定
                </Button>
              </div>
            )}

            {isSuccess && (
              <div className={styles.answerContent}>
                <div className={styles.fractionFlex}>
                  <div className={styles.fractionFlexItem}>
                    <h2>AI 助手给出的这张图的审美评分是</h2>
                    {shide && (
                      <div className={styles.aiFraction}>
                        {buxiangxie}
                        <span>分</span>{" "}
                      </div>
                    )}
                    {(imageContent && !shide) && (
                      <div className={styles.aiFraction}>
                        {imageContent.fraction}
                        <span>分</span>{" "}
                      </div>
                    )}
                  </div>
                  {!shide && (
                    <div className={styles.fractionFlexItem}>
                      <h2>您的审美评分是</h2>
                      <div className={styles.myFraction}>
                        {myFraction}
                        <span>分</span>{" "}
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  {imageContent && imageContent.type === "probability" && (
                    <div style={{ fontSize: 18, color: "#000" }}>
                      {imageContent && imageContent.desc}
                    </div>
                  )}
                  {imageContent && imageContent.type === "feature" && (
                    <EchartsLine
                      title="各个特征的分数如下图所示（5分制)"
                      series={[
                        {
                          name: "AI",
                          type: "bar",
                          data: imageContent?.list.map(
                            (item: any) => item.fraction
                          ),
                        },
                        {
                          name: "Me",
                          type: "bar",
                          data: [
                            myQuality,
                            myComposition,
                            myColor,
                            myDepth,
                            myLight,
                          ].reverse(),
                        },
                      ]}
                      yAxisData={imageContent?.list
                        .map((item: any) => item.text)
                        .reverse()}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
          {isSuccess && imageContent && imageContent.type === "compared" && (
            <div className={styles.tableView}>
              <Table columns={columns} dataSource={imageContent.exampleList} />
            </div>
          )}
        </main>
        <Modal
          centered
          width={"50%"}
          closable
          keyboard={false}
          title="局部问卷调查"
          open={open}
          onCancel={handleCancel}
          footer={
            <>
              {xiayibu && (
                <Button type="primary" onClick={() => hideModal()}>
                  确认
                </Button>
              )}
              {!xiayibu && (
                <Button type="primary" onClick={() => onXiayibu()}>
                  下一步
                </Button>
              )}
            </>
          }
        >
          {!xiayibu && (
            <div className={styles.datiba}>
              <div className={styles.datibaLeft}>
                <h3>
                  {imageContent &&
                    imageContent.questionnaire3 &&
                    imageContent.questionnaire3.desc
                    ? imageContent.questionnaire3.desc
                    : ""}
                </h3>
                <div className={styles.inputNumber}>
                  <InputNumber
                    min={1}
                    max={5}
                    value={fenshu}
                    onChange={(v) => setFenshu(v ? v : 1)}
                  />
                  <span>满分为5分</span>
                </div>
                {imageContent &&
                  imageContent.questionnaire2 &&
                  imageContent.questionnaire2.map(
                    (item: any, index: number) => (
                      <div key={index}>
                        <h4>{item.value}</h4>
                        <Radio.Group onChange={(e) => onChange123(e, item)}>
                          {item.list &&
                            item.list.map((line: any, lindex: number) => (
                              <Radio key={lindex} value={line.value}>
                                {line.value}
                              </Radio>
                            ))}
                        </Radio.Group>
                      </div>
                    )
                  )}
                <h3 style={{ marginTop: 40 }}>{imageContent && imageContent.questionnaire4 ? imageContent.questionnaire4.desc : ''}</h3>
                <div className={styles.inputNumber}>
                  <Input placeholder='请输入您的姓名' value={name} onChange={(v) => {
                    setName(v.target.value);
                  }} />
                </div>
              </div>
              <div className={styles.datibaRight}>
                {imageContent && imageContent.image && (
                  <Image src={imageContent.image} alt="image" width={590} />
                )}
              </div>
            </div>
          )}
          {xiayibu && (
            <>
              {imageContent &&
                imageContent.questionnaire.map((item: any, index: number) => (
                  <div key={index} className={styles.questionItemBox}>
                    <div className={styles.questionItem}>
                      <p>{item.value}</p>
                      <Radio.Group onChange={(e) => onChange(e, item)}>
                        {item.list &&
                          item.list.map((line: any, lindex: number) => (
                            <Radio key={lindex} value={line.value}>
                              {line.value}
                            </Radio>
                          ))}
                      </Radio.Group>
                    </div>
                    <div className={styles.questionItemDesc}>
                      {item.list && question.length && question[index]
                        ? item.list[question[index].childIndex].desc ?? ""
                        : ""}
                    </div>
                  </div>
                ))}
            </>
          )}
        </Modal>
      </div>
    </DefaultLayout>
  );
});

Detail3ImagePage.displayName = "Detail3ImagePage";
export default Detail3ImagePage;
