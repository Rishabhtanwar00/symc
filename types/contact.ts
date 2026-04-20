// ─── Contact Form ─────────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  dob: string; // date of birth - ISO string YYYY-MM-DD
  service: string; // selected service interest
  message: string;
}

// What gets saved to Firestore (form data + metadata)
export interface ContactSubmission extends ContactFormData {
  id?: string; // Firestore doc id
  createdAt: string; // ISO timestamp
  source: string; // 'contact_page' | 'popup' | 'cta_banner'
  status: "new" | "read" | "replied";
}

// API route response
export interface ContactApiResponse {
  success: boolean;
  message: string;
  id?: string; // Firestore doc id on success
}
