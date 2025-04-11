import React, { useState } from 'react';
import { FaEdit, FaTrash, FaBook, FaStar, FaHome } from 'react-icons/fa'; // Importe os ícones que você está usando
import ModalGenerico from '../../shared/components/ModalGenerico';
import CategoriasForm from './components/CategoriasForm';

function CategoriasPage() {
  const [isOpen, setOpen] = useState(false);
  const [categoria, setCategoria] = useState({
    id: '',
    nome: '',
    descricao: '',
    icone: '',
  });

  const [categorias, setCategorias] = useState([
    { id: 1, nome: 'Livros', descricao: 'Mostra livros', icone: 'book' },
    // Adicione mais categorias aqui, se necessário
  ]);

  const handleSubmit = () => {
    const novaCategoria = { ...categoria, id: categorias.length + 1 };
    setCategorias([...categorias, novaCategoria]);
    setCategoria({ id: '', nome: '', descricao: '', icone: '' });
    setOpen(false);
  };

  const getIconComponent = (icone) => {
    switch (icone) {
      case 'book':
        return <FaBook />;
      case 'star':
        return <FaStar />;
      case 'home':
        return <FaHome />;
      default:
        return null; 
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Adicionar
        </button>
      </div>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Icon
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Nome
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Descrição
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Editar
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Deletar
            </th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(categoria => (
            <tr key={categoria.id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {getIconComponent(categoria.icone)}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {categoria.nome}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {categoria.descricao}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <FaEdit className="text-blue-500 cursor-pointer" />
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <FaTrash className="text-red-500 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalGenerico
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        title="Criar Categoria"
        onSubmit={handleSubmit}
      >
        <CategoriasForm categoria={categoria} setCategoria={setCategoria} />
      </ModalGenerico>
    </div>
  );
}

export default CategoriasPage;