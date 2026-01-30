import { useState } from 'react'
import Loader from '../components/ui/Loader'
import Header from '../components/layout/Header'
import Navigation from '../components/layout/NavigationModern'
import Footer from '../components/layout/Footer'
import { format, addMonths } from 'date-fns'

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [months, setMonths] = useState('')
  const [results, setResults] = useState(null)
  const [amortizationTable, setAmortizationTable] = useState([])

  const calculateLoan = (e) => {
    e.preventDefault()

    const principal = parseFloat(loanAmount)
    const rate = parseFloat(interestRate) / 100 / 12
    const numPayments = parseInt(months)

    if (!principal || !rate || !numPayments) {
      alert('Por favor complete todos los campos')
      return
    }

    // Calcular cuota mensual
    const monthlyPayment = 
      (principal * rate * Math.pow(1 + rate, numPayments)) / 
      (Math.pow(1 + rate, numPayments) - 1)

    const totalPayment = monthlyPayment * numPayments
    const totalInterest = totalPayment - principal

    // Generar tabla de amortización
    const table = []
    let balance = principal
    const startDate = new Date()

    for (let i = 1; i <= numPayments; i++) {
      const interestPayment = balance * rate
      const principalPayment = monthlyPayment - interestPayment
      balance -= principalPayment

      table.push({
        payment: i,
        date: format(addMonths(startDate, i), 'dd/MM/yyyy'),
        monthlyPayment: monthlyPayment.toFixed(2),
        principal: principalPayment.toFixed(2),
        interest: interestPayment.toFixed(2),
        balance: Math.max(0, balance).toFixed(2),
      })
    }

    setResults({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    })

    setAmortizationTable(table)
  }

  const resetCalculator = () => {
    setLoanAmount('')
    setInterestRate('')
    setMonths('')
    setResults(null)
    setAmortizationTable([])
  }

  return (
    <div className="min-h-screen bg-white">
      <Loader />
      
      <div className="container mx-auto px-4">
        <Header />
        <Navigation />

        {/* Calculator Hero */}
        <section className="py-12 bg-gradient-to-r from-coop-green to-coop-dark-green rounded-lg mb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              <i className="fas fa-calculator mr-3"></i>
              Calculadora de Préstamos
            </h1>
            <p className="text-xl text-white/90">
              Calcula tu cuota mensual y plan de pagos
            </p>
          </div>
        </section>

        {/* Calculator Form */}
        <section className="py-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <form onSubmit={calculateLoan} className="space-y-6">
                {/* Monto del Préstamo */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Monto del Préstamo (RD$)
                  </label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="Ej: 500000"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg
                             focus:border-coop-green focus:outline-none text-lg"
                  />
                </div>

                {/* Tasa de Interés */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Tasa de Interés Anual (%)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    placeholder="Ej: 12.5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg
                             focus:border-coop-green focus:outline-none text-lg"
                  />
                </div>

                {/* Plazo en Meses */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Plazo (Meses)
                  </label>
                  <input
                    type="number"
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                    placeholder="Ej: 24"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg
                             focus:border-coop-green focus:outline-none text-lg"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-coop-green hover:bg-coop-dark-green text-white 
                             font-bold py-3 px-6 rounded-lg transition-colors text-lg"
                  >
                    <i className="fas fa-calculator mr-2"></i>
                    Calcular
                  </button>
                  <button
                    type="button"
                    onClick={resetCalculator}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white 
                             font-bold py-3 px-6 rounded-lg transition-colors text-lg"
                  >
                    <i className="fas fa-redo mr-2"></i>
                    Limpiar
                  </button>
                </div>
              </form>

              {/* Results */}
              {results && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-coop-green to-coop-dark-green 
                                text-white p-6 rounded-lg text-center">
                    <div className="text-sm font-semibold mb-2">Cuota Mensual</div>
                    <div className="text-3xl font-bold">
                      RD$ {parseFloat(results.monthlyPayment).toLocaleString('es-DO')}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 
                                text-white p-6 rounded-lg text-center">
                    <div className="text-sm font-semibold mb-2">Total a Pagar</div>
                    <div className="text-3xl font-bold">
                      RD$ {parseFloat(results.totalPayment).toLocaleString('es-DO')}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 
                                text-white p-6 rounded-lg text-center">
                    <div className="text-sm font-semibold mb-2">Total Intereses</div>
                    <div className="text-3xl font-bold">
                      RD$ {parseFloat(results.totalInterest).toLocaleString('es-DO')}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Amortization Table */}
        {amortizationTable.length > 0 && (
          <section className="py-8 mb-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Tabla de Amortización
              </h2>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-coop-green text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Pago #</th>
                        <th className="px-4 py-3 text-left">Fecha</th>
                        <th className="px-4 py-3 text-right">Cuota</th>
                        <th className="px-4 py-3 text-right">Capital</th>
                        <th className="px-4 py-3 text-right">Interés</th>
                        <th className="px-4 py-3 text-right">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {amortizationTable.map((row, index) => (
                        <tr 
                          key={index}
                          className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                        >
                          <td className="px-4 py-3 font-semibold">{row.payment}</td>
                          <td className="px-4 py-3">{row.date}</td>
                          <td className="px-4 py-3 text-right">
                            RD$ {parseFloat(row.monthlyPayment).toLocaleString('es-DO')}
                          </td>
                          <td className="px-4 py-3 text-right">
                            RD$ {parseFloat(row.principal).toLocaleString('es-DO')}
                          </td>
                          <td className="px-4 py-3 text-right">
                            RD$ {parseFloat(row.interest).toLocaleString('es-DO')}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold">
                            RD$ {parseFloat(row.balance).toLocaleString('es-DO')}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Calculator
