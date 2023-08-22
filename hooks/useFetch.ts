import axios from "axios";
import { useState, useEffect } from "react";
import { RAPID_API_KEY } from "../constants";
import { Alert } from "react-native";
import { JobPosting, JobPostingResponse } from "../interfaces/Jobs";
interface Props {
  endpoint: string;
  query: {
    query?: string;
    num_pages?: number;
    page?: number;
    job_id?: number;
  };
}
const useFetch = ({ endpoint, query }: Props) => {
  const [data, setData] = useState<JobPosting[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": "7dd9f4a65fmshe8b502726e62457p16c6dcjsn3437e81ec1b5",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      // const response = await axios.request<JobPostingResponse>(options);

      // New Data
      setData([
        {
          employer_name: "Full-Stack Developer",
          employer_logo:
            "https://www.assuresoft.com/themes/custom/jango_sub/logo.png",
          employer_website: null,
          employer_company_type: "Information",
          job_publisher: "LinkedIn",
          job_id: "8yv3oA_2-UYAAAAAAAAAAA==",
          job_employment_type: "Remote",
          job_title: "3 years of experience - Semi Senior",
          job_apply_link:
            "https://www.linkedin.com/jobs/view/web-developer-6-month-contract-houston-hybrid-at-dice-3624857671",
          job_apply_is_direct: false,
          job_apply_quality_score: 0.5805,
          job_description:
            "AssureSoft is a multinational software development and information technology company that provides strategic consulting, technology services and business process outsourcing. We work with the mission of innovating and creating quality software with motivated, passionate and qualified teams that develop in an environment of professional, stable growth and continuous learning.\n\nBenefits\n\n- Great Place To Work Certification.\n- Company with more than 15 years of experience.\n- Work with world-class clients and long-term projects.\n- English scholarships with an external institute. \n- English classes with company teachers.\n- Avant-garde tools and resources.\n- Certifications for your professional growth.\n- Recreation and leisure activities.\n- Compliance with regulations and labor rights of your region.",
          job_is_remote: true,
          job_posted_at_timestamp: 1685653019,
          job_posted_at_datetime_utc: "2023-06-01T20:56:59.000Z",
          job_city: "Houston",
          job_state: "TX",
          job_country: "Remote",
          job_latitude: 29.760427,
          job_longitude: -95.369804,
          job_benefits: null,
          job_google_link:
            "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=8yv3oA_2-UYAAAAAAAAAAA%3D%3D",
          job_offer_expiration_datetime_utc: "2023-07-01T20:56:59.000Z",
          job_offer_expiration_timestamp: 1688245019,
          job_required_experience: {
            no_experience_required: false,
            required_experience_in_months: null,
            experience_mentioned: true,
            experience_preferred: false,
          },
          job_required_skills: null,
          job_required_education: {
            postgraduate_degree: false,
            professional_certification: false,
            high_school: false,
            associates_degree: false,
            bachelors_degree: true,
            degree_mentioned: false,
            degree_preferred: false,
            professional_certification_mentioned: false,
          },
          job_experience_in_place_of_education: false,
          job_min_salary: null,
          job_max_salary: "3.000$",
          job_salary_currency: null,
          job_salary_period: null,
          job_highlights: {
            Qualifications: [
              "Experience with JavaScript, ES6 modules.",
              "Experience with TypeScript and ReactJS",
              "Strong knowledge of NodeJS and GraphQL/Apollo",
              "Good command of HTML, CSS and SCSS",
              "Desirable: Experience with Heroku, AWS, GCP or Netlifly",
              "Advanced English.",
            ],
            Responsibilities: [
              "Analyze and understand the requirements of software products.",
              "Write clear, maintainable, and testable source code.",
              "Correct existing defects in software products.",
              "Define and meet time estimates for assigned tasks.",
              "Create documentation and design diagrams for identified solutions to software problems.",
              "Collaborate with other software engineers in the definition, design and implementation of solutions and functionalities.",
              "Attend and actively participate in project team meetings.",
              "Provide clear and timely status reports on assigned tasks.",
              "Maintain constant research and constant learning of new development tools and programming techniques.",
              "Be independent and proactive in carrying out tasks.",
            ],
          },
          job_job_title: null,
          job_posting_language: "en",
          job_onet_soc: "15113400",
          job_onet_job_zone: "3",
          job_naics_code: "519130",
          job_naics_name:
            "Internet Publishing and Broadcasting and Web Search Portals",
        },
        {
          employer_name: "DevOps Engineer Senior",
          employer_logo:
            "https://www.assuresoft.com/themes/custom/jango_sub/logo.png",
          employer_website: "http://www.schwab.com",
          employer_company_type: "Finance",
          job_publisher: "Schwab Jobs",
          job_id: "G6qYxpAYyVsAAAAAAAAAAA==",
          job_employment_type: "Remote",
          job_title: "DevOps Engineer Senior - 6+ years experience",
          job_apply_link:
            "https://www.schwabjobs.com/job/austin/software-web-developer/33727/48110146896",
          job_apply_is_direct: false,
          job_apply_quality_score: 0.8104,
          job_description:
            "Your Opportunity\n\nWe help our clients plan for their future and they are passionate about the tools and experiences we provide. We collaborate with user experience and design, business and technology partners across the enterprise to build software experiences our users’ are passionate about.\nWhat you are good at\n\nWebsite and Electronic Communications (Email, Push, SMS, etc) Templates designing, building, or maintaining. Using scripting or authoring languages, management tools, content creation tools, applications and digital media. Conferring with teams in resolving conflicts, prioritizing needs, developing content criteria, or choosing solutions. Directing or performing Website/Electronic Communications updates. Developing or validating test routines and schedules in ensuring that test cases mimic external interfaces and address all browser and device types. Editing, writing, or designing Website content, and directing team members who produce content. Maintaining an understanding of the latest Web applications and programming practices through education, studying, and participating in conferences, workshops, and groups. Identifying problems uncovered by customer feedback and testing and correcting or referring problems to appropriate personnel for correction. Evaluating code in ensuring that it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems; and Determining user needs by analyzing technical requirements.\nWhat you have\n\nJob Requirements: Bachelor’s degree or foreign degree equivalent in Computer Science, Engineering or related field and five (5) years of experience in the job offered or related role. Skills: Experience and/or education must include: Experience in programming applications using HTML, JavaScript, CSS, Angular/React Js, XML and Json.; SQL/No-SQL databases; Experience working with the continuous integration and continuous deployment (CI/CD) pipelines; Experience in programming applications using Java/J2EE; Understanding of software quality assurance principles; Experience working in Agile teams.\n\nCharles Schwab & Company, Inc. seeks Software Web Developer in Austin, TX.",
          job_is_remote: false,
          job_posted_at_timestamp: 1682726400,
          job_posted_at_datetime_utc: "2023-04-29T00:00:00.000Z",
          job_city: "Austin",
          job_state: "TX",
          job_country: "Remote",
          job_latitude: 30.267153,
          job_longitude: -97.74306,
          job_benefits: null,
          job_google_link:
            "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=G6qYxpAYyVsAAAAAAAAAAA%3D%3D",
          job_offer_expiration_datetime_utc: null,
          job_offer_expiration_timestamp: null,
          job_required_experience: {
            no_experience_required: false,
            required_experience_in_months: 60,
            experience_mentioned: true,
            experience_preferred: false,
          },
          job_required_skills: null,
          job_required_education: {
            postgraduate_degree: false,
            professional_certification: false,
            high_school: false,
            associates_degree: false,
            bachelors_degree: false,
            degree_mentioned: true,
            degree_preferred: false,
            professional_certification_mentioned: false,
          },
          job_experience_in_place_of_education: false,
          job_min_salary: null,
          job_max_salary: "2.500 $",
          job_salary_currency: null,
          job_salary_period: null,
          job_highlights: {
            Qualifications: [
              "Job Requirements: Bachelor’s degree or foreign degree equivalent in Computer Science, Engineering or related field and five (5) years of experience in the job offered or related role",
              "Skills: Experience and/or education must include: Experience in programming applications using HTML, JavaScript, CSS, Angular/React Js, XML and Json.; SQL/No-SQL databases; Experience working with the continuous integration and continuous deployment (CI/CD) pipelines; Experience in programming applications using Java/J2EE; Understanding of software quality assurance principles; Experience working in Agile teams",
            ],
            Responsibilities: [
              "Directing or performing Website/Electronic Communications updates",
              "Developing or validating test routines and schedules in ensuring that test cases mimic external interfaces and address all browser and device types",
              "Editing, writing, or designing Website content, and directing team members who produce content",
              "Maintaining an understanding of the latest Web applications and programming practices through education, studying, and participating in conferences, workshops, and groups",
              "Identifying problems uncovered by customer feedback and testing and correcting or referring problems to appropriate personnel for correction",
              "Evaluating code in ensuring that it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems; and Determining user needs by analyzing technical requirements",
            ],
          },
          job_job_title: null,
          job_posting_language: "en",
          job_onet_soc: "15113400",
          job_onet_job_zone: "3",
          job_naics_code: "523920",
          job_naics_name: "Portfolio Management",
        },
      ]);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      Alert.alert("There is an error" + error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default useFetch;
