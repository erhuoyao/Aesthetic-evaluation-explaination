/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import styles from "../select/index.module.css";
import "@/app/globals.css";
import { useCallback, useEffect, useState } from "react";
import { Button, InputNumber, Modal, Select } from "antd";
import { useLocal } from "@/hooks/local";
import DefaultLayout from "@/layout/Default/IndexLayout";

const EntrancePage = () => {
  const router = useRouter();
  const [value, setValue] = useState("1");
  const onChange = (value: string) => {
    setValue(value);
  };

  const onRouter = useCallback(() => {
    if (value === "1") {
      router.push(`/category`);
      // router.replace(`/select/${value}`)
    } else {
      showModal();
      //   router.push(`/form`);
    }
  }, [value]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dui, setDui] = useState('1');
  const [ren, setRen] = useState('1');
  const [num, setNum] = useState('1');
  const showModal = () => {
    setIsModalOpen(true);
  };

  const getImage = async (nums: string) => {
    const response = await fetch(`/api/assignTasks?num=${nums}`);
    if (response.status !== 200) {
      const param = await response.text();
      alert('出现错误');
    }
    if (response.status === 200) {
      const responseData = await response.json();
      console.log(responseData);
      localStorage.setItem('acc-images', JSON.stringify(responseData));
    }
  };

  const handleOk = useCallback(() => {
    let nums = '1';
    if (parseFloat(dui) === 1) {
        setNum(ren);
        nums = ren;
    }

    if (parseFloat(dui) === 2) {
        setNum(`${parseFloat(ren) + 10}`);
        nums = `${parseFloat(ren) + 10}`;
    }

    if (parseFloat(dui) === 3) {
        setNum(`${parseFloat(ren) + 20}`);
        nums = `${parseFloat(ren) + 20}`;
    }
    console.log(nums);
    getImage(nums);
    setIsModalOpen(false);
    setDui('1');
    setRen('1');
    router.push(`/form`);
  }, [dui, ren]);

  const handleCancel = () => {
    setDui('1');
    setRen('1');
    localStorage.removeItem('acc-images');
    setIsModalOpen(false);
  };
  const handleChange1 = (value: string) => {
    setDui(value);
  };
  const handleChange2 = (value: string) => {
    setRen(value);
  };

  return (
    <>
      <DefaultLayout
        title="选择入口"
        headerChildren={
          <div className={styles.header}>
            <h1>入口选择</h1>
            <p>请按照工作人员的提示选择入口</p>
          </div>
        }
        footerChildren="我们保证，我们将会严格保密您的个人信息，您的行为数据只会被用作科学研究的目的，我们尊重您的意愿，您可以选择在实验中途退出，您的所有数据将会被一并消除，如确定中途退出，请提前告知工作人员，后退出界面。非常感谢您的热心参与，后续您将获得xx元的报酬。"
      >
        <main className={styles.selectPage}>
          <ul className={styles.list}>
            <li
              className={`${value === "1" ? `${styles.itemSelected}` : ""}`}
              onClick={() => onChange("1")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41"
                height="39"
                viewBox="0 0 41 39"
                fill="none"
              >
                <path
                  d="M20.7268 0.355225L25.4526 14.8998H40.7457L28.3733 23.8888L33.0991 38.4333L20.7268 29.4443L8.35447 38.4333L13.0803 23.8888L0.707949 14.8998H16.001L20.7268 0.355225Z"
                  fill="currentColor"
                />
              </svg>
              任务类型选择
            </li>
            <li
              className={`${value === "2" ? `${styles.itemSelected}` : ""}`}
              onClick={() => onChange("2")}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41"
                height="39"
                viewBox="0 0 41 39"
                fill="none"
              >
                <path
                  d="M20.7268 0.355225L25.4526 14.8998H40.7457L28.3733 23.8888L33.0991 38.4333L20.7268 29.4443L8.35447 38.4333L13.0803 23.8888L0.707949 14.8998H16.001L20.7268 0.355225Z"
                  fill="currentColor"
                />
              </svg>
              消费者入口
            </li>
          </ul>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              style={{ marginTop: 50 }}
              type="primary"
              onClick={() => onRouter()}
            >
              进入
            </Button>
          </div>
        </main>
        <Modal
          title="请选择您是第几队第几人"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className={styles.hhhh}>
            <span>我是第</span>
            <Select
              value={dui}
              style={{ width: 120 }}
              onChange={handleChange1}
              options={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
              ]}
            />
            队的第
            <Select
              value={ren}
              style={{ width: 120 }}
              onChange={handleChange2}
              options={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
                { value: "5", label: "5" },
                { value: "6", label: "6" },
                { value: "7", label: "7" },
                { value: "8", label: "8" },
                { value: "9", label: "9" },
                { value: "10", label: "10" },
              ]}
            />
            人
          </div>
        </Modal>
      </DefaultLayout>
    </>
  );
};

export default EntrancePage;
