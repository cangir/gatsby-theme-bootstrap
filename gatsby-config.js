const config = require("./src/website-config.ts");

module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-root-import",
    "gatsby-plugin-typescript",
    "gatsby-plugin-catch-links",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "post",
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "",
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "media",
        path: `${__dirname}/static/media`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 690,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        openAnalyzer: false,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `500`, `600`]
          },
        ],
      },
    },
    "gatsby-plugin-netlify",
    "gatsby-plugin-netlify-cache",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-react-helmet-canonical-urls",
      options: {
        siteUrl: config.siteUrl,
      },
    },
    "gatsby-plugin-advanced-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: config.siteUrl,
        sitemap: `${config.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteTitle
                siteDescription
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              const { siteUrl } = site.siteMetadata;
              return allMdx.nodes.map(({ excerpt, html, frontmatter }) => {
                const { slug, date } = frontmatter;
                return Object.assign({}, frontmatter, {
                  description: excerpt,
                  date: date,
                  url: `${siteUrl}/posts/${slug}`,
                  guid: `${siteUrl}/posts/${slug}`,
                  custom_elements: [{ "content:encoded": html }],
                });
              });
            },
            query: `
              {
                allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
                  nodes {
                    excerpt
                    html
                    frontmatter {
                      title
                      date
                      slug
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Gatsby Starter skeleton blog RSS feed",
          },
        ],
      },
    },
    {
      // gatsby-plugin-manifest should be described before gatsby-plugin-offline
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: "hpp",
        description: config.siteDescription,
        Scope: "/",
        start_url: "/?utm_source=homescreen",
        background_color: "#ffffff",
        theme_color: "#090909",
        display: "standalone",
        icon: "./static/favicon.png",
      },
    },
    "gatsby-plugin-offline",
  ],
};
