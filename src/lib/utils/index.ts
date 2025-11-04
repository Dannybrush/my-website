
export function formatPhoneNumber(phone: string): string {
  // UK phone number formatting
  return phone.replace(/\D/g, '').replace(/(\d{5})(\d{3})(\d{3})/, '$1 $2 $3');
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function generateSchema(type: 'organization' | 'service') {
  if (type === 'organization') {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Daniel Broomhead Web Development',
      description: 'Professional web development services for small businesses in Reading, Shinfield, and Berkshire',
      url: 'https://broomhead.co.uk',
      telephone: '+44-YOUR-NUMBER',
      email: 'daniel@broomhead.co.uk',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Reading',
        addressRegion: 'Berkshire',
        addressCountry: 'GB'
      },
      areaServed: [
        { '@type': 'City', name: 'Reading' },
        { '@type': 'City', name: 'Shinfield' },
        { '@type': 'State', name: 'Berkshire' }
      ],
      priceRange: '££',
      openingHours: 'Mo-Fr 09:00-18:00'
    };
  }
  return {};
}