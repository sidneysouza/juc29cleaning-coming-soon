function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display">
      {/* Main Container */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:px-20 lg:px-40">
        {/* Header / Logo Area */}
        <header className="mb-12 flex flex-col items-center">
          <div className="flex items-center gap-3 text-primary mb-2">
            <span className="material-symbols-outlined text-4xl fill-1">cleaning_services</span>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">JUC29 Cleaning</h1>
          </div>
          <div className="h-1 w-12 bg-secondary rounded-full"></div>
        </header>

        {/* Hero Content & Modern Grid */}
        <main className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Overlay Content (Left side on large screens) */}
            <div className="z-10 text-center lg:text-left space-y-6 order-2 lg:order-1">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide uppercase">
                Tampa, Florida
              </div>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
                Something <span className="text-secondary">Spotless</span> is Coming.
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0">
                We are preparing premium cleaning services for the Tampa Bay area. Experience a new standard of residential and commercial excellence.
              </p>

              {/* Simple Email Capture */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start">
                <input 
                  className="px-6 py-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none min-w-75" 
                  placeholder="Enter your email for updates" 
                  type="email" 
                />
                <button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-primary/20 cursor-pointer">
                  Notify Me
                </button>
              </div>
            </div>

            {/* Modern Grid Layout (Right side on large screens) */}
            <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="aspect-4/5 rounded-3xl overflow-hidden bg-slate-200 group relative">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg_JrEPAewY3gTVjt9HS0Z3HMptws_34ZBQT0EbhW3W6zgPnPcL8BdSLDLgAaq-10nN4EZtHf2pJ5JP15yBB3ScT4TYex7COMiqnjuACLQTgQMaw7uGO47k6zFSoB0hfhn_QScH-8HsaDDY2n2pkVqjya9VT15uoIu_5HUTiIeRKYnGR34fLYqk9qub9gi4Mv5KApLSz-6vmX5lN6xN7hCbkCJo-TMCpFkgRvzUAN85d7826hhnJ-21mz8CgPhuq_tow0_5nnMLF-N" 
                    alt="Modern clean bright kitchen interior"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                  <p className="absolute bottom-4 left-4 text-white font-bold">Sparkling Kitchens</p>
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden bg-slate-200 group relative border-4 border-secondary/20">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB_MNIks89cm7WYCwMSxjKrBu-bcyK-ykhSNixKxsTZyxUrGb71x-bzUN1Y9b5zPqyBhCgeUx9-Q1QIxF7MBZ4WV5Q-eKbsxw5vkhKSVDD2WzUb7kjKqi_oN3WT97AKVHZYbubYgWrEMHJLg0DOkqJ-oceXpY2LotxwGXMzSXO_Cpb17_djLewafnnuEDDTQBre4DR1YvmZ4rz05U8SsC3Oo53faBxe68rXLXwZCCv0kx3Fx-iAY26NMO4TWi90Ch4gnZRQ7L0L08F" 
                    alt="Professional cleaning equipment"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                  <p className="absolute bottom-4 left-4 text-white font-bold">Expert Gear</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-3xl overflow-hidden bg-slate-200 group relative border-4 border-primary/20">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIvklrXBKa5JompnxsauZLCyXvQOUvUe3j9vDw-2lIOzDs9e09-MajgTSB4fT9XujSaywnXQyHu6dKmKQf7X1hyNu_dsme7tSfFnr7lQY4i9qb9NugpiNXPQpswGWKE9j6liDAg1QgmZ0esqk47g42m3LF3lhJ4AUvhPvCIQRbXgZYIQX3IqNl8JfJrZ47DrD-NX1LYkeBinVkG-dvmQ2yFQfNWVwQyH2wnpz-kx9lPig5XE94bNvChmliO6nhSUg1CnHDgkIOsb6-" 
                    alt="Clean bathroom tiles"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                  <p className="absolute bottom-4 left-4 text-white font-bold">Deep Cleaning</p>
                </div>
                <div className="aspect-4/5 rounded-3xl overflow-hidden bg-slate-200 group relative">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnHnVO6WYz5YjgCT2nDVgDqB-jQkQqKvBrJzJNYspf_EXsBi_ioVZGTPm-zBvh-uESBkWm7oPfB6P9fulcw4Qh6fY07gRw-EaJgc1rjLIgLpReA0nKWjVJsWNLXYDzHvXsR-qeuASjVsf8ksMCQW9hfAy9Bz7jN66Z6620FEWXgW7PSAT0ywMUniO_1Am3Zyr4M-z-E05Ec80r_te8655OjSrqaQIMB51S9LLrmXgq3JdNOskNh12NKQirkKjuFn-CnZfaKyRFUKHP" 
                    alt="Clean minimalist living room"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                  <p className="absolute bottom-4 left-4 text-white font-bold">Premium Living</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer / Social Media */}
        <footer className="mt-20 flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-secondary hover:text-white transition-all" href="#">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
            </a>
            <a className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-secondary hover:text-white transition-all" href="#">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
            </a>
            <a className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-secondary hover:text-white transition-all" href="#">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg>
            </a>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-600 font-medium">
            © {new Date().getFullYear()} JUC29 Cleaning. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 -z-10 w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>
      <div className="fixed bottom-0 left-0 -z-10 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full"></div>
    </div>
  )
}

export default App
