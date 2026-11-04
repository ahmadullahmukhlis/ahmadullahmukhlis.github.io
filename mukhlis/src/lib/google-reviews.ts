/**
 * Public Google Business Profile reviews for Mukhlis Software Solutions.
 *
 * Only copy actual reviews with permission/appropriate attribution.
 * Do not create fictional names, quotes, or ratings. Populate this list
 * from original Google reviews supplied by the business owner.
 * All entries appear on the homepage, using the original testimonial cards.
 */
export type GoogleReview = {
  id: string;
  name: string;
  initials: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date?: string;
};

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps?cid=5007930972502664073";

export const GOOGLE_REVIEWS: GoogleReview[] = [];
