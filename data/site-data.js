/*
 * ============================================================
 *  PORTFOLIO DATA  -  the one file you edit to update the site
 * ============================================================
 *  - Add a project:   copy any object in `projects`, change `slug`,
 *                     fill the fields, drop images in assets/img/.
 *  - Hide a project:  set  published: false
 *  - Reorder:         change the order of objects in `projects`
 *  - Skills / links:  edit `skills`, `learning`, `links` below
 *
 *  Rules used while writing this file:
 *  - Every number comes from the project READMEs / source code.
 *  - Anything not provided is marked  { pending: "..." }  or left empty,
 *    and the page shows it as an editable placeholder.
 *  See README.md for the full field reference.
 */
window.PORTFOLIO = {
  site: {
    name: "Ata Kalanyer",
    title: "Machine Learning & AI Enthusiast",
    subtitle: "Computer Programming Student | Aspiring AI & Machine Learning Engineer",
    tagline: "Building today, learning every day, creating tomorrow.",
    intro:
      "I work with Python, Data Science, Machine Learning and Artificial Intelligence. I like turning raw data into predictive models I can explain, and building software that works end to end.",
    about:
      "I'm Ata Kalanyer, a Computer Programming student interested in Artificial Intelligence, Data Science, and Machine Learning. I enjoy working with data, building predictive models, exploring algorithms, and developing practical software projects. I'm continuously improving my technical skills through hands-on projects and independent learning.",
    // Put a photo at assets/img/profile.jpg and set image to that path.
    profile: { image: "./assets/img/profile.png", alt: "Portrait of Ata Kalanyer" },
    year: 2026
  },

  links: {
    github: "https://github.com/atakalanyer",
    linkedin: "https://www.linkedin.com/in/atakalanyer/",
    medium: "https://medium.com/@atakalanyer852",
    // Public e-mail from the GitHub profile. Change it here if you prefer another address.
    email: "atakalanyer852@gmail.com",
    mlCollection: "https://github.com/atakalanyer/Machine-Learning-Projects",
    // Optional: paste a form endpoint (for example from Formspree) to make the contact form work.
    contactFormEndpoint: ""
  },

  categories: [
    {
      id: "ml",
      label: "Machine Learning & Data Science",
      short: "ML & Data Science",
      blurb:
        "Supervised learning projects: data cleaning, feature engineering, model comparison, tuning and explainability."
    },
    {
      id: "software",
      label: "Software & Web Development",
      short: "Software & Web",
      blurb:
        "Full-stack and web projects: databases, back-end logic, user interfaces and the code that connects them."
    }
  ],

  skills: [
    {
      group: "Programming Languages",
      items: [
        { name: "Python", icon: "python" },
        { name: "C", icon: "c" },
        { name: "C#", mono: "C#" },
        { name: "Java", mono: "Jv" },
        { name: "SQL", mono: "SQL" }
      ]
    },
    {
      group: "Data Science & Machine Learning",
      items: [
        { name: "NumPy", icon: "numpy" },
        { name: "Pandas", icon: "pandas" },
        { name: "Matplotlib", mono: "Mpl" },
        { name: "Seaborn", mono: "Sns" },
        { name: "Scikit-learn", icon: "scikitlearn" },
        { name: "SHAP", mono: "SHAP" }
      ]
    },
    {
      group: "Web Development",
      items: [
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" },
        { name: "JavaScript", icon: "javascript" }
      ]
    },
    {
      group: "Tools & Platforms",
      items: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Visual Studio Code", mono: "VS" },
        { name: "Jupyter Notebook", icon: "jupyter" },
        { name: "Microsoft SQL Server", mono: "MS" },
        { name: "Unity", icon: "unity" }
      ]
    }
  ],

  learning: [
    { title: "Machine Learning", text: "Going deeper into model selection, validation and tuning." },
    { title: "Deep Learning", text: "Learning how neural networks are built and trained." },
    { title: "Large Language Models", text: "Exploring how LLMs work and where they fit into software." },
    { title: "Artificial Intelligence", text: "Following the wider field beyond classical ML." },
    { title: "Data Science", text: "Practicing analysis, visualization and storytelling with data." }
  ],

  /* icons for technology chips on project pages: name -> key in data/icons.js */
  techIcons: {
    Python: "python", C: "c", NumPy: "numpy", Pandas: "pandas", "Scikit-learn": "scikitlearn",
    HTML: "html5", CSS: "css3", JavaScript: "javascript", Git: "git", GitHub: "github",
    "Jupyter Notebook": "jupyter", Flask: "flask", PHP: "php", React: "react", Vite: "vite",
    "Node.js": "nodedotjs", "Express.js": "express"
  },

  projects: [
    /* ===================================================== ML ===== */
    {
      slug: "customer-churn-prediction",
      published: true,
      category: "ml",
      type: "Classification",
      title: "Customer Churn Prediction",
      short: "Predicting which telecom customers are likely to leave and explaining the model's decisions with SHAP.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "SHAP", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      cardTech: ["Python", "Pandas", "NumPy", "Scikit-learn", "SHAP"],
      thumb: { src: "assets/img/ml/churn/shap-summary.webp", alt: "SHAP summary plot for the churn model" },
      links: {
        github: "https://github.com/atakalanyer/Machine-Learning-Projects",
        githubNote: "Folder: Customer-Churn-Prediction",
        notebook: "", demo: ""
      },
      meta: "Telco churn · Logistic Regression · ROC-AUC 0.840",
      overview: {
        what:
          "A classification project on the IBM Telco Customer Churn dataset. It identifies customers who are likely to leave a telecom provider and uses SHAP to show which factors drive each prediction.",
        problem:
          "A telecom company loses revenue when customers cancel. The model estimates churn risk per customer so that retention effort can be aimed at the people most likely to leave.",
        why:
          "Knowing who is at risk, and why, turns a vague retention goal into concrete actions such as targeted offers or better onboarding.",
        objectives: [
          "Analyze customer behavior and churn patterns.",
          "Clean the data and perform exploratory analysis.",
          "Engineer features that describe customer behavior.",
          "Build and compare classification models.",
          "Optimize hyperparameters and the classification threshold.",
          "Explain predictions with SHAP and derive business insights."
        ]
      },
      dataset: {
        source: "IBM Telco Customer Churn dataset",
        rows: "7,043 customer records",
        columns: "21 original columns",
        target: "Churn (Yes / No), binary classification",
        features: [
          "Demographics", "Account information", "Subscribed services", "Contract type",
          "Payment method", "Billing details (tenure, MonthlyCharges, TotalCharges)"
        ],
        characteristics: [
          "Imbalanced: fewer churn cases than non-churn cases.",
          "TotalCharges is stored as text and has missing values for customers with zero tenure.",
          "The held-out test set contains 1,409 customers, 374 of whom churned."
        ]
      },
      methodology: [
        { stage: "Data Cleaning", text: "Checked missing values and duplicates, converted TotalCharges to numeric, handled the missing values that belong to customers with zero tenure, and dropped customerID because it is an identifier, not a feature." },
        { stage: "Exploratory Data Analysis", text: "Compared churn rates across tenure, contract type, services and payment method. Short tenure and month-to-month contracts stood out as higher-risk groups." },
        { stage: "Feature Engineering", text: "Created ServiceCount, TenureGroup, HasTechSupport, HasOnlineSecurity and AverageMonthlySpend. AverageMonthlySpend was left out of training because it was highly correlated with MonthlyCharges." },
        { stage: "Data Preprocessing", text: "Stratified train-test split, StandardScaler for numeric features, OneHotEncoder for categorical features and SimpleImputer, combined in a ColumnTransformer and Pipeline." },
        { stage: "Model Development", text: "Compared Logistic Regression and Random Forest. Logistic Regression performed better with the configurations tested." },
        { stage: "Hyperparameter Optimization", text: "GridSearchCV with stratified 5-fold cross-validation selected C = 0.01, class_weight = balanced, penalty = l2 and solver = saga (best CV F1 = 0.6294). The decision threshold was then tuned on out-of-fold predictions and set to 0.56 instead of the default 0.50." },
        { stage: "Model Evaluation", text: "The final Logistic Regression model was evaluated once on the held-out test set." },
        { stage: "Model Explainability", text: "SHAP summary and waterfall plots explain the model globally and for individual customers." }
      ],
      gallery: [
        { src: "assets/img/ml/churn/corr-matrix.webp", title: "Feature correlation matrix", text: "Correlations between tenure, MonthlyCharges and three engineered features.", caption: "MonthlyCharges and ServiceCount form the most strongly correlated pair here (0.80)." },
        { src: "assets/img/ml/churn/feature-importance.webp", title: "Feature importance", text: "Which features the model relies on most.", caption: "Importance reflects association in this dataset, not causation." },
        { src: "assets/img/ml/churn/roc-curve.webp", title: "ROC curve (Logistic Regression)", text: "True positive rate against false positive rate across thresholds.", caption: "Test ROC-AUC: 0.8403." },
        { src: "assets/img/ml/churn/confusion-matrix.webp", title: "Confusion matrix", text: "Test-set predictions at the 0.56 threshold.", caption: "272 of the 374 customers who churned were identified; 234 retained customers were flagged as churn." },
        { src: "assets/img/ml/churn/shap-summary.webp", title: "SHAP summary plot", text: "Global view of how each feature pushes predictions up or down.", caption: "Most influential: tenure, contract type, MonthlyCharges, InternetService, PaymentMethod." },
        { src: "assets/img/ml/churn/shap-waterfall.webp", title: "SHAP waterfall plot", text: "How the features add up to the prediction for one customer.", caption: "Local explanation of a single customer's churn probability." }
      ],
      metrics: {
        headline: [
          { label: "Accuracy", value: "76.15%" },
          { label: "Churn precision", value: "53.75%" },
          { label: "Churn recall", value: "72.73%" },
          { label: "Churn F1-score", value: "61.85%" },
          { label: "ROC-AUC", value: "84.03%" },
          { label: "Decision threshold", value: "0.56" }
        ],
        tables: [
          {
            title: "Logistic Regression vs. Random Forest (test set)",
            columns: ["Metric", "Logistic Regression", "Random Forest"],
            rows: [
              ["Accuracy", "76%", "74%"],
              ["Churn precision", "54%", "51%"],
              ["Churn recall", "73%", "71%"],
              ["Churn F1-score", "62%", "59%"],
              ["ROC-AUC", "0.840", "0.820"]
            ]
          },
          {
            title: "Confusion matrix (Logistic Regression, test set)",
            columns: ["", "Predicted: no churn", "Predicted: churn"],
            rows: [
              ["Actual: no churn", "801", "234"],
              ["Actual: churn", "102", "272"]
            ]
          }
        ]
      },
      findings: [
        { title: "Tenure matters most", text: "Newer customers form the highest churn-risk group." },
        { title: "Contract type is a strong signal", text: "Month-to-month contracts are strongly associated with churn, while longer contracts go with loyalty." },
        { title: "Price sensitivity", text: "Higher monthly charges are associated with higher churn risk." },
        { title: "Support and security services", text: "Customers without technical support show higher churn tendencies; those with online security show lower churn." },
        { title: "Payment method", text: "Electronic check users show higher churn tendencies in this dataset." },
        { title: "Business reading", text: "The data suggests long-term contract incentives, stronger first-year onboarding and promotion of support and security packages. These are observed associations, not proven causes." }
      ],
      challenges: {
        technical: [
          "The classes are imbalanced, so accuracy alone hides how many churners are missed.",
          "Highly correlated features can blur coefficients and SHAP attributions."
        ],
        decisions: [
          "Used class_weight = balanced and moved the threshold to 0.56 to balance precision and recall for the churn class.",
          "Excluded AverageMonthlySpend to avoid redundancy with MonthlyCharges.",
          "Kept Logistic Regression as the final model because it scored better than Random Forest on every reported metric."
        ],
        limitations: [
          "The model has false positives and false negatives (234 and 102 on the test set).",
          "Results come from one held-out test split.",
          "Real customer populations may behave differently from this dataset."
        ],
        improvements: [
          "Evaluate with repeated or nested cross-validation instead of a single split.",
          "Try gradient boosting models and probability calibration.",
          "Test cost-sensitive thresholds that reflect the real cost of a missed churner."
        ]
      }
    },

    {
      slug: "bank-marketing-prediction",
      published: true,
      category: "ml",
      type: "Classification",
      title: "Bank Marketing Prediction",
      short: "Predicting which bank customers will subscribe to a term deposit, with leakage control and threshold tuning.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      cardTech: ["Python", "Pandas", "Scikit-learn"],
      thumb: { src: "assets/img/ml/bank/feature-importance.webp", alt: "Feature importance chart for the bank marketing model" },
      links: {
        github: "https://github.com/atakalanyer/Machine-Learning-Projects",
        githubNote: "Folder: Bank-Marketing-Classification",
        notebook: "", demo: ""
      },
      meta: "UCI Bank Marketing · Random Forest · F1 0.462",
      overview: {
        what:
          "A binary classification project that predicts whether a bank customer will subscribe to a term deposit, using demographic data, account details and earlier campaign contacts.",
        problem:
          "Direct marketing campaigns contact many customers who will never subscribe. The model ranks customers by their likelihood to say yes before the call is made.",
        why:
          "A bank can spend its marketing effort on the customers most likely to respond instead of calling everyone.",
        objectives: [
          "Preprocess the data and handle class imbalance.",
          "Avoid data leakage so the prediction scenario is realistic.",
          "Compare several classification approaches.",
          "Optimize the decision threshold for the minority class.",
          "Evaluate the final model on an untouched test set."
        ]
      },
      dataset: {
        source: "UCI Bank Marketing dataset (bank-full.csv)",
        sourceUrl: "https://archive.ics.uci.edu/dataset/222/bank+marketing",
        rows: "45,211 records",
        columns: "16 Original Columns",
        target: "y (yes / no): did the customer subscribe to a term deposit",
        features: [
          "age, job, marital status, education", "balance, housing loan, personal loan",
          "contact type, day, month", "campaign, pdays, previous, poutcome"
        ],
        characteristics: [
          "Imbalanced: 1,322 of the 11,303 test customers (about 12%) are 'yes'.",
          "Missing categorical values are stored as 'unknown'.",
          "The duration feature was removed because it is only known after the call ends."
        ]
      },
      methodology: [
        { stage: "Exploratory Data Analysis", text: "Inspected structure, feature distributions, missing values and data types." },
        { stage: "Data Preprocessing", text: "Assigned the 'unknown' category to missing categorical values, separated X and y, and removed duration to prevent data leakage." },
        { stage: "Feature Engineering", text: "Built a ColumnTransformer with StandardScaler for numeric features and OneHotEncoder (handle_unknown = ignore) for categorical ones, fitted on training data only." },
        { stage: "Model Development", text: "Trained Logistic Regression, Balanced Logistic Regression (class_weight = balanced) and a Random Forest (200 trees, balanced) on a stratified train / validation / test split (25,431 / 8,477 / 11,303 rows, as printed in the notebook)." },
        { stage: "Threshold Optimization", text: "Tested thresholds from 0.10 to 0.30 on the validation set. A threshold of 0.25 gave the best F1 among the values tried." },
        { stage: "Model Evaluation", text: "The final Random Forest was retrained on train plus validation data and evaluated once on the test set." },
        { stage: "Feature Importance", text: "Random Forest importances show which inputs the model uses most. They do not establish causal relationships." }
      ],
      gallery: [
        { src: "assets/img/ml/bank/feature-importance.webp", title: "Random Forest feature importance", text: "Relative importance of the input features.", caption: "Top features: balance, age, day_of_week, campaign, pdays." },
        { src: "assets/img/ml/bank/confusion-matrix.webp", title: "Confusion matrix (validation set, threshold 0.25)", text: "Random Forest predictions on the 8,477 validation rows.", caption: "496 of the 992 'yes' customers were found, and 660 'no' customers were flagged. The final test-set metrics are in the cards below." }
      ],
      metrics: {
        headline: [
          { label: "Accuracy", value: "0.8667" },
          { label: "Precision", value: "0.4374" },
          { label: "Recall", value: "0.4887" },
          { label: "F1-score", value: "0.4616" },
          { label: "ROC-AUC", value: "0.7920" },
          { label: "Decision threshold", value: "0.25" }
        ],
        tables: [
          {
            title: "Validation results at the default 0.50 threshold",
            columns: ["Model", "Accuracy", "Precision", "Recall", "F1"],
            rows: [
              ["Logistic Regression", "0.892", "0.639", "0.185", "0.288"],
              ["Balanced Logistic Regression", "0.760", "0.279", "0.660", "0.392"],
              ["Random Forest", "0.893", "0.625", "0.212", "0.316"]
            ]
          },
          {
            title: "Threshold search on the validation set (Random Forest)",
            columns: ["Threshold", "Precision", "Recall", "F1"],
            rows: [
              ["0.10", "0.255", "0.736", "0.379"],
              ["0.15", "0.327", "0.653", "0.436"],
              ["0.20", "0.386", "0.572", "0.461"],
              ["0.25", "0.429", "0.500", "0.462"],
              ["0.30", "0.465", "0.412", "0.437"]
            ],
            highlightRow: 3
          },
          {
            title: "Test-set classification report",
            columns: ["Class", "Precision", "Recall", "F1"],
            rows: [
              ["No (0)", "0.93", "0.92", "0.92"],
              ["Yes (1)", "0.44", "0.49", "0.46"]
            ]
          },
          {
            title: "Top Random Forest feature importances",
            columns: ["Feature", "Importance"],
            rows: [
              ["balance", "0.1568"], ["age", "0.1345"], ["day_of_week", "0.1207"], ["campaign", "0.0676"],
              ["pdays", "0.0375"], ["poutcome_success", "0.0328"], ["contact_unknown", "0.0271"], ["previous", "0.0228"]
            ]
          }
        ]
      },
      findings: [
        { title: "Accuracy hides the real problem", text: "Plain Logistic Regression reaches 0.892 accuracy but finds only 18.5% of the customers who subscribe. Class imbalance makes accuracy misleading." },
        { title: "Class weights trade precision for recall", text: "Balanced Logistic Regression raised recall to 0.660 but dropped precision to 0.279." },
        { title: "Threshold tuning helps", text: "Moving the Random Forest threshold from 0.50 to 0.25 raised F1 from 0.316 to about 0.462 on validation data." },
        { title: "Stable on unseen data", text: "Validation and test F1 were very close (about 0.462), which suggests the model held up on data it had not seen." }
      ],
      challenges: {
        technical: [
          "Strong class imbalance makes the minority 'yes' class hard to predict.",
          "The duration feature would have leaked information that does not exist before a call."
        ],
        decisions: [
          "Removed duration to keep the scenario realistic.",
          "Used a separate validation set for model comparison and threshold selection, and kept the test set for the end.",
          "Fitted all preprocessing on training data only."
        ],
        limitations: [
          "Recall for the 'yes' class is still below 0.50 at the chosen threshold.",
          "Feature importance values describe the model, not causes."
        ],
        improvements: [
          "Hyperparameter tuning with GridSearchCV or RandomizedSearchCV.",
          "Gradient Boosting, XGBoost and other ensembles.",
          "Cross-validation, more feature engineering and probability calibration.",
          "Comparing other threshold-selection strategies."
        ]
      }
    },

    {
      slug: "california-housing-price-prediction",
      published: true,
      category: "ml",
      type: "Regression",
      title: "California Housing Price Prediction",
      short: "Comparing linear, polynomial and tree-based regression models for house prices and explaining the best one with SHAP.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "SHAP", "SciPy", "Matplotlib", "Seaborn"],
      cardTech: ["Python", "Pandas", "Scikit-learn", "SHAP"],
      thumb: { src: "assets/img/ml/california/model-comparison.webp", alt: "Bar chart comparing R² of three regression models" },
      links: {
        github: "https://github.com/atakalanyer/House-Price-Prediction-with-Machine-Learning",
        notebook: "", demo: ""
      },
      meta: "California Housing · Linear / Ridge / Random Forest · SHAP",
      //pendingNotes: [
        //"SHAP, actual-vs-predicted and residual plots are produced by the script, but no exported images are in the repository yet. Save them and add them to the gallery of this entry."
      //],
      overview: {
        what:
          "A regression project on the California Housing dataset. It compares linear, polynomial (Ridge) and Random Forest models, tunes them with RandomizedSearchCV and K-Fold cross-validation, and explains the best model with SHAP.",
        problem:
          "Predict the median house value of a district from its features, and understand which features drive the predictions.",
        why:
          "Comparing simple and complex models shows where extra complexity pays off, and SHAP keeps the winning model from being a black box.",
        objectives: [
          "Clean the data and engineer new features.",
          "Compare linear, polynomial and tree-based models.",
          "Tune hyperparameters with RandomizedSearchCV and K-Fold cross-validation.",
          "Measure test performance with R².",
          "Explain the best model globally and locally with SHAP."
        ]
      },
      dataset: {
        source: "California Housing dataset",
        rows: "20,640 districts in the scikit-learn dataset; rows at the 5.0 price cap were removed",
        columns: "9 (8 features + the MedHouseVal target)",
        target: "MedHouseVal (median house value)",
        features: [
          "Original district-level features",
          "Engineered: rooms per household",
          "Engineered: bedrooms-to-rooms ratio"
        ],
        characteristics: [
          "The target has an artificial price ceiling, so rows with MedHouseVal of 5.0 or more were removed.",
          "Some features are strongly skewed and were log-transformed."
        ]
      },
      methodology: [
        { stage: "Exploratory Data Analysis", text: "Loaded the data and examined its structure, distributions and relationships." },
        { stage: "Data Cleaning", text: "Removed the artificial price ceiling (MedHouseVal < 5.0 kept) and clipped extreme outliers." },
        { stage: "Feature Engineering", text: "Added rooms-per-household and bedrooms ratio features and applied logarithmic transforms to skewed variables." },
        { stage: "Data Preprocessing", text: "Scaled features with StandardScaler inside Pipeline objects and made an 80 / 20 train-test split (random_state = 42)." },
        { stage: "Model Development", text: "Linear Regression, Polynomial Regression (Ridge) and Random Forest Regressor." },
        { stage: "Hyperparameter Optimization", text: "RandomizedSearchCV (4 sampled parameter sets, 3-fold cross-validation) to keep the search cost low." },
        { stage: "Model Evaluation", text: "Compared cross-validated R² and test R² across the three model families. Actual-versus-predicted plots and a residual histogram are part of the script." },
        { stage: "Model Explainability", text: "SHAP summary plot for global feature impact and a SHAP waterfall plot for a single house." }
      ],
      gallery: [
        { src: "assets/img/ml/california/model-comparison.webp", title: "Model comparison (R²)", text: "Cross-validated and test R² for the three model families.", caption: "Drawn from the results table inside the script (rounded to 2 decimals).", generated: true },
        { placeholder: true, title: "SHAP summary plot", text: "Image to be added.", caption: "The script creates it for 100 random test rows with a Random Forest TreeExplainer." },
        { placeholder: true, title: "Actual vs. predicted and residuals", text: "Image to be added.", caption: "The script plots all three models against the true price and the Random Forest residual distribution." }
      ],
      metrics: {
        headline: [
          { label: "Best model", value: "Random Forest" },
          { label: "Test R²", value: "0.77" },
          { label: "CV R²", value: "0.76" }
        ],
        tables: [
          {
            title: "Model comparison (R², rounded to 2 decimals)",
            columns: ["Model", "CV R²", "Test R²"],
            rows: [
              ["Linear Regression", "0.62", "0.61"],
              ["Polynomial (Ridge)", "0.68", "0.68"],
              ["Random Forest", "0.76", "0.77"]
            ],
            highlightRow: 2
          }
        ]
      },
      findings: [
        { title: "Model complexity paid off", text: "Random Forest reached a test R² of 0.77 against 0.68 for polynomial Ridge and 0.61 for plain linear regression." },
        { title: "Non-linear structure matters", text: "Adding polynomial terms to the linear model lifted test R² from 0.61 to 0.68, and the tree-based model went further." },
        { title: "Consistent cross-validation and test scores", text: "CV and test R² are within 0.01 of each other for every model, so the test scores are not an unusual split." }
      ],
      challenges: {
        technical: [
          "The artificial price ceiling distorts the target and had to be removed.",
          "Skewed features needed log transforms before linear models behave well."
        ],
        decisions: [
          "Used RandomizedSearchCV instead of a full grid search to reduce tuning cost.",
          "Compared three model families to see whether extra complexity actually helps."
        ],
        limitations: [
          "Scores in the script are rounded to two decimals and RMSE is not printed.",
          "Only 4 random parameter sets and 3 folds were searched, so better settings may exist.",
          "SHAP values were computed on a sample of 100 test rows."
        ],
        improvements: [
          "Export the SHAP and residual plots and add the metrics table to the repository README.",
          "Try gradient boosting models as another comparison point."
        ]
      }
    },

    {
      slug: "eyupsultan-housing-price-prediction",
      published: true,
      category: "ml",
      type: "Regression",
      title: "Eyüpsultan Housing Price Prediction",
      short: "Predicting apartment listing prices in five Eyüpsultan neighborhoods from data I scraped myself.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Instant Data Scraper"],
      cardTech: ["Python", "Pandas", "Scikit-learn"],
      thumb: { src: "assets/img/ml/eyupsultan/area-vs-price.webp", alt: "Scatter plot of gross area against listing price" },
      links: {
        github: "https://github.com/atakalanyer/5Mahallede_Konut_Fiyat_Tahmini",
        notebook: "", demo: ""
      },
      meta: "Real listing data · Random Forest · test R² 0.648",
      overview: {
        what:
          "A regression project on real estate listings from five neighborhoods of Eyüpsultan, Istanbul: Alibeyköy, Çırçır, Karadolap, Yeşilpınar and Akşemsettin. I collected the data myself, cleaned it, and compared four regression models.",
        problem:
          "Estimate the listing price of an apartment from its size, age, rooms, neighborhood and keywords in the listing title.",
        why:
          "Local prices depend on factors that national datasets do not cover. Building the dataset from scratch shows the full path from raw web data to a tuned model.",
        objectives: [
          "Predict prices from real listing data.",
          "Apply data cleaning and feature engineering techniques.",
          "Compare different regression models.",
          "Use hyperparameter optimization and cross-validation.",
          "Visualize predictions, errors and feature importance."
        ]
      },
      dataset: {
        source: "Sahibinden.com listings collected with Instant Data Scraper",
        rows: "1,038 raw listings; 956 after cleaning and outlier removal",
        columns: "6 raw columns (title, gross m², rooms, price, neighborhood, building age)",
        target: "fiyat_tl (listing price in Turkish lira)",
        features: [
          "Gross area (m²)", "Building age", "Room and living-room counts",
          "Neighborhood (one-hot encoded)", "Keywords extracted from listing titles"
        ],
        characteristics: [
          "The cleaned set holds 956 listings: Çırçır 261, Yeşilpınar 226, Karadolap 165, Akşemsettin 165, Alibeyköy 139.",
          "Prices are asking prices, not final sale prices.",
          "The final observation count depends on the cleaning steps."
        ]
      },
      methodology: [
        { stage: "Data Collection", text: "Scraped listings that matched the search criteria from Sahibinden.com with Instant Data Scraper." },
        { stage: "Data Cleaning", text: "Shuffled the rows, normalized text, removed duplicates, converted the price column to integers and filtered impossible records using price per square meter." },
        { stage: "Outlier Handling", text: "Detected outliers in price and area with the IQR method and saved a cleaned CSV." },
        { stage: "Exploratory Data Analysis", text: "Price distribution, price by neighborhood and gross area against price." },
        { stage: "Feature Engineering", text: "Split room strings into room and living-room counts, created keyword features from titles and one-hot encoded neighborhoods." },
        { stage: "Model Development", text: "Ridge Regression, Decision Tree, Random Forest and Gradient Boosting regressors." },
        { stage: "Hyperparameter Optimization", text: "RandomizedSearchCV with 5-fold KFold cross-validation." },
        { stage: "Model Evaluation", text: "Compared cross-validated R², test R² and test MAE." },
        { stage: "Model Explainability", text: "Permutation importance, partial dependence plots, residual analysis and a shallow decision tree visualization." }
      ],
      gallery: [
        { src: "assets/img/ml/eyupsultan/price-by-neighborhood.webp", title: "Listing price by neighborhood", text: "Distribution of asking prices in each neighborhood.", caption: "Generated from the cleaned dataset in the repository (956 listings).", generated: true },
        { src: "assets/img/ml/eyupsultan/area-vs-price.webp", title: "Gross area vs. listing price", text: "Each point is one listing, with a linear trend line.", caption: "Generated from the cleaned dataset in the repository. The correlation between area and price is about 0.55.", generated: true }
      ],
      metrics: {
        headline: [
          { label: "Best model", value: "Random Forest" },
          { label: "Test R²", value: "0.648" },
          { label: "CV R²", value: "0.606" },
          { label: "Test MAE", value: "1,053,250 TL" }
        ],
        tables: [
          {
            title: "Model comparison",
            columns: ["Model", "CV R²", "Test R²", "Test MAE (TL)"],
            rows: [
              ["Ridge Regression", "0.532", "0.513", "1,237,125"],
              ["Decision Tree", "0.521", "0.570", "1,125,905"],
              ["Random Forest", "0.606", "0.648", "1,053,250"],
              ["Gradient Boosting", "0.584", "0.611", "1,104,675"]
            ],
            highlightRow: 2
          }
        ],
        bars: {
          title: "Test R² by model",
          max: 0.7,
          items: [
            { label: "Random Forest", value: 0.648, secondary: 0.606, best: true },
            { label: "Gradient Boosting", value: 0.611, secondary: 0.584 },
            { label: "Decision Tree", value: 0.570, secondary: 0.521 },
            { label: "Ridge Regression", value: 0.513, secondary: 0.532 }
          ],
          legend: ["Test R²", "CV R²"]
        }
      },
      findings: [
        { title: "Tree ensembles beat the linear model", text: "Random Forest and Gradient Boosting both scored higher test R² than Ridge Regression (0.648 and 0.611 versus 0.513)." },
        { title: "Random Forest led on every reported metric", text: "It had the highest CV R² and test R² and the lowest test MAE, about 1.05 million TL." },
        { title: "Area explains part of the price", text: "In the cleaned data, gross area and price are moderately correlated (about 0.55), so area alone is not enough." },
        { title: "Neighborhood medians are close", text: "Median listing prices range from about 6.95 million TL (Yeşilpınar) to 7.65 million TL (Akşemsettin). Both figures were computed from the cleaned CSV." }
      ],
      challenges: {
        technical: [
          "Scraped listings contain duplicates, inconsistent text, typos and impossible values.",
          "Room information and listing titles had to be turned into numeric features."
        ],
        decisions: [
          "Filtered inconsistent records using price per square meter before applying the IQR rule.",
          "Used cross-validation and a separate test set to compare models fairly."
        ],
        limitations: [
          "Data covers five neighborhoods and one collection period.",
          "Listing prices can differ from real transaction prices.",
          "Some factors that affect price are not in the dataset.",
          "With R² of 0.648, a typical error of about 1 million TL remains."
        ],
        improvements: [
          "Collect more listings and more features.",
          "Compare other outlier handling methods.",
          "Run a more extensive hyperparameter search.",
          "Add SHAP for global and local explainability.",
          "Turn the model into a small Flask or Streamlit prediction app."
        ]
      }
    },

    {
      slug: "student-performance-prediction",
      published: true,
      category: "ml",
      type: "Regression",
      title: "Student Performance Prediction",
      short: "Predicting students' math scores from demographics and reading and writing scores.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "KaggleHub"],
      cardTech: ["Python", "Pandas", "Scikit-learn"],
      thumb: { src: "assets/img/ml/student/actual-vs-predicted.webp", alt: "Actual versus predicted math scores" },
      links: {
        github: "https://github.com/atakalanyer/Machine-Learning-Projects",
        githubNote: "Folder: Student Performance Prediction",
        notebook: "", demo: ""
      },
      meta: "Kaggle dataset · Linear Regression · test R² 0.880",
      overview: {
        what:
          "A regression project that predicts students' mathematics exam scores from demographic information, parental education, lunch type, test preparation and reading and writing scores. It is part of my 30 Days of Machine Learning learning journey.",
        problem:
          "Predict the math score (math score) of a student from the other information in the Students Performance in Exams dataset.",
        why:
          "It is a compact problem for practicing the full workflow: EDA, encoding, scaling, model comparison and tuning.",
        objectives: [
          "Explore the data and check for outliers.",
          "Encode categorical variables and scale features.",
          "Train and compare regression models.",
          "Tune a Random Forest with cross-validation.",
          "Understand which features carry the most signal."
        ]
      },
      dataset: {
        source: "Students Performance in Exams (Kaggle)",
        sourceUrl: "https://www.kaggle.com/datasets/spscientist/students-performance-in-exams",
        rows: "1,000 student records",
        columns: "5 categorical features, 2 numerical predictors and 1 target",
        target: "math score",
        features: ["Gender", "Parental education level", "Lunch type", "Test preparation course", "Reading score", "Writing score"],
        characteristics: [
          "Small dataset with no missing values reported.",
          "Reading and writing scores correlate strongly with math score (0.8176 and 0.8026)."
        ]
      },
      methodology: [
        { stage: "Data Collection", text: "Downloaded the dataset with KaggleHub and loaded it with Pandas." },
        { stage: "Exploratory Data Analysis", text: "Statistical summaries, missing-value check, distributions, IQR outlier inspection and correlation analysis." },
        { stage: "Data Preprocessing", text: "Ordinal encoding for parental education, one-hot encoding for other categories, StandardScaler, and a train / validation / test split." },
        { stage: "Model Development", text: "Linear Regression and Random Forest Regressor." },
        { stage: "Hyperparameter Optimization", text: "GridSearchCV with 5-fold cross-validation. Best parameters: n_estimators 100, max_depth 10, min_samples_split 2, min_samples_leaf 2." },
        { stage: "Model Evaluation", text: "MAE, MSE, RMSE and R². Linear Regression won on validation data and was used for the final test." }
      ],
      gallery: [
        { src: "assets/img/ml/student/actual-vs-predicted.webp", title: "Actual vs. predicted math scores", text: "How closely the final model's predictions follow the real scores.", caption: "Points close to the diagonal mean accurate predictions." },
        { src: "assets/img/ml/student/correlation.webp", title: "Correlation analysis", text: "Correlation of the numeric variables with math score.", caption: "Reading score 0.8176 and writing score 0.8026." },
        { src: "assets/img/ml/student/feature-importance.webp", title: "Random Forest feature importance", text: "Which inputs the Random Forest relied on.", caption: "Reading score (0.5353) and writing score (0.2588) dominate." }
      ],
      metrics: {
        headline: [
          { label: "Test R²", value: "0.8804" },
          { label: "Test MAE", value: "4.20" },
          { label: "Test RMSE", value: "5.39" },
          { label: "Test MSE", value: "29.10" }
        ],
        tables: [
          {
            title: "Validation results",
            columns: ["Model", "MAE", "RMSE", "R²"],
            rows: [
              ["Linear Regression", "4.36", "5.36", "0.8673"],
              ["Random Forest", "4.89", "6.05", "0.8309"],
              ["Optimized Random Forest", "4.88", "6.02", "0.8326"]
            ],
            highlightRow: 0
          },
          {
            title: "Random Forest feature importance (top features)",
            columns: ["Feature", "Importance"],
            rows: [
              ["Reading Score", "0.5353"], ["Writing Score", "0.2588"],
              ["Gender (Female)", "0.0619"], ["Gender (Male)", "0.0591"]
            ]
          }
        ]
      },
      findings: [
        { title: "Simple beat complex", text: "Linear Regression outperformed even the tuned Random Forest on validation data and was chosen as the final model." },
        { title: "About 88% of variance explained", text: "The final test R² of 0.8804 means the model explains roughly 88% of the variance in math scores." },
        { title: "Reading and writing dominate", text: "Both the correlation analysis and Random Forest importance point to these two scores as the strongest signals. Importance describes the model, not causes." }
      ],
      challenges: {
        technical: [
          "Mixing ordinal and nominal categorical variables required different encodings."
        ],
        decisions: [
          "Chose the final model on validation scores, then touched the test set once.",
          "Kept Linear Regression even though the tuned Random Forest is more flexible."
        ],
        limitations: [
          "Only 1,000 records, so conclusions may not transfer to other student populations.",
          "Reading and writing scores are strong predictors that would not exist before an exam."
        ],
        improvements: [
          "Try cross-validated model comparison for the linear model too.",
          "Evaluate on a version of the problem that excludes reading and writing scores."
        ]
      }
    },

    /* ================================================ SOFTWARE ===== */
    {
      slug: "tr-hotel-reservation-system",
      published: true,
      category: "software",
      type: "Full-Stack Web Development",
      title: "TR Hotel Reservation System",
      short: "A Flask and SQL Server hotel booking app with room management, guest records, date-conflict checks and e-mail confirmations.",
      tech: ["Python", "Flask", "Microsoft SQL Server", "pyodbc", "HTML", "CSS"],
      cardTech: ["Python", "Flask", "SQL Server", "HTML", "CSS"],
      thumb: { src: "assets/img/sw/hotel-schema.webp", alt: "Database schema of the hotel reservation system" },
      links: {
        github: "https://github.com/atakalanyer/Hotel-Reservation",
        notebook: "", demo: ""
      },
      meta: "Flask · SQL Server · 6 tables",
      overview: {
        what:
          "A Turkish-language hotel reservation application built with Flask on top of a Microsoft SQL Server database. Visitors browse hotels and rooms, make a reservation for chosen dates, and administrators manage the bookings.",
        problem:
          "Booking a room needs more than a form: the system must know which rooms exist, who the guest is, and whether the chosen dates collide with another reservation.",
        why:
          "It is a compact example of a relational design with real business rules: availability, pricing and roles.",
        objectives: [
          "Model hotels, rooms, guests and reservations in a relational schema.",
          "Prevent overlapping reservations for the same room.",
          "Calculate the total price automatically from the room type and the stay length.",
          "Separate normal users from administrators.",
          "Confirm reservations by e-mail."
        ]
      },
      features: [
        { title: "Hotels and rooms", text: "The home page lists hotels with their rooms, room types, capacity and nightly price." },
        { title: "New reservation flow", text: "A reservation form per hotel collects guest details and dates and creates the booking." },
        { title: "Date-conflict check", text: "A dedicated function rejects a booking when the room is already reserved for any overlapping dates." },
        { title: "Automatic total price", text: "The total is calculated from the room type's nightly price and the number of nights." },
        { title: "Roles and sessions", text: "Login keeps the user in a session with a role of user or admin. Admins can delete reservations." },
        { title: "Reservation list", text: "Lists current reservations with guest, room and dates." },
        { title: "E-mail confirmation", text: "Sends a confirmation message over SMTP, configured through environment variables." },
        { title: "Setup helpers", text: "SQL scripts create the schema and sample data, and a setup page appears if the database is not ready." }
      ],
      architecture: {
        title: "Database architecture",
        intro: "Six tables on SQL Server, taken from schema.sql in the repository.",
        tables: [
          { name: "oteller", note: "Hotels", columns: [["otel_id", "INT", "PK"], ["otel_adi", "NVARCHAR(100)"], ["sehir", "NVARCHAR(50)"], ["adres", "NVARCHAR(200)"], ["aciklama", "NVARCHAR(300)"], ["gorsel_yolu", "NVARCHAR(260)"]] },
          { name: "oda_tipleri", note: "Room types", columns: [["tip_id", "INT", "PK"], ["tip_adi", "NVARCHAR(50)"], ["kapasite", "INT"], ["gecelik_fiyat", "DECIMAL(8,2)"]] },
          { name: "odalar", note: "Rooms", columns: [["oda_id", "INT", "PK"], ["otel_id", "INT", "FK"], ["tip_id", "INT", "FK"], ["oda_no", "NVARCHAR(10)"], ["durum", "NVARCHAR(20)"]] },
          { name: "misafirler", note: "Guests", columns: [["misafir_id", "INT", "PK"], ["ad", "NVARCHAR(50)"], ["soyad", "NVARCHAR(50)"], ["telefon", "NVARCHAR(15)"], ["email", "NVARCHAR(100)"]] },
          { name: "rezervasyonlar", note: "Reservations", columns: [["rezervasyon_id", "INT", "PK"], ["misafir_id", "INT", "FK"], ["oda_id", "INT", "FK"], ["giris_tarihi", "DATE"], ["cikis_tarihi", "DATE"], ["durum", "NVARCHAR(20)"], ["toplam_ucret", "DECIMAL(8,2)"]] },
          { name: "kullanicilar", note: "Application users", columns: [["kullanici_id", "INT", "PK"], ["kullanici_adi", "NVARCHAR(50)"], ["sifre", "NVARCHAR(100)"], ["rol", "NVARCHAR(20)"], ["ad_soyad", "NVARCHAR(100)"]] }
        ],
        relations: [
          "odalar.otel_id → oteller.otel_id (a hotel has many rooms)",
          "odalar.tip_id → oda_tipleri.tip_id (a room has one type)",
          "rezervasyonlar.misafir_id → misafirler.misafir_id (a guest can have many reservations)",
          "rezervasyonlar.oda_id → odalar.oda_id (a room can be reserved many times, on different dates)",
          "odalar has a UNIQUE (otel_id, oda_no) constraint: room numbers are unique per hotel"
        ]
      },
      implementation: [
        { title: "Parameterized SQL", text: "Queries are sent through pyodbc with ? placeholders instead of string concatenation." },
        { title: "Environment-based configuration", text: "Server, database, driver, encryption and SMTP settings come from environment variables with safe defaults." },
        { title: "Template inheritance", text: "Jinja templates share one base layout across the home, about, contact, login, reservation and list pages." },
        { title: "Request-scoped connections", text: "A database connection is opened per request and closed when the request ends." }
      ],
      gallery: [
        { src: "assets/img/sw/hotel-schema.webp", title: "Database schema", text: "The six tables and their foreign keys.", caption: "Drawn from schema.sql in the repository.", generated: true },
        { placeholder: true, title: "Home page: hotels and rooms", text: "Screenshot to be added.", caption: "The app needs SQL Server to run, so a screenshot could not be generated from the source alone. Add a file to assets/img/sw/ and set src." },
        { placeholder: true, title: "New reservation form", text: "Screenshot to be added.", caption: "" },
        { placeholder: true, title: "Reservation list (admin view)", text: "Screenshot to be added.", caption: "" }
      ],
      findings: [
        { title: "Business rules live in code and schema", text: "Foreign keys and the unique room-number constraint keep the data consistent, while the application checks date overlaps." },
        { title: "Configuration stays out of the code", text: "Connection and mail settings are read from the environment, so the same code runs on different machines." }
      ],
      challenges: {
        technical: [
          "Detecting overlapping stays correctly for the same room.",
          "Keeping the room status in sync with the reservations.",
          "Making the app usable when the database has not been created yet."
        ],
        decisions: [
          "Added a setup page and an initialization route instead of failing with a database error.",
          "Used SQL scripts (schema, seed, and one combined SSMS script) so the database can be created in SSMS or by the app."
        ],
        limitations: [
          "Sample users in the seed data use plain-text passwords, which is acceptable for a demo only.",
          "The interface is server-rendered pages with no front-end framework."
        ],
        improvements: [
          "Store hashed passwords.",
          "Add CSRF protection to the forms.",
          "Add online payment and availability search by date range.",
          "Add automated tests for the date-conflict logic."
        ]
      }
    },

    {
      slug: "infsmvu-campusnet",
      published: true,
      category: "software",
      type: "Full-Stack Web Application",
      title: "INFSMVU CampusNet",
      short: "A social and collaboration platform for university students: projects, teams, clubs and campus events.",
      tech: ["Node.js", "Express.js", "Microsoft SQL Server", "JavaScript", "React", "Vite", "HTML", "CSS"],
      cardTech: ["Node.js", "Express.js", "SQL Server", "React", "JavaScript"],
      thumb: { src: "assets/img/sw/campusnet-tables.webp", alt: "Grouped list of CampusNet database tables" },
      links: { github: "", notebook: "", demo: "" },
      meta: "React · Express · SQL Server · Supabase",
      ///pendingNotes: [
        //"Repository link, screenshots and a description of your own role in the team are not available yet. Add them in data/site-data.js (the backend API code in the project refers to a teammate)."
      //],
      overview: {
        what:
          "A university-focused social networking and project collaboration platform for students and academics of Fatih Sultan Mehmet Vakıf University. Students can share projects, find teammates, follow each other, join clubs and register for events.",
        problem:
          "Project ideas, teammates, clubs and events are usually scattered across chat groups and notice boards. The platform puts them in one place.",
        why:
          "A shared network makes it easier for students to find collaborators with the right skills and to take part in campus activities.",
        objectives: [
          "Let users register with e-mail verification and role-based access.",
          "Support project posts, team matching and applications to join a team.",
          "Support clubs, events, registration, check-in and certificates.",
          "Provide profiles, follows, messages and notifications.",
          "Give administrators tools to manage content and feedback."
        ]
      },
      features: [
        { title: "Accounts and roles", text: "Registration with one-time-code e-mail verification and roles for students, club representatives, academics and admins." },
        { title: "Feed", text: "Posts with likes and comments, plus a side panel with suggestions." },
        { title: "Explore and team matching", text: "Project search with filters, project detail pages, and applying to join a project team." },
        { title: "Profiles", text: "Personal portfolios with skills, followers and following." },
        { title: "Clubs", text: "Club pages, membership, announcements and a club representative panel." },
        { title: "Events", text: "Event creation, registration, QR-based check-in and attendance certificates." },
        { title: "Messages and notifications", text: "Direct messages, in-app notifications and optional push and e-mail notifications." },
        { title: "Administration", text: "An admin page for content moderation, reports and site feedback." }
      ],
      architecture: {
        title: "Architecture and data",
        intro: "The repository contains a React front end and an Express.js API backed by SQL Server. The front end also uses Supabase and Netlify Functions.",
        layers: [
          { name: "Front end", detail: "React 18 with React Router, built with Vite. 43 components and 18 page files, including the feed, explore, project detail, profile, clubs, events, messages and admin screens." },
          { name: "REST API (backend/)", detail: "Express.js 5 with route modules for auth, lookup, users, clubs, projects, posts, events and notifications. JWT for sessions, bcryptjs for password hashing, Nodemailer for e-mail, and the mssql package to talk to SQL Server." },
          { name: "Serverless layer", detail: "Netlify Functions handle one-time codes, sign-in, registration, password reset, push notifications and an assistant endpoint." },
          { name: "Supabase client", detail: "The front end reads and writes tables such as projects, profiles, clubs, events, announcements, reports, notifications and follows through Supabase (for example projects, profiles, announcements, reports, event check-ins and notifications)." }
        ],
        groups: [
          { title: "SQL Server tables used by the Express API", note: "Collected from the SQL queries in the backend routes.", items: [
            "users", "profiles", "departments", "email_verifications",
            "skills", "user_skills", "projects", "project_required_skills",
            "project_members", "project_applications", "follows",
            "posts", "post_media", "post_likes", "comments",
            "clubs", "club_members", "events", "event_attendees", "notifications"
          ] }
        ],
        relations: []
      },
      implementation: [
        { title: "Role-based routing", text: "Protected routes and a role guard keep club and admin screens away from regular students." },
        { title: "Filters kept in the URL", text: "Explore filters live in the query string so a filtered view can be shared." },
        { title: "Validation helpers", text: "Shared validators for forms and a separate OTP input component for verification codes." },
        { title: "Light and dark themes", text: "A theme hook and separate stylesheets support both themes." },
        { title: "Parameter and permission helpers", text: "The backend uses small utilities for parameter handling and permission checks." }
      ],
      gallery: [
        { src: "assets/img/sw/campusnet-tables.webp", title: "SQL Server tables", text: "The 20 tables the Express API reads and writes, grouped by purpose.", caption: "Table names collected from the SQL queries in backend/routes.", generated: true },
        { placeholder: true, title: "Feed", text: "Screenshot to be added.", caption: "The app needs its Supabase keys to run, so a screenshot could not be generated from the source alone." },
        { placeholder: true, title: "Explore and filters", text: "Screenshot to be added.", caption: "" },
        { placeholder: true, title: "Club panel and events", text: "Screenshot to be added.", caption: "" }
      ],
      findings: [
        { title: "A broad feature surface", text: "The project combines authentication, social features, team matching, clubs and events in one application." },
        { title: "Two data paths", text: "The repository holds a SQL Server API and a Supabase-backed front end, a useful comparison of two ways to build the same kind of system." }
      ],
      challenges: {
        technical: [
          "Role-dependent access to pages and API routes.",
          "One-time-code verification and e-mail delivery.",
          "Keeping many related entities (users, projects, clubs, events) consistent."
        ],
        decisions: [
          "Used role guards on both the front end and the API.",
          "Hashed passwords with bcryptjs and issued JWTs for sessions."
        ],
        limitations: [
          { pending: "Add the limitations that are true for the deployed version." }
        ],
        improvements: [
          "Choose a single backend (SQL Server API or Supabase) and remove the duplicated path.",
          "Add automated tests for the API routes.",
          "Write setup documentation for the environment variables."
        ]
      },
      role: "I'm the Full-Stack Developer and Project Manager on this project."
    },

    {
      slug: "dogus-kirtasiye",
      published: true,
      category: "software",
      type: "Web Development",
      title: "Doğuş Kırtasiye",
      short: "A multi-page stationery store website built with HTML, CSS and PHP.",
      tech: ["HTML", "CSS", "PHP"],
      cardTech: ["HTML", "CSS", "PHP"],
      thumb: { src: "assets/img/sw/dogus-home.webp", alt: "Home page of the Doğuş Kırtasiye website", fit: "cover" },
      links: { github: "", notebook: "", demo: "" },
      meta: "PHP · 17 pages · server-side form validation",
      //pendingNotes: [
        //"There is no public repository for this project yet. Add the link in data/site-data.js (links.github) after you publish it."
      //],
      overview: {
        what:
          "A stationery store website developed as a web development project. It has a home page, product and category pages, an about page and a contact page, all styled with one shared stylesheet.",
        problem:
          "A small shop needs a clear online presence: what it sells, what things cost, whether they are in stock, and how to reach it.",
        why:
          "It practices the basics of server-side web development: PHP data structures, loops, conditionals and form handling.",
        objectives: [
          "Present products by category with prices and stock status.",
          "Generate repeated page elements with PHP instead of copying markup.",
          "Provide a contact page with a validated form.",
          "Keep the look consistent with a shared stylesheet."
        ]
      },
      features: [
        { title: "Home page", text: "Hero section, four category cards, a short list of advantages and a best-sellers table built from PHP arrays." },
        { title: "Categories and products", text: "Pages for pens, notebooks, paper and drawing tools, and detail pages for individual products." },
        { title: "Stock indicator", text: "A PHP condition shows 'in stock' or 'limited stock' in different colors." },
        { title: "Price calculation", text: "Product pages show unit price, quantity and the total amount." },
        { title: "Contact page", text: "A form with server-side validation, an opening-hours table, an embedded map and a WhatsApp live-support button." },
        { title: "About page", text: "Mission statement and the shop logo." }
      ],
      implementation: [
        { title: "Data in PHP arrays", text: "Categories, advantages, best sellers and opening hours are arrays rendered with foreach loops." },
        { title: "Conditional output", text: "if / else blocks decide the stock message and the status colors." },
        { title: "Form handling", text: "The contact page checks the request method, validates that both fields are filled in and shows an error or a confirmation." },
        { title: "One stylesheet", text: "style.css styles every page, including the navigation bar, cards, tables and the floating WhatsApp button." }
      ],
      gallery: [
        { src: "assets/img/sw/dogus-home.webp", title: "Home page", text: "Hero, categories and advantages.", caption: "Rendered from the PHP source." },
        { src: "assets/img/sw/dogus-products.webp", title: "Product categories", text: "Entry page for the four product groups.", caption: "Rendered from the PHP source." },
        { src: "assets/img/sw/dogus-product.webp", title: "Product detail page", text: "Price, quantity, total and stock status.", caption: "Rendered from the PHP source." }
      ],
      findings: [
        { title: "Server-side templating in practice", text: "Most repeated markup is generated from arrays, which keeps the page files short and easy to change." },
        { title: "Complete page flow", text: "Every page links to the others through a shared navigation bar, from the home page to a single product." }
      ],
      challenges: {
        technical: [
          "Keeping many product pages consistent without a database.",
          "Handling form input safely on the server."
        ],
        decisions: [
          "Used PHP arrays instead of a database to keep the project small."
        ],
        limitations: [
          "Products and prices are hard-coded, so changing them means editing code.",
          "The contact form shows a confirmation but does not send the message anywhere.",
          "The 'add to cart' button is only a demo alert."
        ],
        improvements: [
          "Move products to a MySQL database and load them dynamically.",
          "Escape all output with htmlspecialchars and send form messages by e-mail.",
          "Add a real shopping cart.",
          "Make the layout responsive for phones."
        ]
      }
    }
  ]
};
