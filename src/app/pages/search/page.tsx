"use client"
import React, { useState } from 'react';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Traitez la soumission du formulaire ici, par exemple, en redirigeant ou en effectuant une recherche
    console.log('Search query:', query);
  };

  return (
    <main>
      <div className='text-center container pt-20 lg:pt-0 color-white pl-32 pr-32'><br/>
        <h1 className="text-center text-3xl pt-14">SEARCH OUR SITE</h1><br/>
        <form onSubmit={handleSubmit} className="flex items-center justify-center">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="search"
            className="border border-black p-2 color-white"
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2"
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            SUBMIT
          </button>
        </form>
        {/* Ajoutez ici vos composants ou contenu spécifiques pour la page search */}
      </div>
      <br/><br/><br/><br/>
    </main>
  );
};

export default Search;
