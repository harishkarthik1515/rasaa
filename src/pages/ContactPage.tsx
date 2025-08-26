const ContactPage = () => {
  return (
    <section className="pt-8 pb-16 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us with any questions about
            our products or services.
          </p>
        </div>

        {/* Contact Section - Map left, Form right */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map Section - Left Side (Rectangle) */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Find Us</h3>
            <div className="rounded-2xl shadow-xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.015117603461!2d80.2019507!3d13.1053725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265e5275b4a97%3A0xda6df461cf23e9f6!2sVillivakkam%2C%20Chennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1629975114981!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Rasaa Foods Location"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="mt-4 text-gray-600">
              <div className="space-y-2">
                <p>
                  <strong>Address:</strong> #171, 1st Floor, MTH Road,
                  Villivakkam, Chennai-600049, Tamil Nadu
                </p>
                <p>
                  <strong>Email:</strong> office@rasaafoods.com
                </p>
                <p>
                  <strong>Phone:</strong> +91 9986630246
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side (Square Card) */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 min-h-96 flex flex-col">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Send us a message
              </h3>
              <form className="flex-1 flex flex-col space-y-5">
                {/* Name fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                {/* Contact fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full h-32 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="What can we help you with?"
                  ></textarea>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="bg-green-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-green-700 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
