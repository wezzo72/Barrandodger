(function(){
  var banner = document.createElement('section');
  banner.id = 'read-this-first-banner';
  banner.setAttribute('role', 'note');
  banner.style.cssText = 'margin:0;padding:18px 16px 14px;background:#f3eee4;color:#1a140f;border-bottom:8px solid #8B2E2A;font-family:Georgia,\"Times New Roman\",serif;text-align:center;';
  banner.innerHTML = '<p style="letter-spacing:.16em;font-size:.7rem;font-weight:800;color:#8B2E2A;margin:0 0 6px;font-family:system-ui,sans-serif;">READ THIS FIRST IF YOU\u2019RE CONFUSED</p>' +
    '<p style="margin:0 auto;max-width:40rem;font-size:clamp(1.2rem,3.4vw,1.65rem);line-height:1.2;font-weight:700;"><a href="https://wezzo72.github.io/Barrandodger/read-this-first.html" style="color:#1a140f;text-decoration:underline;text-underline-offset:3px;">THE WITNESS REMAINS</a></p>' +
    '<p style="margin:8px auto 0;max-width:36rem;font-size:.95rem;line-height:1.4;color:#3f4c5a;">Documentary Record · Ten Foundational Gospel Works · Ten Prophetic Narratives · Spiritual Testimony<br><strong style="color:#8B2E2A;">PRESERVATION FIRST. EXAMINATION SECOND. CONCLUSION LAST. THE RECORD STAYS FREE. FAITH IS NOT A FINDING.</strong></p>' +
    '<p style="margin:10px auto 0;"><a href="https://wezzo72.github.io/Barrandodger/read-this-first.html" style="color:#8B2E2A;font-weight:700;text-decoration:underline;text-underline-offset:3px;">Open the guide</a></p>';
  document.body.insertBefore(banner, document.body.firstChild);
})();