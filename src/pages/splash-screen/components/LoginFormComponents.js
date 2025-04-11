import React from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdLock } from 'react-icons/md';

const LoginForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 10 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-sm mx-auto p-4 bg-white rounded shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <div className="relative">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Seu email"
          />
          <MdEmail className="absolute top-3 left-3 text-gray-500" />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Senha
        </label>
        <div className="relative">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Sua senha"
          />
          <MdLock className="absolute top-3 left-3 text-gray-500" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Entrar
        </button>
      </div>
    </motion.div>
  );
};

export default LoginForm;