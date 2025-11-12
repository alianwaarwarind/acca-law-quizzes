import { Question, Chapter } from '../types';

const chapter1Questions: Question[] = [
  { 
    questionText: "Which of the following is a remedy available under the civil law?", 
    options: ["A fine", "Imprisonment", "Damages", "Community service"], 
    correctAnswerIndices: [2],
    explanation: "Civil law's main goal is to compensate the injured party. Damages are a monetary payment to restore the claimant to their original position. Fines, imprisonment, and community service are punishments used in criminal law."
  },
  { 
    questionText: "Which two of the following terms are associated with criminal law rather than civil law?", 
    options: ["Public Law", "Punishment", "Compensation", "Claimant"], 
    correctAnswerIndices: [0, 1],
    explanation: "Criminal law is a form of public law as it involves the state prosecuting an individual. Its primary aim is punishment. 'Compensation' and 'Claimant' are terms used in private civil law."
  },
  { 
    questionText: "Which of the following offenses would only be heard at a Magistrates’ Court?", 
    options: ["An indictable offence", "A summary offence", "A “triable either way” offence", "A common law offence"], 
    correctAnswerIndices: [1],
    explanation: "Summary offences are the least serious crimes (e.g., minor traffic violations) and are always tried in the Magistrates' Court. Indictable offences go to the Crown Court, and \"triable either way\" offences can be heard in either."
  },
  { 
    questionText: "Which of the following is the prosecutor in a criminal law case?", 
    options: ["The State", "The accused", "The victim", "The jury"], 
    correctAnswerIndices: [0],
    explanation: "A crime is an offence against society, represented by the State (or 'The Crown'), which brings the case against the accused. The victim is a key witness, but not the prosecutor."
  },
  { 
    questionText: "Which of the following describes the standard of proof in a civil law case?", 
    options: ["Beyond reasonable doubt", "Balance of probability", "Beyond all probability", "On the evidence presented"], 
    correctAnswerIndices: [1],
    explanation: "In a civil case, the claimant must prove their case is 'more likely than not' to be true, which is the balance of probability (i.e., >50%). 'Beyond reasonable doubt' is the much higher standard used in criminal cases."
  },
  { 
    questionText: "All criminal law cases begin in which of the following courts?", 
    options: ["The County Court", "The Magistrates’ Court", "The Crown Court", "The High Court"], 
    correctAnswerIndices: [1],
    explanation: "Every criminal case in England and Wales, regardless of severity, has its first hearing in the Magistrates' Court for preliminary matters like plea, bail, and allocation."
  },
  { 
    questionText: "Which of the following statements concerning cases brought before a Magistrates’ Courts is correct?", 
    options: ["The case is decided by the Magistrate rather than a jury", "Only criminal cases are heard at a Magistrates’ Court", "Appeals are made directly to the Court of Appeal", "The defendant must be represented by a barrister"], 
    correctAnswerIndices: [0],
    explanation: "There are no juries in a Magistrates' Court. Cases are heard and decided either by a panel of lay magistrates or a single District Judge."
  },
  { 
    questionText: "Which rule of statutory interpretation states that words in a statute should be given their plain, ordinary meaning unless this would give rise to a manifest absurdity or inconsistency with the rest of the statute?", 
    options: ["Golden rule", "Mischief rule", "Contextual rule", "Literal rule"], 
    correctAnswerIndices: [0],
    explanation: "The Golden Rule is a modification of the Literal Rule. It allows a judge to depart from a word's plain, ordinary meaning if using that meaning would lead to a 'manifest absurdity.'"
  },
  { 
    questionText: "The King’s Bench, Family and chancery are all division of which court?", 
    options: ["Crown Court", "Supreme Court", "High Court", "Court of Appeal"], 
    correctAnswerIndices: [2],
    explanation: "The High Court of Justice is organized into three main divisions: the King's Bench Division, the Chancery Division, and the Family Division."
  },
  { 
    questionText: "Which type of law is concerned with the function and operation of local authorities?", 
    options: ["Public Law", "Private Law", "Common Law", "Equity"], 
    correctAnswerIndices: [0],
    explanation: "Local authorities are public bodies. Public law governs the relationship between individuals and the state, including all state bodies and their functions."
  },
  { 
    questionText: "Which of the following is a statement by a judge that is the basis for their decision and is what becomes binding on future judges?", 
    options: ["Obiter dicta", "Per incuriam", "Ratio decidendi", "Stare decisis"], 
    correctAnswerIndices: [2],
    explanation: "Ratio decidendi is Latin for 'the reason for deciding.' It is the core legal principle of the judgment that forms the binding precedent. Stare decisis is the doctrine of following precedent, not the part of the judgment itself."
  },
  { 
    questionText: "Which of the following statements in relation to legislation is correct?", 
    options: ["Legislation may modify or replace existing statutes", "Legislation may not overrule or modify existing case law", "Legislation may prevent a subsequent Parliament from changing the law", "Legislation is a form of delegated law"], 
    correctAnswerIndices: [0],
    explanation: "This reflects Parliamentary sovereignty. Parliament is the supreme law-making body and can create, repeal, or amend any statute. It cannot, however, bind a future Parliament."
  },
  { 
    questionText: "Which of the following types of legislation affects specific individuals or groups?", 
    options: ["Enabling", "Public", "Private", "Hybrid"], 
    correctAnswerIndices: [2],
    explanation: "A Private Act of Parliament is legislation that applies to a specific individual, group, or a private body (like a company or a local authority), rather than to the general public."
  },
  { 
    questionText: "Which two of the following are stages that a Bill passes through before becoming legislation?", 
    options: ["Report stage", "Committee stage", "Fourth reading", "Approval stage"], 
    correctAnswerIndices: [0, 1],
    explanation: "A Bill passes through several key stages, including: First Reading, Second Reading, Committee Stage (detailed scrutiny), Report Stage (committee's changes are reported), and Third Reading. There is no 'Fourth reading.'"
  },
  { 
    questionText: "To express one thing is by implication to exclude anything else. Which rule of statutory interpretation does this describe?", 
    options: ["Ejusdem generis", "Expressio unius est exclusion alterius", "Noscitur a sociis", "In pari materia"], 
    correctAnswerIndices: [1],
    explanation: "This is the direct Latin translation for the rule. It means 'the express mention of one thing excludes all others.' For example, if a law applies to 'lions and tigers,' it is implied that it does not apply to leopards."
  },
  { 
    questionText: "Which rule or approach to statutory interpretation considers what the legislation is trying to achieve?", 
    options: ["Contextual rule", "Literal rule", "Purposive approach", "Golden rule"], 
    correctAnswerIndices: [2],
    explanation: "The purposive approach requires the court to look beyond the literal words to find the underlying purpose of the legislation (i.e., what Parliament intended to achieve)."
  },
  { 
    questionText: "Which of the following is an extrinsic aid to statutory interpretation?", 
    options: ["Hansard", "The long title of the Act", "The preamble of the Act", "Side notes to the statute"], 
    correctAnswerIndices: [0],
    explanation: "An extrinsic aid is a source outside the statute itself. Hansard is the official record of parliamentary debates. The other options are all part of the statute and are intrinsic aids."
  },
  { 
    questionText: "Which of the following is NOT a track to which a civil case can be allocated?", 
    options: ["The small claims track", "The fast track", "The high value track", "The multi-track"], 
    correctAnswerIndices: [2],
    explanation: "The Civil Procedure Rules (CPR) allocate cases to three tracks: the small claims track, the fast track, and the multi-track. There is no 'high value track,' although the multi-track is used for the most valuable and complex cases."
  },
  { 
    questionText: "In relation to the English Legal System, where did the common law originate from?", 
    options: ["Acts of Parliament", "Delegated legislation", "Custom", "Roman Law"], 
    correctAnswerIndices: [2],
    explanation: "The common law developed in England after 1066 as judges travelled the country and applied the common customs of the land, creating a unified legal system."
  },
  { 
    questionText: "Which of the following is the name used for the person who commences a civil action?", 
    options: ["Appellant", "Plaintiff", "Claimant", "Defendant"], 
    correctAnswerIndices: [2],
    explanation: "Since the 1998 Civil Procedure Rules (CPR), the person who starts a civil claim is called the 'Claimant'. 'Plaintiff' was the term used before this reform."
  },
  { 
    questionText: "Which is the final appeal court in the United Kingdom?", 
    options: ["The High Court", "The Supreme Court", "The Court of Appeal", "The European Court of Human Rights"], 
    correctAnswerIndices: [1],
    explanation: "The Supreme Court is the final court of appeal in the UK for all civil cases, and for criminal cases from England, Wales, and Northern Ireland. (The ECHR is a separate, international court)."
  },
  { 
    questionText: "Which of the following statements regarding the Supreme Court is correct?", 
    options: ["It is bound by its previous decisions, but it may depart if they are considered to be wrong.", "It is always bound by its previous decisions.", "It is normally bound by its previous decisions, but may depart when it appears right to do so.", "It cannot overrule decisions of the Court of Appeal."], 
    correctAnswerIndices: [2],
    explanation: "The 1966 Practice Statement allows the Supreme Court to depart from its own past decisions 'when it appears right to do so' to allow the law to develop, though it does so with caution."
  },
  { 
    questionText: "What is the standard of proof required in a criminal case?", 
    options: ["On the balance of probabilities", "The defence establishes a reasonable defence to the allegations", "Beyond any doubt", "Beyond reasonable doubt"], 
    correctAnswerIndices: [3],
    explanation: "The prosecution must prove the defendant's guilt to the high standard of 'beyond reasonable doubt,' meaning the jury or magistrates must be sure of the defendant's guilt."
  },
  { 
    questionText: "Which of the following is NOT a division of the High Court?", 
    options: ["The Chancery Division", "The Family Division", "The Queen’s/King's Bench Division", "The Supreme Division"], 
    correctAnswerIndices: [3],
    explanation: "The High Court has three divisions: King's Bench, Chancery, and Family. The 'Supreme Court' is the final court of appeal and is an entirely separate court, not a division of the High Court."
  },
  { 
    questionText: "What does the term ‘private law’ refer to?", 
    options: ["The body of laws that derive from the deciding of cases", "The body of laws that seek to regulate the relationship between individuals", "The legal principle that states that a person has the right to privacy", "The body of laws that seeks to regulate the relationship between the state and its citizens."], 
    correctAnswerIndices: [1],
    explanation: "Private law deals with the rights and obligations between private individuals and organizations. This includes areas like contract, tort, and property law."
  },
  { 
    questionText: "The decisions of Magistrates’ courts in criminal cases can be appealed to which TWO of the following courts?", 
    options: ["The Crown Court", "The High Court", "The Court of Appeal", "The Supreme Court"], 
    correctAnswerIndices: [0, 1],
    explanation: "A defendant can appeal to the Crown Court for a rehearing of the facts. Alternatively, either side can appeal to the High Court (King's Bench Division) on a point of law only."
  },
  { 
    questionText: "What is the name of the process by which the courts can challenge delegated legislation?", 
    options: ["Judges renewal", "Judicial renewal", "Judges review", "Judicial review"], 
    correctAnswerIndices: [3],
    explanation: "Judicial review is the legal process where a judge (in the High Court) reviews the lawfulness of a decision or action by a public body, including the creation of delegated legislation (e.g., if it was ultra vires)."
  },
  { 
    questionText: "Which of the following courts deal with civil law matters only?", 
    options: ["The Crown Court", "The Magistrates’ Court", "The County Court", "The High Court"], 
    correctAnswerIndices: [2],
    explanation: "The County Court is the main court for civil matters. The Crown Court is almost exclusively criminal, and the Magistrates' Court is overwhelmingly criminal. The High Court hears complex civil cases but its King's Bench Division also hears criminal appeals."
  },
  { 
    questionText: "Which of the following is NOT a source of English law?", 
    options: ["Custom", "Equity", "Public Law", "Legislation"], 
    correctAnswerIndices: [2],
    explanation: "The primary sources of English law are Legislation (statutes) and Case Law (Common Law and Equity). Custom is a minor source. 'Public Law' is a category or classification of law, not a source from which law is made."
  },
  { 
    questionText: "Which of the following is an example of the purposive approach to statutory interpretation?", 
    options: ["The mischief rule", "The literal rule", "The golden rule", "Noscitur a sociis"], 
    correctAnswerIndices: [0],
    explanation: "The mischief rule (from Heydon's Case) is an early version of the purposive approach. It instructs a judge to consider the 'mischief' (the problem) the statute was designed to fix and interpret the law to suppress that mischief."
  },
];

