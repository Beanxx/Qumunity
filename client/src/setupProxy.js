import { createProxyMiddleware } from "http-proxy-middleware"

export default (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:4000",
      changeOrigin: true,
    })
  )
}
