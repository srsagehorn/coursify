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

let locked = [
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
  true,
  true,
];

let coll = [
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

const remove = function (i) {
  $("#x" + sections[i]).on("click", function () {
    if (confirm("Are you sure you want to remove this section?")) {
      $("#" + sections[i]).hide();
    }
  });
};

const collapse = function (i) {
  $("#c" + sections[i]).on("click", function () {
    if (coll[i]) {
      $("#h" + sections[i]).show();
      $(".c" + sections[i]).attr("src", "./public/imgs/collapseIcon.png");
      coll[i] = false;
    } else {
      $("#h" + sections[i]).hide();
      $(".c" + sections[i]).attr("src", "./public/imgs/uncollapseIcon.png");
      coll[i] = true;
    }
  });
};

const lock = function (i) {
  $("#l" + sections[i]).on("click", function () {
    if (!locked[i]) {
      $(".lock" + sections[i]).attr("src", "./public/imgs/lockIcon.png");
      $("#" + sections[i]).addClass("locked");
      $("#" + sections[i] + " :input").addClass("locked");
      $("#" + sections[i] + " :input").prop("readonly", true);
      locked[i] = true;
    } else {
      $(".lock" + sections[i]).attr("src", "./public/imgs/unlockIcon.png");
      $("#" + sections[i] + " :input").removeClass("locked");
      $("#" + sections[i] + " :input").prop("readonly", false);
      $("#" + sections[i]).removeClass("locked");
      locked[i] = false;
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
    $(".c").attr("src", "./public/imgs/collapseIcon.png");
    coll = [
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
    collapsed = false;
  } else {
    $(".hide").hide();
    $("#collapseAll").text("Open All Sections");
    $(".c").attr("src", "./public/imgs/uncollapseIcon.png");
    coll = [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ];
    collapsed = true;
  }
});

// throws an alert to confirm they want to delete a section
for (let i = 0; i < sections.length; i++) {
  // remove the selection
  remove(i);
  // lock the selection
  lock(i);
  // collapse the selection
  collapse(i);
}
