"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-medium mb-4">
              Roza<span className="text-accent">.</span>
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Charlotte&apos;s premier destination for luxury facial sculpting
              and advanced cosmetology treatments.
            </p>
            <a
              href="https://rozamassage.glossgenius.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-white text-sm px-6 py-3 rounded-full hover:bg-accent-light transition-colors"
            >
              Book Appointment
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-6">
              Explore
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Roza" },
                { href: "/gallery", label: "Gallery" },
                { href: "/quiz", label: "Skin Quiz" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-white/60 hover:text-accent transition-colors text-sm"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-4 text-sm">
              <a
                href="https://maps.google.com/?q=10614+Providence+Rd+Room+10+Charlotte+NC+28277"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 hover:text-accent transition-colors"
              >
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>
                  10614 Providence Rd, Room #10
                  <br />
                  Charlotte, NC 28277
                </span>
              </a>
              <a
                href="tel:7049499962"
                className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors"
              >
                <Phone size={16} className="shrink-0" />
                (704) 949-9962
              </a>
              <a
                href="mailto:rozab0909@gmail.com"
                className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors"
              >
                <Mail size={16} className="shrink-0" />
                rozab0909@gmail.com
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-6">
              Hours
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-white/80">Mon – Fri</p>
                  <p className="text-white/50">9:00 AM – 5:30 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-white/80">Saturday</p>
                  <p className="text-white/50">8:00 AM – 1:00 PM</p>
                </div>
              </div>
              <p className="text-white/30 text-xs ml-7">Sunday — Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Spa & Sculpting by Roza. All
            rights reserved.
          </p>
          <p className="text-white/30 text-xs">Charlotte, NC</p>
        </div>
      </div>
    </footer>
  );
}
