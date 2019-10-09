exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ title: process.env.TITLE }),
  });
};
