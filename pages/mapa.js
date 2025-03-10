import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import Mapa from '../components/Mapa';

export default function MapaPage() {
  const [donaciones, setDonaciones] = useState([]);
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    fetchDonaciones();
    fetchServicios();
  }, []);

  async function fetchDonaciones() {
    const { data } = await supabase
      .from('donaciones')
      .select('*');
    setDonaciones(data);
  }

  async function fetchServicios() {
    const { data } = await supabase
      .from('servicios')
      .select('*');
    setServicios(data);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Mapa de Donaciones y Servicios</h1>
      <Mapa donaciones={donaciones} servicios={servicios} />
    </div>
  );
}