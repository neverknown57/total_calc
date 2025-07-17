// {useState}
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

  return (
    <>
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
            <div>
              {" "}
              ₹{cur_500} || ₹{cur_200} || ₹{cur_100} ||₹{cur_50} || ₹{cur_20} ||
              ₹{cur_10} || ₹{cur_5} = Total :{total_}
            </div>
          );
        }
      )}
    </>
  );
};
