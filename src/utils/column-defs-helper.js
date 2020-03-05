/**
 * 그리드에 렌더될 데이터 포매터 헬퍼
 */

import moment from 'moment';

// 데이터가 없을 경우 undefined 방지
const isEmpty = param =>
  typeof param.value === 'undefined' ||
  param.value === null ||
  param.value.toString().trim() === '';

// 통화 포매터
const currencyFormatter = param => {
  if (isEmpty(param)) {
    return;
  }
  return param.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// 날짜 포매터
const dateFormatter = param => {
  if (isEmpty(param)) {
    return;
  }
  return moment(param.value).format('YYYY-MM-DD');
};

// 시각 포매터
const timeFormatter = param => {
  if (isEmpty(param)) {
    return;
  }
  return moment(param.value, 'hmmss').format('HH:mm:ss');
};

// 경과 시간 포매터
const rptTmFormatter = param => {
  if (isEmpty(param)) {
    return;
  }
  return moment(param.value.substring(0, 6), 'hmmss').format('HH:mm:ss');
  // return moment.utc(parseInt(param.value)).format('HH:mm:ss');
};

// 전화번호 포매터
const phoneFormatter = param => {
  if (isEmpty(param)) {
    return;
  }

  const value = param.value.toString().trim();

  let result;

  if (value.length === 9) {
    result = value.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3');
  } else if (value.trim().length === 10 && value.slice(2) === '02') {
    result = value.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
  } else if (value.trim().length === 10 && value.slice(2) !== '02') {
    result = value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  } else if (value.length === 11) {
    result = value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  }

  return result;
};

// 일시 포매터
const dateTimeFormatter = param => {
  if (isEmpty(param)) {
    return;
  }
  return moment(param.value, 'YYYYMMDDHHmmss').format('YYYY-MM-DD, hh:mm:ss');
};

// 확률 포매터
const ratFormatter = param => {
  if (isEmpty(param)) {
    return;
  }
  return param.value * 0.01;
};

// 카드 번호 포매터
const cardNoFormatter = param => {
  if (isEmpty(param)) {
    return;
  }
  return param.value.trim().replace(/(\d)(?=(?:\d{4})+(?!\d))/g, '$1-');
};

// 포메터 헬퍼 함수
export const valueFormatterHelper = param => {
  let value;

  if (
    param.type === 'NUMBER' &&
    (param.field.toString().slice(-3) === 'Amt' ||
      param.field.toString().slice(-4) === 'Cmms')
  ) {
    value = currencyFormatter;
  } else if (
    param.type === 'CHAR' &&
    param.field.toString().slice(-2) === 'Dt'
  ) {
    value = dateFormatter;
  } else if (
    param.type === 'CHAR' &&
    param.field.toString().slice(-2) === 'Tm'
  ) {
    value = timeFormatter;
  } else if (param.field.toString().slice(-3, -1) === 'Tm') {
    value = rptTmFormatter;
  } else if (param.field.toString().slice(-5) === 'TelNo') {
    value = phoneFormatter;
  } else if (param.field.toString().slice(-3) === 'Dtm') {
    value = dateTimeFormatter;
  } else if (param.field.toString().slice(-3) === 'Rat') {
    value = ratFormatter;
  } else if (
    param.field.toString().slice(-6) === 'cardNo' ||
    param.field.toString().slice(-6) === 'CardNo'
  ) {
    value = cardNoFormatter;
  } else {
    value = false;
  }

  return value;
};

// 문자열 정렬(좌,중,우) 헬퍼
export const textAlignHelper = param => {
  let result;

  if (
    param.length < 11 ||
    param.field.toString().slice(-2) === 'Dt' ||
    param.field.toString().slice(-2) === 'Tm' ||
    param.field.toString().slice(-3) === 'Dtm' ||
    param.field.toString().slice(-2) === 'YN'
  ) {
    result = 'center';
  } else if (
    param.type === 'NUMBER' ||
    param.field.toString().slice(-3) === 'Amt' ||
    param.field.toString().slice(-4) === 'Cmms'
  ) {
    result = 'right';
  } else {
    result = 'left';
  }

  return result;
};
