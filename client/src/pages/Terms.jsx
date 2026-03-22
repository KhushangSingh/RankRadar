import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Terms and Conditions</h1>
      <p className="text-sm text-slate-500 mb-6">Last updated: March 22, 2026</p>

      <div className="space-y-5 text-slate-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-slate-900 mb-1">1. Eligibility</h2>
          <p>
            This platform is intended for students using valid college email addresses.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-1">2. Account Responsibility</h2>
          <p>
            You are responsible for maintaining the confidentiality of your login credentials and keeping your
            profile information accurate.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-1">3. Acceptable Use</h2>
          <p>
            You agree not to misuse the platform, attempt unauthorized access, or submit false academic data.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-1">4. Rankings and Visibility</h2>
          <p>
            Leaderboard positions are calculated from submitted profile data. Anonymous display and friend-based
            visibility are controlled by app rules.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-1">5. Service Changes</h2>
          <p>
            Features may be updated, modified, or removed at any time to improve functionality or security.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-1">6. Limitation</h2>
          <p>
            Gradevo is a student project and is provided on a best-effort basis without commercial guarantees.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
