<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Profile Scanner</title>
    <style>
        /* General Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #121212;
            color: #e0e0e0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            width: 90%;
            max-width: 600px;
            background-color: #1e1e1e;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        header {
            text-align: center;
            margin-bottom: 20px;
        }

        h1 {
            font-size: 24px;
            color: #bb86fc;
        }

        .search-section {
            margin-bottom: 20px;
        }

        .input-group {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
        }

        input[type="text"] {
            flex: 1;
            padding: 10px;
            border: 1px solid #333;
            border-radius: 4px;
            background-color: #2c2c2c;
            color: #e0e0e0;
        }

        input[type="text"]::placeholder {
            color: #888;
        }

        button {
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            background-color: #bb86fc;
            color: #121212;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #9a6fdc;
        }

        .error-message {
            color: #cf6679;
            font-size: 14px;
            margin-bottom: 10px;
        }

        .userData {
            margin-top: 20px;
            padding: 10px;
            border: 1px solid #333;
            border-radius: 4px;
            background-color: #2c2c2c;
        }

        .userData img {
            display: block;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 0 auto 10px;
            border: 2px solid #bb86fc;
        }

        .userData span {
            display: block;
            margin: 5px 0;
            font-size: 14px;
        }

        .userData span b {
            color: #bb86fc;
        }
    </style>
</head>

<body>
    <div class="container">
        <header>
            <h1 class="glitch">GITHUB SCANNER</h1>
        </header>

        <div class="search-section">
            <div class="input-group">
                <!-- Input area -->
                <input type="text" id="githubInput" placeholder="Enter GitHub username or profile URL..."
                    aria-label="GitHub username or URL">

                <!-- Button -->
                <button id="scanBtn" onclick="scanProfile()">SCAN</button>
            </div>

            <!-- Display Error Message, if user not found!-->
            <div class="error-message" id="errorMsg"></div>

            <!-- Display user data -->
            <div class="userData">
                <span id="userName"></span>
                <span id="userBio"></span>
                <span id="userLocation"></span>
                <span id="userCompany"></span>
                <span id="userFollowers"></span>
                <span id="userFollowing"></span>
            </div>
        </div>

        <script>
            const githubInput = document.getElementById("githubInput")
            const errorMsg = document.getElementById("errorMsg")
            const name = document.getElementById("userName")
            const userBio = document.getElementById("userBio")
            const userLocation = document.getElementById("userLocation")
            const userCompany = document.getElementById("userCompany")
            const userFollowers = document.getElementById("userFollowers")
            const userFollowing = document.getElementById("userFollowing")

            async function scanProfile() {
                const username = githubInput.value.trim()

                const url = `https://api.github.com/users/${username}`

                // Clear previous data
                errorMsg.textContent = "";
                name.innerHTML = "";
                userBio.innerHTML = "";
                userLocation.innerHTML = "";
                userCompany.innerHTML = "";
                userFollowers.innerHTML = "";
                userFollowing.innerHTML = "";

                try {
                    const response = await fetch(url)
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`)
                    }

                    const data = await response.json()
                    console.log(data);

                    // Display user data
                    userAvatar.src = data.avatar_url || "";
                    name.innerHTML = `<b>Name:</b> ${data.name || "N/A"}<br>`;
                    userBio.innerHTML = `<b>Bio:</b> ${data.bio || "N/A"}<br>`;
                    userLocation.innerHTML = `<b>Location:</b> ${data.location || "N/A"}<br>`;
                    userCompany.innerHTML = `<b>Company:</b> ${data.company || "N/A"}<br>`;
                    userFollowers.innerHTML = `<b>GitHub Followers:</b> ${data.followers || "N/A"}<br>`;
                    userFollowing.innerHTML = `<b>GitHub Following:</b> ${data.following || "N/A"}<br>`;

                } catch (error) {
                    errorMsg.textContent = `User ${username} doesn't exist. Please try again!`
                }
            }
        </script>
    </div>
</body>

</html>
