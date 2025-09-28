import { useState, useEffect } from "react";

function Sessions() {
  const [data, setData] = useState(null); // 存API回傳資料
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.openf1.org/v1/sessions");
        const json = await response.json();
        setData(json); // 更新 state
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div>F1 Sessions 資料</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/*顯示成json格式*/}
      {/*pre:顯示文本原本的樣子*/}
      {/* {data} */}
    </div>
  );
}

export default Sessions;
