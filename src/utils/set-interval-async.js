// export const setIntervalAsync = (fn, ms) => {
//   fn().then(() => {
//     setTimeout(() => setIntervalAsync(fn, ms), ms);
//   });
// };

const intervalAsync = [];

const runIntervalAsync = async (cb, interval, intervalIndex) => {
  await cb();
  if (intervalAsync[intervalIndex]) {
    setTimeout(() => runIntervalAsync(cb, interval, intervalIndex), interval);
  }
};

export const setIntervalAsync = (cb, interval) => {
  if (cb && typeof cb === 'function') {
    const intervalIndex = intervalAsync.length;
    intervalAsync.push(true);
    runIntervalAsync(cb, interval, intervalIndex);
    return intervalIndex;
  } else {
    throw new Error('반복 함수 실행에서 오류가 발생하였습니다.');
  }
};

export const clearIntervalAsync = intervalIndex => {
  if (intervalAsync[intervalIndex]) {
    intervalAsync[intervalIndex] = false;
  }
};
