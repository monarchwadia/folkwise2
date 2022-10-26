import anyway from "../../journal/2022-05-07-push-it-anyway.md";
import responsibility from "../../journal/2022-05-08-responsibility.md";
import stinks from "../../journal/2022-05-09-code-that-makes-money-stinks.md";
import see from "../../journal/2022-05-11-well-see.md";
import profession from "../../journal/2022-05-12-we-are-still-a-very-new-profession.md";
import recruiting from "../../journal/2022-05-20-hiring-versus-recruiting.md";
import framework from "../../journal/2022-07-27-community-bootstrapping-framework.md";
import mvp from "../../journal/2022-09-12-community-before-mvp.md";


// TODO: this is a hack, but it works for now
export const markdowns = [
  { slug: "2022-05-07-push-it-anyway", render: anyway },
  { slug: "2022-05-08-responsibility", render: responsibility },
  { slug: "2022-05-09-code-that-makes-money-stinks", render: stinks },
  { slug: "2022-05-11-well-see", render: see },
  { slug: "2022-05-12-we-are-still-a-very-new-profession", render: profession },
  { slug: "2022-05-20-hiring-versus-recruiting", render: recruiting },
  { slug: "2022-07-27-community-bootstrapping-framework", render: framework },
  { slug: "2022-09-12-community-before-mvp", render: mvp },
].sort((a, b) => (a.slug > b.slug ? -1 : 1));

