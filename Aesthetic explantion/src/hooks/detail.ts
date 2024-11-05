import { useEffect, useState } from "react";
import One from "../../public/select-image/1-big.png";
import Two from "../../public/select-image/2-big.png";
import Three from "../../public/select-image/3-big.png";
import Four from "../../public/select-image/4-bug.png";
import Five from "../../public/select-image/5-nug.png";
import Six from "../../public/select-image/6-big.png";
import Seven from "../../public/select-image/7-big.png";
import Eight from "../../public/select-image/8-big.png";
import Nine from "../../public/select-image/9-big.png";
import Example1 from "../../public/select-image/example1.png";
import Example2 from "../../public/select-image/example2.png";
import Example3 from "../../public/select-image/example3.png";
import Example4 from "../../public/select-image/example4.png";
import Example5 from "../../public/select-image/example5.png";
import Example6 from "../../public/select-image/example6.png";
import Example7 from "../../public/select-image/example7.png";
import Example8 from "../../public/select-image/example8.png";
import Example9 from "../../public/select-image/example9.png";
import Example10 from "../../public/select-image/example10.png";
import Example11 from "../../public/select-image/example11.png";
import Example12 from "../../public/select-image/example12.png";
import Example13 from "../../public/select-image/example13.png";
import Example14 from "../../public/select-image/example14.png";
import Example15 from "../../public/select-image/example15.png";
import Example16 from "../../public/select-image/example16.png";
import Example17 from "../../public/select-image/example17.png";
import Example18 from "../../public/select-image/example18.png";
import Example19 from "../../public/select-image/example19.png";
import Example20 from "../../public/select-image/example20.png";
import Example21 from "../../public/select-image/example21.png";
import Example22 from "../../public/select-image/example22.png";
import { StaticImageData } from "next/image";

interface IAiImageTypeOptions {
  categoryId: string;
  detailId: string;
}
export const randomBetween = (min = 3.54, max = 4.54, precision = 2) => {
  const random = Math.random() * (max - min) + min;
  return parseFloat(random.toFixed(precision));
}
class AiImageType {
  categoryId: string;
  detailId: string;

  constructor(options: IAiImageTypeOptions) {
    this.categoryId = options.categoryId;
    this.detailId = options.detailId;
  }

  getDetailContent() {
    if (this.detailId === "1") {
      return this.getFeatureExplanation();
    }
    if (this.detailId === "2") {
      return this.getFeatureExplanation();
    }

    if (this.detailId === "3") {
      return this.getFeatureExplanation();
    }
    if (this.detailId === "4") {
      return this.getFeatureExplanation();
    }
    if (this.detailId === "5") {
      return this.getFeatureExplanation();
    }
    if (this.detailId === "6") {
      return this.getFeatureExplanation();
    }
  }

