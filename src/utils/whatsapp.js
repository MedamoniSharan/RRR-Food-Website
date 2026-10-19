import { business } from '../data/business'
import { weightLabels } from '../data/products'

export function formatINR(n) {
  return `₹${n.toLocaleString('en-IN')}`
}

export function buildOrderMessage({ items, total, customer }) {
  const lines = [
    `*New Order — ${business.name}*`,
    '',
    `Name: ${customer.name}`,
    `Phone: ${customer.phone}`,
    customer.email ? `Email: ${customer.email}` : null,
    customer.address ? `Address: ${customer.address}` : null,
    customer.date ? `Preferred date: ${customer.date}` : null,
    customer.notes ? `Notes: ${customer.notes}` : null,
    '',
    '*Items*',
    ...items.map((i) => {
      const vary = i.priceVaries ? '*' : ''
      return `• ${i.name} (${weightLabels[i.weight]}) × ${i.qty} — ${formatINR(i.unitPrice * i.qty)}${vary}`
    }),
    '',
    `*Total: ${formatINR(total)}*`,
    '_Delivery charges also apply (confirmed separately)._',
    items.some((i) => i.priceVaries)
      ? '_* Prices marked may vary; final amount confirmed on call._'
      : null,
    '',
    'Please confirm availability, delivery charges, and payment.',
  ].filter(Boolean)

  return lines.join('\n')
}

export function buildBookingMessage(form) {
  const lines = [
    `*Service Booking — ${business.name}*`,
    '',
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    form.email ? `Email: ${form.email}` : null,
    `Service: ${form.service}`,
    form.date ? `Preferred date: ${form.date}` : null,
    form.guests ? `Guests / quantity: ${form.guests}` : null,
    form.address ? `Location: ${form.address}` : null,
    form.notes ? `Details: ${form.notes}` : null,
    '',
    'Please confirm availability and service charges.',
  ].filter(Boolean)

  return lines.join('\n')
}

export function openWhatsApp(message) {
  const url = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}
