const $message = $("#message");
const $input = $("#input");
const $sendBtn = $("#sendBtn");
const $clearBtn = $("#clearBtn");

$sendBtn.click(sendMessage);
$clearBtn.click(clearAll);

function sendMessage() {
  let inputValue = $input.val().trim();

  if (!inputValue) {
    return alert("Plese type anything");
  }

  $message.html(inputValue);
}

function clearAll() {
  $message.html("Your delivered message appears here");
  $input.val("");
}
