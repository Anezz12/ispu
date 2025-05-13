interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4 mx-auto lg:mx-0">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-center lg:text-left">
        {title}
      </h3>
      <p className="text-gray-600 text-center lg:text-left">{description}</p>
    </div>
  );
};

const InfoSection: React.FC = () => {
  return (
    <section id="info-section" className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Tentang Prediksi Kualitas Udara
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Memahami kualitas udara adalah langkah penting untuk menjaga
            kesehatan Anda dan keluarga di DKI Jakarta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <InfoCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
            }
            title="Apa itu ISPU?"
            description="Indeks Standar Pencemar Udara (ISPU) merupakan metode pengukuran yang menggambarkan tingkat pencemaran udara dalam satuan standar."
          />

          <InfoCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            title="Dampak Kesehatan"
            description="Kualitas udara yang buruk dapat menyebabkan berbagai masalah kesehatan mulai dari iritasi mata, gangguan pernapasan, hingga penyakit jantung."
          />

          <InfoCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            }
            title="Prediksi Berbasis Data"
            description="Layanan kami menggunakan algoritma canggih untuk menganalisis berbagai parameter polusi dan memberikan prediksi akurat tentang kualitas udara."
          />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Pentingnya Pemantauan Kualitas Udara
              </h3>
              <p className="text-gray-600 mb-4">
                Kualitas udara adalah aspek penting bagi kesehatan masyarakat
                dan kelestarian lingkungan. Memahami tingkat polutan di udara
                dapat membantu individu dan komunitas mengambil keputusan untuk
                melindungi kesehatan dan kesejahteraan mereka.
              </p>
              <p className="text-gray-600">
                Layanan prediksi kualitas udara kami menggunakan algoritma
                canggih untuk menganalisis berbagai faktor lingkungan dan
                memberikan perkiraan akurat tentang kualitas udara di Jakarta.
                Dengan memasukkan data spesifik, pengguna dapat menerima
                prediksi yang membantu mereka merencanakan aktivitas dan
                meminimalkan paparan polutan berbahaya.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-blue-100 rounded-xl p-6 text-center">
                <div className="text-blue-600 text-5xl font-bold mb-2">85%</div>
                <p className="text-gray-700">
                  penduduk kota terpapar polusi udara yang buruk
                </p>
                <div className="mt-4 text-sm">
                  <a
                    href="#prediction-form"
                    className="text-blue-600 hover:underline font-medium flex items-center justify-center"
                  >
                    Cek kualitas udara sekarang
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
