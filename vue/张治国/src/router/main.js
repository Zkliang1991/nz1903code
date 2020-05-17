export default {
  path: "/main",
  name: "main",
  redirect: {
    name: "recommend"
  },
  component: () => import("@/views/main"),
  children: [
    {
      path: "ranking",
      name: "ranking",
      component: () => import("@/views/main/Ranking")
    },
    {
      path: "recommend",
      name: "recommend",
      component: () => import("@/views/main/Recommend")
    },
    {
      path: "*",
      redirect: {
        name: "recommend"
      }
    },
  ]
}
