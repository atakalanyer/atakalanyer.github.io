/* Portfolio behavior: mobile nav, category filter, lightbox, contact form, back-to-top, background network. */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---- mobile nav ---- */
  var toggle = $(".nav-toggle"), nav = $("#nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    $$("a", nav).forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.focus(); }
    });
  }

  /* ---- category filter ---- */
  var chips = $$(".filters .chip");
  if (chips.length) {
    var blocks = $$(".cat-block");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var want = chip.getAttribute("data-filter");
        chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
        blocks.forEach(function (b) { b.hidden = !(want === "all" || b.getAttribute("data-cat") === want); });
      });
    });
  }

  /* ---- back to top ---- */
  $$(".to-top").forEach(function (b) {
    b.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  });

  /* ---- lightbox ---- */
  var lb = $("#lb");
  var shots = $$("[data-lightbox]");
  if (lb && shots.length && typeof lb.showModal === "function") {
    var idx = 0, img = $("#lb-img", lb), t = $("#lb-title", lb), d = $("#lb-desc", lb), last = null;
    var show = function (i) {
      idx = (i + shots.length) % shots.length;
      var s = shots[idx];
      img.src = s.getAttribute("data-src"); img.alt = s.getAttribute("data-alt") || "";
      t.textContent = s.getAttribute("data-title") || ""; d.textContent = s.getAttribute("data-desc") || "";
    };
    shots.forEach(function (s, i) {
      s.addEventListener("click", function () { last = s; show(i); lb.showModal(); });
    });
    $("#lb-close", lb).addEventListener("click", function () { lb.close(); });
    $("#lb-prev", lb).addEventListener("click", function () { show(idx - 1); });
    $("#lb-next", lb).addEventListener("click", function () { show(idx + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb || e.target.classList.contains("lb-in") || e.target.classList.contains("lb-img")) lb.close(); });
    lb.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    });
    lb.addEventListener("close", function () { if (last) last.focus(); });
  }

  /* ---- contact form: never pretends to send ---- */
  var form = $("#contact-form");
  if (form) {
    var warn = $("#form-warn"), ok = $("#form-ok");
    var endpoint = form.getAttribute("data-endpoint") || "";
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      ok.hidden = true; warn.hidden = true;
      if (!form.checkValidity()) { form.reportValidity(); return; }
      if (!endpoint) {
        warn.textContent = "This form is not connected to an e-mail service yet, so nothing was sent. Please use the e-mail address or social links on this page.";
        warn.hidden = false;
        return;
      }
      var btn = $("button[type=submit]", form); btn.disabled = true;
      fetch(endpoint, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) })
        .then(function (r) {
          if (!r.ok) throw new Error("bad status");
          ok.textContent = "Message sent. Thank you!"; ok.hidden = false; form.reset();
        })
        .catch(function () { warn.textContent = "The message could not be sent. Please use the e-mail address on this page."; warn.hidden = false; })
        .then(function () { btn.disabled = false; });
    });
  }

  /* ---- active nav link on the home page ---- */
  var links = $$('#nav a[href^="#"]');
  if (links.length && "IntersectionObserver" in window) {
    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          links.forEach(function (a) { a.removeAttribute("aria-current"); });
          map[en.target.id].setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
  }

  /* ---- background: slow network of nodes (hero only) ---- */
  var cv = $("#net");
  if (cv && cv.getContext && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var ctx = cv.getContext("2d"), W = 0, H = 0, dots = [], raf = 0, visible = true;
    var resize = function () {
      var r = cv.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.max(18, Math.min(52, Math.round(W * H / 22000)));
      dots = [];
      for (var i = 0; i < n; i++) dots.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22 });
    };
    var step = function () {
      if (!visible) { raf = 0; return; }
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < dots.length; i++) {
        var a = dots[i]; a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > W) a.vx *= -1; if (a.y < 0 || a.y > H) a.vy *= -1;
        for (var j = i + 1; j < dots.length; j++) {
          var b = dots[j], dx = a.x - b.x, dy = a.y - b.y, dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) { ctx.strokeStyle = "rgba(76,141,255," + (0.28 * (1 - dist / 150)).toFixed(3) + ")"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        ctx.fillStyle = "rgba(61,214,224,.75)"; ctx.beginPath(); ctx.arc(a.x, a.y, 1.8, 0, 6.2832); ctx.fill();
      }
      raf = requestAnimationFrame(step);
    };
    resize(); step();
    window.addEventListener("resize", resize);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (e) { visible = e[0].isIntersecting; if (visible && !raf) raf = requestAnimationFrame(step); }).observe(cv);
    }
  }
})();
