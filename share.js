$(document).ready(function () {
  let title = document.title;
  let url = window.location.href;

  function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  $("[share-data]").each(function () {
    const shareType = $(this).attr("share");
    const shareData = $(this).attr("share-data") || url;

    let shareLink;

    switch (shareType) {
      case "whatsapp":
        shareLink = "https://wa.me/?text=" + shareData;
        break;
      case "behance":
        shareLink = "https://www.behance.net/?to=" + shareData;
        break;
      case "dribbble":
        shareLink = "https://dribbble.com/?to=" + shareData;
        break;
      case "facebook":
        shareLink = "https://www.facebook.com/sharer.php?u=" + shareData;
        break;
      case "instagram":
        shareLink = "https://www.instagram.com/?url=" + shareData;
        break;
      case "linkedin":
        shareLink =
          "https://www.linkedin.com/sharing/share-offsite/?url=" + shareData;
        break;
      case "tiktok":
        shareLink = "https://www.tiktok.com/share?url=" + shareData;
        break;
      case "twitter":
        shareLink =
          "https://twitter.com/intent/tweet?url=" +
          shareData +
          "&text=" +
          title;
        break;
      case "clipboard":
        $(this).on("click", function (e) {
          e.preventDefault();
          copyToClipboard(shareData);
        });
        break;
      default:
        console.log("Unsupported share type: " + shareType);
        break;
    }

    if (shareType !== "clipboard") {
      $(this).attr("href", shareLink);
      $(this).attr("target", "_blank");
    }
  });
});
