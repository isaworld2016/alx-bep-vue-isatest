import moment from 'moment';
import store from '@/store';

export default {
  numberFormat: value => {
    if (typeof value !== 'number') return value;
    return value.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
  },
  dateFormat: (value, format = 'YYYY-MM-DD') => moment(value).format(format),
  i18n: (messageId, ...values) => {
    const message = store.getters['I18n/getMessageById'](messageId);
    const { msgLangCd } = store.getters['Options/all'];
    if (message) {
      const text = (() => {
        switch (msgLangCd) {
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

    const suggestList = store.getters['I18n/findMessage'](messageId);
    if (suggestList.length) {
      suggestList.forEach(item =>
        console.log(`i18n: suggestion ${item.msgId} : ${item.msgKoText}`)
      );
    }

    return messageId;
  }
};
