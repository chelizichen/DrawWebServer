import React from "react";

interface serverStorage {
  // 加载
  loadImg(dataURL: string): void;
  // 存入缓存内
  setToCache(dataURL: string): number;
  // 获取缓存ID
  getCacheById(id: number): string;
}

class serverStorageImpl implements serverStorage {
  setToCache(dataURL: string): number {
    throw new Error("Method not implemented.");
  }
  getCacheById(id: number): string {
    throw new Error("Method not implemented.");
  }
  loadImg(dataURL: string): void {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = dataURL;
    img.onload = function () {
      if (!ctx) {
        return;
      }
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      document.body.appendChild(canvas);
    };
  }
}

function StorageComponent() {
  function getInfo() {
    const element = document.getElementById(
      "canvasInfo"
    ) as unknown as HTMLCanvasElement;
    console.log("element", element);
    const dataURL = element.toDataURL();
    console.log(dataURL);
    // 创建一个canvas元素
  }

  return <div onClick={() => getInfo()}>保存</div>;
}

export default StorageComponent;
