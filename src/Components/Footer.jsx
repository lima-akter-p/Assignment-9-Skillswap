import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-200 p-8 w-11/12 mx-auto ">
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-semibold mb-2">Contact Info</h3>
                    <p>
                        Email: <a href="mailto:info@example.com" className="text-blue-400">info@example.com</a>
                    </p>
                    <p>
                        Phone: <a href="tel:+8801712345678" className="text-blue-400">+88 01712 345678</a>
                    </p>
                    <p>Address: 123 Dhaka, Bangladesh</p>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-white font-semibold mb-2">Follow Us</h3>
                    <ul className="space-y-1">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">Twitter</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">LinkedIn</a></li>
                    </ul>
                </div>

                {/* Privacy Policy */}
                <div>
                    <h3 className="text-white font-semibold mb-2">Legal</h3>
                    <a href="/privacy-policy" className="text-blue-400">Privacy Policy</a>
                </div>
            </div>

            <div className="text-center text-slate-500 text-sm mt-8">
                © {new Date().getFullYear()} Your Company — All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;