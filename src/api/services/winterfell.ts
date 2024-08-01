import type { Endpoints } from '@/types/axios';

type gstNumber = number;

const endpoints: Endpoints = {
    verifyGstNumber: {
    method: 'GET',
    url: `/jioGst/:gstNumber`,
  },
  sendMobileOtp: {
    method: 'POST ',
    url: '/sendMobileOtp',
  },
  sendEmailOTP: {
    method: 'POST ',
    url: '/sendEmailOTP',
  },
  verifyOTP: {
    method: 'POST ',
    url: '/verifyOTP',
  },
  getAllTenants : {
    method: 'GET',
    url: '/tenants',
  },
  SearchBrand: {
    method: 'GET',
    url: '/master-brand/brand/?brandName=abc',
  },
  getAllBrands : {
    method: 'GET',
    url: '/master-brand/brand',
  },
  createUser : {
    method: 'POST',
    url: '/register',
  },
  getLeadUser : {
    method: 'GET',
    url: '/master-brand/brand',
  },
} as const;

export default endpoints;