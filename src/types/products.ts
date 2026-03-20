export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;

  dimensions: {
    width: number;
    height: number;
    depth: number;
  };

  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;

  reviews: Review[];

  returnPolicy: string;
  minimumOrderQuantity: number;

  meta: Meta;

  images: string[];
  thumbnail: string;
};

export type Review = {
  rating: number;
  comment: string;
  date: string; // puedes usar Date si luego lo parseas
  reviewerName: string;
  reviewerEmail: string;
};

export type Meta = {
  createdAt: string; // o Date
  updatedAt: string; // o Date
  barcode: string;
  qrCode: string;
};