const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb");

const templatePath = path.join(__dirname, "../templates");
app.use(express.static(path.join(__dirname, "../public")));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set View Engine and Views Path
app.set("view engine", "hbs");
app.set("views", templatePath);

// Routes
app.get("/", (req, res) => {
    res.render("home"); // Render the homepage
});

// Homepage Route (first page with Start button)
app.get("/", (req, res) => {
    res.render("home1"); // Render the homepage
});

// Option Page Route (second page with different options)
app.get("/option", (req, res) => {
    res.render("option"); // Render the options page after clicking Start
});

// Login Page Route
app.get("/login", (req, res) => {
    res.render("login"); // Render the login page
});

// Signup Page Route
app.get("/signup", (req, res) => {
    res.render("signup"); // Render the signup page
});

app.get("/Apti", (req, res) => {
    res.render("Apti"); // Render the signup page
});
app.get("/Arithmetic", (req, res) => {
    res.render("Arithmetic"); // Render the signup page
});
app.get("/Algebra", (req, res) => {
    res.render("Algebra"); // Render the signup page
});
app.get("/TimeandDistance", (req, res) => {
    res.render("TimeandDistance"); 
});
app.get("/NumberSystem", (req, res) => {
    res.render("NumberSystem"); 
});
app.get("/RatioandProportion", (req, res) => {
    res.render("RatioandProportion"); 
});
app.get("/DataSufficiency", (req, res) => {
    res.render("DataSufficiency"); 
});
app.get("/Syllogisms", (req, res) => {
    res.render("Syllogisms"); 
});
app.get("/CriticalThinking", (req, res) => {
    res.render("CriticalThinking"); 
});
app.get("/DecisionMaking", (req, res) => {
    res.render("DecisionMaking"); 
});
app.get("/Vocabulary", (req, res) => {
    res.render("Vocabulary"); 
});
app.get("/Grammar", (req, res) => {
    res.render("Grammar"); 
});
app.get("/ReadingComprehension", (req, res) => {
    res.render("ReadingComprehension"); 
});
app.get("/Synonyms&Antonyms", (req, res) => {
    res.render("Synonyms&Antonyms"); 
});
app.get("/Mechanical", (req, res) => {
    res.render("Mechanical"); 
});
app.get("/Electronics", (req, res) => {
    res.render("Electronics"); 
});
app.get("/ComputerScience", (req, res) => {
    res.render("ComputerScience"); 
});
app.get("/Artificialintelligence", (req, res) => {
    res.render("Artificialintelligence"); 
});
app.get("/Civil", (req, res) => {
    res.render("Civil"); 
});
app.get("/PercentageProblems", (req, res) => {
    res.render("PercentageProblems"); 
});
app.get("/PermutationandCombination", (req, res) => {
    res.render("PermutationandCombination"); 
});
app.get("/Profitandloss", (req, res) => {
    res.render("Profitandloss"); 
});
app.get("/ProblemsonAges", (req, res) => {
    res.render("ProblemsonAges"); 
});
app.get("/AlligationandMixture", (req, res) => {
    res.render("AlligationandMixture"); 
});
app.get("/FullsyllabusTest", (req, res) => {
    res.render("FullsyllabusTest"); 
});
app.get("/resume-builder", (req, res) => {
    res.render("resume-builder"); 
});
app.get("/Tech", (req, res) => {
    res.render("Tech"); 
});
app.get("/Microsoft", (req, res) => {
    res.render("Microsoft"); 
});
app.get("/microsoft1", (req, res) => {
    res.render("microsoft1"); 
});
app.get("/microsoft2", (req, res) => {
    res.render("microsoft2"); 
});
app.get("/Infosys", (req, res) => {
    res.render("Infosys"); 
});
app.get("/infosys1", (req, res) => {
    res.render("infosys1"); 
});
app.get("/infosys2", (req, res) => {
    res.render("infosys2"); 
});
app.get("/Cisco", (req, res) => {
    res.render("Cisco"); 
});
app.get("/cisco1", (req, res) => {
    res.render("cisco1"); 
});
app.get("/cisco2", (req, res) => {
    res.render("cisco2"); 
});
app.get("/Oracle", (req, res) => {
    res.render("Oracle"); 
});
app.get("/oracle1", (req, res) => {
    res.render("oracle1"); 
});
app.get("/oracle2", (req, res) => {
    res.render("oracle2"); 
});
app.get("/Adobe", (req, res) => {
    res.render("Adobe"); 
});
app.get("/adobe1", (req, res) => {
    res.render("adobe1"); 
});
app.get("/adobe2", (req, res) => {
    res.render("adobe2"); 
});
app.get("/Amazon", (req, res) => {
    res.render("Amazon"); 
});
app.get("/amazon1", (req, res) => {
    res.render("amazon1"); 
});
app.get("/amazon2", (req, res) => {
    res.render("amazon2"); 
});
app.get("/TCS", (req, res) => {
    res.render("TCS"); 
});
app.get("/tcs1", (req, res) => {
    res.render("tcs1"); 
});
app.get("/tcs2", (req, res) => {
    res.render("tcs2"); 
});
app.get("/Google", (req, res) => {
    res.render("Google"); 
});
app.get("/google1", (req, res) => {
    res.render("google1"); 
});
app.get("/google2", (req, res) => {
    res.render("google2"); 
});
app.get("/Facebook", (req, res) => {
    res.render("Google"); 
});
app.get("/google1", (req, res) => {
    res.render("google1"); 
});
app.get("/google2", (req, res) => {
    res.render("google2"); 
});
app.get("/Wipro", (req, res) => {
    res.render("Wipro"); 
});
app.get("/wipro1", (req, res) => {
    res.render("wipro1"); 
});
app.get("/wipro2", (req, res) => {
    res.render("wipro2"); 
});
app.get("/HCL", (req, res) => {
    res.render("HCL"); 
});
app.get("/hcl1", (req, res) => {
    res.render("hcl1"); 
});
app.get("/hcl2", (req, res) => {
    res.render("hcl2"); 
});
app.get("/Apple", (req, res) => {
    res.render("Apple"); 
});
app.get("/apple1", (req, res) => {
    res.render("apple1"); 
});
app.get("/apple2", (req, res) => {
    res.render("apple2"); 
});
app.get("/Intel", (req, res) => {
    res.render("Intel"); 
});
app.get("/intel1", (req, res) => {
    res.render("intel1"); 
});
app.get("/intel2", (req, res) => {
    res.render("intel2"); 
});
app.get("/L&T", (req, res) => {
    res.render("L&T"); 
});
app.get("/l&t1", (req, res) => {
    res.render("l&t1"); 
});
app.get("/l&t2", (req, res) => {
    res.render("l&t2"); 
});
app.get("/Mindtree", (req, res) => {
    res.render("Mindtree"); 
});
app.get("/mindtree1", (req, res) => {
    res.render("mindtree1"); 
});
app.get("/mindtree2", (req, res) => {
    res.render("mindtree2"); 
});
app.get("/Flipcart", (req, res) => {
    res.render("Flipcart"); 
});
app.get("/flipcart1", (req, res) => {
    res.render("flipcart1"); 
});
app.get("/flipcart2", (req, res) => {
    res.render("flipcart2"); 
});
app.get("/Twitter", (req, res) => {
    res.render("Twitter"); 
});
app.get("/twitter1", (req, res) => {
    res.render("twitter1"); 
});
app.get("/twitter2", (req, res) => {
    res.render("twitter2"); 
});

