export default function (context) {
  let result = /^\d+$/.test(context.params.id);
  if (result) {
    if (context.params.id > 0 && context.params.id < 100) {
      return true;
    } else {
      context.error({
        message: "Id must be between 1 and 99",
        statusCode: 400
      });
    }
  } else {
    context.error(
      {
        message: "Id must be a number",
        statusCode: 400
      });
  }
}