const chapter2_1Questions: Question[] = [
  {
    questionText: "Which of the following is NOT an essential element of a valid simple contract?",
    options: [
      "The contract must be in writing",
      "The parties must be in agreement",
      "Each party must provide consideration",
      "The parties must intend to create legal relations"
    ],
    correctAnswerIndices: [0],
    explanation: "Most simple contracts do not need to be in writing to be valid. They can be formed orally (spoken) or by conduct. Agreement, consideration, and intention are the essential elements."
  },
  {
    questionText: "What are the requirements for a valid and binding contract?",
    options: [
      "Offer and acceptance only",
      "Offer, acceptance and consideration only",
      "Offer, acceptance, consideration and the intention to create legal relations",
      "Offer, acceptance, consideration, and a written document"
    ],
    correctAnswerIndices: [2],
    explanation: "A valid contract requires all four elements: a clear offer, unequivocal acceptance, valid consideration (something of value exchanged), and an intention for the agreement to be legally enforceable."
  },
  {
    questionText: "Which of the following contracts must be in the form of a deed?",
    options: [
      "A conveyance (a transfer of a legal estate in land)",
      "A partnership agreement",
      "A consumer credit contract",
      "An employment contract"
    ],
    correctAnswerIndices: [0],
    explanation: "Certain contracts must be in a specific written form called a deed to be valid. The most common example is a conveyance, which is the legal document used to transfer ownership (a legal estate) of land."
  },
  {
    questionText: "In relation to contract law, which of the following describes an offer?",
    options: [
      "A statement of possible terms",
      "Displaying goods for sale in a supermarket",
      "A verbal promise to be bound on specific terms",
      "A price list circulated to potential customers"
    ],
    correctAnswerIndices: [2],
    explanation: "An offer is a clear, specific, and definite promise to be bound by certain terms. (A), (B), and (D) are all examples of an \"invitation to treat,\" which invites others to make an offer."
  },
  {
    questionText: "When is acceptance not effective?",
    options: [
      "If through conduct only",
      "If through express words only",
      "Through the offeree’s non-communicated intention",
      "If it is sent via email"
    ],
    correctAnswerIndices: [2],
    explanation: "Acceptance must be communicated to the offeror. A person's \"non-communicated intention\" (i.e., just thinking \"I accept\" without telling the other person) has no legal effect."
  },
  {
    questionText: "Where the post is a valid means of acceptance, at what point will the offeree have been held to have accepted the offer?",
    options: [
      "When the letter of acceptance has been written",
      "When the letter of acceptance has been correctly addressed, its postage paid, and posted",
      "When the letter of acceptance is received by the offeror",
      "When the offeror reads the letter of acceptance"
    ],
    correctAnswerIndices: [1],
    explanation: "This is the Postal Rule (Adams v Lindsell). Acceptance is legally effective at the moment the letter is properly posted, not when it is received."
  },
  {
    questionText: "In relation to contract law, how long will an offer remain open if no time period is set for its expiry?",
    options: [
      "One month",
      "Six months",
      "For a reasonable time",
      "Indefinitely, until it is revoked"
    ],
    correctAnswerIndices: [2],
    explanation: "If no specific time limit is set, an offer lapses after a \"reasonable time.\" What is \"reasonable\" depends on the subject matter of the contract (e.g., an offer to sell fresh fruit would lapse much faster than an offer to sell land)."
  },
  {
    questionText: "Which of the following will terminate an offer?",
    options: [
      "Posting a letter of revocation",
      "A request for information",
      "Death of the offeree",
      "Lapse of an unreasonable amount of time"
    ],
    correctAnswerIndices: [2],
    explanation: "An offer is personal to the offeree and cannot be accepted by their estate; therefore, their death terminates the offer. (A) is wrong because revocation must be communicated, not just posted. (B) does not terminate an offer (Stevenson v McLean). (D) is not the best answer, as \"unreasonable\" is subjective; \"reasonable\" time (Q7) is the correct term."
  },
  {
    questionText: "Which of the following is NOT a valid method of acceptance?",
    options: [
      "The offeree’s express words",
      "The offeree’s conduct",
      "Silence of the offeree",
      "Acceptance by post"
    ],
    correctAnswerIndices: [2],
    explanation: "As a general rule, acceptance cannot be imposed on an offeree through their silence (Felthouse v Bindley)."
  },
  {
    questionText: "Which of the following statements regarding the postal rule is correct?",
    options: [
      "Acceptance is effective once the letter of acceptance is written",
      "Acceptance is effective once the letter of acceptance is posted",
      "Acceptance is effective once the letter of acceptance is delivered",
      "The postal rule applies to all contracts, including land"
    ],
    correctAnswerIndices: [1],
    explanation: "This is a restatement of the rule from Q6. The contract is formed when the letter is properly posted, regardless of whether it is delayed or even lost."
  },
  {
    questionText: "Which TWO of the following are examples of valid offers?",
    options: [
      "A person verbally stating to another person that they would like to sell their computer to them for £500 today",
      "A newspaper advert that states a shop is selling shoes for £20",
      "A person handing their shopping to a supermarket checkout operator",
      "A business that circulates its price list to customers"
    ],
    correctAnswerIndices: [0, 2],
    explanation: "(A) is a direct, specific promise. (C) is the customer's offer to buy the goods (the goods on the shelf are an invitation to treat). (B) and (D) are both invitations to treat, inviting customers to make an offer."
  },
  {
    questionText: "Which of the following is an example of a valid offer?",
    options: [
      "A display of goods for sale",
      "An internet shop that advertises products for sale",
      "A newspaper advert that includes a specific statement, made to the world at large, offering a reward for the return of a particular item",
      "An invitation for potential suppliers to tender for the provision of services"
    ],
    correctAnswerIndices: [2],
    explanation: "Generally, adverts (A, B, D) are invitations to treat. However, (C) is an exception, known as a unilateral offer, where the offeror promises something in return for an act. This is a valid offer to the world at large (Carlill v Carbolic Smoke Ball Co.)."
  },
  {
    questionText: "Which of the following statements regarding counter-offers is correct?",
    options: [
      "Counter-offers may be accepted by the original offeror",
      "Counter-offers do not terminate the original offer",
      "A statement that enquires whether alternative terms would be acceptable is a counter-offer",
      "A counter-offer is made by the original offeror to the original offeree"
    ],
    correctAnswerIndices: [0],
    explanation: "A counter-offer (e.g., \"I'll buy it for £90,\" instead of £100) destroys the original offer and creates a new offer. The original offeror is now the offeree and can choose to accept or reject this new offer."
  },
  {
    questionText: "What is the principal effect of a counter-offer?",
    options: [
      "It destroys the original offer and replaces it with a new offer",
      "It creates a binding contract based on the terms of the counter-offer",
      "It creates a binding contract based on the terms of the original offer",
      "It places the original offer on hold for a reasonable time"
    ],
    correctAnswerIndices: [0],
    explanation: "This is the key principle from Hyde v Wrench. The original offer is \"destroyed\" and can no longer be accepted. The counter-offer becomes the only one on the table."
  },
  {
    questionText: "Which of the following is NOT required for revocation of an offer to be effective?",
    options: [
      "It must be in writing",
      "It must be made before the offer is accepted",
      "It must be made by the offeror or a reliable third party",
      "It must be communicated to the offeree"
    ],
    correctAnswerIndices: [0],
    explanation: "Revocation (withdrawing an offer) does not need to be in writing; it can be communicated orally. However, it must be communicated (D) before acceptance (B) and can be communicated via a reliable third party (Dickinson v Dodds) (C)."
  },
  {
    questionText: "Ali offers to sell his car to Hammad for £10,000 cash. At what point in time does the contract come into being?",
    options: [
      "When Hammad accepts the offer",
      "When Hammad pays Ali the £10,000",
      "When the agreement is written down",
      "When the agreement is signed"
    ],
    correctAnswerIndices: [0],
    explanation: "A contract is formed at the moment of valid acceptance. Payment (B) is the performance of the contract, not its formation. (C) and (D) are not necessary for a simple contract like this."
  },
  {
    questionText: "Which of the following would be regarded as valid, binding acceptance?",
    options: [
      "A counter-offer",
      "Acceptance “subject to contract”",
      "A tender to perform one task",
      "Posting a letter of acceptance"
    ],
    correctAnswerIndices: [3],
    explanation: "Posting a letter of acceptance (assuming post is a reasonable method) creates a binding contract under the postal rule. (A) is a rejection. (B) is conditional and not a final acceptance. (C) is an offer, not an acceptance."
  },
  {
    questionText: "Munir verbally agrees to rob his friend’s neighbours for £500. In the context of contract law, which of the following statements is true?",
    options: [
      "The contract is illegal, and therefore not valid.",
      "The contract must be in writing for it to be enforceable",
      "Contracts made between friends are never legally binding",
      "The contract is enforceable if Munir is found not guilty of robbery"
    ],
    correctAnswerIndices: [0],
    explanation: "A contract to commit a crime is void from the beginning (ab initio) because it has an illegal purpose. It has no legal standing and cannot be enforced by either party."
  },
  {
    questionText: "Rizwan sees a television for sale in the window of a shop, with a sign attached stating “LIMITED OFFER PRICE £50”. This is an example of which of the following?",
    options: [
      "An invitation to treat",
      "A valid offer",
      "A mere puff or boast",
      "A mere statement of selling price"
    ],
    correctAnswerIndices: [0],
    explanation: "Displaying goods in a shop window, even with a price, is a classic example of an invitation to treat (Fisher v Bell). It invites the customer (Rizwan) to make an offer to buy the TV, which the shop can then accept or reject."
  },
  {
    questionText: "Salman posted a letter of acceptance to Muneeb on 3rd December. On the 5th December, Muneeb emailed Salman to withdraw the offer. On the 6th December, Muneeb received Salman’s letter of acceptance. Which of the following best describes this situation?",
    options: [
      "There is NO contract. Muneeb has successfully revoked his offer by email prior to acceptance",
      "There is NO contract. Acceptance in writing is not a valid form of acceptance.",
      "There is a contract on 3rd December",
      "There is a contract on 6th December"
    ],
    correctAnswerIndices: [2],
    explanation: "This is a postal rule problem. Dec 3rd: Salman posts the acceptance. Under the postal rule, the contract is formed at this exact moment. Dec 5th: Muneeb's revocation arrives. This revocation is too late, as the contract was already formed on Dec 3rd. Dec 6th: The letter arrives, but this date is irrelevant as the contract was already in force."
  },
];

