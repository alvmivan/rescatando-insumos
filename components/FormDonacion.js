import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function FormDonacion() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [comunicacion, setComunicacion] = useState('WhatsApp');
  const [insumos, setInsumos] = useState('');
  const [ubicacion, setUbicacion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('donaciones')
      .insert([
        { nombre, telefono, comunicacion, insumos, ubicacion },
      ]);

    if (error) {
      console.error('Error al publicar la donación:', error);
    } else {
      setNombre('');
      setTelefono('');
      setComunicacion('WhatsApp');
      setInsumos('');
      setUbicacion('');
      alert('Donación publicada con éxito');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded">
      <div className="mb-2">
        <label className="block mb-1">Nombre o Apodo (opcional)</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-2">
        <label className="block mb-1">Teléfono de Contacto</label>
        <input
          type="text"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-2">
        <label className="block mb-1">Disponibilidad para Comunicación</label>
        <select
          value={comunicacion}
          onChange={(e) => setComunicacion(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="WhatsApp">WhatsApp</option>
          <option value="Llamada">Llamada</option>
          <option value="SMS">SMS</option>
        </select>
      </div>

      <div className="mb-2">
        <label className="block mb-1">Insumos a Donar</label>
        <textarea
          value={insumos}
          onChange={(e) => setInsumos(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-2">
        <label className="block mb-1">Ubicación (opcional)</label>
        <input
          type="text"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Publicar Donación
      </button>
    </form>
  );
}