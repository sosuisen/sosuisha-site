import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/tanuki.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Unplugged Tanuki"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="https://gitddb.com/">GitDocumentDB</Link> <br />
      <Link to="https://github.com/sosuisen/">Our GitHub</Link>
    </p>
  </Layout>
)

export default IndexPage
