function generate() {
  const input1 = saveParseJson(document.getElementById("textarea1").value);
  const input2 = saveParseJson(document.getElementById("textarea2").value);
  const res = document.getElementById("textarea3");

  const appSettings = {};
  (input1 || []).forEach((i) => (appSettings[i.name] = i.value));
  const connString = {};
  (input2 || []).forEach((i) => (connString[i.name] = i.value));

  const result = {
    IsEncrypted: false,
    Values: appSettings,
    Host: {
      LocalHttpPort: 7071,
      CORS: "*",
    },
    ConnectionStrings: connString,
  };

  res.value = JSON.stringify(result, null, 2);
}

function saveParseJson(val) {
  try {
    return JSON.parse(val);
  } catch (error) {
    return ``;
  }
}
