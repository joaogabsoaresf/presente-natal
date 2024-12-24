/** @type {import('next').NextConfig} */

const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
        dirs: ['src'], // opcional: especificar diretórios para ignorar
      },
      typescript: {
        ignoreBuildErrors: true, // adiciona a opção de ignorar erros de TypeScript
      },
};

export default nextConfig;
