/**
 * Google Business Profile review excerpts supplied by the MSS business owner
 * on 2026-11-04. Only source-supplied reviewer names and wording are used.
 *
 * Google truncated three reviews with "More"; their text below is an excerpt,
 * not a fabricated completion. No star ratings were supplied.
 */
export type GoogleReview = {
  id: string;
  name: string;
  initials: string;
  text: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  date?: string;
  excerpt?: boolean;
};

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps?cid=5007930972502664073";

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "mosawer-hessabi-1",
    name: "mosawer hessabi",
    initials: "MH",
    text: "Excellent experience with Mukhlis Software Solutions! Their team is professional, responsive, and highly skilled. They understand requirements well, deliver quality solutions, and provide great support throughout the process. Highly recommended for reliable and professional software services.",
  },
  {
    id: "hamdullah-hamdard-1",
    name: "Hamdullah Hamdard",
    initials: "HH",
    text: "I had a great experience with Mukhlis Software Solutions. Their team is professional, responsive, and really knows what they’re doing. They understood our requirements well, delivered a quality solution, and provided excellent support …",
    excerpt: true,
  },
  {
    id: "university-my-1",
    name: "university my",
    initials: "UM",
    text: "Mukhlis Software Solution provides professional and reliable software development services. Their team works on web applications, mobile apps, desktop software, business management systems, ERP solutions, and custom software for different …",
    excerpt: true,
  },
  {
    id: "hamdullah-hamdard-2",
    name: "Hamdullah Hamdard",
    initials: "HH",
    text: "Best software solution",
  },
  {
    id: "samiullah-samim-1",
    name: "Samiullah samim",
    initials: "SS",
    text: "Excellent experience with Mukhlis Software Solutions! Their team is highly professional, responsive, and skilled. They understood our requirements perfectly, delivered a high-quality solution, and provided exceptional support throughout the …",
    excerpt: true,
  },
  {
    id: "fazalhaq-fazel-1",
    name: "Fazalhaq Fazel",
    initials: "FF",
    text: "Impressive work and strong business vision. Wishing you even greater success ahead.",
  },
];
