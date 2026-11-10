import { BUSINESS_NAME, EMAIL, HOURS, LOCATIONS, PHONE, PRACTICE_NAME, SITE_DOMAIN } from './site'
import { smsProgram } from './sms'

/**
 * Copy for the Privacy Policy and Terms & Conditions.
 *
 * Both exist chiefly because the texting-platform carrier review requires
 * them, so their SMS sections follow the CTIA / A2P 10DLC disclosure set and
 * draw their wording from lib/sms.ts. Everything they say about the website
 * describes how this site actually behaves — Vercel Web Analytics, the
 * contact form that hands off to email, the registration form that never
 * submits. If any of that changes, this file has to change with it.
 *
 * The practice's compliance contact should read both before submission;
 * record that review by updating `lastUpdated`.
 */

export type LegalSection = {
  id: string
  heading: string
  paragraphs?: string[]
  list?: string[]
  /** Copy that follows the list. */
  closing?: string[]
  links?: { label: string; href: string }[]
}

export type LegalDoc = {
  eyebrow: string
  title: string
  intro: string
  lastUpdated: string
  sections: LegalSection[]
}

const office = LOCATIONS[0]
const mailingAddress = `${BUSINESS_NAME}, ${office.street}, ${office.region}`
const contactLine = `call ${PHONE} (${HOURS}) or email ${EMAIL}`

