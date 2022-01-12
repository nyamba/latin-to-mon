const CHARS_MAP = {
  q: "к",
  w: "в",
  e: "э",
  r: "р",
  t: "т",
  y: "у",
  u: "у",
  i: "и",
  o: "о",
  p: "ф",
  a: "а",
  s: "с",
  d: "д",
  f: "п",
  g: "г",
  h: "х",
  j: "ж",
  k: "к",
  l: "л",
  z: "з",
  // x: "",
  c: "с",
  v: "в",
  b: "б",
  n: "н",
  m: "м",
  ts: "ц",
  sh: "ш",
  ch: "ч",
  kh: "х",
  yu: "ю",
  yo: "ё",
  ye: "е",
};

function replaceAll(str, src, dest) {
  return str.replace(new RegExp(src, "g"), () => dest);
}

function replaceDoubles(value) {
  const doubles = [
    ["ch", "ч"],
    ["ts", "ц"],
    ["sh", "ш"],
    ["kh", "х"],
    ["yo", "ёо"],
    ["ye", "еэ"],
    ["ii", "ий"],
    ["oi", "ой"],
    ["ai", "ай"],
    ["ei", "эй"],
  ];

  let result = value;

  for (var i = 0; i < doubles.length; i++) {
    let pairs = doubles[i];
    result = replaceAll(result, pairs[0], pairs[1]);
  }

  return result;
}

function latin2mon(value) {
  let index = 0;
  let result = "";

  let conValue = replaceDoubles(value);
  let length = conValue.length;

  while (length > 0) {
    const char = conValue[index];
    const cyrChar = CHARS_MAP[char];
    if (cyrChar) result = result + cyrChar;
    else result = result + char;
    index++;
    length--;
  }

  return result;
}

module.exports = latin2mon;
