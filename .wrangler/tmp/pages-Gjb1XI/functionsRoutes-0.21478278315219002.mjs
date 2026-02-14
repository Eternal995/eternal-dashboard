import { onRequest as __api_records_js_onRequest } from "F:\\VSCode\\eternal-dashboard\\functions\\api\\records.js"

export const routes = [
    {
      routePath: "/api/records",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_records_js_onRequest],
    },
  ]