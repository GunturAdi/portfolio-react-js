import React, { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Beranda from './components/Beranda';
import './App.css';

function App() {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    setPortfolios([
      {
        title: 'membangun website kota bandung',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, porro.',
        tech: 'teknologi yang digunakan',
        imageUrl:
          'https://lh3.googleusercontent.com/yW6X9JPhtMqiLFXFRgHOd2FM9FMy0RAUKt3Q3VfJzaBbaXeK1A99LN3U5RqYV9DfodDBGLFDcZ5CTiipV01XHL-MEzEdpgmHK8R4ZtDv'
      },
      {
        title: 'membangun aplikasi buku novel',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, porro.',
        tech: 'teknologi yang digunakan',
        imageUrl:
          'https://lh3.googleusercontent.com/aH_47FDvVY7IUpuJayH16CY60Q4q6X8zTE1uuq2M3irqpgh-41xG0TdIQVglR4IARzDcQsmvifJ7PeADqdYrvn52w1_4EUGTQfBdXQ'
      },
      {
        title: 'membangun aplikasi buku catatan',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, porro.',
        tech: 'teknologi yang digunakan',
        imageUrl:
          'https://lh3.googleusercontent.com/_nrOHufWBoExl_Hjua1xEjNrMKgaX2awcEUeGs9VreBaefWRgut2WSj7qgkKHVxdVzLPEC9bgvpNWyDUMm1M_shCOi6gg-B3GO1VBkzSPA'
      },
      {
        title: 'membangun website untuk belajar',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, porro.',
        tech: 'teknologi yang digunakan',
        imageUrl:
          'https://lh3.googleusercontent.com/CHARXEquRoawKEOpnXMUuRzueVcGeH15e_-oPQURNjnbgYdCYWo2o7k963q73FxNI8elgq3m4aO4NvFvEeXDnhoSoWPQJgbjGG4SVpjYpg'
      },
      {
        title: 'membangun website catatan pembelian',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, porro.',
        tech: 'teknologi yang digunakan',
        imageUrl:
          'https://lh3.googleusercontent.com/y9-mK0fjlAzGwG0VkM9N7oL0njcgI-JtcafXFp_iL6PzvN95F2KkO8BAMYe84POpYvkMFO_ENSf-bZHD82wJWu9pnVmNR_fb3pcki60'
      }
    ]);
  }, []);

  return (
    <div>
      <Navbar />
      <Beranda portfolios={portfolios} />
    </div>
  );
}

export default App;
