import HeaderComponent from "./components/Header";
import ShapeDivider from "./components/ShapeDivider";
import { useContext, useEffect } from "react";
import { GlobalProvider } from "./context/GlobalContext";
import logo from './assets/logo.png';

function App() {
  useEffect(() => {
    if (!window.ethereum) {
      alert('Please install MetaMask');
    }

  }, []);
  return (
    <GlobalProvider>
      <div className="container mx-auto text-white">
        <div className="max-w-xs mx-auto p-2"><img src={logo} alt="Shera tokens" /></div>
        <div className="max-w-5xl mx-auto p-8">
          <div className="mb-4">
            <h1 className="text-3xl text-center text-yellow-500 font-bold">Shera Token v1 to v2 migration app</h1>
          </div>
          <div className="mb-11">
            <p className="text-center text-xl">By using the Shera Token migration app, you will easily swap your Shera Token to the new updated version. The swap will be made directly from your wallet, using the secure connection.</p>
          </div>
          <div className="text-yellow-500">
            <span className="text-2xl">Shera Token migration information:</span>
            <ul className="sm:indent-10 list-disc list-inside text-white mt-4 text-base sm:text-xl">
              <li className="mb-4">The swap will give you the same amount of Shera Tokens v2 for all Shera Tokens v1</li>
              <li className="mb-4">The swap is mandatory and irreversible.</li>
              <li className="mb-4">All of your Shera v1 tokens need to be swapped - smaller swaps are disallowed.</li>
              <li className="mb-4">While swapping, you will perform two transactions and pay a fee in ETH.</li>
            </ul>
          </div>
          <div className="mx-auto">
            <button className="btn-grad">Let's swap my tokens</button>
          </div>
        </div>

      </div>
    </GlobalProvider>
  );
}

export default App;


