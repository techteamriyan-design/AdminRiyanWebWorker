export default function JourneySteps() {
  const steps = [
    {
      number: 1,
      title: 'Prospect',
      color: 'red',
      bgGradient: 'from-red-500 to-red-600',
      icon: '🎯',
    },
    {
      number: 2,
      title: 'Approach',
      color: 'blue',
      bgGradient: 'from-blue-400 to-blue-500',
      icon: '📞',
    },
    {
      number: 3,
      title: 'KYC Collection',
      color: 'orange',
      bgGradient: 'from-orange-400 to-orange-500',
      icon: '📋',
    },
    {
      number: 4,
      title: 'KYC Validation',
      color: 'green',
      bgGradient: 'from-green-400 to-green-500',
      icon: '✓',
    },
    {
      number: 5,
      title: 'Account Setup',
      color: 'purple',
      bgGradient: 'from-purple-500 to-purple-600',
      icon: '⚙️',
    },
    {
      number: 6,
      title: 'Lets Start',
      color: 'pink',
      bgGradient: 'from-pink-400 to-pink-500',
      icon: '🚀',
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">Let the Journey Begins...</h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-16 rounded-full" />

        {/* Steps grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center group">
              {/* Circle with icon */}
              <div
                className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${step.bgGradient} flex items-center justify-center mb-3 text-4xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110`}
              >
                <div className="text-center">
                  <div className="text-white font-bold text-2xl md:text-3xl">{step.icon}</div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-center font-bold text-black text-xs sm:text-sm md:text-base mb-2 px-1 h-10 flex items-center justify-center">
                {step.title}
              </h3>

              {/* Step badge */}
              <div
                className={`w-full py-2 px-1 bg-gradient-to-r ${step.bgGradient} text-white text-center text-xs sm:text-sm font-bold rounded transition-all duration-300`}
              >
                Step{step.number}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">in</div>
              <p className="text-xs text-gray-600 font-semibold">Instant Mudra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
