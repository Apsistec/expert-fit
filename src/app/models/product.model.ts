export interface Product {
  id: string;
  name: string;
  images: string[];
  description: string;
  role: string;
  stripe_metadata_productType?: string;
  stripe_metadata_firebaseSubType?: string;
  stripe_metadata_firebasePlan?: string;
  // price: Price;
}
