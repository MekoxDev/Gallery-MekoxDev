document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  const navItems = document.querySelectorAll(".nav-links a")
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active")
      hamburger.classList.remove("active")
    })
  })

  // Active navigation link based on scroll position
  const sections = document.querySelectorAll("section")
  const navLinksItems = document.querySelectorAll(".nav-links a")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinksItems.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active")
      }
    })

    // Back to top button visibility
    const backToTop = document.querySelector(".back-to-top")
    if (window.pageYOffset > 300) {
      backToTop.classList.add("active")
    } else {
      backToTop.classList.remove("active")
    }

    // Sticky header
    const header = document.querySelector("header")
    if (window.pageYOffset > 50) {
      header.style.padding = "10px 0"
      header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
    } else {
      header.style.padding = ""
      header.style.boxShadow = ""
    }
  })

  // Back to top button functionality
  const backToTop = document.querySelector(".back-to-top")
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Experience tabs
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-pane")

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabId = this.dataset.tab

      tabBtns.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      tabContents.forEach((content) => content.classList.remove("active"))
      document.getElementById(tabId + "-tab").classList.add("active")
    })
  })

  // Project filtering
  const filterBtns = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const filter = this.dataset.filter

      filterBtns.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      projectCards.forEach((card) => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  })

  // Contact form submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value

      // Here you would typically send the form data to a server
      // For now, we'll just log it and show a success message
      console.log("Form submitted:", { name, email, message })

      // Reset form
      contactForm.reset()

      // Show success message (you can replace this with a more elegant solution)
      alert("¡Mensaje enviado con éxito! Te responderé pronto.")
    })
  }

  // Animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".skill-card, .project-card, .writeup-card, .company-card")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (elementPosition < screenPosition) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animated elements
  const elementsToAnimate = document.querySelectorAll(".skill-card, .project-card, .writeup-card, .company-card")
  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Run animation on scroll
  window.addEventListener("scroll", animateOnScroll)
  // Run once on page load
  animateOnScroll()

  // Typing effect for subtitle
  const subtitle = document.querySelector(".subtitle")
  const subtitleText = subtitle.textContent
  subtitle.textContent = ""

  let i = 0
  const typeWriter = () => {
    if (i < subtitleText.length) {
      subtitle.textContent += subtitleText.charAt(i)
      i++
      setTimeout(typeWriter, 50)
    }
  }

  // Start typing effect after a short delay
  setTimeout(typeWriter, 1000)
})
