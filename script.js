document.addEventListener("DOMContentLoaded", () => {

  // SHOW / HIDE SECTIONS

  const preventive = document.getElementById("preventiveSection");
  const corrective = document.getElementById("correctiveSection");
  const cleaning = document.getElementById("cleaningSection");

  const radios = document.querySelectorAll('input[name="maintenanceType"]');

  function hideAll() {
    if (preventive) preventive.style.display = "none";
    if (corrective) corrective.style.display = "none";
    if (cleaning) cleaning.style.display = "none";
  }

  function show(type) {
    hideAll();

    if (type === "preventive") preventive.style.display = "block";
    if (type === "corrective") corrective.style.display = "block";
    if (type === "cleaning") cleaning.style.display = "block";
  }

  hideAll();

  radios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      show(e.target.value);
    });
  });

  
  // PDF BUTTON

  const btn = document.getElementById("downloadBtn");

  btn.addEventListener("click", generatePDF);

});

// PDF 

async function generatePDF() {

  try {

    console.log("PDF START");

    const element = document.getElementById("report");

    if (!element) {
      alert("Report not found");
      return;
    }

    const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    allowTaint: false,
    backgroundColor: "#ffffff"
    });
    console.log("Canvas OK");

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jspdf.jsPDF();

    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

    const now = new Date();
    const timestamp =
      now.getFullYear() + "-" +
      String(now.getMonth() + 1).padStart(2, "0") + "-" +
      String(now.getDate()).padStart(2, "0") + "_" +
      String(now.getHours()).padStart(2, "0") + "-" +
      String(now.getMinutes()).padStart(2, "0");

    pdf.save(`O&M_Report_${timestamp}.pdf`);

    console.log("PDF DONE");

  } catch (error) {
    console.error("REAL PDF ERROR:", error);
    alert("PDF failed — check console");
  }
}

// EXCEL 

function exportExcel() {

  if (typeof XLSX === "undefined") {
    alert("Excel library not loaded");
    return;
  }

  const inputs = document.querySelectorAll("input, textarea");

  const data = [];

  inputs.forEach(input => {
    data.push({
      Field: input.placeholder || input.name || input.type,
      Value: input.type === "checkbox"
        ? (input.checked ? "Yes" : "No")
        : input.value
    });
  });

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "O&M Report");

  const now = new Date();
  const timestamp =
    now.getFullYear() + "-" +
    String(now.getMonth() + 1).padStart(2, "0") + "-" +
    String(now.getDate()).padStart(2, "0");

  XLSX.writeFile(workbook, `O&M_Report_${timestamp}.xlsx`);
}