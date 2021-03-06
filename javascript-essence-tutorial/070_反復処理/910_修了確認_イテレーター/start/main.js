/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというイテレーターを生成する関数を作成しましょう。
 * 
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 * 
 * 以下のように実行した場合には
 * const it = genStep(4, 10, 2);
 * let a = it.next();
 * 
 * while(!a.done) {
 *  console.log(a.value); -> 4, 6, 8, 10
 *  a = it.next();
 * }
 * 
 * の値が順番にコンソールに表示されます。
 */


// function* genStep(min, max, step){
//   let num = min;
//   while(num < max) {
//     yield num++;
//   }
//   return;
//   // if (num === max){
//   //   // 終了条件
//   //   return;
//   // } else {
//   //   // 継続条件
//   //   console.log(num);
//   //   new_num = num + step;
//   // }
// }

function genStep(min = 4, max = 10, step = 2) {
  let i = min - step;
  return {
    next() {
      i += step;
      if(i > max) {
        return {
          done: true
        }
      } else {
        return {
          done: false,
          value: i
        }
      }
    }
  }
}

const it = genStep();
let a = it.next();

while(!a.done) {
  console.log(a.value);
  a = it.next();
}
