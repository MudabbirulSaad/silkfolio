interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Techology extends SanityBody {
  _type: 'skills';
  image: Image;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: 'skills';
  image: Image;
  progress: number;
  title: string;
}

export interface Experiences extends SanityBody {
  _type: 'experiences';
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Techology[];
}

export interface Project extends SanityBody {
  title: string;
  _type: 'projects';
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Techology[];
}

export interface Socials extends SanityBody {
  _type: 'socials';
  title: string;
  url: string;
}
