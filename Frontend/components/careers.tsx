export default function Careers() {
  return (
    <section id="careers" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600)',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/60 to-black/50" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Come...Grow With Us...
          </h2>
          <p className="text-lg md:text-2xl text-gray-200 font-light mb-10 leading-relaxed">
            Become a Digital Mudra Sevak and Earn <br />
            <span className="text-red-400 font-semibold">upto Rs.50,000/- to Rs.1,00,000/-</span> per month
          </p>

          <button className="px-10 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 hover:scale-105 transition-all text-lg shadow-lg inline-block">
            Join Us
          </button>
        </div>
      </div>
    </section>
  );
}
