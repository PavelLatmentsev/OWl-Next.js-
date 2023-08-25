// /** @type {import('next').NextConfig} */
// // const nextConfig = {}

// // module.exports = nextConfig

// module.exports = {
//   images: {
//     domains:["OWL-NEXT"]
//   },
//     webpack(config) {
//       config.module.rules.push({
//         loader: '@svgr/webpack',
//         issuer: /\.[jt]sx?$/,
//         options:{
//           svgo:true,
//           svgoConfig: {
//             plugins:[{
//               name:"preset-default",
//               params: {
//                 override: {
//                   removeViewBox:false
//                 }
//               }
//             }],
//           },
//           titleProp:true,
//         },
//     test:/\.svg$/,
//     // use: ['@svgr/webpack'],
//     });
//     return config;
//     },
//     };

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
  
    return config;
  }};