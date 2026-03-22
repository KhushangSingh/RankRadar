import React from 'react';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-sm text-slate-500 mb-6">Last updated: March 22, 2026</p>

      <div className="space-y-5 text-slate-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-slate-900 mb-1">1. Information We Collect</h2>
          <p>
            Gradevo stores account and academic profile details such as name, college email, college, degree,
            branch, specialization, batch, and CGPA so the leaderboard and friend features work correctly.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-1">2. How We Use Data</h2>
          <p>
            Your data is used to authenticate your account, calculate rankings, show filtered leaderboards,
            and connect with friends using friend codes.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-1">3. Password & Recovery</h2>
          <p>
            Passwords and security answers are hashed before storage. We do not store these values in plain text.
            Security question setup is used only for account recovery.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-1">4. Data Sharing</h2>
          <p>
            Gradevo does not sell your data. Public leaderboard visibility is controlled by app logic and your
            friend relationships.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-1">5. Account Deletion</h2>
          <p>
            You can request deletion from your profile. Deletion permanently removes live account access.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-1">6. Contact</h2>
          <p>
            For privacy concerns, contact the project developer through the footer developer link.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
