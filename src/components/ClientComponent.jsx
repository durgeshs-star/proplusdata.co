import React from "react";
import "./ClientComponent.css";

const ClientComponent = () => {
  const clients = [
    "8x8.png",
    "Adobe.png",
    "AWS.png",
    "aviso.png",
    "Blancco.png",
    "cisco.png",
    "Commvault.png",
    "crestron.png",
    "Databricks Logo.png",
    "Datarade logo.png",
    "equinix.png",
    "FICO.png",
    "kyndryl.png",
    "NEUDATA.png",
    "nice.png",
    "PATHOS.png",
    "SAP Marketplace.png",
    "singtel.png",
    "starhub.png",
    "SentinelOne.png",
    "twilio.png",
  ];

  const marqueeClients = [...clients, ...clients];

  return (
    <section className="ppd-gtm-trust">
      <div className="ppd-gtm-trust-header">
        <span className="ppd-gtm-trust-eyebrow">
          TRUSTED BY LEADING COMPANIES
        </span>
        <h2 className="ppd-gtm-trust-title">
          Trusted by teams building the future
        </h2>
      </div>
      <div className="ppd-gtm-trust-marquee">
        <div className="ppd-gtm-trust-track">
          {marqueeClients.map((client, index) => (
            <div
              className="ppd-gtm-trust-item"
              key={`${client}-${index}`}
              aria-hidden={index >= clients.length ? "true" : undefined}
            >
              <img
                src={`/assets/images/brand/${client}`}
                alt={index >= clients.length ? "" : client.replace(".png", "")}
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientComponent;
