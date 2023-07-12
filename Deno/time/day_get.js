//現在時刻をGithub Actionsで取得するソースコード

let dt = new Date();

let ts = dt.getTime();

let ts_after = ts + (1000 * 60 * 60 * 9);

let date = new Date(ts_after);

console.log(date);

const year = date.getFullYear();

const month = date.getMonth() + 1;

const day = date.getDate();

const hour = date.getHours();

const minute = date.getMinutes();


const now_day = year + "年" + month + "月" + day + "日" + hour + "時" + minute + "分";


const write = Deno.writeTextFile("./data/lastupdate.json", '[{"lastupdate":' + '"' + now_day + '"}]');