export const privacyPolicy: LegalDoc = {
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  intro: `How ${PRACTICE_NAME} collects, uses and protects information through this website, our patient registration form and our text messaging program.`,
  lastUpdated: 'November 11, 2026',
  sections: [
    {
      id: 'about',
      heading: 'About this policy',
      paragraphs: [
        `${BUSINESS_NAME} ("${PRACTICE_NAME}", "we", "us" or "our") operates ${SITE_DOMAIN} and clinics in ${LOCATIONS.map((l) => l.city).join(', ').replace(/, ([^,]*)$/, ' and $1')}, California. This policy explains what information we collect through the website, the patient registration form and our text messaging program, how we use it, and the choices you have.`,
        'Health information you share with us as a patient is also protected by HIPAA and California law. Our Notice of Privacy Practices, which we give you at your first visit and which is available from our office on request, describes how we may use and disclose that information and your rights over it. Where the two differ, the Notice of Privacy Practices governs your health information.',
      ],
    },
    {
      id: 'sms',
      heading: 'Text messaging and mobile privacy',
      paragraphs: [
        'Text messaging is optional. If you opt in, we use your mobile number and consent only to send the types of messages you agreed to receive, which are listed in our Terms & Conditions.',
      ],
      list: [
        smsProgram.privacyStatement,
        'We do not sell, rent or transfer mobile numbers, text messaging opt-in data or consent records to anyone.',
        'Text messaging opt-in data and consent are excluded from every other kind of information sharing described in this policy.',
        'We keep a record of your consent — the date, how you gave it, and the wording you agreed to — so that we can show you opted in.',
        'You can opt out at any time by replying STOP to any message. Reply HELP for help.',
      ],
      links: [{ label: 'Terms & Conditions', href: '/terms' }],
    },
    {
      id: 'collect',
      heading: 'Information we collect',
      paragraphs: [
        'Information you give us. When you register as a patient, you may give us your name, date of birth, address, email address, phone numbers, emergency contact, pharmacy, insurance details and health history. If you opt in to text messages, we also record your mobile number and your consent.',
        'Our online registration form is filled in on your own device and is not sent to us over the internet. You print it or save it and bring it to your visit, and we receive the information when you hand it to our staff.',
        'If you use the contact form on this website, the details you enter — your name, email, phone, preferred clinic and message — reach us by email. Please do not include medical information.',
        'Information collected automatically. We use Vercel Web Analytics to count visits to this website. It does not use cookies and does not identify individual visitors; it records aggregated information such as the page viewed, the referring site, the country, and the device and browser type. Our hosting provider also keeps standard technical logs to keep the site secure and working. We do not use advertising cookies, advertising pixels or third-party tracking.',
      ],
    },
    {
      id: 'use',
      heading: 'How we use information',
      list: [
        'To register you as a patient and provide your care',
        'To schedule, confirm and remind you of appointments',
        'To verify insurance and handle billing and payments',
        'To answer your questions and requests',
        'To send the text messages you have opted in to receive',
        'To run, secure and improve this website',
        'To meet our legal and regulatory obligations',
      ],
    },
    {
      id: 'share',
      heading: 'When we share information',
      paragraphs: ['We do not sell personal information. We share it only as follows:'],
      list: [
        'With service providers who help us run the practice — such as our electronic health record, billing, website hosting and text messaging platforms — who must protect it and, where they handle health information, have signed a Business Associate Agreement with us',
        'With your health plan, pharmacy or other providers as needed for your treatment and payment, as described in our Notice of Privacy Practices',
        'When the law requires it, or to protect the rights, safety or property of our patients, staff or others',
        'With your permission',
      ],
      closing: ['None of this applies to text messaging opt-in data and consent, which are never shared with third parties.'],
    },
    {
      id: 'links',
      heading: 'Links to other sites',
      paragraphs: [
        'This website links to other services, such as Google Maps for directions and our Facebook page. Those services have their own privacy policies, and we are not responsible for how they handle your information.',
      ],
    },
    {
      id: 'security',
      heading: 'Security and retention',
      paragraphs: [
        'We use administrative, technical and physical safeguards designed to protect your information, including encrypted connections to this website. No method of sending or storing information is completely secure, so please do not send medical details by email or through the contact form.',
        'We keep information for as long as we need it to provide care and as medical-record laws require. Text messaging consent records are kept for as long as you are enrolled, and for a period afterwards as required to show consent.',
      ],
    },
    {
      id: 'rights',
      heading: 'Your choices and rights',
      list: [
        'Opt out of text messages at any time by replying STOP, or by telling our office',
        'Ask us to update or correct your contact details',
        'Ask for access to, or a copy of, your medical records',
        'Ask how your information has been used or shared',
      ],
      closing: [`To make any of these requests, ${contactLine}.`],
    },
    {
      id: 'children',
      heading: 'Children',
      paragraphs: [
        `${PRACTICE_NAME} is an adults-only practice. This website is not directed to children under 13, and we do not knowingly collect information from them.`,
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to this policy',
      paragraphs: [
        'We may update this policy from time to time. The "last updated" date at the top of this page shows when it last changed. We will not apply a material change to how we handle text messaging data without your consent.',
      ],
    },
    {
      id: 'contact',
      heading: 'Contact us',
      paragraphs: [`For questions about this policy or your information, ${contactLine}, or write to ${mailingAddress}.`],
      links: [{ label: 'Contact & locations', href: '/contact' }],
    },
  ],
}

export const terms: LegalDoc = {
  eyebrow: 'Legal',
  title: 'Terms & Conditions',
  intro: `The terms for using this website and for ${smsProgram.name}, our text messaging program.`,
  lastUpdated: 'November 11, 2026',
  sections: [
    {
      id: 'sms-program',
      heading: 'Text messaging program',
      paragraphs: [
        `${smsProgram.name} sends patients information about their appointments, care and accounts with ${PRACTICE_NAME}.`,
        'Text messaging is optional. You enrol by checking the text messaging consent box on our patient registration form, or by giving consent to our staff. Consent is not a condition of treatment, of purchase or of receiving any service, and you can say no to texts and remain a patient. You will only receive the types of messages listed below.',
      ],
      links: [{ label: 'Patient registration form', href: '/patient-registration' }],
    },
    {
      id: 'message-types',
      heading: 'Types of messages',
      list: [...smsProgram.messageTypes],
      closing: ['We do not send marketing or promotional text messages through this program.'],
    },
    { id: 'frequency', heading: 'Message frequency', paragraphs: [smsProgram.frequency] },
    {
      id: 'rates',
      heading: 'Message and data rates',
      paragraphs: [`${smsProgram.rates} Contact your wireless carrier for details of your plan. ${PRACTICE_NAME} does not charge for text messages.`],
    },
    {
      id: 'opt-out',
      heading: 'How to opt out',
      paragraphs: [
        `Reply STOP to any message to stop receiving texts. You can also reply ${smsProgram.optOutKeywords.slice(1).join(', ')}. You will receive one final message confirming you have been unsubscribed, and no further messages after that. To rejoin, reply START or ask our office.`,
      ],
    },
    {
      id: 'help',
      heading: 'How to get help',
      paragraphs: [`Reply HELP to any message for help, or ${contactLine}.`],
    },
    {
      id: 'carriers',
      heading: 'Carrier disclaimer',
      paragraphs: [
        'Wireless carriers are not liable for delayed or undelivered messages. Delivery depends on your carrier and device and is not guaranteed.',
      ],
    },
    {
      id: 'privacy',
      heading: 'Privacy',
      paragraphs: [`${smsProgram.privacyStatement} Our Privacy Policy explains how we collect, use and protect your information.`],
      links: [{ label: 'Privacy Policy', href: '/privacy-policy' }],
    },
    {
      id: 'emergencies',
      heading: 'Not for emergencies',
      paragraphs: [
        'Do not use text messages for medical emergencies or urgent medical questions. For urgent or emergency care, go to the nearest emergency room or call 911.',
      ],
    },
    {
      id: 'medical',
      heading: 'Medical disclaimer',
      paragraphs: [
        'The content of this website is general information, not medical advice, diagnosis or treatment. Using the website, or contacting us through it, does not create a doctor–patient relationship.',
      ],
    },
    {
      id: 'appointments',
      heading: 'Appointments',
      paragraphs: [
        `Appointments are booked by calling ${PHONE}, and are confirmed only when our office confirms them with you. Please do not send medical details by email or through the contact form.`,
      ],
    },
    {
      id: 'website',
      heading: 'Use of this website',
      paragraphs: [
        `You agree to use this website only for lawful purposes and not to interfere with how it works or its security. The text, images, logos and design of this website belong to ${BUSINESS_NAME} or its licensors and may not be copied for commercial use without permission.`,
        'This website links to third-party sites, such as Google Maps and Facebook. We are not responsible for their content or privacy practices.',
      ],
    },
    {
      id: 'liability',
      heading: 'Disclaimer of warranties and limitation of liability',
      paragraphs: [
        `This website is provided "as is", without warranties of any kind. To the fullest extent the law allows, ${BUSINESS_NAME} is not liable for any indirect or consequential damages arising from your use of this website or the text messaging program.`,
      ],
    },
    {
      id: 'law',
      heading: 'Governing law',
      paragraphs: ['These terms are governed by the laws of the State of California, without regard to its conflict-of-law rules.'],
    },
    {
      id: 'changes',
      heading: 'Changes to these terms',
      paragraphs: [
        'We may update these terms from time to time. The "last updated" date at the top of this page shows when they last changed. Continuing to use the website or the text messaging program after a change means you accept the updated terms.',
      ],
    },
    {
      id: 'contact',
      heading: 'Contact us',
      paragraphs: [`Questions about these terms or our text messaging program? Call ${PHONE} or email ${EMAIL}, or write to ${mailingAddress}.`],
      links: [{ label: 'Contact & locations', href: '/contact' }],
    },
  ],
}
