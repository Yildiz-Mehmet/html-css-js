import axios from "axios";

const cars = async () => {
  const { data } = await axios.get(
    "https://api.car2db.com/api/auto/v1/type.getAll.csv.en"
  );
  console.log(data);
};
cars();
