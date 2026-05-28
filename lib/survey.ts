export type SurveyQuestion = {
  id: string;
  title: string;
  options: string[];
  commentOnly?: boolean;
};

export const USER_SURVEY_QUESTIONS: SurveyQuestion[] = [
  {
    id: "ease_of_use",
    title: "How easy is TRLActive to use?",
    options: ["Very easy", "Mostly easy", "A little confusing", "Hard to use", "I have not used it enough yet"],
  },
  {
    id: "getting_started",
    title: "How clear was getting started and building your first plan?",
    options: ["Very clear", "Mostly clear", "Somewhat unclear", "Very unclear", "I have not built a plan yet"],
  },
  {
    id: "satisfaction",
    title: "How satisfied are you with TRLActive so far?",
    options: ["Very satisfied", "Satisfied", "Neutral", "Unsatisfied", "Very unsatisfied"],
  },
  {
    id: "recommend",
    title: "How likely are you to recommend TRLActive to someone else?",
    options: ["Very likely", "Likely", "Not sure", "Unlikely", "Very unlikely"],
  },
  {
    id: "pricing",
    title: "At the current $29.99/month price, how do you feel about the value you are getting from TRLActive?",
    options: [
      "Great value for the cost",
      "Fair value for the cost",
      "Too early to tell",
      "Feels a little expensive",
      "Feels much too expensive",
    ],
  },
  {
    id: "priority",
    title: "What should we improve first?",
    options: ["Easier plan setup", "Better workout guidance", "More accurate plan changes", "Nutrition and meal planning", "Pricing or free trial", "Something else"],
  },
  {
    id: "additional_feedback",
    title: "Additional feedback",
    options: [],
    commentOnly: true,
  },
];
