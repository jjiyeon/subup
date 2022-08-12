import { LANGUAGE_CODE } from "const/LanguageCode";
export const AddPriceComma = (price: number) => {
  return Number(price).toLocaleString("ko-KR");
};

export const SplitLanguageData = (lang: string) => {
  const half = Math.ceil(lang.length / 2);
  const strArr = Array.from(lang);
  return [
    LANGUAGE_CODE[strArr.splice(0, half).join("")],
    LANGUAGE_CODE[strArr.splice(-half).join("")],
  ];
};

export const TransSecond = (duration: number) => {
  const TransMinute = Math.round((duration / 60) * 100) / 100;

  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration - hours * 3600) / 60);
  const seconds = duration - hours * 3600 - minutes * 60;

  const hh = hours < 10 ? "0" + hours : hours;
  const mm = minutes < 10 ? "0" + minutes : minutes;
  const ss = seconds < 10 ? "0" + seconds : seconds;

  return hh + ":" + mm + ":" + ss;
};
