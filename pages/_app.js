import App from "next/app"
import Cookies from "universal-cookie"
import consts from "consts"
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)

  const cookies = new Cookies(appContext.ctx.req.headers.cookie)
  const password = cookies.get(consts.SiteReadCookie) ?? ""

  if (password === "慢走") {
    appProps.pageProps.hasReadPermission = true
  }

  return { ...appProps }
}

export default MyApp
