import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@personal/module-layout",
  app: () => System.import("@personal/module-layout"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@personal/module-todo",
  app: () => System.import("@personal/module-todo"),
  activeWhen: ["/todo"]
});

start({
  urlRerouteOnly: true,
});
