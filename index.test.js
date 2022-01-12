const latin2mon = require("./index");

test("хөрвүүлэлт шаардлагагүй", () => {
  expect(latin2mon("болор")).toBe("болор");
});

test("энгийн хөрвүүлэлт", () => {
  expect(latin2mon("nom")).toBe("ном");
  expect(latin2mon("eej")).toBe("ээж");
  expect(latin2mon("aav")).toBe("аав");
  expect(latin2mon("galuu")).toBe("галуу");
  expect(latin2mon("namuun")).toBe("намуун");
  expect(latin2mon("anar")).toBe("анар");
  expect(latin2mon("uul")).toBe("уул");
  // expect(latin2mon("golog")).toBe("гөлөг");
  expect(latin2mon("samar")).toBe("самар");
  expect(latin2mon("sansar")).toBe("сансар");
});

test("хос тэмдэгтийн хөрвүүлэлт", () => {
  expect(latin2mon("chono")).toBe("чоно");
  expect(latin2mon("shavar")).toBe("шавар");
  expect(latin2mon("khavar")).toBe("хавар");
  expect(latin2mon("tsamts")).toBe("цамц");
  expect(latin2mon("yoton")).toBe("ёотон");
  expect(latin2mon("yeven")).toBe("еэвэн");
  expect(latin2mon("niislel")).toBe("нийслэл");
  expect(latin2mon("nokhoi")).toBe("нохой");
  expect(latin2mon("nohoi")).toBe("нохой");
  expect(latin2mon("erveehei")).toBe("эрвээхэй");
  expect(latin2mon("egshig")).toBe("эгшиг");
});
