if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
module.exports = {
  /* other settings */
  plugins: [
    /* other plugins */
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    }
  ]
}