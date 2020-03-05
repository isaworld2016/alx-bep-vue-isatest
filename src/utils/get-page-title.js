import defaultSettings from '@/settings.js';

const title = defaultSettings.title || 'JTNet CMS Admin';

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
