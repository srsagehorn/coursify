const sections = [
  "contact",
  "titleIX",
  "schedule",
  "netiquette",
  "attendance",
  "gradingScale",
  "late",
  "textbook",
  "introduction",
  "courseObjectives",
];
let locked = false;

$(".removeSection").on("click", function () {
  alert("Are you sure you want to remove this section?");
});

$(".lock").on("click", function () {
  if (!locked) {
    $(".lock").attr("src", "./imgs/lockIcon.png");
    locked = true;
  } else {
    $(".lock").attr("src", "./imgs/unlockIcon.png");
    locked = false;
  }
});

$(".add").on("click", function (event) {
  event.preventDefault();
  $(".addContact").append(`<input
    class="form-check-input"
    type="checkbox"
    value=""
    id="defaultCheck1"
  />
  <input type="text" /> <p>:</p>
  <input type="text" />`);
});
