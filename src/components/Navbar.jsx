import { Menu } from 'lucide-react';
import { useState } from 'react';
import { X } from 'lucide-react';


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className="top-0 w-full z-50 transition-all duration-300 bg-[#0b0e19] backdrop-blur-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-13 sm:h-16 md:h-20">
                    <div className="flex cursor-pointer items-center h-13 sm:h-16 md:h-20 ">
                        <div>
                            <img src="logo.png" alt="Luma UI" className="w-6 h-6 sm:h-10 sm:w-auto" />
                        </div>
                        <span className="text-lg sm:text-xl lg:text-2xl font-medium">
                            <span >Luma</span>
                            <span className="text-[#236ced]">UI</span>
                        </span>
                    </div>
                    {/* navlinks */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#testimonials" className="text-gray-400 hover:text-white lg:text-xl">Features</a>
                        <a href="#testimonials" className="text-gray-400 hover:text-white lg:text-xl">Testimonials</a>
                        <a href="#pricing" className="text-gray-400 hover:text-white lg:text-xl">Pricing</a>

                    </div>
                    <button className='md:hidden'>
                        {!menuOpen && <Menu className='w-6 h-6 sm:h-8 sm:h-8' onClick={() => setMenuOpen((prev) => !prev)} />}
                        {menuOpen && <X className='w-6 h-6 sm:h-8 sm:h-8' onClick={() => setMenuOpen((prev) => !prev)} />}
                    </button>

                </div>
            </div>
            {menuOpen &&
                <div className='md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 slide-in-from-top duration-300 '>
                    <div className='flex flex-col px-4 sm:py-6 space-y-3 sm:space-y-4'>
                        <a href="#testimonials" className="text-gray-400 hover:text-white lg:text-xl" onClick={() => setMenuOpen(false)}>
                            Features</a>
                        <a href="#testimonials" className="text-gray-400 hover:text-white lg:text-xl" onClick={() => setMenuOpen(false)}>
                            Testimonials</a>
                        <a href="#pricing" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white lg:text-xl">Pricing</a>
                    </div>
                </div>
            }

        </nav>
    );
}

export default Navbar;