const chapter2_2Questions: Question[] = [
    {
        questionText: "Which of the following best defines \"consideration\" in contract law?",
        options: [
            "A benefit or detriment exchanged by the parties to a contract",
            "A promise made without any conditions",
            "A reward given for a moral act",
            "An agreement based solely on good faith"
        ],
        correctAnswerIndices: [0],
        explanation: "This is the classic legal definition from Currie v Misa. Consideration is a \"benefit to one party, or some detriment, loss, or responsibility given, suffered, or undertaken by the other.\" It's what each party gives in return for the other's promise."
    },
    {
        questionText: "What does the rule of privity of contract state?",
        options: [
            "A third party can enforce a contract if they benefit from it",
            "Only the parties involved in the contract can enforce its terms",
            "Contracts involving minors are unenforceable",
            "Privity does not apply to verbal contracts"
        ],
        correctAnswerIndices: [1],
        explanation: "The doctrine of privity means that a contract is a private agreement. Only the \"privies\" (the parties who made the agreement) can sue or be sued on it. A third party who is only a beneficiary generally has no rights under the contract (though this is now modified by statute)."
    },
    {
        questionText: "What is executed consideration?",
        options: [
            "A promise to perform an act in the future",
            "Payment made simultaneously with receiving goods or services",
            "A promise to pay for work already completed",
            "A promise without exchange of goods or services"
        ],
        correctAnswerIndices: [1],
        explanation: "\"Executed\" means performed. This is consideration that is completed at the moment the contract is made, such as handing over money in exchange for goods at a shop counter. (A) is executory consideration."
    },
    {
        questionText: "Which of the following is true about consideration?",
        options: [
            "It must be of equal value to both parties",
            "It must be sufficient but need not be adequate",
            "It must involve a promise made without prior agreement",
            "It must be fair and equal"
        ],
        correctAnswerIndices: [1],
        explanation: "This is a key rule. \"Sufficient\" means it must have some value in the eyes of the law (e.g., money, goods, a service). \"Adequate\" means it does not have to be a fair price (e.g., selling a car worth £10,000 for £1 is legally sufficient)."
    },
    {
        questionText: "In a commercial agreement, what is the presumption regarding intention to create legal relations?",
        options: [
            "There is no intention to create legal relations",
            "There is an intention to create legal relations unless proven otherwise",
            "Both parties must sign a document for it to be binding",
            "Agreements are based on goodwill"
        ],
        correctAnswerIndices: [1],
        explanation: "Courts presume that parties in a business or commercial context intend their agreements to be legally binding. This presumption is strong and can only be overturned by very clear evidence to the contrary."
    },
    {
        questionText: "Which of the following is NOT an example of valid consideration?",
        options: [
            "A promise to pay a specific amount for services rendered",
            "A promise to perform a legal duty already owed",
            "Payment made in return for goods delivered",
            "An agreement to provide services at a later date"
        ],
        correctAnswerIndices: [1],
        explanation: "If a person is already bound by law to do something (e.g., a police officer's duty to protect, or a witness's duty to attend court), a promise to do that same thing is not new consideration for a new promise (Collins v Godefroy)."
    },
    {
        questionText: "What does “intention to create legal relations” mean?",
        options: [
            "Both parties have agreed to be bound by a formal legal contract",
            "Both parties are willing to negotiate terms",
            "The agreement must be in writing to be enforceable",
            "The agreement must involve monetary exchange"
        ],
        correctAnswerIndices: [0],
        explanation: "This is the \"meeting of the minds\" on the legal consequences of the agreement. It's the unspoken understanding that if one party breaks the promise, the other party can take them to court."
    },
    {
        questionText: "In domestic agreements, the general presumption is that:",
        options: [
            "The agreement is intended to be legally binding",
            "The agreement is not intended to be legally binding",
            "A written agreement is always required",
            "Verbal agreements are enforceable"
        ],
        correctAnswerIndices: [1],
        explanation: "In social or family agreements (e.g., a husband promising his wife an allowance in Balfour v Balfour), the law presumes the parties did not intend to create a legally binding contract, but rather a simple domestic arrangement."
    },
    {
        questionText: "A promise to deliver goods in exchange for payment next week is an example of:",
        options: [
            "Past consideration",
            "Present consideration",
            "Executory consideration",
            "Executed consideration"
        ],
        correctAnswerIndices: [2],
        explanation: "\"Executory\" means \"yet to be performed.\" Here, both promises (to deliver and to pay) will happen in the future. This is the most common form of consideration in bilateral contracts."
    },
    {
        questionText: "Which of the following statements about privity of contract is correct?",
        options: [
            "A third party to a contract generally has enforceable rights under it",
            "Privity of contract allows both parties and beneficiaries to enforce contracts",
            "Only the parties to a contract can enforce its rights and obligations",
            "Privity of contract applies only to commercial agreements"
        ],
        correctAnswerIndices: [2],
        explanation: "This is the core definition of the doctrine. A contract creates a legal \"bubble\" and only the people inside that bubble (the parties) can enforce the terms."
    },
    {
        questionText: "What is the main purpose of consideration in contract law?",
        options: [
            "To ensure fairness between the parties",
            "To provide evidence of the parties’ intention",
            "To demonstrate a mutual exchange of value",
            "To make the contract legally binding regardless of value"
        ],
        correctAnswerIndices: [2],
        explanation: "Consideration is the \"badge of enforceability\" that separates a binding bargain (a contract) from a non-binding gratuitous promise (a gift). It proves that each side is giving something up."
    },
    {
        questionText: "Which of the following is an example of sufficiency in consideration?",
        options: [
            "A promise of payment for a service with no agreed amount",
            "A promise to pay in the future for services rendered",
            "A promise to deliver a service in exchange for a nominal fee",
            "A promise made without expectation of return"
        ],
        correctAnswerIndices: [2],
        explanation: "\"Sufficient\" means it has some value in the eyes of the law, even if it's tiny. A \"nominal\" (very small) fee like £1 or a \"peppercorn\" is legally sufficient consideration."
    },
    {
        questionText: "Which of the following does privity of contract NOT apply to?",
        options: [
            "Verbal agreements between two parties",
            "Rights and obligations in a contract",
            "Agreements involving third-party beneficiaries",
            "Contracts with no enforceable terms"
        ],
        correctAnswerIndices: [2],
        explanation: "This is a slightly tricky question. The rule of privity is about third-party beneficiaries (preventing them from suing). However, exceptions to the rule (like the Contracts (Rights of Third Parties) Act 1999) now allow specified third parties to enforce a contract, meaning the strict rule of privity \"does not apply\" in those situations."
    },
    {
        questionText: "A parent promises to give their child £50 if they complete their homework. The child completes the homework. This is an example of:",
        options: [
            "Intention to create legal relations",
            "No legal agreement, as it is a domestic arrangement",
            "Consideration in a binding contract",
            "A non-binding promise"
        ],
        correctAnswerIndices: [1],
        explanation: "This falls under the Balfour v Balfour presumption for domestic agreements. The law presumes there was no intention to create a legally binding contract, but rather a simple family arrangement."
    },
    {
        questionText: "Which of the following is true about the adequacy of consideration?",
        options: [
            "The law requires equal value to be exchanged",
            "The law requires consideration to have some economic value",
            "Consideration must reflect fair market value",
            "Consideration must be agreed upon by an external party"
        ],
        correctAnswerIndices: [1],
        explanation: "This question is slightly confusing \"adequacy\" with \"sufficiency.\" \"Adequacy\" is about whether the price is fair. The law does not check for adequacy (A and C are wrong). \"Sufficiency\" is about whether the consideration has any value. (B) is the best description of the sufficiency element, which is a prerequisite."
    },
    {
        questionText: "What happens if there is no intention to create legal relations in an agreement?",
        options: [
            "The agreement is void",
            "The agreement is unenforceable in court",
            "The agreement is valid if there is consideration",
            "The agreement is binding in all cases"
        ],
        correctAnswerIndices: [1],
        explanation: "Even if you have a perfect offer, acceptance, and consideration, the agreement will fail to be a contract if there was no intention to be legally bound. The court will not hear the case."
    },
    {
        questionText: "Which of the following is an example of executory consideration?",
        options: [
            "Payment for a service already completed",
            "A promise to deliver goods next month",
            "A deposit paid upon signing an agreement",
            "Payment made simultaneously with receiving goods"
        ],
        correctAnswerIndices: [1],
        explanation: "\"Executory\" means \"yet to be performed.\" A promise to do something in the future (deliver goods next month) is executory consideration. (A) is past consideration. (C) and (D) are executed."
    },
    {
        questionText: "When might an agreement involving a family member be enforceable?",
        options: [
            "When the agreement is made verbally",
            "When the agreement involves financial transactions",
            "When the parties explicitly state legal intent",
            "When one party benefits without providing consideration"
        ],
        correctAnswerIndices: [2],
        explanation: "The domestic presumption (no intent) can be rebutted (overturned) by evidence that the parties did intend to be bound. The clearest way is by (C), explicitly stating so. This happened in Merritt v Merritt, where a separated couple put their agreement in writing."
    },
    {
        questionText: "Which of the following best explains the concept of sufficiency in consideration?",
        options: [
            "The consideration must have some value in the eyes of the law",
            "The consideration must be of equal value to both parties",
            "The consideration must be agreed upon before the contract is formed",
            "The consideration must involve a monetary exchange"
        ],
        correctAnswerIndices: [0],
        explanation: "This is the legal definition. The \"value\" does not need to be monetary (it could be chocolate bar wrappers, as in Chappell v Nestle) but it must be something the law recognises as having value."
    },
    {
        questionText: "If a contract contains a promise to do something the promisor is already legally bound to do, the consideration is:",
        options: [
            "Always sufficient",
            "Invalid unless there is additional value provided",
            "Valid in commercial agreements only",
            "Enforceable without any additional terms"
        ],
        correctAnswerIndices: [1],
        explanation: "This is the rule from Stilk v Myrick. Simply promising to do what you're already bound to do (e.g., sail a ship back) is not new consideration. It only becomes valid if you provide something additional (e.g., do extra work, as in Hartley v Ponsonby)."
    },
    {
        questionText: "Emma agrees to sell her car to Alex for £5,000. After the agreement, Alex offers Emma an additional £500 to deliver the car to his house, even though delivery wasn’t part of the original agreement. Emma agrees but later refuses to deliver the car. What is the legal status of Alex’s promise to pay £500 for delivery?",
        options: [
            "It is enforceable as valid consideration because Emma agreed to deliver the car.",
            "It is unenforceable because Emma was already obligated to sell the car.",
            "It is enforceable only if Emma incurred extra costs for delivering the car.",
            "It is invalid because consideration must be provided before the contract is formed."
        ],
        correctAnswerIndices: [0],
        explanation: "The original contract was just for the sale of the car. The delivery is a new, additional service that was not part of the original deal. Emma's promise to deliver is fresh consideration for Alex's promise to pay £500. This is a new, valid contract."
    },
    {
        questionText: "David promises to give his niece £1,000 as a gift. His niece, excited by the promise, books a vacation relying on the money. David later changes his mind and refuses to give the money. What is the legal status of David’s promise?",
        options: [
            "It is enforceable because the niece relied on the promise.",
            "It is not enforceable because there is no consideration provided by the niece.",
            "It is enforceable because it created an intention to create legal relations.",
            "It is not enforceable because it was a domestic agreement."
        ],
        correctAnswerIndices: [1],
        explanation: "This is a gratuitous promise (a promise of a gift). The niece has not provided any consideration in return for the £1,000. Her reliance on the promise might trigger an estoppel argument, but it does not create a contract. The promise is not binding."
    },
    {
        questionText: "John orders a custom-built desk from a furniture company for £1,000, with delivery scheduled in two weeks. After receiving half the payment upfront, the company informs John that the price has increased to £1,200 due to rising costs. John agrees to the increase but later refuses to pay the additional £200. Can the company enforce the revised price?",
        options: [
            "Yes, because John agreed to the price increase.",
            "No, because the company cannot impose new terms without providing additional consideration.",
            "Yes, because rising costs justify the new price.",
            "No, because the contract was already completed with the original price."
        ],
        correctAnswerIndices: [1],
        explanation: "This is a classic Stilk v Myrick scenario. The company was already contractually bound to build the desk for £1,000. For John's new promise (to pay £200 more) to be binding, the company must provide new consideration. They have not; they are just doing what they already promised. Therefore, the promise to pay extra is unenforceable."
    },
    {
        questionText: "Lisa contracts with a builder to construct a home for £200,000. As part of the contract, Lisa negotiates that the builder will also create a garden at no additional charge. Lisa later tries to enforce the builder’s promise to create the garden. The builder argues that this part of the agreement is not binding. What is the likely outcome?",
        options: [
            "Lisa cannot enforce the promise because no consideration was provided for the garden.",
            "Lisa can enforce the promise because it was part of the original contract.",
            "Lisa cannot enforce the promise because it was a voluntary gift.",
            "Lisa can enforce the promise only if the builder completed part of the garden work."
        ],
        correctAnswerIndices: [1],
        explanation: "Lisa's single consideration (her promise to pay £200,000) supports all of the builder's promises (to build the house AND create the garden). It's all one bargain. The law does not need to see a separate price for every individual promise within a contract."
    },
    {
        questionText: "Which TWO of the following social, domestic, and family contracts would be presumed by the courts as intended to be legally binding?",
        options: [
            "An agreement where a father offers to pay his daughter a monthly allowance if she continues her education",
            "An agreement between friends to enter a newspaper competition together and share any prizes between them",
            "An agreement between a couple in a civil partnership who have separated for one to rent the family home from the other",
            "An agreement by a son to pay his mother housekeeping money while he stays at home"
        ],
        correctAnswerIndices: [1, 2],
        explanation: "(B) is a \"joint enterprise\" where there is a \"mutuality of obligation\" to share any winnings, rebutting the social presumption (Simpkins v Pays). (C) involves a domestic couple who are separated. The courts presume that parties no longer \"living in amity\" intend their agreements to be binding (Merritt v Merritt). (A) and (D) are classic Balfour v Balfour type domestic arrangements."
    }
];


export const chapters: Chapter[] = [
  { id: 1, title: 'English Legal System', questions: chapter1Questions },
  { 
    id: 2, 
    title: 'Contract Law', 
    subChapters: [
        { title: 'Essentials of Contract', questions: chapter2_1Questions },
        { title: 'Consideration, Privity, and Intention', questions: chapter2_2Questions },
        { title: 'Terms, Breaches, Remedies', questions: [] },
    ]
  },
  { id: 3, title: 'The Law of Torts', questions: [] },
  { id: 4, title: 'Employment Law', questions: [] },
  { id: 5, title: 'Agency Law', questions: [] },
  { id: 6, title: 'Types of Business Organisation', questions: [] },
  { id: 7, title: 'Corporations and Legal Personality', questions: [] },
  { id: 8, title: 'Capital and Financing', questions: [] },
  { id: 9, title: 'Directors', questions: [] },
  { id: 10, title: 'Corporate Administration', questions: [] },
  { id: 11, title: 'Insolvency', questions: [] },
  { id: 12, title: 'Corporate and Fraudulent Behavior', questions: [] },
];
