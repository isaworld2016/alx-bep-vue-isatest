'use strict';
/**
 * 콤보박스 처리
 * 객체에서 key값 추출하는 함수
 */
export function extractValues(mappings) {
  const params = [];
  for (let i = 0; i < mappings.length; i++) {
    params.push(mappings[i].codeId);
  }
  return params;
}

/**
 * 객체에서 key로 value을 반환하는 함수, 콤보박스에서 사용
 */
export function lookupValue(mappings, key) {
  for (let i = 0; i < mappings.length; i++) {
    if (mappings[i].codeId === key) {
      return mappings[i].codeName;
    }
  }
  return '';
}

/**
 * 객체에서 vaue로 key를 반환하는 함수, 콤보박스에서 사용
 */
export function lookupKey(mappings, name) {
  for (let i = 0; i < mappings.length; i++) {
    if (mappings[i].codeName === name) {
      return mappings[i].codeId;
    }
  }
  return '';
}

/**
 * cellRenderer 등에서 사용하기 위한 것으로
 * 배열로 코드를 받아서 node의 값과 일치하는 value를 반환한다.
 */
export function getCodeValue(codes, nodeData) {
  if (!codes) return ' - ';
  for (let i = 0; i < codes.length; i++) {
    if (nodeData.value === codes[i].codeId) {
      return codes[i].codeName;
    }
  }
  return ' - ';
}

/**
 * 객체에서 키를 확인하여 필터링하고 리턴한다
 */
export function filterObjectByKey(obj, predicate) {
  return Object.keys(obj)
    .filter(predicate)
    .reduce((_obj, key) => {
      _obj[key] = obj[key];
      return _obj;
    }, {});
}

/**
 * 객체에서 값을 확인하여 필터링하고 리턴한다
 */
export function filterObjectKeyByValue(obj, predicate) {
  return Object.fromEntries(Object.entries(obj).filter(predicate));
}

/**
 * file 을 인자로 arrayBuffer 객체를 리턴한다.
 */
export function readUploadedFileAsArrayBuffer(inputFile) {
  const temporaryFileReader = new FileReader();

  return new Promise((resolve, reject) => {
    temporaryFileReader.onload = () => {
      resolve(temporaryFileReader.result);
    };
    temporaryFileReader.readAsArrayBuffer(inputFile);
  });
}
