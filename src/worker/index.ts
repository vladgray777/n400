import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

// app.get("/api/", (c) => c.json({ name: "Cloudflare" }));


app.get("/api/questions", (c) => 
  c.json({
    
"Q1": {
    "question": "What is the form of government of the United States?",
    "answers": [
      "Republic",
      "Constitution-based federal republic",
      "Representative democracy"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 3
  },
  "Q2": {
    "question": "What is the supreme law of the land?",
    "answers": [
      "(U.S.) Constitution"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q3": {
    "question": "Name one thing the U.S. Constitution does.",
    "answers": [
      "Forms the government",
      "Defines powers of government",
      "Defines the parts of government",
      "Protects the rights of the people"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 4
  },
  "Q4": {
    "question": "The U.S. Constitution starts with the words 'We the People.' What does 'We the People' mean?",
    "answers": [
      "Self-government",
      "Popular sovereignty",
      "Consent of the governed",
      "People should govern themselves",
      "(Example of) social contract"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 5
  },
  "Q5": {
    "question": "How are changes made to the U.S. Constitution?",
    "answers": [
      "Amendments",
      "The amendment process"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 2
  },
  "Q6": {
    "question": "What does the Bill of Rights protect?",
    "answers": [
      "(The basic) rights of Americans",
      "(The basic) rights of people living in the United States"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 2
  },
  "Q7": {
    "question": "How many amendments does the U.S. Constitution have?",
    "answers": [
      "27"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q8": {
    "question": "Why is the Declaration of Independence important?",
    "answers": [
      "It says America is free from British control.",
      "It says all people are created equal.",
      "It identifies inherent rights.",
      "It identifies individual freedoms."
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 4
  },
  "Q9": {
    "question": "What founding document said the American colonies were free from Britain?",
    "answers": [
      "Declaration of Independence"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q10": {
    "question": "Name two important ideas from the Declaration of Independence and the U.S. Constitution.",
    "answers": [
      "Equality",
      "Liberty",
      "Social contract",
      "Natural rights",
      "Limited government",
      "Self-government"
    ],
    "numOfAnswers": 2,
    "maxNumOfCorrectAnswers": 6
  },
  "Q11": {
    "question": "The words 'Life, Liberty, and the pursuit of Happiness' are in what founding document?",
    "answers": [
      "Declaration of Independence"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q12": {
    "question": "What is the economic system of the United States?",
    "answers": [
      "Capitalism",
      "Free market economy"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 2
  },
  "Q13": {
    "question": "What is the rule of law?",
    "answers": [
      "Everyone must follow the law.",
      "Leaders must obey the law.",
      "Government must obey the law.",
      "No one is above the law."
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 4
  },
  "Q14": {
    "question": "Many documents influenced the U.S. Constitution. Name one.",
    "answers": [
      "Declaration of Independence",
      "Articles of Confederation",
      "Federalist Papers",
      "Anti-Federalist Papers",
      "Virginia Declaration of Rights",
      "Fundamental Orders of Connecticut",
      "Mayflower Compact",
      "Iroquois Great Law of Peace"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 8
  },
  "Q15": {
    "question": "There are three branches of government. Why?",
    "answers": [
      "So one part does not become too powerful",
      "Checks and balances",
      "Separation of powers"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 3
  },
  "Q16": {
    "question": "Name the three branches of government.",
    "answers": [
      "Legislative, executive, and judicial",
      "Congress, president, and the courts"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 2
  },
  "Q17": {
    "question": "The President of the United States is in charge of which branch of government?",
    "answers": [
      "Executive branch"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q18": {
    "question": "What part of the federal government writes laws?",
    "answers": [
      "(U.S.) Congress",
      "(U.S. or national) legislature",
      "Legislative branch"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 2
  },
  "Q19": {
    "question": "What are the two parts of the U.S. Congress?",
    "answers": [
      "Senate and House (of Representatives)"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q20": {
    "question": "Name one power of the U.S. Congress.",
    "answers": [
      "Writes laws",
      "Declares war",
      "Makes the federal budget"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 3
  },
  "Q21": {
    "question": "How many U.S. senators are there?",
    "answers": [
      "One hundred (100)"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q22": {
    "question": "How long is a term for a U.S. senator?",
    "answers": [
      "Six (6) years"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q23": {
    "question": "Who is one of your state’s U.S. senators now?",
    "answers": [
      "Answers will vary"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q24": {
    "question": "How many voting members are in the House of Representatives?",
    "answers": [
      "Four hundred thirty-five (435)"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q25": {
    "question": "How long is a term for a member of the House of Representatives?",
    "answers": [
      "Two (2) years"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q26": {
    "question": "Why do U.S. representatives serve shorter terms than U.S. senators?",
    "answers": [
      "To more closely follow public opinion"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q27": {
    "question": "How many senators does each state have?",
    "answers":[
      "Two (2)"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q28": {
    "question": "Why does each state have two senators?",
    "answers":[
      "Equal representation (for small states)",
      "The Great Compromise (Connecticut Compromise)"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":2
  },
  "Q29": {
    "question": "Name your U.S. representative.",
    "answers":[
      "Answers will vary"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q30": {
    "question": "What is the name of the Speaker of the House of Representatives now?",
    "answers":[
      "Visit uscis.gov/citizenship/testupdates"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q31": {
    "question": "Who does a U.S. senator represent?",
    "answers":[
      "Citizens of their state",
      "People of their state"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":2
  },
  "Q32": {
    "question": "Who elects U.S. senators?",
    "answers":[
      "Citizens from their state"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q33": {
    "question": "Who does a member of the House of Representatives represent?",
    "answers":[
      "Citizens in their (congressional) district",
      "Citizens in their district",
      "People from their (congressional) district",
      "People in their district"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":4
  },
  "Q34": {
    "question": "Who elects members of the House of Representatives?",
    "answers":[
      "Citizens from their (congressional) district"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q35": {
    "question": "Some states have more representatives than other states. Why?",
    "answers":[
      "(Because of) the state’s population",
      "(Because) they have more people",
      "(Because) some states have more people"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":3
  },
  "Q36": {
    "question": "The President of the United States is elected for how many years?",
    "answers":[
      "Four (4) years"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q37": {
    "question": "The President of the United States can serve only two terms. Why?",
    "answers":[
      "(Because of) the 22nd Amendment",
      "To keep the president from becoming too powerful"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":2
  },
  "Q38": {
    "question": "What is the name of the President of the United States now?",
    "answers":[
      "Visit uscis.gov/citizenship/testupdates"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q39": {
    "question": "What is the name of the Vice President of the United States now?",
    "answers":[
      "Visit uscis.gov/citizenship/testupdates"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q40": {
    "question": "If the president can no longer serve, who becomes president?",
    "answers":[
      "The Vice President (of the United States)"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q41": {
    "question": "Name one power of the president.",
    "answers":[
      "Signs bills into law",
      "Vetoes bills",
      "Enforces laws",
      "Commander in Chief (of the military)",
      "Chief diplomat",
      "Appoints federal judges"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":6
  },
  "Q42": {
    "question": "Who is Commander in Chief of the U.S. military?",
    "answers":[
      "The President (of the United States)"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q43": {
    "question": "Who signs bills to become laws?",
    "answers":[
      "The President (of the United States)"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q44": {
    "question": "Who vetoes bills?",
    "answers":[
      "The President (of the United States)"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q45": {
    "question": "Who appoints federal judges?",
    "answers":[
      "The President (of the United States)"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q46": {
    "question": "The executive branch has many parts. Name one.",
    "answers":[
      "President",
      "Cabinet",
      "Federal departments and agencies"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":3
  },
  "Q47": {
    "question": "What does the President’s Cabinet do?",
    "answers":[
      "Advises the President (of the United States)"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q48": {
    "question": "What are two Cabinet-level positions?",
    "answers":[
      "Attorney General",
      "Secretary of Agriculture",
      "Secretary of Commerce",
      "Secretary of Education",
      "Secretary of Energy",
      "Secretary of Health and Human Services",
      "Secretary of Homeland Security",
      "Secretary of Housing and Urban Development",
      "Secretary of the Interior",
      "Secretary of Labor",
      "Secretary of State",
      "Secretary of Transportation",
      "Secretary of the Treasury",
      "Secretary of Veterans Affairs",
      "Secretary of War (Defense)",
      "Vice-President",
      "Administrator of the Environmental Protection Agency",
      "Administrator of the Small Business Administration",
      "Director of the Central Intelligence Agency",
      "Director of the Office of Management and Budget",
      "Director of National Intelligence",
      "United States Trade Representative"
    ],
    "numOfAnswers":2,
    "maxNumOfCorrectAnswers":22
  },
  "Q49": {
    "question": "Why is the Electoral College important?",
    "answers":[
      "It decides who is elected president.",
      "It provides a compromise between the popular election of the president and congressional selection."
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":2
  },
  "Q50": {
    "question": "What is one part of the judicial branch?",
    "answers":[
      "Supreme Court",
      "Federal Courts"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":2
  },
  "Q51": {
    "question": "What does the judicial branch do?",
    "answers":[
      "Reviews laws",
      "Explains laws",
      "Resolves disputes (disagreements) about the law",
      "Decides if a law goes against the (U.S.) Constitution"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":4
  },
  "Q52": {
    "question": "What is the highest court in the United States?",
    "answers":[
      "Supreme Court"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q53": {
    "question": "How many seats are on the Supreme Court?",
    "answers":[
      "Nine (9)"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q54": {
    "question": "How many Supreme Court justices are usually needed to decide a case?",
    "answers":[
      "Five (5)"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q55": {
    "question": "How long do Supreme Court justices serve?",
    "answers":[
      "(For) life",
      "Lifetime appointment",
      "(Until) retirement"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":3
  },
  "Q56": {
    "question": "Supreme Court justices serve for life. Why?",
    "answers":[
      "To be independent (of politics)",
      "To limit outside (political) influence"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":2
  },
  "Q57": {
    "question": "Who is the Chief Justice of the United States now?",
    "answers":[
      "Visit uscis.gov/citizenship/testupdates"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q58": {
    "question": "Name one power that is only for the federal government.",
    "answers":[
      "Print paper money",
      "Mint coins",
      "Declare war",
      "Create an army",
      "Make treaties",
      "Set foreign policy"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":6
  },
  "Q59": {
    "question": "Name one power that is only for the states.",
    "answers":[
      "Provide schooling and education",
      "Provide protection (police)",
      "Provide safety (fire departments)",
      "Give a driver’s license",
      "Approve zoning and land use"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":5
  },
  "Q60": {
    "question": "What is the purpose of the 10th Amendment?",
    "answers":[
      "(It states that the) powers not given to the federal government belong to the states or to the people."
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q61": {
    "question": "Who is the governor of your state now?",
    "answers":[
      "Answers will vary"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q62": {
    "question": "What is the capital of your state?",
    "answers":[
      "Answers will vary"
    ],
    "numOfAnswers":1,
    "maxNumOfCorrectAnswers":1
  },
  "Q63": {
    "question": "There are four amendments to the U.S. Constitution about who can vote. Describe one of them.",
    "answers": [
      "Citizens eighteen (18) and older (can vote).",
      "You don’t have to pay (a poll tax) to vote.",
      "Any citizen can vote. (Women and men can vote.)",
      "A male citizen of any race (can vote)."
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 4
  },
  "Q64": {
    "question": "Who can vote in federal elections, run for federal office, and serve on a jury in the United States?",
    "answers": [
      "Citizens",
      "Citizens of the United States",
      "U.S. citizens"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 3
  },
  "Q65": {
    "question": "What are three rights of everyone living in the United States?",
    "answers": [
      "Freedom of expression",
      "Freedom of speech",
      "Freedom of assembly",
      "Freedom to petition the government",
      "Freedom of religion",
      "The right to bear arms"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 6
  },
  "Q66": {
    "question": "What do we show loyalty to when we say the Pledge of Allegiance?",
    "answers": [
      "The United States",
      "The flag"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 2
  },
  "Q67": {
    "question": "Name two promises that new citizens make in the Oath of Allegiance.",
    "answers": [
      "Give up loyalty to other countries",
      "Defend the (U.S.) Constitution",
      "Obey the laws of the United States",
      "Serve in the military (if needed)",
      "Serve (help, do important work for) the nation (if needed)",
      "Be loyal to the United States"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 6
  },
  "Q68": {
    "question": "How can people become United States citizens?",
    "answers": [
      "Be born in the United States, under the conditions set by the 14th Amendment",
      "Naturalize",
      "Derive citizenship (under conditions set by Congress)"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 3
  },
  "Q69": {
    "question": "What are two examples of civic participation in the United States?",
    "answers": [
      "Vote",
      "Run for office",
      "Join a political party",
      "Help with a campaign",
      "Join a civic group",
      "Join a community group",
      "Give an elected official your opinion (on an issue)",
      "Contact elected officials",
      "Support or oppose an issue or policy",
      "Write to a newspaper"
    ],
    "numOfAnswers": 2,
    "maxNumOfCorrectAnswers": 10
  },
  "Q70": {
    "question": "What is one way Americans can serve their country?",
    "answers": [
      "Vote",
      "Pay taxes",
      "Obey the law",
      "Serve in the military",
      "Run for office",
      "Work for local, state, or federal government"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 6
  },
  "Q71": {
    "question": "Why is it important to pay federal taxes?",
    "answers": [
      "Required by law",
      "All people pay to fund the federal government",
      "Required by the (U.S.) Constitution (16th Amendment)",
      "Civic duty"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 4
  },
  "Q72": {
    "question": "It is important for all men age 18 through 25 to register for the Selective Service. Name one reason why.",
    "answers": [
      "Required by law",
      "Civic duty",
      "Makes the draft fair, if needed"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 3
  },
  "Q73": {
    "question": "The colonists came to America for many reasons. Name one.",
    "answers": [
      "Freedom",
      "Political liberty",
      "Religious freedom",
      "Economic opportunity",
      "Escape persecution"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 5
  },
  "Q74": {
    "question": "Who lived in America before the Europeans arrived?",
    "answers": [
      "American Indians",
      "Native Americans"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 2
  },
  "Q75": {
    "question": "What group of people was taken and sold as slaves?",
    "answers": [
      "Africans",
      "People from Africa"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 2
  },
  "Q76": {
    "question": "What war did the Americans fight to win independence from Britain?",
    "answers": [
      "American Revolution",
      "The (American) Revolutionary War",
      "War for (American) Independence"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 3
  },
  "Q77": {
    "question": "Name one reason why the Americans declared independence from Britain.",
    "answers": [
      "High taxes",
      "Taxation without representation",
      "British soldiers stayed in Americans’ houses (boarding, quartering)",
      "They did not have self-government",
      "Boston Massacre",
      "Boston Tea Party (Tea Act)",
      "Stamp Act",
      "Sugar Act",
      "Townshend Acts",
      "Intolerable (Coercive) Acts"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 10
  },
  "Q78": {
    "question": "Who wrote the Declaration of Independence?",
    "answers": [
      "(Thomas) Jefferson"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q79": {
    "question": "When was the Declaration of Independence adopted?",
    "answers": [
      "July 4, 1776"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q80": {
    "question": "The American Revolution had many important events. Name one.",
    "answers": [
      "(Battle of) Bunker Hill",
      "Declaration of Independence",
      "Washington Crossing the Delaware (Battle of Trenton)",
      "(Battle of) Saratoga",
      "Valley Forge (Encampment)",
      "(Battle of) Yorktown (British surrender at Yorktown)"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 6
  },
  "Q81": {
    "question": "There were 13 original states. Name five.",
    "answers": [
      "New Hampshire",
      "Massachusetts",
      "Rhode Island",
      "Connecticut",
      "New York",
      "New Jersey",
      "Pennsylvania",
      "Delaware",
      "Maryland",
      "Virginia",
      "North Carolina",
      "South Carolina",
      "Georgia"
    ],
    "numOfAnswers": 5,
    "maxNumOfCorrectAnswers": 13
  },
  "Q82": {
    "question": "What founding document was written in 1787?",
    "answers": [
      "(U.S.) Constitution"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q83": {
    "question": "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    "answers": [
      "(James) Madison",
      "(Alexander) Hamilton",
      "(John) Jay",
      "Publius"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 4
  },
  "Q84": {
    "question": "Why were the Federalist Papers important?",
    "answers": [
      "They helped people understand the (U.S.) Constitution.",
      "They supported passing the (U.S.) Constitution."
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 2
  },
  "Q85": {
    "question": "Benjamin Franklin is famous for many things. Name one.",
    "answers": [
      "Founded the first free public libraries",
      "First Postmaster General of the United States",
      "Helped write the Declaration of Independence",
      "Inventor",
      "U.S. diplomat"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 5
  },
  "Q86": {
    "question": "George Washington is famous for many things.",
    "answers": [
      "“Father of Our Country”",
      "First president of the United States",
      "General of the Continental Army",
      "President of the Constitutional Convention"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 4
  },
  "Q87": {
    "question": "Thomas Jefferson is famous for many things. Name one.",
    "answers": [
      "Writer of the Declaration of Independence",
      "Third president of the United States",
      "Doubled the size of the United States (Louisiana Purchase)",
      "First Secretary of State",
      "Founded the University of Virginia",
      "Writer of the Virginia Statute on Religious Freedom"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 6
  },
  "Q88": {
    "question": "James Madison is famous for many things. Name one.",
    "answers": [
      "“Father of the Constitution”",
      "Fourth president of the United States",
      "President during the War of 1812",
      "One of the writers of the Federalist Papers"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 4
  },
  "Q89": {
    "question": "Alexander Hamilton is famous for many things. Name one.",
    "answers": [
      "First Secretary of the Treasury",
      "One of the writers of the Federalist Papers",
      "Helped establish the First Bank of the United States",
      "Aide to General George Washington",
      "Member of the Continental Congress"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 5
  },
  "Q90": {
    "question": "What territory did the United States buy from France in 1803?",
    "answers": [
      "Louisiana Territory",
      "Louisiana"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 2
  },
  "Q91": {
    "question": "Name one war fought by the United States in the 1800s.",
    "answers": [
      "War of 1812",
      "Mexican-American War",
      "Civil War",
      "Spanish-American War"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 4
  },
  "Q92": {
    "question": "Name the U.S. war between the North and the South.",
    "answers": [
      "The Civil War"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q93": {
    "question": "The Civil War had many important events. Name one.",
    "answers": [
      "(Battle of) Fort Sumter",
      "Emancipation Proclamation",
      "(Battle of) Vicksburg",
      "(Battle of) Gettysburg",
      "Sherman’s March",
      "(Surrender at) Appomattox",
      "(Battle of) Antietam/Sharpsburg",
      "Lincoln was assassinated."
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 8
  },
  "Q94": {
    "question": "Abraham Lincoln is famous for many things. Name one.",
    "answers": [
      "Freed the slaves (Emancipation Proclamation)",
      "Saved (or preserved) the Union",
      "Led the United States during the Civil War",
      "16th president of the United States",
      "Delivered the Gettysburg Address"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 5
  },
  "Q95": {
    "question": "What did the Emancipation Proclamation do?",
    "answers": [
      "Freed the slaves",
      "Freed slaves in the Confederacy",
      "Freed slaves in the Confederate states",
      "Freed slaves in most Southern states"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 4
  },
  "Q96": {
    "question": "What U.S. war ended slavery?",
    "answers": [
      "The Civil War"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q97": {
    "question": "What amendment says all persons born or naturalized in the United States, and subject to the jurisdiction thereof, are U.S. citizens?",
    "answers": [
      "14th Amendment"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q98": {
    "question": "When did all men get the right to vote?",
    "answers": [
      "After the Civil War",
      "During Reconstruction",
      "(With the) 15th Amendment",
      "1870"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 4
  },
  "Q99": {
    "question": "Name one leader of the women’s rights movement in the 1800s.",
    "answers": [
      "Susan B. Anthony",
      "Elizabeth Cady Stanton",
      "Sojourner Truth",
      "Harriet Tubman",
      "Lucretia Mott",
      "Lucy Stone"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 6
  },
  "Q100": {
    "question": "Name one war fought by the United States in the 1900s.",
    "answers": [
      "World War I",
      "World War II",
      "Korean War",
      "Vietnam War",
      "(Persian) Gulf War"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 5
  },
  "Q101": {
    "question": "Why did the United States enter World War I?",
    "answers": [
      "Because Germany attacked U.S. (civilian) ships",
      "To support the Allied Powers (England, France, Italy, and Russia)",
      "To oppose the Central Powers (Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria)"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 3
  },
  "Q102": {
    "question": "When did all women get the right to vote?",
    "answers": [
      "1920",
      "After World War I",
      "(With the) 19th Amendment"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 3
  },
  "Q103": {
    "question": "What was the Great Depression?",
    "answers": [
      "Longest economic recession in modern history"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q104": {
    "question": "When did the Great Depression start?",
    "answers": [
      "The Great Crash (1929)",
      "Stock market crash of 1929"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 2
  },
  "Q105": {
    "question": "Who was president during the Great Depression and World War II?",
    "answers": [
      "(Franklin) Roosevelt"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q106": {
    "question": "Why did the United States enter World War II?",
    "answers": [
      "(Bombing of) Pearl Harbor",
      "Japanese attacked Pearl Harbor",
      "To support the Allied Powers (England, France, and Russia)",
      "To oppose the Axis Powers (Germany, Italy, and Japan)"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 4
  },
  "Q107": {
    "question": "Dwight Eisenhower is famous for many things. Name one.",
    "answers": [
      "General during World War II",
      "President at the end of (during) the Korean War",
      "34th president of the United States",
      "Signed the Federal-Aid Highway Act of 1956 (Created the Interstate System)"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 4
  },
  "Q108": {
    "question": "Who was the United States’ main rival during the Cold War?",
    "answers": [
      "Soviet Union",
      "USSR",
      "Russia"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 3
  },
  "Q109": {
    "question": "During the Cold War, what was one main concern of the United States?",
    "answers": [
      "Communism",
      "Nuclear war"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 2
  },
  "Q110": {
    "question": "Why did the United States enter the Korean War?",
    "answers": [
      "To stop the spread of communism"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q111": {
    "question": "Why did the United States enter the Vietnam War?",
    "answers": [
      "To stop the spread of communism"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q112": {
    "question": "What did the civil rights movement do?",
    "answers": [
      "Fought to end racial discrimination"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q113": {
    "question": "Martin Luther King, Jr. is famous for many things. Name one.",
    "answers": [
      "Fought for civil rights",
      "Worked for equality for all Americans",
      "Worked to ensure that people would “not be judged by the color of their skin, but by the content of their character”"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 3
  },
  "Q114": {
    "question": "Why did the United States enter the Persian Gulf War?",
    "answers": [
      "To force the Iraqi military from Kuwait"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q115": {
    "question": "What major event happened on September 11, 2001 in the United States?",
    "answers": [
      "Terrorists attacked the United States",
      "Terrorists took over two planes and crashed them into the World Trade Center in New York City",
      "Terrorists took over a plane and crashed into the Pentagon in Arlington, Virginia",
      "Terrorists took over a plane originally aimed at Washington, D.C., and crashed in a field in Pennsylvania"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 4
  },
  "Q116": {
    "question": "Name one U.S. military conflict after the September 11, 2001 attacks.",
    "answers": [
      "(Global) War on Terror",
      "War in Afghanistan",
      "War in Iraq"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 3
  },
  "Q117": {
    "question": "Name one American Indian tribe in the United States.",
    "answers": [
      "Apache",
      "Blackfeet",
      "Cayuga",
      "Cherokee",
      "Cheyenne",
      "Chippewa",
      "Choctaw",
      "Creek",
      "Crow",
      "Hopi",
      "Huron",
      "Inupiat",
      "Lakota",
      "Mohawk",
      "Mohegan",
      "Navajo",
      "Oneida",
      "Onondaga",
      "Pueblo",
      "Seminole",
      "Seneca",
      "Shawnee",
      "Sioux",
      "Teton",
      "Tuscarora"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 25
  },
  "Q118": {
    "question": "Name one example of an American innovation.",
    "answers": [
      "Light bulb",
      "Automobile (cars, internal combustion engine)",
      "Skyscrapers",
      "Airplane",
      "Assembly line",
      "Landing on the moon",
      "Integrated circuit (IC)"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 7
  },
  "Q119": {
    "question": "What is the capital of the United States?",
    "answers": [
      "Washington, D.C."
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q120": {
    "question": "Where is the Statue of Liberty?",
    "answers": [
      "New York (Harbor)",
      "Liberty Island",
      "New Jersey, near New York City",
      "on the Hudson (River)"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 4
  },
  "Q121": {
    "question": "Why does the flag have 13 stripes?",
    "answers": [
      "(Because there were) 13 original colonies",
      "(Because the stripes) represent the original colonies"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 2
  },
  "Q122": {
    "question": "Why does the flag have 50 stars?",
    "answers": [
      "(Because there is) one star for each state",
      "(Because) each star represents a state",
      "(Because there are) 50 states"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 3
  },
  "Q123": {
    "question": "What is the name of the national anthem?",
    "answers": [
      "The Star-Spangled Banner"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q124": {
    "question": "The Nation’s first motto was “E Pluribus Unum.” What does that mean?",
    "answers": [
      "Out of many, one",
      "We all become one"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 2
  },
  "Q125": {
    "question": "What is Independence Day?",
    "answers": [
      "A holiday to celebrate U.S. independence (from Britain)",
      "The country’s birthday"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 2
  },
  "Q126": {
    "question": "Name three national U.S. holidays.",
    "answers": [
      "New Year’s Day",
      "Martin Luther King, Jr. Day",
      "Presidents Day (Washington’s Birthday)",
      "Memorial Day",
      "Juneteenth",
      "Independence Day",
      "Labor Day",
      "Columbus Day",
      "Veterans Day",
      "Thanksgiving Day",
      "Christmas Day"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 11
  },
  "Q127": {
    "question": "What is Memorial Day?",
    "answers": [
      "A holiday to honor soldiers who died in military service"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 1
  },
  "Q128": {
    "question": "What is Veterans Day?",
    "answers": [
      "A holiday to honor people in the (U.S.) military",
      "A holiday to honor people who have served (in the U.S. military)"
    ],
    "numOfAnswers": 1,
    "maxNumOfCorrectAnswers": 2
  }
  })
);

export default app;
