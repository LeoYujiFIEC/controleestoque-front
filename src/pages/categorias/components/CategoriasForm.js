import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

function CategoriasForm({ categoria, setCategoria }) {
  const iconOptions = [
    { value: 'book', label: 'Book' },
    { value: 'star', label: 'Star' },
    { value: 'home', label: 'Home' },
  ];

  const [isIconDropdownOpen, setIsIconDropdownOpen] = useState(false);

  const handleIconSelect = (iconValue) => {
    setCategoria({ ...categoria, icone: iconValue });
    setIsIconDropdownOpen(false);
  };

  const getSelectedIconComponent = () => {
    const selectedOption = iconOptions.find((option) => option.value === categoria?.icone);
    return selectedOption ? selectedOption.label : 'Selecione um ícone';
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">NOVA CATEGORIA</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nome
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Nome da categoria"
          value={categoria?.nome}
          onChange={(e) => setCategoria({ ...categoria, nome: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Descrição
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Descrição da categoria"
          value={categoria?.descricao}
          onChange={(e) => setCategoria({ ...categoria, descricao: e.target.value })}
        />
      </div>
      <div className="mb-4 relative">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Ícone
        </label>
        <div
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
          onClick={() => setIsIconDropdownOpen(!isIconDropdownOpen)}
        >
          {getSelectedIconComponent()}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaChevronDown />
          </div>
        </div>
        {isIconDropdownOpen && (
          <div className="absolute mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {iconOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleIconSelect(option.value)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoriasForm;