export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-gradient-to-r from-black/85 via-black/60 to-transparent">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: 'url(https://img.freepik.com/premium-photo/indian-farmer-standing-holding-ladyfinger-hand-agriculture-field_75648-6229.jpg?w=1480)',
        }}
      />

      {/* Left side content */}
      <div className="relative z-10 px-6 md:pl-20 max-w-2xl py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight text-pretty">
          Enjoy the digital business world with us...
        </h1>
        <div className="w-1 h-16 bg-red-1000 mb-6" />
        <p className="text-gray-300 text-lg hidden md:block">Your trusted financial services partner</p>
      </div>

      {/* Center circular showcase 
      <div className="absolute inset-0 flex items-center justify-center z-0 hidden lg:flex">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-black/40 rounded-full border-4 border-gray-700/50 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <div className="w-40 h-40 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 border-2 border-blue-500/30">
              <div className="text-white text-center">
                <div className="text-4xl font-bold mb-2">in</div>
                <p className="text-xs text-gray-300 font-semibold">Instant Mudra</p>
                <p className="text-xs text-gray-400">अपना डिजिटल मुद्रा</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      
    </section>
  );
}
