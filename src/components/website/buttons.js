//JoinTheTeamBtn
//GetStartedBtn
//SubmitBtn

export const CreativesLink = () => {
  return (
    <>
      <a
        href="https://forms.gle/dVBbG4bWPPTNzfhc6"
        className="text-decoration-underline CreativesLink"
        target="_blank"
        type="button"
      >
        Creatives <i className="bi bi-arrow-right"></i>
      </a>
    </>
  );
};
export const AuthorsLink = () => {
  return (
    <>
      <a
        href="https://docs.google.com/forms/d/1y3jtbbVYLJ9V9dldLTf5fQrywNclBzeUJ-lgwheMsGg/edit?usp=sharing_eip_se_dm&ts=6496c410"
        className="text-decoration-underline AuthorsLink"
        target="_blank"
      >
        Authors <i className="bi bi-arrow-right"></i>
      </a>
    </>
  );
};
export const WorkWithUsBtn = () => {
  return (
    <>
      <a
        href="https://forms.gle/mWnkHhN5qmJ1DVJK6"
        target="_blank"
        className="text-decoration-none"
      >
        <button class="WorkWithUsBtn btnText mx-1 mt-2">
          {" "}
          <b>Work With Us </b>
        </button>
      </a>
    </>
  );
};
export const ChallengeBtn = () => {
  return (
    <>
      <a
        href="https://forms.gle/dRdRsVyWfQa4Cks38"
        target="_blank"
        className="text-decoration-none btnText linkColor"
      >
        <button class="ChallengeBtn mx-1 mt-2">
          {" "}
          <b> 45 Day Challenge </b>
        </button>
      </a>
    </>
  );
};
export const GetStartedBtn = () => {
  return (
    <>
      <a
        href="https://forms.gle/mWnkHhN5qmJ1DVJK6"
        target="_blank"
        className="text-decoration-none"
      >
        <button class="WorkWithUsBtn btnText mx-1 mt-2">
          {" "}
          <b>Get Started </b>
        </button>
      </a>
    </>
  );
};
export const JoinTheTeamBtn = () => {
  return (
    <>
      <a href="#" target="_blank" className="text-decoration-none">
        <button class="WorkWithUsBtn btnText mx-1 mt-2">
          {" "}
          <b>Join the team</b>
        </button>
      </a>
    </>
  );
};
