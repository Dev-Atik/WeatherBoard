const getFormatedDate = (value, type, inMs) => {
  if (!value) return value;

  if (!inMs) {
    value = value * 1000;
  }

  const date = new Date(value);

  let options;

  if (type === "date") {
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } else if (type === "time") {
    options = {
      minute: "numeric",
      hour: "numeric",
    };
  }
  return new Intl.DateTimeFormat("en-us", options).format(date);
};

export default getFormatedDate;
