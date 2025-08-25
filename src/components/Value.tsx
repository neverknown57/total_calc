import { useState } from "react";
import { Save } from "./Save";
import style from "./Value.module.css";
import { timeFormat } from "d3-time-format";
interface amount {
  time_str: string;
  cur_500: number;
  cur_200: number;
  cur_100: number;
  cur_50: number;
  cur_20: number;
  cur_10: number;
  cur_5: number;
  total_: number;
}
export let Value = ({
  total_,
  setTotal,
}: {
  total_: number;
  setTotal: any;
}) => {
  const [cur_500, set500] = useState(0);
  const [cur_200, set200] = useState(0);
  const [cur_100, set100] = useState(0);
  const [cur_50, set50] = useState(0);
  const [cur_20, set20] = useState(0);
  const [cur_10, set10] = useState(0);
  const [cur_5, set5] = useState(0);
  const [cur, setCur] = useState<amount[] | null>([]);

  const Savedetails = (obj: any) => {
    // let arr = [];
    let data = JSON.parse(localStorage.getItem("time") ?? "[]");
    data.unshift(obj);
    setCur(data);
    let wt = JSON.stringify(data);
    localStorage.setItem("time", wt);
  };
  const clearstorage = () => {
    localStorage.removeItem("time");
    setCur(null);
  };
  const total = (old: number, val: number) => {
    let tot = cur_5 + cur_10 + cur_20 + cur_50 + cur_100 + cur_200 + cur_500;
    tot -= old;
    tot += val;
    setTotal(tot);
  };

  return (
    <div className={style.container}>
      <section>
        <div style={{ display: "flex" }}>
          <label htmlFor="cur500">500: </label>
          <input
            name="cur500_"
            type="number"
            onChange={(e) => {
              let val = Number(e.target.value) * 500;
              //   let
              set500(val);
              total(cur_500, val);
            }}
            placeholder="0"
          />

          <div>{cur_500}</div>
        </div>
      </section>
      {/* for 200 */}

      <section>
        <div style={{ display: "flex" }}>
          <label htmlFor="cur500">200: </label>
          <input
            name="cur200_"
            type="number"
            onChange={(e) => {
              let val = Number(e.target.value) * 200;
              set200(val);
              total(cur_200, val);
            }}
            placeholder="0"
          />

          <div>{cur_200}</div>
        </div>
      </section>
      {/* for 100 */}
      <section>
        <div style={{ display: "flex" }}>
          <label htmlFor="cu100">100: </label>
          <input
            name="cur100_"
            id="cu100"
            type="number"
            onChange={(e) => {
              let val = Number(e.target.value) * 100;
              set100(val);
              total(cur_100, val);
            }}
            placeholder="0"
          />

          <div>{cur_100}</div>
        </div>
      </section>
      {/* for 50 */}
      <section>
        <div style={{ display: "flex" }}>
          <label htmlFor="cur50">50: </label>
          <input
            name="cur50_"
            type="number"
            onChange={(e) => {
              let val = Number(e.target.value) * 50;
              set50(val);
              total(cur_50, val);
            }}
            placeholder="0"
          />

          <div>{cur_50}</div>
        </div>
      </section>
      <section>
        <div style={{ display: "flex" }}>
          <label htmlFor="cur20">20: </label>
          <input
            name="cur20_"
            type="number"
            onChange={(e) => {
              let val = Number(e.target.value) * 20;
              set20(val);
              total(cur_20, val);
            }}
            placeholder="0"
          />

          <div>{cur_20}</div>
        </div>
      </section>
      <section>
        <div style={{ display: "flex" }}>
          <label htmlFor="cur10">10: </label>
          <input
            name="cur10_"
            type="number"
            onChange={(e) => {
              let val = Number(e.target.value) * 10;
              set10(val);
              total(cur_10, val);
            }}
            placeholder="0"
          />

          <div>{cur_10}</div>
        </div>
      </section>
      <section>
        <div style={{ display: "flex" }}>
          <label htmlFor="cur5">5: </label>
          <input
            name="cur5_"
            type="number"
            onChange={(e) => {
              let val = Number(e.target.value) * 5;
              set5(val);
              total(cur_5, val);
            }}
            placeholder="0"
          />

          <div>{cur_5}</div>
        </div>
      </section>
      <div>
        <button
          onClick={() => {
            const timeFor = timeFormat("%I:%M %p");
            const time_str = timeFor(new Date());
            const state = {
              time_str,
              cur_500,
              cur_200,
              cur_100,
              cur_50,
              cur_20,
              cur_10,
              cur_5,
              total_,
            };
            Savedetails(state);
          }}>
          Save
        </button>
        <button onClick={clearstorage}>Clear</button>
      </div>
      {cur != null ? <Save cur={cur}></Save> : <></>}
    </div>
  );
};
