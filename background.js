chrome.action.onClicked.addListener((tab) => {

  chrome.scripting.executeScript({
    target: { tabId: tab.id },

    func: () => {

      const isDark =
        document.body.classList.contains("dark-mode-extension");

      if (isDark) {

        // Remove dark mode
        document.body.classList.remove("dark-mode-extension");

        document.querySelectorAll("*").forEach(el => {
          el.style.backgroundColor = "";
          el.style.color = "";
        });

      } else {

        // Enable dark mode
        document.body.classList.add("dark-mode-extension");

        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#ffffff";

        document.querySelectorAll("*").forEach(el => {
          el.style.backgroundColor = "#121212";
          el.style.color = "#ffffff";
        });

      }

    }

  });

});