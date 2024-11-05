import DefaultLayout from "@/layout/Default/IndexLayout";
import Image from "next/image";
import { Button, Modal } from "antd";
import styles from "./index.module.css";
import "@/app/globals.css";
import one from "../../../public/select-image/1.png";
import two from "../../../public/select-image/2.png";
import three from "../../../public/select-image/3.png";
import four from "../../../public/select-image/4.png";
import five from "../../../public/select-image/5.png";
import six from "../../../public/select-image/6.png";
import seven from "../../../public/select-image/7.png";
import eight from "../../../public/select-image/8.png";
import nine from "../../../public/select-image/9.png";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { message } from "antd";
import moment from "moment";

const CategoryPage = () => {
  const router = useRouter();
  const [selectedImage, setSelected] = useState(0);
  const [categoryItem, setCategory] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
  }, []);


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const selectedStr = localStorage.getItem("selected-image");
    const userStr = localStorage.getItem("user");
    if (selectedStr && userStr) {
      add();
      setIsModalOpen(false);
    } else {
      return messageApi.open({
        type: "error",
        content: "最少选择一项图片后才可以操作",
      });
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClick = (item: number, category: number) => {
    console.log(item);
    setSelected(item);
    setCategory(category);
  };

  const add = async () => {
    const userStr = localStorage.getItem("user");
    const selectedStr = localStorage.getItem("selected-image");
    if (userStr && selectedStr) {
      const user = JSON.parse(userStr);
      await fetch(`/api/data`, {
        method: "POST",
        body: JSON.stringify({
          phone: user.phone,
          createTime: moment().format("YYYY年MM月DD日 HH:mm:ss"),
          data: selectedStr,
        }),
      });
      localStorage.removeItem("selected-image");
      localStorage.removeItem("user");
      localStorage.removeItem("selected-image");
      messageApi.open({
        type: "success",
        content: "提交成功，即将跳转登陆页",
      });
      setTimeout(() => {
        router.replace("/login");
      }, 2000);
    }
  };

  const onSubmit = useCallback(() => {
    if (!selectedImage || !categoryItem) {
      return messageApi.open({
        type: "error",
        content: "必须选择一项图片后才可以操作",
      });
    }
    console.log(categoryItem);
    if (categoryItem === 1) {
      router.push(`/detail/${categoryItem}/${selectedImage}`);
    } else if (categoryItem === 2) {
      router.push(`/detail3/3/${selectedImage}`);
      // router.push(`/detail2/${categoryItem}/${selectedImage - 3}`);
    } else if (categoryItem === 3) {
      router.push(`/detail3/${categoryItem}/${selectedImage - 6}`);
    }
  }, [selectedImage, categoryItem]);

  return (
    <>
      <DefaultLayout
        title="选择图片"
        headerChildren={
          <div className={styles.header}>
            <h1>任务类型选择</h1>
            <p>请按照工作人员的提示选择任务类型</p>
          </div>
        }
        footerChildren={
          <>
            <Button type="primary" onClick={() => onSubmit()}>
              选择
            </Button>
            <Button style={{ marginLeft: 20 }} onClick={() => showModal()}>
              结束本次答题
            </Button>
          </>
        }
      >
        <main className={styles.categoryMain}>
          {contextHolder}
          <Modal
            title="是否结束本次答题？"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            cancelText="取消"
            okText="确认提交"
          >
            确认后将提交本次答题，请确认！
          </Modal>
          <div className={styles.categoryItem}>
            <div className={styles.categoryItemChildrenParent}>
              <div
                className={styles.categoryItemChildren}
                onClick={() => onClick(1, 1)}
              >
                {selectedImage === 1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <circle cx="22" cy="22" r="22" fill="white" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 22C0 9.80836 9.80836 0 22 0C34.1917 0 44 9.80836 44 22C44 34.1917 34.1917 44 22 44C9.80836 44 0 34.1917 0 22ZM21.175 31.075L35.75 16.5C35.75 16.5 37.125 15.125 35.75 13.75C34.375 12.375 33 13.75 33 13.75L19.25 27.5L11 19.25C11 19.25 9.62501 17.875 8.25001 19.25C6.87501 20.625 8.25001 22 8.25001 22L17.325 31.075C18.3334 32.0834 20.1667 32.0834 21.175 31.075Z"
                      fill="#0091FF"
                    />
                  </svg>
                )}
                <Image alt="" src={one} width={220} height={128} priority />
              </div>
              <h3>{"(1)"}</h3>
            </div>
            <div className={styles.categoryItemChildrenParent}>
              <div
                className={styles.categoryItemChildren}
                onClick={() => onClick(2, 1)}
              >
                {selectedImage === 2 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <circle cx="22" cy="22" r="22" fill="white" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 22C0 9.80836 9.80836 0 22 0C34.1917 0 44 9.80836 44 22C44 34.1917 34.1917 44 22 44C9.80836 44 0 34.1917 0 22ZM21.175 31.075L35.75 16.5C35.75 16.5 37.125 15.125 35.75 13.75C34.375 12.375 33 13.75 33 13.75L19.25 27.5L11 19.25C11 19.25 9.62501 17.875 8.25001 19.25C6.87501 20.625 8.25001 22 8.25001 22L17.325 31.075C18.3334 32.0834 20.1667 32.0834 21.175 31.075Z"
                      fill="#0091FF"
                    />
                  </svg>
                )}
                <Image alt="" src={two} width={220} height={128} priority />
              </div>
              <h3>{"(2)"}</h3>
            </div>

            <div className={styles.categoryItemChildrenParent}>
              <div
                className={styles.categoryItemChildren}
                onClick={() => onClick(3, 1)}
              >
                {selectedImage === 3 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <circle cx="22" cy="22" r="22" fill="white" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 22C0 9.80836 9.80836 0 22 0C34.1917 0 44 9.80836 44 22C44 34.1917 34.1917 44 22 44C9.80836 44 0 34.1917 0 22ZM21.175 31.075L35.75 16.5C35.75 16.5 37.125 15.125 35.75 13.75C34.375 12.375 33 13.75 33 13.75L19.25 27.5L11 19.25C11 19.25 9.62501 17.875 8.25001 19.25C6.87501 20.625 8.25001 22 8.25001 22L17.325 31.075C18.3334 32.0834 20.1667 32.0834 21.175 31.075Z"
                      fill="#0091FF"
                    />
                  </svg>
                )}
                <Image alt="" src={three} width={220} height={128} priority />
              </div>
              <h3>{"(3)"}</h3>
            </div>
          </div>
          <div className={styles.categoryItem}>
            <div className={styles.categoryItemChildrenParent}>
              <div
                className={styles.categoryItemChildren}
                onClick={() => onClick(4, 2)}
              >
                {selectedImage === 4 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <circle cx="22" cy="22" r="22" fill="white" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 22C0 9.80836 9.80836 0 22 0C34.1917 0 44 9.80836 44 22C44 34.1917 34.1917 44 22 44C9.80836 44 0 34.1917 0 22ZM21.175 31.075L35.75 16.5C35.75 16.5 37.125 15.125 35.75 13.75C34.375 12.375 33 13.75 33 13.75L19.25 27.5L11 19.25C11 19.25 9.62501 17.875 8.25001 19.25C6.87501 20.625 8.25001 22 8.25001 22L17.325 31.075C18.3334 32.0834 20.1667 32.0834 21.175 31.075Z"
                      fill="#0091FF"
                    />
                  </svg>
                )}
                <Image alt="" src={four} width={220} height={128} priority />
              </div>
              <h3>{"(4)"}</h3>
            </div>
            <div className={styles.categoryItemChildrenParent}>
              <div
                className={styles.categoryItemChildren}
                onClick={() => onClick(5, 2)}
              >
                {selectedImage === 5 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <circle cx="22" cy="22" r="22" fill="white" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 22C0 9.80836 9.80836 0 22 0C34.1917 0 44 9.80836 44 22C44 34.1917 34.1917 44 22 44C9.80836 44 0 34.1917 0 22ZM21.175 31.075L35.75 16.5C35.75 16.5 37.125 15.125 35.75 13.75C34.375 12.375 33 13.75 33 13.75L19.25 27.5L11 19.25C11 19.25 9.62501 17.875 8.25001 19.25C6.87501 20.625 8.25001 22 8.25001 22L17.325 31.075C18.3334 32.0834 20.1667 32.0834 21.175 31.075Z"
                      fill="#0091FF"
                    />
                  </svg>
                )}
                <Image alt="" src={five} width={220} height={128} priority />
              </div>
              <h3>{"(5)"}</h3>
            </div>
            <div className={styles.categoryItemChildrenParent}>
              <div
                className={styles.categoryItemChildren}
                onClick={() => onClick(6, 2)}
              >
                {selectedImage === 6 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <circle cx="22" cy="22" r="22" fill="white" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 22C0 9.80836 9.80836 0 22 0C34.1917 0 44 9.80836 44 22C44 34.1917 34.1917 44 22 44C9.80836 44 0 34.1917 0 22ZM21.175 31.075L35.75 16.5C35.75 16.5 37.125 15.125 35.75 13.75C34.375 12.375 33 13.75 33 13.75L19.25 27.5L11 19.25C11 19.25 9.62501 17.875 8.25001 19.25C6.87501 20.625 8.25001 22 8.25001 22L17.325 31.075C18.3334 32.0834 20.1667 32.0834 21.175 31.075Z"
                      fill="#0091FF"
                    />
                  </svg>
                )}
                <Image alt="" src={six} width={220} height={128} priority />
              </div>
              <h3>{"(6)"}</h3>
            </div>
          </div>
          <div className={styles.categoryItem}>
            <div className={styles.categoryItemChildrenParent}>
              <div
                className={styles.categoryItemChildren}
                onClick={() => onClick(7, 3)}
              >
                {selectedImage === 7 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <circle cx="22" cy="22" r="22" fill="white" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 22C0 9.80836 9.80836 0 22 0C34.1917 0 44 9.80836 44 22C44 34.1917 34.1917 44 22 44C9.80836 44 0 34.1917 0 22ZM21.175 31.075L35.75 16.5C35.75 16.5 37.125 15.125 35.75 13.75C34.375 12.375 33 13.75 33 13.75L19.25 27.5L11 19.25C11 19.25 9.62501 17.875 8.25001 19.25C6.87501 20.625 8.25001 22 8.25001 22L17.325 31.075C18.3334 32.0834 20.1667 32.0834 21.175 31.075Z"
                      fill="#0091FF"
                    />
                  </svg>
                )}
                <Image alt="" src={seven} width={220} height={128} priority />
              </div>
              <h3>{"(7)"}</h3>
            </div>
            <div className={styles.categoryItemChildrenParent}>
              <div
                className={styles.categoryItemChildren}
                onClick={() => onClick(8, 3)}
              >
                {selectedImage === 8 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <circle cx="22" cy="22" r="22" fill="white" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 22C0 9.80836 9.80836 0 22 0C34.1917 0 44 9.80836 44 22C44 34.1917 34.1917 44 22 44C9.80836 44 0 34.1917 0 22ZM21.175 31.075L35.75 16.5C35.75 16.5 37.125 15.125 35.75 13.75C34.375 12.375 33 13.75 33 13.75L19.25 27.5L11 19.25C11 19.25 9.62501 17.875 8.25001 19.25C6.87501 20.625 8.25001 22 8.25001 22L17.325 31.075C18.3334 32.0834 20.1667 32.0834 21.175 31.075Z"
                      fill="#0091FF"
                    />
                  </svg>
                )}
                <Image alt="" src={eight} width={220} height={128} priority />
              </div>
              <h3>{"(8)"}</h3>
            </div>
            <div className={styles.categoryItemChildrenParent}>
              <div
                className={styles.categoryItemChildren}
                onClick={() => onClick(9, 3)}
              >
                {selectedImage === 9 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <circle cx="22" cy="22" r="22" fill="white" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 22C0 9.80836 9.80836 0 22 0C34.1917 0 44 9.80836 44 22C44 34.1917 34.1917 44 22 44C9.80836 44 0 34.1917 0 22ZM21.175 31.075L35.75 16.5C35.75 16.5 37.125 15.125 35.75 13.75C34.375 12.375 33 13.75 33 13.75L19.25 27.5L11 19.25C11 19.25 9.62501 17.875 8.25001 19.25C6.87501 20.625 8.25001 22 8.25001 22L17.325 31.075C18.3334 32.0834 20.1667 32.0834 21.175 31.075Z"
                      fill="#0091FF"
                    />
                  </svg>
                )}
                <Image alt="" src={nine} width={220} height={128} priority />
              </div>
              <h3>{"(9)"}</h3>
            </div>
          </div>
        </main>
      </DefaultLayout>
    </>
  );
};

export default CategoryPage;
