/****** ascii A-Z  *******/

const minASCII = 65;
const maxASCII = 90;

const randomChar = () => {
  return String.fromCharCode(
    Math.floor(Math.random() * (maxASCII - minASCII) + minASCII)
  );
};

const randomStr = (length = 4) => {
  return new Array(length)
    .fill(undefined)
    .map((_) => randomChar())
    .join("");
};

const main = () => {
  const answer = randomStr();
  console.log("คำตอบ :: ", answer);

  const results = [];
  for (let i = 1; i <= Infinity; i++) {
    const str = randomStr();
    const arrStr = [...new Set(str.split(""))];

    let totlCount = 0;
    for (const char of arrStr) {
      if (answer.includes(char)) {
        totlCount++;
      }
    }
    let positionCount = 0;
    for (const [index, char] of str.split("").entries()) {
      if (
        answer.split("").find((item, _index) => item == char && index == _index)
      ) {
        positionCount++;
      }
    }
    results.push({ str, totlCount, positionCount, round: i });
    if (answer == str) {
      break;
    }
  }

  console.log("----คำตอบ----สุ่ม----ถูก/ทั้งหมด----ถูกตำเเหน่ง----ครั้งที่");
  for (const result of results) {
    console.log(
      `----${answer}----${result.str}------${result.totlCount}------------${result.positionCount}---------${result.round}`
    );
  }

  return results;
};

main();
