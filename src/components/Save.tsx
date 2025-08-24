// {useState}
import tablestyle from "./Save.module.css";
interface amount {
  cur_500: number;
  cur_200: number;
  cur_100: number;
  cur_50: number;
  cur_20: number;
  cur_10: number;
  cur_5: number;
  total_: number;
}
export let Save = ({ cur }: { cur: amount[] }) => {
  //   let data = localStorage.getItem("time");
  //   let arr = JSON.parse(data ?? "[]");

  console.log(cur);
  //   const [cur, setCur] = useState(arr);
  //   if (cur.length != arr.length) {
  //     setCur(arr);
  //   }
  if (cur.length == 0) return <></>;

  return (
    <table className={tablestyle.table}>
      <thead>
        <tr>
          <th>₹ 500</th>
          <th>₹ 200</th>
          <th>₹ 100</th>
          <th>₹ 50</th>
          <th>₹ 20</th>
          <th>₹ 10</th>
          <th>₹ 5</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cur.map(
          ({
            cur_500,
            cur_200,
            cur_100,
            cur_50,
            cur_20,
            cur_10,
            cur_5,
            total_,
          }: any) => {
            return (
              <tr>
                <td>{cur_500}</td>
                <td>{cur_200}</td>
                <td>{cur_100}</td>
                <td>{cur_50}</td>
                <td>{cur_20} </td>
                <td>{cur_10}</td>
                <td>{cur_5}</td>
                <td>{total_}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};
