import React from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <Fade left duration={1000}>
          <div className="contact-header">
            <span className="section-label">// get in touch</span>
            <h2 className="contact-title">{contactInfo.title}</h2>
            <p className="contact-subtitle">{contactInfo.subtitle}</p>

            <div className="contact-text-div">
              {contactInfo.location && (
                <span className="contact-detail">
                  📍 {contactInfo.location}
                </span>
              )}
              {contactInfo.number && (
                <a className="contact-detail" href={"tel:" + contactInfo.number}>
                  📞 {contactInfo.number}
                </a>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                ✉️ {contactInfo.email_address}
              </a>
            </div>
            <SocialMedia />
          </div>
        </Fade>

        <Fade right duration={1000}>
          <div className="contact-image-div">
            {contactInfo.contactImagePath && (
              <div className="contact-photo-wrap">
                <img
                  alt="Harsh Jain"
                  className="contact-profile-image"
                  src={contactInfo.contactImagePath}
                />
              </div>
            )}
          </div>
        </Fade>
      </div>
    </section>
  );
}
