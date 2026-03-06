const collegeDomains = {
    // ── IITs ──────────────────────────────────────────────────────────────────
    'iitb.ac.in':       'Indian Institute of Technology Bombay',
    'iitd.ac.in':       'Indian Institute of Technology Delhi',
    'iitk.ac.in':       'Indian Institute of Technology Kanpur',
    'iitm.ac.in':       'Indian Institute of Technology Madras',
    'iitkgp.ac.in':     'Indian Institute of Technology Kharagpur',
    'iitr.ac.in':       'Indian Institute of Technology Roorkee',
    'iitg.ac.in':       'Indian Institute of Technology Guwahati',
    'iith.ac.in':       'Indian Institute of Technology Hyderabad',
    'iitbhu.ac.in':     'Indian Institute of Technology BHU Varanasi',
    'iitrpr.ac.in':     'Indian Institute of Technology Ropar',
    'iitbbs.ac.in':     'Indian Institute of Technology Bhubaneswar',
    'iitmandi.ac.in':   'Indian Institute of Technology Mandi',
    'iitpkd.ac.in':     'Indian Institute of Technology Palakkad',
    'iitjammu.ac.in':   'Indian Institute of Technology Jammu',
    'iitdh.ac.in':      'Indian Institute of Technology Dharwad',
    'iitbhilai.ac.in':  'Indian Institute of Technology Bhilai',
    'iitgoa.ac.in':     'Indian Institute of Technology Goa',
    'iittirupati.ac.in':'Indian Institute of Technology Tirupati',
    'iitism.ac.in':     'Indian Institute of Technology (ISM) Dhanbad',
    'iitjpgp.ac.in':    'Indian Institute of Technology Jodhpur',
    'iitptn.ac.in':     'Indian Institute of Technology Patna',
    'iitindore.ac.in':  'Indian Institute of Technology Indore',

    // ── IIITs ─────────────────────────────────────────────────────────────────
    // Each IIIT has its own unique subdomain, so no collision is possible.
    'iiit.ac.in':       'International Institute of Information Technology Hyderabad',
    'iiita.ac.in':      'Indian Institute of Information Technology Allahabad',
    'iiitb.ac.in':      'International Institute of Information Technology Bangalore',
    'iiitm.ac.in':      'Indian Institute of Information Technology & Management Gwalior',
    'iiitdmj.ac.in':    'Indian Institute of Information Technology Design & Manufacturing Jabalpur',
    'iiitk.ac.in':      'Indian Institute of Information Technology Kottayam',
    'iiitl.ac.in':      'Indian Institute of Information Technology Lucknow',
    'iiitdwd.ac.in':    'Indian Institute of Information Technology Dharwad',
    'iiitn.ac.in':      'Indian Institute of Information Technology Nagpur',
    'iiitg.ac.in':      'Indian Institute of Information Technology Guwahati',
    'iiitv.ac.in':      'Indian Institute of Information Technology Vadodara',
    'iiitranchi.ac.in': 'Indian Institute of Information Technology Ranchi',
    'iiitkalyani.ac.in':'Indian Institute of Information Technology Kalyani',
    'iiitp.ac.in':      'Indian Institute of Information Technology Pune',
    'iiitbh.ac.in':     'Indian Institute of Information Technology Bhagalpur',
    'iiitsurat.ac.in':  'Indian Institute of Information Technology Surat',
    'iiitkottayam.ac.in':'Indian Institute of Information Technology Kottayam',
    'iiit-bh.ac.in':    'Indian Institute of Information Technology Bhopal',
    'iiitdmkl.ac.in':   'Indian Institute of Information Technology Design & Manufacturing Kancheepuram',

    // ── NITs ──────────────────────────────────────────────────────────────────
    'nitj.ac.in':       'Dr B R Ambedkar National Institute of Technology Jalandhar',
    'nitk.ac.in':       'National Institute of Technology Karnataka Surathkal',
    'nitt.edu':         'National Institute of Technology Tiruchirappalli',
    'nitw.ac.in':       'National Institute of Technology Warangal',
    'nitsri.ac.in':     'National Institute of Technology Srinagar',
    'mnit.ac.in':       'Malaviya National Institute of Technology Jaipur',
    'vnit.ac.in':       'Visvesvaraya National Institute of Technology Nagpur',
    'nitp.ac.in':       'National Institute of Technology Patna',
    'nitrr.ac.in':      'National Institute of Technology Raipur',
    'nitdgp.ac.in':     'National Institute of Technology Durgapur',
    'nita.ac.in':       'National Institute of Technology Agartala',
    'nitm.ac.in':       'National Institute of Technology Manipur',
    'nitmz.ac.in':      'National Institute of Technology Mizoram',
    'nitnagaland.ac.in':'National Institute of Technology Nagaland',
    'nitsikkim.ac.in':  'National Institute of Technology Sikkim',
    'nitandhra.ac.in':  'National Institute of Technology Andhra Pradesh',
    'nitdelhi.ac.in':   'National Institute of Technology Delhi',
    'nitgoa.ac.in':     'National Institute of Technology Goa',
    'nitpuducherry.ac.in':'National Institute of Technology Puducherry',
    'nituk.ac.in':      'National Institute of Technology Uttarakhand',
    'svnit.ac.in':      'Sardar Vallabhbhai National Institute of Technology Surat',
    'mnnit.ac.in':      'Motilal Nehru National Institute of Technology Allahabad',

    // ── Deemed / Private ──────────────────────────────────────────────────────
    'bits-pilani.ac.in':'Birla Institute of Technology and Science, Pilani',
    'bitsathy.ac.in':   'Birla Institute of Technology and Science, Pilani (Hyderabad)',
    'vit.ac.in':        'Vellore Institute of Technology',
    'vitchennai.ac.in': 'Vellore Institute of Technology Chennai',
    'manipal.edu':      'Manipal Academy of Higher Education',
    'thapar.edu':       'Thapar Institute of Engineering and Technology',
    'srmist.edu.in':    'SRM Institute of Science and Technology',
    'amrita.edu':       'Amrita Vishwa Vidyapeetham',
    'lpu.in':           'Lovely Professional University',
    'cuchd.in':         'Chandigarh University',

    // ── State / Central Universities ──────────────────────────────────────────
    'dtu.ac.in':        'Delhi Technological University',
    'nsut.ac.in':       'Netaji Subhas University of Technology',
    'gndu.ac.in':       'Guru Nanak Dev University',
    'pu.ac.in':         'Panjab University',
    'pec.ac.in':        'Punjab Engineering College',
    'ccet.ac.in':       'Chandigarh College of Engineering and Technology',
    'uiet.pu.ac.in':    'University Institute of Engineering and Technology, Panjab University',
    'du.ac.in':         'University of Delhi',
    'jnu.ac.in':        'Jawaharlal Nehru University',
    'bhu.ac.in':        'Banaras Hindu University',
    'amu.ac.in':        'Aligarh Muslim University',
    'hyd.uohyd.ac.in':  'University of Hyderabad',
    'uohyd.ac.in':      'University of Hyderabad',
};

