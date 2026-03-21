// Defines the cascading relationship between Degree → Branch → Specialization.

export const ACADEMIC_MAP = {
  'B.Tech': {
    CSE: ['Core', 'AIML', 'Data Science', 'Cloud Computing', 'Cyber Security', 'IoT', 'Software Engineering', 'E-Commerce Technology', 'Education Technology', 'Gaming Technology', 'Health Informatics'],
    ECE: ['Core', 'VLSI', 'Embedded Systems', 'Signal Processing', 'IoT', 'Robotics'],
    Electrical: ['Core', 'Power Systems', 'Control Systems', 'Power Electronics', 'Renewable Energy'],
    Mechanical: ['Core', 'Thermal', 'Manufacturing', 'Robotics', 'CAD/CAM', 'Mechatronics'],
    Civil: ['Core', 'Structural', 'Environmental', 'Transportation', 'Geotechnical', 'Construction Management'],
    Chemical: ['Core', 'Petrochemical', 'Process Engineering', 'Polymer Science'],
    IT: ['Core', 'Information Security', 'Full Stack Development', 'Mobile Computing'],
    Aerospace: ['Core', 'Aerodynamics', 'Propulsion', 'Avionics'],
    Biotech: ['Core', 'Bioinformatics', 'Genetic Engineering'],
  },
  'M.Tech': {
    CSE: ['Core', 'AIML', 'Data Science', 'Cloud Computing', 'Cyber Security', 'Image Processing'],
    ECE: ['Core', 'VLSI', 'Embedded Systems', 'Signal Processing', 'Wireless Communication'],
    Electrical: ['Core', 'Power Systems', 'Control Systems', 'Instrumentation'],
    Mechanical: ['Core', 'Thermal', 'Manufacturing', 'Robotics', 'Machine Design'],
    Civil: ['Core', 'Structural', 'Environmental', 'Hydraulics'],
  },
  'B.Sc': {
    'Computer Science': ['Core', 'Data Science', 'Software Development', 'Web Tech'],
    Physics: ['Core', 'Applied Physics', 'Electronics', 'Astrophysics'],
    Chemistry: ['Core', 'Organic Chemistry', 'Analytical Chemistry', 'Biochemistry'],
    Mathematics: ['Core', 'Applied Mathematics', 'Statistics', 'Actuarial Science'],
    Biotechnology: ['Core', 'Microbiology', 'Genetics', 'Food Tech'],
    'Agriculture': ['Core', 'Agronomy', 'Horticulture', 'Soil Science'],
    'Nursing': ['Core', 'Surgical', 'Pediatric', 'Psychiatric'],
  },
  'M.Sc': {
    'Computer Science': ['Core', 'Data Science', 'AI', 'Cyber Security'],
    Physics: ['Core', 'Nuclear Physics', 'Quantum Mechanics'],
    Chemistry: ['Core', 'Organic', 'Inorganic', 'Physical'],
    Mathematics: ['Core', 'Pure Math', 'Statistics', 'Computational Math'],
    Biotechnology: ['Core', 'Microbiology', 'Bioinformatics'],
  },
  'B.Com': {
    'General': ['Core', 'Accounting', 'Finance', 'E-Commerce'],
    'Honours': ['Core', 'Banking', 'Insurance', 'Taxation', 'Auditing'],
    'Computer Applications': ['Core', 'Digital Marketing', 'Business Analytics'],
  },
  'BBA': {
    'General': ['Core', 'Marketing', 'Finance', 'HR', 'Operations'],
    'International Business': ['Core', 'Import/Export', 'Global Marketing', 'Supply Chain'],
    'Business Analytics': ['Core', 'Data Visualization', 'Big Data'],
    'Digital Marketing': ['Core', 'SEO', 'Content Strategy'],
  },
  'MBA': {
    'General': ['Core', 'Marketing', 'Finance', 'HR', 'Operations', 'Strategy'],
    'Finance': ['Core', 'Investment Banking', 'Corporate Finance', 'FinTech'],
    'Marketing': ['Core', 'Digital Marketing', 'Brand Management', 'Market Research'],
    'Business Analytics': ['Core', 'Data Driven Decision Making', 'Optimization'],
  },
  'BCA': {
    'General': ['Core', 'Web Development', 'App Development', 'Cloud Computing', 'UI/UX'],
  },
  'MCA': {
    'General': ['Core', 'Full Stack Development', 'Data Science', 'Cloud Computing', 'Machine Learning'],
  },
  'Design (B.Des)': {
    'User Experience': ['Core', 'Interaction Design', 'Visual Design'],
    'Graphic Design': ['Core', 'Typography', 'Branding'],
    'Fashion Design': ['Core', 'Textiles', 'Apparel'],
    'Product Design': ['Core', 'Industrial Design', 'UI/UX'],
  },
  'Medicine (MBBS)': {
    'General': ['Core', 'Pre-clinical', 'Para-clinical', 'Clinical'],
  },
  'Law (LLB)': {
    'Corporate Law': ['Core', 'Mergers & Acquisitions', 'Intellectual Property'],
    'Criminal Law': ['Core', 'Forensics', 'Litigation'],
    'Civil Law': ['Core', 'Family Law', 'Property Law'],
  },
  'B.Arch': {
    'Architecture': ['Core', 'Urban Planning', 'Interior Design', 'Landscape Architecture'],
  }
};
