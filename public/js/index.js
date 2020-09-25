const sections = [
  "introduction",
  "contact",
  "textbook",
  "courseObjectives",
  "gradingScale",
  "latePolicy",
  "schedule",
  "netiquette",
  "attendance",
  "dropAndAdd",
  "titleIX",
  "corona",
  "gradeAppeals",
  "studentSuccess",
  "academicIntegrity",
  "accessability",
];

const locked = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

const coll = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

let collapsed = false;

// throws an alert to confirm they want to delete a section
for (let i = 0; i < sections.length; i++) {
  // remove the selection
  $("#x" + sections[i]).on("click", function () {
    if (confirm("Are you sure you want to remove this section?")) {
      $("#" + sections[i]).hide();
    }
  });
  // lock the selection
  $("#l" + sections[i]).on("click", function () {
    if (!locked[i]) {
      $(".lock" + sections[i]).attr("src", "./imgs/lockIcon.png");
      locked[i] = true;
    } else {
      $(".lock" + sections[i]).attr("src", "./imgs/unlockIcon.png");
      locked[i] = false;
    }
  });

  // collapse the selection
  $("#c" + sections[i]).on("click", function () {
    if (coll[i]) {
      $("#h" + sections[i]).show();
      $(".c" + sections[i]).attr("src", "./imgs/collapseIcon.png");
      coll[i] = false;
    } else {
      $("#h" + sections[i]).hide();
      $(".c" + sections[i]).attr("src", "./imgs/uncollapseIcon.png");
      coll[i] = true;
    }
  });
}

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

$(".addOther").on("click", function (event) {
  event.preventDefault();
  $("#addOther").append(`
  <input type="text" class = "addedOther" /><br>`);
});

// Collapses and expands each section
$("#collapseAll").on("click", function () {
  if (collapsed) {
    $(".hide").show();
    $("#collapseAll").text("Collapse All Sections");
    collapsed = false;
  } else {
    $(".hide").hide();
    $("#collapseAll").text("Open All Sections");
    collapsed = true;
  }
});
