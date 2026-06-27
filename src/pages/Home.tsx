import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";

const Home = () => {
  useEffect(() => {
    // Structured data for Dentist
    const dentistSchema = {
      "@context": "https://schema.org",
      "@type": "Dentist",
      name: "Green Smile Clínica Odontológica",
      image: "https://lovable.dev/opengraph-image.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Paulista, 1000",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        postalCode: "01310-100",
        addressCountry: "BR",
      },
      telephone: "+5511970604418",
      email: "contato@greensmile.com.br",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "13:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "27",
      },
      sameAs: [
        "https://instagram.com/greensmile",
        "https://facebook.com/greensmile",
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Qual é o horário de atendimento?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Atendemos de segunda a sexta das 8h às 18h, e aos sábados das 8h às 13h.",
          },
        },
        {
          "@type": "Question",
          name: "Aceitam convênios?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim, trabalhamos com os principais convênios odontológicos. Entre em contato para mais informações.",
          },
        },
        {
          "@type": "Question",
          name: "Fazem implantes dentários?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim, somos especializados em implantes dentários com tecnologia de ponta e carga imediata.",
          },
        },
      ],
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: window.location.origin,
        },
      ],
    };

    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.text = JSON.stringify(dentistSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.text = JSON.stringify(faqSchema);
    document.head.appendChild(script2);

    const script3 = document.createElement("script");
    script3.type = "application/ld+json";
    script3.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script3);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Green Smile – Clínica Odontológica em São Paulo</title>
        <meta
          name="description"
          content="Clínica odontológica em São Paulo: implantes, ortodontia e estética dental. Agende sua consulta: (11) 97060-4418."
        />
        <link rel="canonical" href={window.location.origin + "/"} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Green Smile – Clínica Odontológica em São Paulo" />
        <meta property="og:description" content="Implantes, Ortodontia e Estética Dental com tecnologia de ponta" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.origin + "/"} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Green Smile – Clínica Odontológica" />
        <meta name="twitter:description" content="Implantes, Ortodontia e Estética Dental" />
      </Helmet>

      <main role="main">
        <Hero />
        <Services />
        <Gallery />
        <ContactForm />
      </main>
    </>
  );
};

export default Home;
