const ContactSection = () => {
  return (
    <div className="py-12 px-2 md:px-0 flex justify-center fade-in-up">
      <div className="w-full max-w-6xl  rounded-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Left: Image section */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
            alt="Hand holding phone in front of whiteboard"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right: Contact Info section */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black">Contact Us</h1>
          <h2 className="text-lg font-semibold mb-4 text-black">Get in Touch with Us</h2>
          <p className="mb-4 text-black">
            Ready to start your journey? Contact us today to learn more about our services and how we can help you achieve your educational goals and career goals.
          </p>
          <p className="mb-2 text-black"><span className="font-bold">Phone:</span> +35 8415798714</p>
          <p className="mb-2 text-black"><span className="font-bold">Email:</span> <a href="mailto:info@finlandsimplified.fi" className="text-blue-600 underline">finlandsimplifiedconsulting@gmail.com</a></p>
          <p className="mb-2 text-black"><span className="font-bold">Social Media:</span> Follow us on Facebook, Instagram, LinkedIn, and YouTube.</p>
          <div className="mb-2 text-black">
            <span className="font-bold">Office Locations</span><br />
            India<br />
            Finland<br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection; 