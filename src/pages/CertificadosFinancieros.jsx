import React from 'react';

import { FiSend } from 'react-icons/fi';
import Navigation from '../components/layout/NavigationModern';
import { Link } from 'react-router-dom';
const CertificadosFinancieros = () => (
  <>
    <Navigation />
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-coop-green/10 to-coop-blue/10 py-10 px-2">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
      <h2 className="text-3xl font-extrabold text-coop-green mb-2">Certificados Financieros</h2>
      <p className="text-gray-600 mb-8">Invierte en certificados financieros y haz crecer tu dinero de forma segura. Para solicitar este producto, haz clic en el botón:</p>
      <Link to="/solicitud-online" className="inline-flex items-center gap-2 bg-coop-green text-white text-lg font-semibold px-8 py-3 rounded-xl shadow hover:bg-coop-blue transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-coop-green focus:ring-offset-2">
        <FiSend className="text-2xl" />
        Solicitar este producto
      </Link>
    </div>
    </div>
  </>
);

export default CertificadosFinancieros;
