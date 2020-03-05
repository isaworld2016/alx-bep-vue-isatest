import { mapActions, mapMutations } from 'vuex';

export default {
  ...mapActions('Alert', ['alert']),
  ...mapMutations('Options', ['setUserInfo', 'clearUserInfo']),

  /** 로그아웃 */
  logout() {
    this.$store.commit('Options/clearUserInfo');
    console.log('### logout ###');
    // 로그인폼(개발)
    this.$router.replace('/login');
  },

  i18n(messageId, ...values) {
    const message = this.$store.getters['I18n/getMessageById'](messageId);
    if (message) {
      const text = (() => {
        switch (this.msgLangCd) {
          case 'en_US':
            return message.msgEnText;
          default:
            return message.msgKoText;
        }
      })();

      return text.replace(
        /{{\$(\d*)}}/g,
        (match, index) => values[index - 1] || match
      );
    }
    // console.warn(`i18n: message not found: ${messageId}`);

    const suggestList = this.$store.getters['I18n/findMessage'](messageId);
    if (suggestList.length) {
      suggestList.forEach(item =>
        console.log(`i18n: suggestion ${item.msgId} : ${item.msgKoText}`)
      );
    }
    return messageId;
  },

  numberFormat(value) {
    if (typeof value !== 'number') return value;
    return value.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
  }

  /** CSV 출력 (데이터, 파일명, 구분자) */
  /**
   * CSV 출력
   * @param {Array} dataList 데이터
   * @param {string} fileName 저장 파일명
   * @param {string} delimeter 구분자
   * @param {object} title 타이틀셋 { [column1]:[title1], [column2]:[title2] }
   */
  // csvExport(dataList, title = {}, { fileName = 'export', delimeter = ',' }) {
  //   /** 데이터를 정해진 타이틀로 재조합 */
  //   const csvArray = [];
  //   dataList.forEach(item1 => {
  //     const csvObj = {};
  //     Object.entries(item1).forEach(item2 => {
  //       const [key, value] = item2;
  //       if (Object.keys(title).indexOf(key) > -1) {
  //         csvObj[title[key]] = _.isObject(value) ? value.value : value;
  //         csvObj[title[key]] = _.isNumber(csvObj[title[key]])
  //           ? `"${csvObj[title[key]]}"`
  //           : `"${(csvObj[title[key]] || '').toString().replace(/\\"/g, "'")}"`;
  //       }
  //     });
  //     csvArray.push(csvObj);
  //   });

  //   const csvData = [
  //     Object.keys(csvArray[0]).join(delimeter),
  //     ...csvArray.map(item => Object.values(item).join(delimeter))
  //   ]
  //     .join('\n')
  //     .replace(/(^\[)|(\]$)/gm, '');

  //   // IE 10+
  //   if (navigator.msSaveBlob) {
  //     const blob = new Blob(['\uFEFF', csvData], {
  //       type: 'text/csv;charset=utf-8;'
  //     });
  //     navigator.msSaveBlob(blob, `${fileName}.csv`);
  //   } else if (navigator.appName === 'Microsoft Internet Explorer') {
  //     const frame = document.createElement('iframe');
  //     document.body.appendChild(frame);

  //     frame.contentWindow.document.open('text/csv;charset=utf-8;', 'replace');
  //     frame.contentWindow.document.write(`sep=,\r\n${csvData}`);
  //     frame.contentWindow.document.close();
  //     frame.contentWindow.focus();
  //     frame.contentWindow.document.execCommand(
  //       'SaveAs',
  //       false,
  //       `${fileName}.csv`
  //     );

  //     document.body.removeChild(frame);
  //   } else {
  //     const blob = new Blob(['\uFEFF', csvData], {
  //       type: 'text/csv;charset=utf-8;'
  //     });
  //     const link = document.createElement('a');
  //     // feature detection
  //     if (link.download !== undefined) {
  //       // Browsers that support HTML5 download attribute
  //       const url = URL.createObjectURL(blob);
  //       link.setAttribute('href', url);
  //       link.setAttribute('download', `${fileName}.csv`);
  //       link.style.visibility = 'hidden';
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //     }
  //   }
  // }
};
