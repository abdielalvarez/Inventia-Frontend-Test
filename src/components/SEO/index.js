import Head from 'next/head';

const SEO = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Puedes agregar más metadatos aquí si es necesario */}
    </Head>
  );
};

export default SEO;