const cars = async () => {
  try {
    const { data } = await fetch(
      "https://api.car2db.com/api/auto/v1/type.getDateUpdate.timestamp.en"
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
cars();
