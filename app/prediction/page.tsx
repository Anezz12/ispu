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

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: PredictionResult = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Analisis Kualitas Udara</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {Object.keys(formData).map((key) => (
            <div key={key} className="mb-4">
              <label htmlFor={key} className="block mb-2 font-medium">
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')}
              </label>
              <input
                type="number"
                id={key}
                name={key}
                value={formData[key as keyof FormValues]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
          disabled={isLoading}
        >
          {isLoading ? 'Memproses...' : 'Analisis Kualitas Udara'}
        </button>
      </form>

      {result && (
        <div className="border p-4 rounded">
          <h3 className="text-xl font-bold">Hasil: {result.health_status}</h3>
          <p>{result.description}</p>
        </div>
      )}
    </div>
  );
};

export default PredictionForm;
