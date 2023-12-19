/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['antd', '/@ant-design', '@ant-design/icons', 'rc-util', 'rc-pagination', 'rc-picker', '@mdxeditor/editor', 'react-diff-view'],
  reactStrictMode: true,
  webpack: (config) => {
    // this will override the experiments
    config.experiments = { ...config.experiments, topLevelAwait: true };
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true
    return config;
  },
}


module.exports = nextConfig
