import store from '@/store';
import router from '@/router/index';

export default function(to, from, next) {
  window.scrollTo(0, 0);
  if (!store.getters['Options/isLogin'] && to.path !== '/login') {
    return;
  }

  // const sidebar = store.getters['Sidebar/sidebar'];
  // console.log(sidebar.opened);

  // 관리자 권한이 없으면 권한없음 페이지로 보낸다.
  const pageInfo = router.options.routes.filter(
    item => item.meta && item.meta.layout === 'admin'
  );
  const menuList = store.getters['CommonCode/getMenuList']();

  pageInfo.find(item => {
    if (item.path === to.path) {
      if (!item.hidden) {
        if (menuList && !menuList.find(item => !to.path.indexOf(item.path))) {
          next('/notAuthority');
          return;
        }
      }
      return;
    }
  });

  const menu = menuList.find(item => to.path === item.path);

  if (!!menu && menu.menuLvl === 1) {
    const childMenu = menuList.find(
      item => item.lvl === 2 && !item.path.indexOf(to.path)
    );
    next(childMenu.path);
    return;
  }

  next();
}
