// Live preview update
// document.getElementById("name").addEventListener("input", function() {
//   document.getElementById("preview-name").innerText = this.value || "John Doe";
// });

// document.getElementById("title").addEventListener("input", function() {
//   document.getElementById("preview-title").innerText = this.value || "Frontend Developer";
// });

// document.getElementById("summary").addEventListener("input", function() {
//   document.getElementById("preview-summary").innerText = this.value || "Your summary will appear here...";
// });

// Room Type toggle
let lastChecked = null;
document.querySelectorAll('input[name="Room_Type"]').forEach(radio => {
  radio.addEventListener('click', function () {
    if (this === lastChecked) {
      this.checked = false;
      lastChecked = null;
    } else {
      lastChecked = this;
    }
  });
});

 window.onload = function () {
    const url = new URL(window.location.href);
    if (!url.searchParams.has("refreshed")) {
      url.searchParams.set("refreshed", "true");
      window.location.href = url.toString();
      console.log('refresh')
    } else {
      // Clean the URL
      url.searchParams.delete("refreshed");
      window.history.replaceState({}, document.title, url.pathname);
    }
  };
  
// PDF Export
// function generatePDF() {
//   const element = document.getElementById("resume");
//   const opt = {
//     margin: 0,
//     filename: 'Meeting_Point_Participants.pdf',
//     image: { type: 'jpeg', quality: 0.98 },
//     html2canvas: { scale: 2, useCORS: true },
//     jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
//   };
//   html2pdf().set(opt).from(element).save();
// }

function generatePDF() {
  // 1. Zoom out to actual size (important for iOS rendering)
  document.body.style.zoom = "100%";

  // 2. Scroll to the top smoothly
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); // Use 'auto' or 'instant' for immediate effect

  // 3. Give browser time to settle layout (especially on iOS)
  setTimeout(() => {
    const element = document.getElementById("resume");

    const opt = {
      margin: 0,
      filename: 'Meeting_Point_Participants.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: {
        scale: 3,
        useCORS: true,
        scrollY: 0,
        scrollX: 0
      },
      jsPDF: {
        unit: 'pt',
        format: 'a4',
        orientation: 'portrait'
      }
    };

    html2pdf().set(opt).from(element).save();
  }, 300); // Delay ~300ms for layout to reset properly
}


