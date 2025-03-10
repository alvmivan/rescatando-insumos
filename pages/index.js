import Head from 'next/head';
import ListadoInsumos from '../components/ListadoInsumos';
import FormDonacion from '../components/FormDonacion';
import FormServicio from '../components/FormServicio';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rescatando Insumos</title>
        <meta name="description" content="Conecta donantes con quienes necesitan insumos en Bahía Blanca." />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Rescatando Insumos</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Insumos Necesarios</h2>
          <ListadoInsumos />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Ofrecer Donaciones</h2>
          <FormDonacion />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Ofrecer Servicios</h2>
          <FormServicio />
        </section>
      </main>
    </div>
  );
}