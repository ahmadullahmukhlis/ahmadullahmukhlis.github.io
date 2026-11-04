/**
 * Selected, genuine Google Business Profile review excerpts provided by
 * the MSS business owner on 4 November 2026.
 * Only the three requested reviewers are displayed in the portfolio.
 * The first two quotes are shortened verbatim excerpts; the last is complete.
 * No unverified stars, dates or quotes are added.
 */
export type GoogleReview = {
  id: string;
  name: string;
  initials: string;
  text: string;
  excerpt?: boolean;
};

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps?cid=5007930972502664073";

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "hamdullah-hamdard",
    name: "Hamdullah Hamdard",
    initials: "HH",
    text: "I had a great experience with Mukhlis Software Solutions. Their team is professional, responsive, and really knows what they’re doing.…",
    excerpt: true,
  },
  {
    id: "samiullah-samim",
    name: "Samiullah samim",
    initials: "SS",
    text: "Excellent experience with Mukhlis Software Solutions! Their team is highly professional, responsive, and skilled.…",
    excerpt: true,
  },
  {
    id: "fazalhaq-fazel",
    name: "Fazalhaq Fazel",
    initials: "FF",
    text: "Impressive work and strong business vision. Wishing you even greater success ahead.",
  },
];