  /**
   * 获取特征解释
   */
  private getFeatureExplanation() {
    console.log(this.detailId, this.categoryId);
    if (this.detailId === "1") {
      if (this.categoryId === "1") {
        return {
          type: "feature",
          image: One,
          fraction: 4.34,
          list: [
            {
              value: "Quality",
              text: "质量",
              fraction: 4.38,
            },
            {
              value: "Composition",
              text: "布局",
              fraction: 4.16,
            },
            {
              value: "Color",
              text: "色彩",
              fraction: 4.16,
            },
            {
              value: "Depth of Field",
              text: "景深",
              fraction: 4.16,
            },
            {
              value: "Light",
              text: "光照",
              fraction: 4.16,
            },
          ],
          questionnaire3: {
            value: 1,
            desc: "请您在结合AI助手的美学评分基础上，给出您对这张图片的最终评分",
          },
          questionnaire2: [
            {
              value: "您在给出最终美学评分的时候，对于AI助手结果的借鉴程度：",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
          ],
          questionnaire4: {
            value: '',
            desc: "请输入您的名称",
          },
          questionnaire: [
            {
              value: "1. 我能够很好的理解AI预测结果解释的过程，知道得分的来源",
              list: [
                {
                  value: "非常不赞同",
                  desc: "",
                },
                {
                  value: "不赞同",
                  desc: "",
                },
                {
                  value: "中立",
                  desc: "",
                },
                {
                  value: "赞同",
                  desc: "",
                },
                {
                  value: "非常赞同",
                  desc: "",
                },
              ],
            },
            {
              value: "2.该美学AI助手能够有效的将我想知道的信息告诉我",
              list: [
                {
                  value: "非常不赞同",
                  desc: "",
                },
                {
                  value: "不赞同",
                  desc: "",
                },
                {
                  value: "中立",
                  desc: "",
                },
                {
                  value: "赞同",
                  desc: "",
                },
                {
                  value: "非常赞同",
                  desc: "",
                },
              ],
            },
            {
              value: "3.同该AI美学助手的合作中，对我来说，复杂度是",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
            {
              value:
                "4.同该AI美学助手的合作中，对我来说需要付出的心力和体力是：",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
          ],
        };
      }

      if (this.categoryId === "2") {
        return {
          type: "feature",
          image: Four,
          fraction: 1.42,
          list: [
            {
              value: "Quality",
              text: "质量",
              fraction: 1.42,
            },
            {
              value: "Composition",
              text: "布局",
              fraction: 1.45,
            },
            {
              value: "Color",
              text: "色彩",
              fraction: 2.04,
            },
            {
              value: "Depth of Field",
              text: "景深",
              fraction: 1.72,
            },
            {
              value: "Light",
              text: "光照",
              fraction: 1.88,
            },
          ],
          questionnaire3: {
            value: 1,
            desc: "请您在结合AI助手的美学评分基础上，给出您对这张图片的最终评分",
          },
          questionnaire4: {
            value: '',
            desc: "请输入您的名称",
          },
          questionnaire2: [
            {
              value: "您在给出最终美学评分的时候，对于AI助手结果的借鉴程度：",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
          ],
          questionnaire: [
            {
              value: "1. 我能够很好的理解AI预测结果解释的过程，知道得分的来源",
              list: [
                {
                  value: "非常不赞同",
                  desc: "",
                },
                {
                  value: "不赞同",
                  desc: "",
                },
                {
                  value: "中立",
                  desc: "",
                },
                {
                  value: "赞同",
                  desc: "",
                },
                {
                  value: "非常赞同",
                  desc: "",
                },
              ],
            },
            {
              value: "2.该美学AI助手能够有效的将我想知道的信息告诉我",
              list: [
                {
                  value: "非常不赞同",
                  desc: "",
                },
                {
                  value: "不赞同",
                  desc: "",
                },
                {
                  value: "中立",
                  desc: "",
                },
                {
                  value: "赞同",
                  desc: "",
                },
                {
                  value: "非常赞同",
                  desc: "",
                },
              ],
            },
            {
              value: "3.同该AI美学助手的合作中，对我来说，复杂度是",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
            {
              value:
                "4.同该AI美学助手的合作中，对我来说需要付出的心力和体力是：",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
          ],
        };
      }

      if (this.categoryId === "3") {
        return {
          type: "feature",
          image: Seven,
          // fraction: randomBetween(),
          fraction: '1.42',
          list: [
            {
              value: "Quality",
              text: "质量",
              fraction: 1.42,
            },
            {
              value: "Composition",
              text: "布局",
              fraction: 1.45,
            },
            {
              value: "Color",
              text: "色彩",
              fraction: 2.04,
            },
            {
              value: "Depth of Field",
              text: "景深",
              fraction: 1.72,
            },
            {
              value: "Light",
              text: "光照",
              fraction: 1.88,
            },
          ],
          questionnaire4: {
            value: '',
            desc: "请输入您的名称",
          },
          questionnaire3: {
            value: 1,
            desc: "请您在结合AI助手的美学评分基础上，给出您对这张图片的最终评分",
          },
          questionnaire2: [
            {
              value: "您在给出最终美学评分的时候，对于AI助手结果的借鉴程度：",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
          ],
          questionnaire: [
            {
              value: "1. 我能够很好的理解AI预测结果解释的过程，知道得分的来源",
              list: [
                {
                  value: "非常不赞同",
                  desc: "",
                },
                {
                  value: "不赞同",
                  desc: "",
                },
                {
                  value: "中立",
                  desc: "",
                },
                {
                  value: "赞同",
                  desc: "",
                },
                {
                  value: "非常赞同",
                  desc: "",
                },
              ],
            },
            {
              value: "2.该美学AI助手能够有效的将我想知道的信息告诉我",
              list: [
                {
                  value: "非常不赞同",
                  desc: "",
                },
                {
                  value: "不赞同",
                  desc: "",
                },
                {
                  value: "中立",
                  desc: "",
                },
                {
                  value: "赞同",
                  desc: "",
                },
                {
                  value: "非常赞同",
                  desc: "",
                },
              ],
            },
            {
              value: "3.同该AI美学助手的合作中，对我来说，复杂度是",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
            {
              value:
                "4.同该AI美学助手的合作中，对我来说需要付出的心力和体力是：",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
          ],
        };
      }
    }

    if (this.detailId === "2") {
      if (this.categoryId === "1") {
        return {
          type: "probability",
          image: Two,
          fraction: 3.48,
          list: [],
          desc: "AI 有97%的准确率保证该评分的准确性",
          questionnaire4: {
            value: '',
            desc: "请输入您的名称",
          },
          questionnaire3: {
            value: 1,
            desc: "请您在结合AI助手的美学评分基础上，给出您对这张图片的最终评分",
          },
          questionnaire2: [
            {
              value: "您在给出最终美学评分的时候，对于AI助手结果的借鉴程度：",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
          ],
          questionnaire: [
            {
              value: "1. 我能够很好的理解AI预测结果解释的过程，知道得分的来源",
              list: [
                {
                  value: "非常不赞同",
                  desc: "",
                },
                {
                  value: "不赞同",
                  desc: "",
                },
                {
                  value: "中立",
                  desc: "",
                },
                {
                  value: "赞同",
                  desc: "",
                },
                {
                  value: "非常赞同",
                  desc: "",
                },
              ],
            },
            {
              value: "2.该美学AI助手能够有效的将我想知道的信息告诉我",
              list: [
                {
                  value: "非常不赞同",
                  desc: "",
                },
                {
                  value: "不赞同",
                  desc: "",
                },
                {
                  value: "中立",
                  desc: "",
                },
                {
                  value: "赞同",
                  desc: "",
                },
                {
                  value: "非常赞同",
                  desc: "",
                },
              ],
            },
            {
              value: "3.同该AI美学助手的合作中，对我来说，复杂度是",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
            {
              value:
                "4.同该AI美学助手的合作中，对我来说需要付出的心力和体力是：",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
          ],
        };
      }

      if (this.categoryId === "2") {
        return {
          type: "probability",
          image: Five,
          fraction: 4.13,
          list: [],
          desc: "AI 有97%的准确率保证该评分的准确性",
          questionnaire3: {
            value: 1,
            desc: "请您在结合AI助手的美学评分基础上，给出您对这张图片的最终评分",
          },
          questionnaire2: [
            {
              value: "您在给出最终美学评分的时候，对于AI助手结果的借鉴程度：",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
          ],
          questionnaire: [
            {
              value: "1. 我能够很好的理解AI预测结果解释的过程，知道得分的来源",
              list: [
                {
                  value: "非常不赞同",
                  desc: "",
                },
                {
                  value: "不赞同",
                  desc: "",
                },
                {
                  value: "中立",
                  desc: "",
                },
                {
                  value: "赞同",
                  desc: "",
                },
                {
                  value: "非常赞同",
                  desc: "",
                },
              ],
            },
            {
              value: "2.该美学AI助手能够有效的将我想知道的信息告诉我",
              list: [
                {
                  value: "非常不赞同",
                  desc: "",
                },
                {
                  value: "不赞同",
                  desc: "",
                },
                {
                  value: "中立",
                  desc: "",
                },
                {
                  value: "赞同",
                  desc: "",
                },
                {
                  value: "非常赞同",
                  desc: "",
                },
              ],
            },
            {
              value: "3.同该AI美学助手的合作中，对我来说，复杂度是",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
            {
              value:
                "4.同该AI美学助手的合作中，对我来说需要付出的心力和体力是：",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
          ],
          questionnaire4: {
            value: '',
            desc: "请输入您的名称",
          },
        };
      }

      if (this.categoryId === "3") {
        return {
          type: "probability",
          image: Eight,
          fraction: 3.3,
          list: [],
          desc: "AI 97%的准确率保证该评分的准确性",
          questionnaire3: {
            value: 1,
            desc: "请您在结合AI助手的美学评分基础上，给出您对这张图片的最终评分",
          },
          questionnaire2: [
            {
              value: "您在给出最终美学评分的时候，对于AI助手结果的借鉴程度：",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
          ],
          questionnaire: [
            {
              value: "1. 我能够很好的理解AI预测结果解释的过程，知道得分的来源",
              list: [
                {
                  value: "非常不赞同",
                  desc: "",
                },
                {
                  value: "不赞同",
                  desc: "",
                },
                {
                  value: "中立",
                  desc: "",
                },
                {
                  value: "赞同",
                  desc: "",
                },
                {
                  value: "非常赞同",
                  desc: "",
                },
              ],
            },
            {
              value: "2.该美学AI助手能够有效的将我想知道的信息告诉我",
              list: [
                {
                  value: "非常不赞同",
                  desc: "",
                },
                {
                  value: "不赞同",
                  desc: "",
                },
                {
                  value: "中立",
                  desc: "",
                },
                {
                  value: "赞同",
                  desc: "",
                },
                {
                  value: "非常赞同",
                  desc: "",
                },
              ],
            },
            {
              value: "3.同该AI美学助手的合作中，对我来说，复杂度是",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
            {
              value:
                "4.同该AI美学助手的合作中，对我来说需要付出的心力和体力是：",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
          ],
        };
      }
    }

    if (this.detailId === "3") {
      if (this.categoryId === "1") {
        return {
          type: "compared",
          image: Three,
          fraction: 3.68,
          exampleList: [
            {
              image: Example7,
              number: "当前图片",
              fraction: "3.68",
              composition: "3.68",
              quality: "3.77",
              color: "3.40",
              light: "3.44",
              depth: "3.40",
            },
            {
              image: Example1,
              number: "案例一",
              fraction: "3.68",
              composition: "3.76",
              quality: "3.83",
              color: "3.56",
              light: "3.68",
              depth: "3.88",
            },
            {
              image: Example2,
              number: "案例二",
              fraction: "3.60",
              composition: "3.68",
              quality: "3.86",
              color: "3.64",
              light: "3.44",
              depth: "3.64",
            },
            {
              image: Example3,
              number: "案例三",
              fraction: "3.66",
              composition: "3.72",
              quality: "3.77",
              color: "3.36",
              light: "3.60",
              depth: "3.40",
            },
            {
              image: Example8,
              number: "案例四",
              fraction: "3.81",
              composition: "3.88",
              quality: "3.93",
              color: "3.40",
              light: "3.59",
              depth: "3.88",
            },
            {
              image: Example9,
              number: "案例五",
              fraction: "3.31",
              composition: "3.30",
              quality: "3.29",
              color: "2.93",
              light: "3.15",
              depth: "3.40",
            },
            {
              image: Example10,
              number: "案例六",
              fraction: "3.72",
              composition: "3.88",
              quality: "3.77",
              color: "3.44",
              light: "3.44",
              depth: "3.56",
            },
          ],
          questionnaire4: {
            value: '',
            desc: "请输入您的名称",
          },
          questionnaire3: {
            value: 1,
            desc: "请您在结合AI助手的美学评分基础上，给出您对这张图片的最终评分",
          },
          questionnaire2: [
            {
              value: "您在给出最终美学评分的时候，对于AI助手结果的借鉴程度：",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
          ],
          questionnaire: [
            {
              value: "1. 我能够很好的理解AI预测结果解释的过程，知道得分的来源",
              list: [
                {
                  value: "非常不赞同",
                  desc: "",
                },
                {
                  value: "不赞同",
                  desc: "",
                },
                {
                  value: "中立",
                  desc: "",
                },
                {
                  value: "赞同",
                  desc: "",
                },
                {
                  value: "非常赞同",
                  desc: "",
                },
              ],
            },
            {
              value: "2.该美学AI助手能够有效的将我想知道的信息告诉我",
              list: [
                {
                  value: "非常不赞同",
                  desc: "",
                },
                {
                  value: "不赞同",
                  desc: "",
                },
                {
                  value: "中立",
                  desc: "",
                },
                {
                  value: "赞同",
                  desc: "",
                },
                {
                  value: "非常赞同",
                  desc: "",
                },
              ],
            },
            {
              value: "3.同该AI美学助手的合作中，对我来说，复杂度是",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
            {
              value:
                "4.同该AI美学助手的合作中，对我来说需要付出的心力和体力是：",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
          ],
        };
      }

      if (this.categoryId === "2") {
        return {
          type: "compared",
          image: Six,
          fraction: 3.26,
          exampleList: [
            {
              image: Six,
              number: "当前图片",
              fraction: "3.26",
              composition: "3.24",
              quality: "3.46",
              color: "3.28",
              light: "3.44",
              depth: "3.32",
            },
            {
              image: Example11,
              number: "案例一",
              fraction: "3.26",
              composition: "3.24",
              quality: "3.47",
              color: "3.32",
              light: "3.32",
              depth: "3.12",
            },
            {
              image: Example12,
              number: "案例二",
              fraction: "3.20",
              composition: "3.24",
              quality: "3.56",
              color: "3.30",
              light: "3.00",
              depth: "2.80",
            },
            {
              image: Example13,
              number: "案例三",
              fraction: "3.37",
              composition: "3.50",
              quality: "3.46",
              color: "3.04",
              light: "2.88",
              depth: "3.38",
            },
            {
              image: Example14,
              number: "案例四",
              fraction: "3.56",
              composition: "3.40",
              quality: "3.64",
              color: "3.28",
              light: "3.60",
              depth: "3.52",
            },
            {
              image: Example15,
              number: "案例五",
              fraction: "3.38",
              composition: "3.40",
              quality: "3.56",
              color: "2.12",
              light: "3.32",
              depth: "3.32",
            },
            {
              image: Example16,
              number: "案例六",
              fraction: "3.74",
              composition: "3.84",
              quality: "3.89",
              color: "3.80",
              light: "3.44",
              depth: "3.48",
            },
          ],
          questionnaire3: {
            value: 1,
            desc: "请您在结合AI助手的美学评分基础上，给出您对这张图片的最终评分",
          },
          questionnaire2: [
            {
              value: "您在给出最终美学评分的时候，对于AI助手结果的借鉴程度：",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
          ],
          questionnaire: [
            {
              value: "1. 我能够很好的理解AI预测结果解释的过程，知道得分的来源",
              list: [
                {
                  value: "非常不赞同",
                  desc: "",
                },
                {
                  value: "不赞同",
                  desc: "",
                },
                {
                  value: "中立",
                  desc: "",
                },
                {
                  value: "赞同",
                  desc: "",
                },
                {
                  value: "非常赞同",
                  desc: "",
                },
              ],
            },
            {
              value: "2.该美学AI助手能够有效的将我想知道的信息告诉我",
              list: [
                {
                  value: "非常不赞同",
                  desc: "",
                },
                {
                  value: "不赞同",
                  desc: "",
                },
                {
                  value: "中立",
                  desc: "",
                },
                {
                  value: "赞同",
                  desc: "",
                },
                {
                  value: "非常赞同",
                  desc: "",
                },
              ],
            },
            {
              value: "3.同该AI美学助手的合作中，对我来说，复杂度是",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
            {
              value:
                "4.同该AI美学助手的合作中，对我来说需要付出的心力和体力是：",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
          ],
        };
      }

      if (this.categoryId === "3") {
        return {
          type: "compared",
          image: Nine,
          // fraction: randomBetween(),
          fraction: 4.04,
          exampleList: [
            {
              image: Nine,
              number: "AI建议得分",
              // fraction: "4.04",
              fraction: `${randomBetween()}`,
              composition:  `${randomBetween(4.1, 4.3)}`,
              quality: `${randomBetween(4.1, 4.3)}`,
              light: `${randomBetween(3.78, 3.98)}`,
              depth: `${randomBetween(3.98, 4.18)}`,
              color: `${randomBetween(3.66, 3.86)}`,
              // composition: "4.20",
              // quality: "4.18",
              // color: "3.76",
              // light: "3.88",
              // depth: "4.08",
            },
            {
              image: Example17,
              number: "案例一",
              fraction: "4.04",
              composition: "3.84",
              quality: "4.25",
              color: "3.80",
              light: "4.20",
              depth: "3.80",
            },
            {
              image: Example18,
              number: "案例二",
              fraction: "4.02",
              composition: "4.20",
              quality: "4.08",
              color: "3.81",
              light: "3.77",
              depth: "3.81",
            },
            {
              image: Example19,
              number: "案例三",
              fraction: "4.05",
              composition: "3.90",
              quality: "4.18",
              color: "3.79",
              light: "4.14",
              depth: "3.79",
            },
            {
              image: Example20,
              number: "案例四",
              fraction: "4.06",
              composition: "4.08",
              quality: "4.12",
              color: "3.76",
              light: "3.92",
              depth: "3.76",
            },
            {
              image: Example21,
              number: "案例五",
              fraction: "3.88",
              composition: "3.80",
              quality: "4.00",
              color: "3.60",
              light: "3.88",
              depth: "4.08",
            },
            {
              image: Example22,
              number: "案例六",
              fraction: "3.88",
              composition: "4.12",
              quality: "4.00",
              color: "3.46",
              light: "3.88",
              depth: "3.77",
            },
          ],
          questionnaire3: {
            value: 1,
            desc: "请您在结合AI助手的美学评分基础上，给出您对这张图片的最终评分",
          },
          questionnaire2: [
            {
              value: "您在给出最终美学评分的时候，对于AI助手结果的借鉴程度：",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
          ],
          questionnaire: [
            {
              value: "1. 我能够很好的理解AI预测结果解释的过程，知道得分的来源",
              list: [
                {
                  value: "非常不赞同",
                  desc: "",
                },
                {
                  value: "不赞同",
                  desc: "",
                },
                {
                  value: "中立",
                  desc: "",
                },
                {
                  value: "赞同",
                  desc: "",
                },
                {
                  value: "非常赞同",
                  desc: "",
                },
              ],
            },
            {
              value: "2.该美学AI助手能够有效的将我想知道的信息告诉我",
              list: [
                {
                  value: "非常不赞同",
                  desc: "",
                },
                {
                  value: "不赞同",
                  desc: "",
                },
                {
                  value: "中立",
                  desc: "",
                },
                {
                  value: "赞同",
                  desc: "",
                },
                {
                  value: "非常赞同",
                  desc: "",
                },
              ],
            },
            {
              value: "3.同该AI美学助手的合作中，对我来说，复杂度是",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
            {
              value:
                "4.同该AI美学助手的合作中，对我来说需要付出的心力和体力是：",
              list: [
                {
                  value: "1-低",
                  desc: "",
                },
                {
                  value: "2-较低",
                  desc: "",
                },
                {
                  value: "3-中等",
                  desc: "",
                },
                {
                  value: "4-较高",
                  desc: "",
                },
                {
                  value: "5-高",
                  desc: "",
                },
              ],
            },
          ],
        };
      }
    }

    if (this.detailId === "4" && this.categoryId === "3") {
      return {
        type: "feature",
        image: Four,
        fraction: 1.42,
        list: [
          {
            value: "Quality",
            text: "质量",
            fraction: 1.42,
          },
          {
            value: "Composition",
            text: "布局",
            fraction: 1.45,
          },
          {
            value: "Color",
            text: "色彩",
            fraction: 2.04,
          },
          {
            value: "Depth of Field",
            text: "景深",
            fraction: 1.72,
          },
          {
            value: "Light",
            text: "光照",
            fraction: 1.88,
          },
        ],
        questionnaire4: {
          value: '',
          desc: "请输入您的名称",
        },
        questionnaire3: {
          value: 1,
          desc: "请您在结合AI助手的美学评分基础上，给出您对这张图片的最终评分",
        },
        questionnaire2: [
          {
            value: "您在给出最终美学评分的时候，对于AI助手结果的借鉴程度：",
            list: [
              {
                value: "1-低",
                desc: "",
              },
              {
                value: "2-较低",
                desc: "",
              },
              {
                value: "3-中等",
                desc: "",
              },
              {
                value: "4-较高",
                desc: "",
              },
              {
                value: "5-高",
                desc: "",
              },
            ],
          },
        ],
        questionnaire: [
          {
            value: "1. 我能够很好的理解AI预测结果解释的过程，知道得分的来源",
            list: [
              {
                value: "非常不赞同",
                desc: "",
              },
              {
                value: "不赞同",
                desc: "",
              },
              {
                value: "中立",
                desc: "",
              },
              {
                value: "赞同",
                desc: "",
              },
              {
                value: "非常赞同",
                desc: "",
              },
            ],
          },
          {
            value: "2.该美学AI助手能够有效的将我想知道的信息告诉我",
            list: [
              {
                value: "非常不赞同",
                desc: "",
              },
              {
                value: "不赞同",
                desc: "",
              },
              {
                value: "中立",
                desc: "",
              },
              {
                value: "赞同",
                desc: "",
              },
              {
                value: "非常赞同",
                desc: "",
              },
            ],
          },
          {
            value: "3.同该AI美学助手的合作中，对我来说，复杂度是",
            list: [
              {
                value: "1-低",
                desc: "",
              },
              {
                value: "2-较低",
                desc: "",
              },
              {
                value: "3-中等",
                desc: "",
              },
              {
                value: "4-较高",
                desc: "",
              },
              {
                value: "5-高",
                desc: "",
              },
            ],
          },
          {
            value: "4.同该AI美学助手的合作中，对我来说需要付出的心力和体力是：",
            list: [
              {
                value: "1-低",
                desc: "",
              },
              {
                value: "2-较低",
                desc: "",
              },
              {
                value: "3-中等",
                desc: "",
              },
              {
                value: "4-较高",
                desc: "",
              },
              {
                value: "5-高",
                desc: "",
              },
            ],
          },
        ],
      };
    }
    if (this.detailId === "5" && this.categoryId === "3") {
      return {
        type: "probability",
        image: Five,
        fraction: 4.13,
        desc: "AI 有97%的准确率保证该评分的准确性",
        list: [
          {
            value: "Quality",
            text: "质量",
            fraction: 1.42,
          },
          {
            value: "Composition",
            text: "布局",
            fraction: 1.45,
          },
          {
            value: "Color",
            text: "色彩",
            fraction: 2.04,
          },
          {
            value: "Depth of Field",
            text: "景深",
            fraction: 1.72,
          },
          {
            value: "Light",
            text: "光照",
            fraction: 1.88,
          },
        ],
        questionnaire4: {
          value: '',
          desc: "请输入您的名称",
        },
        questionnaire3: {
          value: 1,
          desc: "请您在结合AI助手的美学评分基础上，给出您对这张图片的最终评分",
        },
        questionnaire2: [
          {
            value: "您在给出最终美学评分的时候，对于AI助手结果的借鉴程度：",
            list: [
              {
                value: "1-低",
                desc: "",
              },
              {
                value: "2-较低",
                desc: "",
              },
              {
                value: "3-中等",
                desc: "",
              },
              {
                value: "4-较高",
                desc: "",
              },
              {
                value: "5-高",
                desc: "",
              },
            ],
          },
        ],
        questionnaire: [
          {
            value: "1. 我能够很好的理解AI预测结果解释的过程，知道得分的来源",
            list: [
              {
                value: "非常不赞同",
                desc: "",
              },
              {
                value: "不赞同",
                desc: "",
              },
              {
                value: "中立",
                desc: "",
              },
              {
                value: "赞同",
                desc: "",
              },
              {
                value: "非常赞同",
                desc: "",
              },
            ],
          },
          {
            value: "2.该美学AI助手能够有效的将我想知道的信息告诉我",
            list: [
              {
                value: "非常不赞同",
                desc: "",
              },
              {
                value: "不赞同",
                desc: "",
              },
              {
                value: "中立",
                desc: "",
              },
              {
                value: "赞同",
                desc: "",
              },
              {
                value: "非常赞同",
                desc: "",
              },
            ],
          },
          {
            value: "3.同该AI美学助手的合作中，对我来说，复杂度是",
            list: [
              {
                value: "1-低",
                desc: "",
              },
              {
                value: "2-较低",
                desc: "",
              },
              {
                value: "3-中等",
                desc: "",
              },
              {
                value: "4-较高",
                desc: "",
              },
              {
                value: "5-高",
                desc: "",
              },
            ],
          },
          {
            value: "4.同该AI美学助手的合作中，对我来说需要付出的心力和体力是：",
            list: [
              {
                value: "1-低",
                desc: "",
              },
              {
                value: "2-较低",
                desc: "",
              },
              {
                value: "3-中等",
                desc: "",
              },
              {
                value: "4-较高",
                desc: "",
              },
              {
                value: "5-高",
                desc: "",
              },
            ],
          },
        ],
      };
    }
    if (this.detailId === "6" && this.categoryId === "3") {
      return {
        type: "compared",
        image: Six,
        fraction: 3.26,
        list: [
          {
            value: "Quality",
            text: "质量",
            fraction: 1.42,
          },
          {
            value: "Composition",
            text: "布局",
            fraction: 1.45,
          },
          {
            value: "Color",
            text: "色彩",
            fraction: 2.04,
          },
          {
            value: "Depth of Field",
            text: "景深",
            fraction: 1.72,
          },
          {
            value: "Light",
            text: "光照",
            fraction: 1.88,
          },
        ],
        exampleList: [
          {
            image: Six,
            number: "当前图片",
            fraction: "3.26",
            composition: "3.24",
            quality: "3.46",
            color: "3.28",
            light: "3.44",
            depth: "3.32",
          },
          {
            image: Example11,
            number: "案例一",
            fraction: "3.26",
            composition: "3.24",
            quality: "3.47",
            color: "3.32",
            light: "3.32",
            depth: "3.12",
          },
          {
            image: Example12,
            number: "案例二",
            fraction: "3.20",
            composition: "3.24",
            quality: "3.56",
            color: "3.30",
            light: "3.00",
            depth: "2.80",
          },
          {
            image: Example13,
            number: "案例三",
            fraction: "3.37",
            composition: "3.50",
            quality: "3.46",
            color: "3.04",
            light: "2.88",
            depth: "3.38",
          },
          {
            image: Example14,
            number: "案例四",
            fraction: "3.56",
            composition: "3.40",
            quality: "3.64",
            color: "3.28",
            light: "3.60",
            depth: "3.52",
          },
          {
            image: Example15,
            number: "案例五",
            fraction: "3.38",
            composition: "3.40",
            quality: "3.56",
            color: "2.12",
            light: "3.32",
            depth: "3.32",
          },
          {
            image: Example16,
            number: "案例六",
            fraction: "3.74",
            composition: "3.84",
            quality: "3.89",
            color: "3.80",
            light: "3.44",
            depth: "3.48",
          },
        ],
        questionnaire4: {
          value: '',
          desc: "请输入您的名称",
        },
        questionnaire3: {
          value: 1,
          desc: "请您在结合AI助手的美学评分基础上，给出您对这张图片的最终评分",
        },
        questionnaire2: [
          {
            value: "您在给出最终美学评分的时候，对于AI助手结果的借鉴程度：",
            list: [
              {
                value: "1-低",
                desc: "",
              },
              {
                value: "2-较低",
                desc: "",
              },
              {
                value: "3-中等",
                desc: "",
              },
              {
                value: "4-较高",
                desc: "",
              },
              {
                value: "5-高",
                desc: "",
              },
            ],
          },
        ],
        questionnaire: [
          {
            value: "1. 我能够很好的理解AI预测结果解释的过程，知道得分的来源",
            list: [
              {
                value: "非常不赞同",
                desc: "",
              },
              {
                value: "不赞同",
                desc: "",
              },
              {
                value: "中立",
                desc: "",
              },
              {
                value: "赞同",
                desc: "",
              },
              {
                value: "非常赞同",
                desc: "",
              },
            ],
          },
          {
            value: "2.该美学AI助手能够有效的将我想知道的信息告诉我",
            list: [
              {
                value: "非常不赞同",
                desc: "",
              },
              {
                value: "不赞同",
                desc: "",
              },
              {
                value: "中立",
                desc: "",
              },
              {
                value: "赞同",
                desc: "",
              },
              {
                value: "非常赞同",
                desc: "",
              },
            ],
          },
          {
            value: "3.同该AI美学助手的合作中，对我来说，复杂度是",
            list: [
              {
                value: "1-低",
                desc: "",
              },
              {
                value: "2-较低",
                desc: "",
              },
              {
                value: "3-中等",
                desc: "",
              },
              {
                value: "4-较高",
                desc: "",
              },
              {
                value: "5-高",
                desc: "",
              },
            ],
          },
          {
            value: "4.同该AI美学助手的合作中，对我来说需要付出的心力和体力是：",
            list: [
              {
                value: "1-低",
                desc: "",
              },
              {
                value: "2-较低",
                desc: "",
              },
              {
                value: "3-中等",
                desc: "",
              },
              {
                value: "4-较高",
                desc: "",
              },
              {
                value: "5-高",
                desc: "",
              },
            ],
          },
        ],
      };
    }
    return null;
  }
}

export const getDetailContent = (detailId: string, categoryId: string) =>
  new AiImageType({
    categoryId,
    detailId,
  }).getDetailContent();
