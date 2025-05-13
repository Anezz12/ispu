'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormValues {
  pm_sepuluh: string;
  pm_duakomalima: string;
  sulfur_dioksida: string;
  karbon_monoksida: string;
  ozon: string;
  nitrogen_dioksida: string;
}

interface PredictionResult {
  health_status: string;
  description: string;
}

// Readable display names and tooltips for form fields
const fieldInfo = {
  pm_sepuluh: {
    label: 'PM10',
    tooltip: 'Partikulat dengan ukuran ≤ 10 mikrometer (μg/m³)',
    unit: 'μg/m³',
  },
  pm_duakomalima: {
    label: 'PM2.5',
    tooltip: 'Partikulat dengan ukuran ≤ 2.5 mikrometer (μg/m³)',
    unit: 'μg/m³',
  },
  sulfur_dioksida: {
    label: 'Sulfur Dioksida (SO₂)',
    tooltip: 'Kadar SO₂ di udara dalam part per billion (ppb)',
    unit: 'ppb',
  },
  karbon_monoksida: {
    label: 'Karbon Monoksida (CO)',
    tooltip: 'Kadar CO di udara dalam part per million (ppm)',
    unit: 'ppm',
  },
  ozon: {
    label: 'Ozon (O₃)',
    tooltip: 'Kadar ozon di udara dalam part per billion (ppb)',
    unit: 'ppb',
  },
  nitrogen_dioksida: {
    label: 'Nitrogen Dioksida (NO₂)',
    tooltip: 'Kadar NO₂ di udara dalam part per billion (ppb)',
    unit: 'ppb',
  },
};

const PredictionForm = () => {
  const [formData, setFormData] = useState<FormValues>({
    pm_sepuluh: '',
    pm_duakomalima: '',
    sulfur_dioksida: '',
    karbon_monoksida: '',
    ozon: '',
    nitrogen_dioksida: '',
  });
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: PredictionResult = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat memproses prediksi. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="prediction-form" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Prediksi Kualitas Udara
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Masukkan data parameter polusi udara untuk mendapatkan prediksi
            kualitas udara DKI Jakarta
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Input Parameter Polusi</h3>
              <p className="opacity-90">
                Masukkan nilai parameter polutan udara sesuai dengan hasil
                pengukuran untuk mendapatkan prediksi kualitas udara
              </p>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                  {Object.entries(fieldInfo).map(([key, info]) => (
                    <div key={key} className="relative">
                      <label
                        htmlFor={key}
                        className="block mb-2 font-medium text-gray-700 flex items-center"
                      >
                        {info.label}
                        <button
                          type="button"
                          className="ml-2 text-gray-400 hover:text-blue-500 focus:outline-none"
                          onMouseEnter={() => setShowTooltip(key)}
                          onMouseLeave={() => setShowTooltip(null)}
                          onClick={(e) => {
                            e.preventDefault();
                            setShowTooltip(showTooltip === key ? null : key);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </label>

                      {showTooltip === key && (
                        <div className="absolute z-10 w-64 p-3 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                          {info.tooltip}
                        </div>
                      )}

                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="number"
                          step="0.01"
                          id={key}
                          name={key}
                          value={formData[key as keyof FormValues]}
                          onChange={handleChange}
                          className="block w-full pl-3 pr-12 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="0.00"
                          required
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">
                            {info.unit}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="py-3 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Memproses...
                      </>
                    ) : (
                      <>
                        Analisis Kualitas Udara
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {result && (
                <div className="mt-8 animate-fade-in">
                  <div
                    className={`
                    rounded-lg overflow-hidden shadow-md border-l-4 
                    ${
                      result.health_status.toLowerCase().includes('baik')
                        ? 'border-green-500 bg-green-50'
                        : ''
                    }
                    ${
                      result.health_status.toLowerCase().includes('sedang')
                        ? 'border-blue-500 bg-blue-50'
                        : ''
                    }
                    ${
                      result.health_status
                        .toLowerCase()
                        .includes('tidak sehat') &&
                      !result.health_status.toLowerCase().includes('sangat')
                        ? 'border-yellow-500 bg-yellow-50'
                        : ''
                    }
                    ${
                      result.health_status
                        .toLowerCase()
                        .includes('sangat tidak sehat')
                        ? 'border-red-500 bg-red-50'
                        : ''
                    }
                    ${
                      result.health_status.toLowerCase().includes('berbahaya')
                        ? 'border-purple-900 bg-purple-50'
                        : ''
                    }
                  `}
                  >
                    <div
                      className={`
                      p-4 text-white
                      ${
                        result.health_status.toLowerCase().includes('baik')
                          ? 'bg-green-500'
                          : ''
                      }
                      ${
                        result.health_status.toLowerCase().includes('sedang')
                          ? 'bg-blue-500'
                          : ''
                      }
                      ${
                        result.health_status
                          .toLowerCase()
                          .includes('tidak sehat') &&
                        !result.health_status.toLowerCase().includes('sangat')
                          ? 'bg-yellow-500'
                          : ''
                      }
                      ${
                        result.health_status
                          .toLowerCase()
                          .includes('sangat tidak sehat')
                          ? 'bg-red-500'
                          : ''
                      }
                      ${
                        result.health_status.toLowerCase().includes('berbahaya')
                          ? 'bg-purple-900'
                          : ''
                      }
                    `}
                    >
                      <h3 className="text-xl font-bold flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                          />
                        </svg>
                        Hasil Prediksi: {result.health_status}
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 text-lg">
                        {result.description}
                      </p>
                      <div className="mt-4">
                        <a
                          href="#indeks-ispu"
                          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                        >
                          Lihat rekomendasi kegiatan
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-1 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 bg-gray-50 p-5 rounded-lg text-sm text-gray-600">
            <p className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Prediksi kualitas udara dibuat berdasarkan model machine learning
              yang dilatih dengan data historis Jakarta. Hasil prediksi hanya
              sebagai referensi dan tidak menggantikan pengukuran resmi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictionForm;
