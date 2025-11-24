const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 md:px-16">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-16">

        {/* Exclusive */}
        <div>
          <h2 className="text-xl font-bold mb-4">Exclusive</h2>
          <p className="mb-3 text-sm">Subscribe</p>
          <p className="mb-3 text-sm text-white/80">
            Get 10% off your first order
          </p>

          <div className="flex items-center border border-white/40 rounded px-2 py-2 w-[200px]">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-white text-sm w-full placeholder:text-white/60"
            />
            <span className="text-white text-lg cursor-pointer">➤</span>
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-bold mb-4">Support</h2>
          <p className="text-sm text-white/80">111 Bijoy sarani, Dhaka,</p>
          <p className="text-sm text-white/80">DH 1515, Bangladesh.</p>

          <p className="text-sm mt-3 text-white/80">exclusive@gmail.com</p>
          <p className="text-sm mt-3 text-white/80">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h2 className="text-lg font-bold mb-4">Account</h2>
          <ul className="space-y-2 text-sm text-white/80">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Link</h2>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

       

      </div>

      {/* BOTTOM COPYRIGHT */}
      <hr className="border-white/10 mt-12 mb-4" />

      <p className="text-center text-white/60 text-sm">
        © Copyright Rimel 2022. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
