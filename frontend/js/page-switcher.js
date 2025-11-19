function    switchPage(originPage, targetPage) {
    const   loginPageBorder = document.getElementById("login-page-border");
    const   quizPageBorder = document.getElementById("quiz-page-border");
    const   quizBackground = document.getElementById("quiz-background");
    const   loginPage = document.getElementById("login-page");

    if (originPage === "login" && targetPage === "quiz") {
        loginPageBorder.style.display = "none";
        quizPageBorder.style.display = "flex";
    } else if (originPage === "quiz" && targetPage === "login") {
        quizPageBorder.style.display = "none";
        loginPageBorder.style.display = "flex";
        loginPageBorder.style.animationName = "border-from-quiz-to-login"
        loginPage.style.animationName = "from-quiz-to-login";
        quizBackground.style.visibility = "visible";
        quizBackground.style.animationPlayState = "running";
    }
}