app.get("/Paytm", (req, res) => {
    res.render("Paytm"); 
});
app.get("/paytm1", (req, res) => {
    res.render("paytm1"); 
});
app.get("/paytm2", (req, res) => {
    res.render("paytm2"); 
});
app.get("/Robosoft", (req, res) => {
    res.render("Robosoft"); 
});
app.get("/robosoft1", (req, res) => {
    res.render("robosoft1"); 
});
app.get("/robosoft2", (req, res) => {
    res.render("robosoft2"); 
});

app.get("/TechMahindra", (req, res) => {
    res.render("TechMahindra"); 
});
app.get("/techmahindra1", (req, res) => {
    res.render("techmahindra1"); 
});
app.get("/techmahindra2", (req, res) => {
    res.render("techmahindra2"); 
});
app.get("/IBM", (req, res) => {
    res.render("IBM"); 
});
app.get("/ibm1", (req, res) => {
    res.render("ibm1"); 
});
app.get("/ibm2", (req, res) => {
    res.render("ibm2"); 

    
});
app.get("/Zensar", (req, res) => {
    res.render("Zensar"); 
});
app.get("/zensar1", (req, res) => {
    res.render("zensar1"); 
});
app.get("/zensar2", (req, res) => {
    res.render("zensar2"); 
});

app.get("/Swiggy", (req, res) => {
    res.render("Swiggy"); 
});
app.get("/swiggy1", (req, res) => {
    res.render("swiggy1"); 
});
app.get("/swiggy2", (req, res) => {
    res.render("swiggy2"); 
});

app.get("/Mphasis", (req, res) => {
    res.render("Mphasis"); 
});
app.get("/mphasis1", (req, res) => {
    res.render("mphasis1"); 
});
app.get("/mphasis2", (req, res) => {
    res.render("mphasis2"); 
});


app.get("/about", (req, res) => {
    res.render("about"); 
});
app.get("/chatbot", (req, res) => {
    res.render("chatbot"); 
});






// Handle Signup Form Submission
app.post("/signup", async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            email: req.body.email, // Collect email from the form
            password: req.body.password,
        };
        await collection.insertMany([data]);
        res.render("home1"); // Redirect to homepage after signup
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).send("Error during signup. Please try again.");
    }
});


// Handle Login Form Submission
app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ email: req.body.email }); // Find by email
        if (check && check.password === req.body.password) {
            res.render("home1"); // Redirect to the homepage after successful login
        } else {
            res.status(401).send("Invalid email or password");
        }
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).send("Error during login. Please try again.");
    }
});

app.get("/:subcategory", (req, res) => {
    const subcategory = req.params.subcategory;
    console.log(`Accessing subcategory: ${subcategory}`);
    const validSubcategories = ["Arithmetic", "Algebra","Arithmetic", "Algebra", "Time and Distance", "Number System", "Ratio and Proportion",
        "Data Sufficiency", "Syllogisms", "Critical Thinking", "Decision Making",
            "Vocabulary", "Grammar", "Reading Comprehension", "Synonyms & Antonyms",
            "Artificial intelligence", "Mechanical", "Civil", "Computer Science", "Electronics",
            "Problems on Ages", "Percentage Problems", "Profit and loss", "Permutation and Combination","Alligation and Mixture"]; // Add all valid subcategories here

    if (validSubcategories.includes(subcategory)) {
        res.render(subcategory); // Dynamically render the subcategory page
    } else {
        res.status(404).send("Page not found");
    }
});


// Start the Server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
