export interface JobPosting {
  employer_name: string;
  employer_logo: string;
  employer_website: string | null;
  employer_company_type: string | null;
  job_publisher: string;
  job_id: string;
  job_employment_type: string;
  job_title: string;
  job_apply_link: string;
  job_apply_is_direct: boolean;
  job_apply_quality_score: number;
  job_description: string;
  job_is_remote: boolean;
  job_posted_at_timestamp: number;
  job_posted_at_datetime_utc: string;
  job_city: string;
  job_state: string;
  job_country: string;
  job_latitude: number;
  job_longitude: number;
  job_benefits: any; // Change the type to match actual data if available
  job_google_link: string;
  job_offer_expiration_datetime_utc: string | null;
  job_offer_expiration_timestamp: number | null;
  job_required_experience: any; // Change the type to match actual data if available
  job_required_skills: any; // Change the type to match actual data if available
  job_required_education: any; // Change the type to match actual data if available
  job_experience_in_place_of_education: boolean;
  job_min_salary: number | null;
  job_max_salary: string | null;
  job_salary_currency: string | null;
  job_salary_period: string | null;
  job_highlights: {
    Qualifications: string[];
    Responsibilities: string[];
  };
  job_job_title: any; // Change the type to match actual data if available
  job_posting_language: string;
  job_onet_soc: string;
  job_onet_job_zone: string;
  job_naics_code: string;
  job_naics_name: string;
}

export interface JobPostingResponse {
  data: JobPosting[];
}