/**
 * Strips successive leading subdomains from an email domain and checks the
 * known-colleges map at each level.
 *
 * e.g.  students.iitb.ac.in
 *         → try "students.iitb.ac.in"  → not found
 *         → try "iitb.ac.in"           → found → "IIT Bombay"
 *
 * This prevents the "first-word" fallback bug where
 * "students.iiit.ac.in" → "STUDENTS" (wrong).
 */
const resolveCollegeFromDomain = (domain) => {
    const parts = domain.split('.');

    // Walk from full domain down to the 2-part root (e.g. "ac.in", "edu")
    for (let i = 0; i < parts.length - 1; i++) {
        const candidate = parts.slice(i).join('.');
        if (collegeDomains[candidate]) {
            return { isValid: true, collegeName: collegeDomains[candidate] };
        }
    }
    return null;
};

const isCollegeEmail = (email) => {
    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain) return { isValid: false, collegeName: null };

    // 1. Try stripping subdomains progressively through the known map
    const mapped = resolveCollegeFromDomain(domain);
    if (mapped) return mapped;

    // 2. Generic fallback: accept any .edu / .ac.in / .edu.in address but use
    //    the full domain as the college identifier so two unknown colleges with
    //    different domains never share a namespace.
    if (domain.endsWith('.edu') || domain.endsWith('.ac.in') || domain.endsWith('.edu.in')) {
        // Use the second-level domain portion as a readable name fallback
        // e.g.  unknowncollege.ac.in  →  "unknowncollege.ac.in"
        return { isValid: true, collegeName: domain };
    }

    return { isValid: false, collegeName: null };
};

module.exports = { isCollegeEmail, resolveCollegeFromDomain };
