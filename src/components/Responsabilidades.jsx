import React from 'react';
import ReactMarkdown from 'react-markdown';
import contenidoResponsabilidades from '../../doc_verseb/05_responsabilidades_informe_verseb.md?raw';

const Responsabilidades = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <div className="prose prose-blue max-w-none">
        <ReactMarkdown>{contenidoResponsabilidades}</ReactMarkdown>
      </div>
    </section>
  );
};

export default Responsabilidades;