import type { NextConfig } from "next";
require('dotenv').config();
module.exports ={
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY
  }
}
const nextConfig: NextConfig = {
  /* config options here */
};


export default nextConfig;

