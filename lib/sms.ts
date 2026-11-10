import { PRACTICE_NAME } from './site'

/**
 * TEXT MESSAGING (SMS) PROGRAM — the one place it is described.
 *
 * Carrier (A2P 10DLC) review compares the opt-in wording on the registration
 * form with the Terms & Conditions and the Privacy Policy. If they disagree —
 * a message type listed in one place and not another — the campaign is
 * rejected. So every page that describes the program reads from here.
 *
 * No marketing or promotional messages are listed. If the practice later
 * wants to send them, they need their own separate consent checkbox, and the
 * texting platform's campaign registration has to change too.
 */
export const smsProgram = {
  name: `${PRACTICE_NAME} Patient Text Messages`,

  messageTypes: [
    'Appointment reminders and confirmations',
    'Scheduling updates, such as rescheduled or cancelled appointments',
    'Pre-visit instructions and care follow-up',
    'Prescription and refill coordination',
    'Billing, payment and account notices',
    'Office notices, such as closures or changed hours',
  ],

  frequency: 'Message frequency varies with your appointments, account activity and communication with our office.',

  rates: 'Message and data rates may apply.',

  optOutKeywords: ['STOP', 'END', 'CANCEL', 'UNSUBSCRIBE', 'QUIT'],

  /** The exact wording beside the opt-in checkbox. */
  consentLabel: `I agree to receive text messages from ${PRACTICE_NAME} about my appointments, care follow-up, prescriptions, and billing or account updates at the mobile number provided. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of treatment.`,

  /** Printed directly under the checkbox, and repeated in both policies. */
  privacyStatement:
    'Your mobile number and text messaging consent will not be sold or shared with third parties or affiliates for marketing or promotional purposes.',
} as const
