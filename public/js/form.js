let sections = [
  { name: "introduction", locked: false, collapsed: false },
  { name: "contact", locked: false, collapsed: false },
  { name: "textbook", locked: false, collapsed: false },
  { name: "courseObjectives", locked: false, collapsed: false },
  { name: "gradingScale", locked: false, collapsed: false },
  { name: "latePolicy", locked: false, collapsed: false },
  { name: "schedule", locked: false, collapsed: false },
  { name: "netiquette", locked: false, collapsed: false },
  { name: "attendance", locked: false, collapsed: false },
  { name: "dropAndAdd", locked: false, collapsed: false },
  { name: "titleIX", locked: true, collapsed: false },
  { name: "corona", locked: true, collapsed: false },
  { name: "gradeAppeals", locked: false, collapsed: false },
  { name: "studentSuccess", locked: false, collapsed: false },
  { name: "academicIntegrity", locked: false, collapsed: false },
  { name: "accessability", locked: false, collapsed: false },
];

const doc = new jsPDF({
  format: "letter",
});

let collapsed = false;

// If the university entered is not ASU then take off default text
$("#generator").on("click", function () {
  if (
    !$("#school").val() == "Arizona State University" ||
    "ASU" ||
    "Arizona State" ||
    ""
  ) {
    $("#coronaInput").text("");
    sections.corona.locked = false;
  }
});

// When a user clicks on the x it alerts and asks if they are sure, then removes the section
const remove = function (i) {
  $("#x" + sections[i].name).on("click", function () {
    if (confirm("Are you sure you want to remove this section?")) {
      $("#" + sections[i].name).hide();
    }
  });
};

// collapses individual sections down to just their title
const collapse = function (i) {
  $("#c" + sections[i].name).on("click", function () {
    if (sections[i].collapsed) {
      $("#h" + sections[i].name).show();
      $(".c" + sections[i].name).attr("src", "./imgs/collapseIcon.png");
      sections[i].collapsed = false;
    } else {
      $("#h" + sections[i].name).hide();
      $(".c" + sections[i].name).attr("src", "./imgs/uncollapseIcon.png");
      sections[i].collapsed = true;
    }
  });
};

// locks the sections so that the text is no longer editable
const lock = function (i) {
  $("#l" + sections[i].name).on("click", function () {
    if (!sections[i].locked) {
      $(".lock" + sections[i].name).attr("src", "./imgs/lockIcon.png");
      $("#" + sections[i].name).addClass("locked");
      $("#" + sections[i].name + " :input").addClass("locked");
      $("#" + sections[i].name + " :input").prop("readonly", true);
      sections[i].locked = true;
    } else {
      $(".lock" + sections[i].name).attr("src", "./imgs/unlockIcon.png");
      $("#" + sections[i].name + " :input").removeClass("locked");
      $("#" + sections[i].name + " :input").prop("readonly", false);
      $("#" + sections[i].name).removeClass("locked");
      sections[i].locked = false;
    }
  });
};

// adds a new contact field
$(".addContact").on("click", function (event) {
  event.preventDefault();
  $("#addContact").append(`<div class="form-check"><input
    class="form-check-input"
    type="checkbox"
    value=""
    id="defaultCheck1" checked
  />
  <input type="text" class = "addedContact" /> <p class = "addedContact">:</p>
  <input type="text" class = "addedContact"/></div>`);
});
// add new software field
$(".addSoftware").on("click", function (event) {
  event.preventDefault();
  $("#addSoftware").append(`
  <input type="text" class = "addedSoftware" /><br>`);
});
// adds a new other field
$(".addOther").on("click", function (event) {
  event.preventDefault();
  $("#addOther").append(`
  <input type="text" class = "addedOther" /><br>`);
});

// Collapses all sections
$("#collapseAll").on("click", function () {
  if (collapsed) {
    $(".hide").show();
    $("#collapseAll").text("Collapse All Sections");
    $(".c").attr("src", "./imgs/collapseIcon.png");
    sections.forEach((i) => {
      i.collapsed = false;
    });
    collapsed = false;
  } else {
    $(".hide").hide();
    $("#collapseAll").text("Open All Sections");
    $(".c").attr("src", "./imgs/uncollapseIcon.png");
    sections.forEach((i) => {
      i.collapsed = true;
    });
    collapsed = true;
  }
});

// loops through the sections and places these listeners on each button
for (let i = 0; i < sections.length; i++) {
  // remove the selection
  remove(i);
  // lock the selection
  lock(i);
  // collapse the selection
  collapse(i);
}

// creates the drag and drop functionality
new Sortable(sortablelist, {
  animation: 300,
  ghostClass: "sortable-ghost",
  handle: ".move",
});

// // ------TEXT FROM FORM---------//
// // Introduction
// let introduction = $("#introductionInput").val();
// //Contact
// let contact = $("");

$("#renderBtn").on("click", function (event) {
  // pageHeight= pdf.internal.pageSize.height;

  // Then, while adding text into pdf,

  // pdf.text(x, y, "value");

  // I am checking this condition everytime,

  // if (y>=pageHeight)
  // {
  // pdf.addPage();
  // }
  let splitIntro1 = doc.splitTextToSize("Introduction", 240);
  let splitIntro2 = doc.splitTextToSize(
    `${$("#introductionInput").val()}`,
    180
  );
  let splitAtt1 = doc.splitTextToSize("Attendance Policy", 240);
  let splitAtt2 = doc.splitTextToSize(`${$("#attendanceInput").val()}`, 240);
  let splitSched1 = doc.splitTextToSize("Course Schedule", 240);
  let splitSched2 = doc.splitTextToSize(`${$("#scheduleInput").val()}`, 240);
  let splitTitle1 = doc.splitTextToSize("Title IX", 240);
  let splitTitle2 = doc.splitTextToSize(`${$("#titleIXInput").val()}`, 240);
  let splitCor1 = doc.splitTextToSize("Corona Virus", 240);
  let splitCor2 = doc.splitTextToSize(`${$("#coronaInput").val()}`, 240);

  event.preventDefault();
  doc.setFontSize(18);
  doc.text(splitIntro1, 20, 20);
  doc.setFontSize(12);
  doc.text(splitIntro2, 20, 30);
  doc.setFontSize(18);
  doc.text("How to contact me", 20, 40);
  doc.setFontSize(12);
  doc.text(
    20,
    50,
    `Email: ${$("#email").val()}
    Phone Number: ${$("#number").val()}
    Office Hours: ${$("#officehrs").val()}`
  );
  doc.setFontSize(18);
  doc.text(20, 80, splitAtt1);
  doc.setFontSize(12);
  doc.text(20, 90, splitAtt2);
  doc.setFontSize(18);
  doc.text(20, 130, splitSched1);
  doc.setFontSize(12);
  doc.text(20, 140, splitSched2);
  doc.setFontSize(18);
  doc.text(20, 200, splitTitle1);
  doc.setFontSize(12);
  doc.text(20, 210, splitTitle2);
  doc.addPage();
  doc.setFontSize(18);
  doc.text(20, 20, splitCor1);
  doc.setFontSize(12);
  doc.text(20, 30, splitCor2);
  doc.save("syllabus");
});
