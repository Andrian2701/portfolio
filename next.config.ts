import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  swcMinify: false,
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
