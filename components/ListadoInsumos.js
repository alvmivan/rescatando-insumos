import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function ListadoInsumos() {
  const [insumos, setInsumos] = useState([]);

  useEffect(() => {
    fetchInsumos();
  }, []);

  async function fetchInsumos() {
    const { data } = await supabase
      .from('insumos_necesarios')
      .select('*');
    setInsumos(data);
  }

  return (
    <ul>
      {insumos.map((insumo) => (
        <li key={insumo.id} className="mb-2 p-2 border rounded">
          {insumo.nombre}
        </li>
      ))}
    </ul>
  );
}