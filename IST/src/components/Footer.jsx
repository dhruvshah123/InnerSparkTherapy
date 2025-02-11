import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "animate.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#2C7873] text-white font-sans w-full"
    >
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Contact Section */}
          <div className="flex flex-col items-start justify-start space-y-4">
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <div className="space-y-3">
              <p>Manav Mehta</p>
              <p className="text-sm">Mon-Fri: 9am-7pm, Sat: 10am-4pm</p>
              <p className="flex items-center space-x-2">
                <span>Email:</span>
                <a
                  href="mailto:coach@innersparktherapy.com"
                  className="hover:underline transition-colors duration-300"
                >
                  coach@innersparktherapy.com
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <span>Phone:</span>
                <a
                  href="tel:+917039972867"
                  className="hover:underline transition-colors duration-300"
                >
                  +91 703 9972 867
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-start justify-start space-y-4">
            <h2 className="text-2xl font-bold mb-2">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="hover:underline transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="hover:underline transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:underline transition-colors duration-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-start justify-start space-y-4">
            <h2 className="text-2xl font-bold mb-2"><Link to='https://linktr.ee/innersparkthe?utm_source=qr_code'>Connect With Us</Link></h2>
            <div className="flex space-x-6">
              <Link
                to='https://www.facebook.com/profile.php?id=61569509316809'
                className="text-white hover:scale-110 transition-transform duration-300"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Link>
              <Link
                to="https://x.com/intent/tweet?text=Facebook%20-%20https://tr.ee/CW-fHtM0l6"
                className="text-white hover:scale-110 transition-transform duration-300"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Link>
              <Link
                to="https://www.instagram.com/inner.sparktherapy"
                className="text-white hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/innersparktherapy/about/?viewAsMember=true"
                className="text-white hover:scale-110 transition-transform duration-300"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} by InnerSparkTherapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;