export interface Product {
  id: string;
  active: boolean;
  type: string;
  name: string;
  description: string;
  images: any;
  role: string;
  stripe_metadata_productType: string;
  stripe_metadata_firebasePlan?: string;
  stripe_metadata_firebaseSubType?: string;
}
