# gatsby-typegen-remark-expo-embed

Makes it easy to link to Sketch embeds using image syntax: `![sketch](H1f3LPkhg)`

## Install

`npm install --save gatsby-typegen-remark-expo-embed`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-typegen-remark`,
    options: {
      plugins: [
        `gatsby-typegen-remark-expo-embed`,
      ]
    }
  }
]
```
