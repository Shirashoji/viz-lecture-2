// const matchData = [
//   {
//     team: "北海道コンサドーレ札幌",
//     win: [
//       1, 1, 1, 1, 1, 1, 0, 3, 1, 3, 1, 3, 0, 3, 0, 0, 0, 3, 0, 0, 1, 0, 1, 3, 0,
//       0, 1, 3, 3, 1, 3, 0, 3, 3,
//     ],
//   },
//   {
//     team: "鹿島アントラーズ",
//     win: [
//       3, 0, 3, 3, 3, 3, 3, 0, 1, 3, 3, 0, 3, 1, 1, 0, 3, 1, 3, 1, 1, 1, 0, 0, 3,
//       1, 0, 1, 1, 1, 0, 1, 3, 1,
//     ],
//   },
//   {
//     team: "浦和レッズ",
//     win: [
//       0, 0, 3, 0, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 3, 3, 1, 1, 3, 3, 3, 0, 3,
//       0, 1, 1, 3, 1, 0, 3, 0, 1,
//     ],
//   },
//   {
//     team: "柏レイソル",
//     win: [
//       3, 3, 0, 3, 1, 3, 3, 0, 0, 0, 3, 1, 0, 1, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 0,
//       1, 0, 1, 0, 1, 1, 1, 0, 0,
//     ],
//   },
//   {
//     team: "FC東京",
//     win: [
//       0, 3, 3, 3, 0, 3, 1, 1, 3, 0, 0, 0, 1, 3, 3, 0, 0, 1, 3, 0, 3, 3, 0, 3, 3,
//       0, 1, 1, 1, 3, 3, 0, 0, 0,
//     ],
//   },
//   {
//     team: "川崎フロンターレ",
//     win: [
//       3, 0, 3, 3, 1, 3, 3, 0, 1, 3, 3, 3, 3, 1, 0, 0, 3, 1, 0, 3, 0, 3, 3, 3, 3,
//       0, 3, 1, 1, 0, 3, 3, 3, 3,
//     ],
//   },
//   {
//     team: "横浜F・マリノス",
//     win: [
//       1, 3, 0, 3, 3, 1, 1, 3, 0, 3, 3, 3, 1, 0, 3, 3, 3, 3, 3, 3, 1, 1, 3, 0, 1,
//       3, 3, 3, 1, 3, 0, 0, 3, 3,
//     ],
//   },
//   {
//     team: "湘南ベルマーレ",
//     win: [
//       0, 1, 0, 1, 0, 0, 0, 1, 3, 0, 0, 1, 0, 3, 3, 0, 3, 3, 1, 3, 1, 1, 0, 0, 1,
//       3, 0, 1, 1, 1, 3, 0, 3, 3,
//     ],
//   },
//   {
//     team: "清水エスパルス",
//     win: [
//       1, 3, 0, 0, 1, 0, 1, 1, 1, 1, 3, 0, 1, 0, 0, 0, 3, 1, 0, 0, 3, 0, 1, 3, 3,
//       1, 3, 0, 1, 0, 0, 1, 0, 0,
//     ],
//   },
//   {
//     team: "ジュビロ磐田",
//     win: [
//       1, 0, 3, 1, 0, 0, 1, 1, 1, 3, 0, 0, 3, 0, 1, 0, 3, 1, 0, 0, 0, 0, 3, 0, 0,
//       0, 1, 0, 1, 1, 3, 1, 0, 1,
//     ],
//   },
//   {
//     team: "名古屋グランパス",
//     win: [
//       3, 1, 0, 1, 0, 3, 0, 1, 1, 0, 1, 0, 3, 3, 3, 0, 0, 1, 1, 3, 0, 1, 3, 1, 3,
//       0, 3, 1, 1, 1, 0, 1, 3, 3,
//     ],
//   },
//   {
//     team: "京都サンガF.C.",
//     win: [
//       3, 1, 0, 1, 0, 3, 1, 3, 3, 0, 1, 0, 1, 0, 0, 3, 0, 0, 3, 1, 0, 1, 1, 0, 0,
//       3, 1, 0, 0, 3, 1, 0, 1, 1,
//     ],
//   },
//   {
//     team: "ガンバ大阪",
//     win: [
//       0, 3, 1, 1, 0, 3, 1, 1, 0, 0, 1, 3, 3, 0, 0, 0, 0, 3, 1, 0, 0, 0, 1, 0, 0,
//       3, 3, 0, 1, 0, 1, 3, 3, 1,
//     ],
//   },
//   {
//     team: "セレッソ大阪",
//     win: [
//       1, 1, 0, 3, 1, 3, 0, 3, 1, 0, 1, 3, 0, 3, 3, 3, 0, 1, 3, 1, 1, 3, 3, 3, 0,
//       0, 3, 3, 1, 1, 1, 0, 1, 0,
//     ],
//   },
//   {
//     team: "ヴィッセル神戸",
//     win: [
//       0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 3, 0, 0, 1, 3, 0, 0, 3, 3, 3, 1, 0, 0, 3,
//       0, 1, 3, 3, 3, 3, 3, 0, 0,
//     ],
//   },
//   {
//     team: "サンフレッチェ広島",
//     win: [
//       1, 1, 1, 0, 0, 3, 3, 3, 1, 1, 0, 3, 1, 3, 3, 3, 3, 0, 3, 0, 1, 1, 0, 3, 3,
//       3, 3, 3, 0, 3, 0, 3, 3, 1,
//     ],
//   },
//   {
//     team: "アビスパ福岡",
//     win: [
//       1, 1, 1, 0, 3, 1, 0, 0, 1, 3, 3, 1, 0, 3, 0, 1, 0, 0, 1, 3, 3, 1, 0, 0, 0,
//       1, 0, 0, 0, 3, 0, 3, 3, 1,
//     ],
//   },
//   {
//     team: "サガン鳥栖",
//     win: [
//       1, 1, 1, 3, 1, 1, 3, 0, 1, 3, 1, 3, 0, 1, 1, 3, 0, 3, 0, 0, 1, 1, 3, 1, 3,
//       1, 0, 3, 0, 1, 0, 0, 0, 1,
//     ],
//   },
// ];

function convertData(input, sum = false) {
  const length = input[0].win.length;
  const teamLength = input.length;
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push({ label: `${i}` });
    for (let j = 0; j < teamLength; j++) {
      if (sum && i !== 0) {
        arr[i][input[j].team] = arr[i - 1][input[j].team] + input[j].win[i];
      } else {
        arr[i][input[j].team] = input[j].win[i];
      }
    }
  }
  return arr;
}
// const data = convertData(matchData, false);
// console.log(data);
