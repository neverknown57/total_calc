export let Save = () => {
  let data = localStorage.getItem("time");
  let arr = JSON.parse(data ?? "");
  console.log(arr);
  return (
    <>
      {arr.map(
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
