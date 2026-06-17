/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  imageUrl: string;
  details: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  credentials?: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  content: string;
  petName?: string;
  petType?: string;
}

export interface WellnessPlan {
  id: string;
  name: string;
  target: string;
  priceMonthly: string;
  priceYearly: string;
  features: string[];
  description: string;
  includesDental: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export interface OpenPosition {
  id: string;
  title: string;
  department: string;
  type: string;
  description: string;
  requirements: string[];
}
