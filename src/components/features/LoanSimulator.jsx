import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import Card from '../ui/Card'
import { useNotification } from '../../contexts/NotificationContext'

const LoanSimulator = () => {
  const [amount, setAmount] = useState(100000)
  const [months, setMonths] = useState(12)
  const [rate] = useState(12) // Tasa fija del 12%
  const notify = useNotification()

  const calculateMonthly = () => {
    const monthlyRate = rate / 100 / 12
    const payment = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                    (Math.pow(1 + monthlyRate, months) - 1)
    return payment
  }

  const monthlyPayment = calculateMonthly()
  const totalPayment = monthlyPayment * months
  const totalInterest = totalPayment - amount

  const handleApply = () => {
    notify.success('¡Solicitud iniciada! Te contactaremos pronto.')
  }

  return (
    <div className="space-y-8">
      {/* Amount Slider */}
      <div>
        <div className="flex justify-between mb-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-dark-text">
            Monto del Préstamo
          </label>
          <span className="text-2xl font-bold text-coop-green">
            RD$ {amount.toLocaleString()}
          </span>
        </div>
        <input
          type="range"
          min="10000"
          max="1000000"
          step="10000"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 
                   [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full 
                   [&::-webkit-slider-thumb]:bg-coop-green [&::-webkit-slider-thumb]:cursor-pointer
                   [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:hover:scale-110
                   [&::-webkit-slider-thumb]:transition-transform"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>RD$ 10,000</span>
          <span>RD$ 1,000,000</span>
        </div>
      </div>

      {/* Months Slider */}
      <div>
        <div className="flex justify-between mb-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-dark-text">
            Plazo
          </label>
          <span className="text-2xl font-bold text-coop-blue">
            {months} meses
          </span>
        </div>
        <input
          type="range"
          min="6"
          max="60"
          step="6"
          value={months}
          onChange={(e) => setMonths(Number(e.target.value))}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 
                   [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full 
                   [&::-webkit-slider-thumb]:bg-coop-blue [&::-webkit-slider-thumb]:cursor-pointer
                   [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:hover:scale-110
                   [&::-webkit-slider-thumb]:transition-transform"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>6 meses</span>
          <span>60 meses</span>
        </div>
      </div>

      {/* Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Card className="text-center bg-gradient-to-br from-coop-green to-coop-dark-green text-white">
          <div className="text-sm font-semibold mb-2">Cuota Mensual</div>
          <div className="text-3xl font-bold">
            RD$ {monthlyPayment.toLocaleString('es-DO', { maximumFractionDigits: 0 })}
          </div>
        </Card>

        <Card className="text-center bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <div className="text-sm font-semibold mb-2">Total a Pagar</div>
          <div className="text-3xl font-bold">
            RD$ {totalPayment.toLocaleString('es-DO', { maximumFractionDigits: 0 })}
          </div>
        </Card>

        <Card className="text-center bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="text-sm font-semibold mb-2">Total Intereses</div>
          <div className="text-3xl font-bold">
            RD$ {totalInterest.toLocaleString('es-DO', { maximumFractionDigits: 0 })}
          </div>
        </Card>
      </motion.div>

      {/* Info */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
        <div className="flex items-start">
          <i className="fas fa-info-circle text-blue-500 mt-1 mr-3"></i>
          <div className="text-sm text-blue-900 dark:text-blue-200">
            <p className="font-semibold mb-1">Tasa de interés: {rate}% anual</p>
            <p>Esta es una simulación. Los valores finales pueden variar según tu perfil crediticio.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <Button
        variant="cta"
        size="lg"
        fullWidth
        icon={<i className="fas fa-paper-plane"></i>}
        onClick={handleApply}
      >
        Solicitar Este Préstamo
      </Button>
    </div>
  )
}

export default LoanSimulator
