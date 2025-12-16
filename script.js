// دوال JavaScript للتحكم في القائمة الجانبية (Sidebar)

function openNav(sidebarId) {
  // يفتح القائمة بعرض 100% على الجوال، و 300px على الشاشات الكبيرة
  if (window.innerWidth < 600) {
     document.getElementById(sidebarId).style.width = "100%";
  } else {
     document.getElementById(sidebarId).style.width = "300px";
  }
}

function closeNav(sidebarId) {
  document.getElementById(sidebarId).style.width = "0";
}
