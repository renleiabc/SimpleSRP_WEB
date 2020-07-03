/*
 * @Author: aFei
 * @Date: 2018-07-10 16:16:50
 */
/*
 * @LastEditors: renlei
 * @LastEditTime: 2020-06-03 14:17:23
 */
export default {
  name: "storageManagement",
  path: "storageManagement",
  component: page => require(["@/views/storageManagement/index"], page),
  redirect: to => {
    let navInformation = JSON.parse(sessionStorage.getItem("navInformation"));
    navInformation = navInformation.filter(function(item) {
      return item.linkName === to.name;
    })[0];
    return navInformation.children[0].path;
  },
  meta: {
    title: "views.nav.storageManagement",
    icon: "icon-cunchuchi"
  },
  children: [
    {
      name: "announcement",
      path: "announcement",
      component: page =>
        require(["@/views/storageManagement/announcement"], page),
      meta: {
        title: "views.nav.announcement"
      }
    },
    {
      name: "storageSpaces",
      path: "storageSpaces",
      component: page =>
        require(["@/views/storageManagement/storageSpaces"], page),
      meta: {
        title: "views.nav.storageSpaces"
      }
    },
    {
      name: "cluster",
      path: "cluster",
      component: page => require(["@/views/storageManagement/cluster"], page),
      meta: {
        title: "views.nav.cluster"
      }
    },
    {
      name: "pubStorageDetail",
      path: "pubStorageDetail",
      props: true,
      component: page =>
        require(["@/views/storageManagement/storageDetail"], page),
      meta: {
        title: "views.nav.storageDetail",
        show: false,
        markName: "announcement"
      }
    },
    {
      name: "perStorageDetail",
      path: "perStorageDetail",
      props: true,
      component: page =>
        require(["@/views/storageManagement/storageDetail"], page),
      meta: {
        title: "views.nav.storageDetail",
        show: false,
        markName: "personalManagement"
      }
    },
    {
      name: "storagePersonalLog",
      path: "storagePersonalLog",
      props: true,
      component: page =>
        require(["@/views/storageManagement/storagePersonalLog"], page),
      meta: {
        title: "views.nav.btnPersonalManege",
        show: false,
        markName: "personalManagement"
      }
    },
    {
      name: "storageProjectLog",
      path: "storageProjectLog",
      props: true,
      component: page =>
        require(["@/views/storageManagement/storageProjectLog"], page),
      meta: {
        title: "views.nav.btnProjectManege",
        show: false,
        markName: "projectManagement"
      }
    },
    {
      name: "proStorageDetail",
      path: "proStorageDetail",
      props: true,
      component: page =>
        require(["@/views/storageManagement/storageDetail"], page),
      meta: {
        title: "views.nav.storageDetail",
        show: false,
        markName: "projectManagement"
      }
    },
    {
      name: "fileManagement",
      path: "fileManagement",
      props: true,
      component: page =>
        require(["@/views/storageManagement/fileManagement"], page),
      meta: {
        title: "views.nav.fileManagement",
        show: false
      }
    },
    {
      name: "projectManagement",
      path: "projectManagement",
      props: true,
      component: page =>
        require(["@/views/storageManagement/projectManagement"], page),
      meta: {
        title: "views.nav.projectManagement"
      }
    },
    {
      name: "personalManagement",
      path: "personalManagement",
      props: true,
      component: page =>
        require(["@/views/storageManagement/personalManagement"], page),
      meta: {
        title: "views.nav.personalManagement"
      }
    }
  ]
};
