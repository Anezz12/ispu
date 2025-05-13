import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mt-20 -mr-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -mb-32 -ml-32"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Prediksi Kualitas Udara{' '}
              <span className="text-yellow-300">DKI Jakarta</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 opacity-90">
              Dapatkan informasi terkini tentang kualitas udara dan dampaknya
              terhadap kesehatan Anda dan keluarga.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#prediction-form"
                className="bg-white text-blue-700 py-3 px-8 rounded-lg font-semibold hover:bg-yellow-300 hover:text-blue-800 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
              >
                Cek Prediksi Sekarang
              </a>
              <a
                href="#info-section"
                className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-md mx-auto">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-yellow-300 flex items-center justify-center text-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                  <h3 className="font-bold">Apakah udara hari ini aman?</h3>
                  <p className="text-sm opacity-90">Cari tahu sekarang</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Polusi udara dapat menyebabkan berbagai masalah kesehatan.
                Gunakan alat prediksi kami untuk mengetahui kualitas udara di
                wilayah Anda.
              </p>
            </div>

            {/* Air quality illustration or decorative element could go here */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-300/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Wave SVG divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[50px] md:h-[70px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.44,118.92,150.9,74.03,321.39,56.44Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
