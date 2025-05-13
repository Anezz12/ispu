import React from 'react';

interface ISPUCategory {
  range: string;
  label: string;
  color: string;
  description: string;
  recommendation: string;
}

const IndekIspu: React.FC = () => {
  const ispuData: ISPUCategory[] = [
    {
      range: '0-50',
      label: 'Baik',
      color: 'bg-green-500',
      description:
        'Tingkat kualitas udara sangat baik, tidak memberikan efek negatif terhadap manusia, hewan, tumbuhan.',
      recommendation: 'Sangat baik melakukan kegiatan di luar',
    },
    {
      range: '51-100',
      label: 'Sedang',
      color: 'bg-blue-500',
      description:
        'Tingkat kualitas udara masih dapat diterima pada kesehatan manusia, hewan dan tumbuhan.',
      recommendation:
        'Setiap orang: Masih dapat beraktivitas di luar.\nKelompok sensitif: Kurangi aktivitas fisik yang terlalu lama atau berat.',
    },
    {
      range: '101-199',
      label: 'Tidak Sehat',
      color: 'bg-yellow-500',
      description:
        'Tingkat kualitas udara yang bersifat merugikan pada manusia, hewan dan tumbuhan.',
      recommendation:
        'Setiap orang: Mengurangi aktivitas fisik yang terlalu lama di luar ruangan.\nKelompok sensitif: Boleh melakukan aktivitas di luar, tetapi mengambil rehat lebih sering dan melakukan aktivitas ringan serta membawa obat pribadi selama aktifitas.',
    },
    {
      range: '200-299',
      label: 'Sangat Tidak Sehat',
      color: 'bg-red-500',
      description:
        'Tingkat kualitas udara yang dapat meningkatkan resiko kesehatan pada sejumlah segmen populasi yang terpapar.',
      recommendation:
        'Setiap orang: Pertimbangkan untuk melakukan aktivitas di dalam ruangan, hindari aktivitas fisik yang terlalu lama di luar ruangan.\nKelompok sensitif: Hindari semua aktivitas di luar.',
    },
    {
      range: '300-500',
      label: 'Berbahaya',
      color: 'bg-purple-900',
      description:
        'Tingkat kualitas udara yang dapat merugikan kesehatan serius pada populasi dan perlu penanganan cepat.',
      recommendation:
        'Setiap orang: Hindari semua aktivitas di luar.\nKelompok sensitif: Tetap di dalam ruangan dan lakukan sedikit aktivitas.',
    },
  ];

  return (
    <section id="indeks-ispu" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Indeks Standar Pencemaran Udara (ISPU)
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Pahami tingkat kualitas udara dan rekomendasi aktivitas sesuai
            dengan nilai ISPU
          </p>
        </div>

        {/* ISPU Scale Visual Indicator */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-md">
          <div className="flex">
            {ispuData.map((category) => (
              <div
                key={category.label}
                className={`${category.color} h-8 flex-1 flex items-center justify-center`}
              >
                <span className="text-white text-xs font-semibold px-2">
                  {category.label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex text-xs text-center text-gray-600 bg-gray-100 border-t border-gray-200">
            {ispuData.map((category, index) => (
              <div key={`range-${index}`} className="flex-1 p-1">
                {category.range}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Table (hidden on mobile) */}
        <div className="hidden lg:block mb-10">
          <div className="overflow-hidden rounded-xl shadow-md">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="py-4 px-6 text-left">Nilai ISPU</th>
                  <th className="py-4 px-6 text-left">Kategori</th>
                  <th className="py-4 px-6 text-left">Keterangan</th>
                  <th className="py-4 px-6 text-left">Rekomendasi Aktivitas</th>
                </tr>
              </thead>
              <tbody>
                {ispuData.map((category, index) => (
                  <tr
                    key={category.label}
                    className={`${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } border-b border-gray-200`}
                  >
                    <td className="py-4 px-6">{category.range}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <span
                          className={`inline-block w-4 h-4 rounded-full mr-2 ${category.color}`}
                        ></span>
                        {category.label}
                      </div>
                    </td>
                    <td className="py-4 px-6">{category.description}</td>
                    <td className="py-4 px-6 whitespace-pre-line">
                      {category.recommendation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards (shown only on mobile) */}
        <div className="lg:hidden space-y-6">
          {ispuData.map((category) => (
            <div
              key={category.label}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className={`${category.color} p-4 text-white`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{category.label}</h3>
                  <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    {category.range}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Keterangan:
                </h4>
                <p className="text-gray-600 mb-4">{category.description}</p>

                <h4 className="font-semibold text-gray-800 mb-2">
                  Rekomendasi Aktivitas:
                </h4>
                <p className="text-gray-600 whitespace-pre-line">
                  {category.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8 rounded-r-lg shadow-sm">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
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
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                Informasi penting:
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>
                  Kelompok sensitif meliputi lansia, anak-anak, ibu hamil, dan
                  orang dengan kondisi kesehatan seperti asma, penyakit
                  pernapasan, atau penyakit kardiovaskular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndekIspu;
