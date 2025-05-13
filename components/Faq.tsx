'use client';
import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems: FaqItem[] = [
    {
      question: 'Apa itu ISPU (Indeks Standar Pencemaran Udara)?',
      answer:
        'ISPU adalah angka yang tidak memiliki satuan yang menggambarkan kondisi kualitas udara ambien di lokasi dan waktu tertentu, yang didasarkan pada dampak terhadap kesehatan manusia, nilai estetika, dan makhluk hidup lainnya. ISPU ditetapkan berdasarkan 5 parameter utama: PM10, PM2.5, SO2 (Sulfur dioksida), CO (Karbon monoksida), dan O3 (Ozon).',
    },
    {
      question: 'Bagaimana cara membaca nilai ISPU?',
      answer:
        'Nilai ISPU dibagi menjadi 5 kategori: (1) 0-50: Baik (hijau), (2) 51-100: Sedang (biru), (3) 101-199: Tidak Sehat (kuning), (4) 200-299: Sangat Tidak Sehat (merah), (5) 300-500: Berbahaya (ungu). Semakin tinggi nilai ISPU, semakin tinggi tingkat pencemaran udara dan semakin berbahaya dampaknya terhadap kesehatan.',
    },
    {
      question: 'Apa saja polutan udara utama di Jakarta?',
      answer:
        'Polutan udara utama di Jakarta meliputi Partikulat (PM10 dan PM2.5) yang berasal dari kendaraan bermotor, asap pabrik, dan debu jalanan; Gas-gas seperti Sulfur dioksida (SO2) dari pembakaran bahan bakar fosil; Nitrogen dioksida (NO2) dari kendaraan bermotor; Karbon monoksida (CO) dari kendaraan bermotor; dan Ozon (O3) yang terbentuk dari reaksi fotokimia polutan lain dengan sinar matahari.',
    },
    {
      question: 'Bagaimana cara melindungi diri saat kualitas udara buruk?',
      answer:
        'Beberapa langkah untuk melindungi diri saat kualitas udara buruk: (1) Pantau ISPU secara teratur, (2) Gunakan masker N95 atau KN95 saat beraktivitas di luar, (3) Batasi aktivitas luar ruangan terutama bagi kelompok sensitif, (4) Pastikan sirkulasi udara di dalam ruangan baik, (5) Gunakan air purifier di dalam ruangan jika memungkinkan, (6) Konsumsi makanan kaya antioksidan, (7) Minum air putih yang cukup untuk membantu mengeluarkan racun dari tubuh.',
    },
    {
      question:
        'Siapa saja yang termasuk kelompok sensitif terhadap polusi udara?',
      answer:
        'Kelompok sensitif meliputi: (1) Anak-anak dan bayi, karena sistem pernapasan mereka masih dalam tahap perkembangan, (2) Lansia, karena sistem kekebalan tubuh yang menurun, (3) Ibu hamil, karena polusi dapat mempengaruhi perkembangan janin, (4) Orang dengan penyakit pernapasan seperti asma atau PPOK, (5) Penderita penyakit jantung atau kardiovaskular, (6) Orang dengan sistem kekebalan tubuh yang lemah.',
    },
    {
      question: 'Bagaimana sistem prediksi ISPU di website ini bekerja?',
      answer:
        'Sistem prediksi ISPU di website ini menggunakan model machine learning yang dilatih dengan data historis kualitas udara Jakarta. Model ini mempertimbangkan berbagai parameter seperti PM10, PM2.5, SO2, CO, NO2, dan O3, serta faktor cuaca dan pola waktu untuk memprediksi tingkat ISPU di masa mendatang. Prediksi ini dapat membantu masyarakat dan pembuat kebijakan untuk mengambil tindakan preventif.',
    },
    {
      question: 'Seberapa akurat prediksi ISPU yang disediakan?',
      answer:
        'Prediksi ISPU kami memiliki tingkat akurasi sekitar 85-90% untuk prediksi jangka pendek (1-3 hari). Akurasi ini dapat bervariasi tergantung pada perubahan kondisi cuaca yang ekstrem atau peristiwa tidak terduga seperti kebakaran hutan atau aktivitas gunung berapi. Kami terus meningkatkan model prediksi dengan data terbaru.',
    },
    {
      question: 'Dari mana data ISPU ini berasal?',
      answer:
        'Data ISPU yang kami gunakan berasal dari berbagai sumber resmi, termasuk stasiun pemantau kualitas udara yang dikelola oleh Dinas Lingkungan Hidup DKI Jakarta, BMKG, serta data dari sensor-sensor kualitas udara yang tersebar di berbagai titik di Jakarta. Data ini diperbarui secara berkala untuk memastikan keakuratan informasi.',
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Temukan jawaban atas pertanyaan umum mengenai kualitas udara dan
            sistem ISPU
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left p-5 flex justify-between items-center focus:outline-none bg-white hover:bg-gray-50"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-medium text-gray-900">{item.question}</h3>
                <svg
                  className={`w-5 h-5 text-blue-600 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
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
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-5 bg-gray-50 border-t border-gray-200 text-gray-600">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mt-12 max-w-3xl mx-auto">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-blue-600"
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
              <h3 className="text-lg font-medium text-blue-800">
                Punya pertanyaan lain?
              </h3>
              <p className="mt-2 text-blue-700">
                Jika Anda memiliki pertanyaan yang tidak tercantum di atas,
                silakan hubungi kami melalui halaman{' '}
                <a
                  href="#contact"
                  className="font-medium underline hover:text-blue-900 transition-colors"
                >
                  kontak
                </a>{' '}
                atau kirim email ke{' '}
                <a
                  href="mailto:info@ispujakarta.id"
                  className="font-medium underline hover:text-blue-900 transition-colors"
                >
                  info@ispujakarta.id
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
