'use strict'

$(onInit)

function onInit() {
  renderPortfolioItem()
  $('.contact-form').on('submit', onFormSubmit)
}

function onFormSubmit(ev) {
  ev.preventDefault()
  const subject = $('#subject').val()
  const msgBody = $('#msgBody').val()

  window.open(`https://mail.google.com/mail/?view=cm&fs=1
  &to=projkd1@gmail.com
  &su=${subject}
  &body=${msgBody}`)
}

function renderPortfolioItem() {
  const projects = getProjects()
  const projectsHTMLs = projects.map((proj) => getPortfolioItemHTML(proj))

  $('.portfolio-items-container').html(projectsHTMLs)
  projects.forEach((proj) => $(`.${proj.id}`).click(proj.id, renderModal))
}

function getPortfolioItemHTML(project) {
  return `<div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link ${project.id}" data-toggle="modal" href="#portfolioModal">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="img/portfolio/${project.id}.png" alt="" />
    </a>
    <div class="portfolio-caption">
      <h4>${project.name}</h4>
      <p class="text-muted">${project.title}</p>
    </div>
  </div>`
}

function renderModal(ev) {
  const project = getProjectById(ev.data)
  console.log(project.publishedAt)
  const modalHTML = `<div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2>${project.name}</h2>
                  <p class="item-intro text-muted">
                    ${project.title}
                  </p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="img/portfolio/${project.id}-full.png"
                    alt=""
                  />
                  <p>
                    ${project.desc}
                  </p>
                  <ul class="list-inline">
                    <li>Date: ${project.publishedAt.toDateString()}</li>
                    <li>Client: Coding Academy Project</li>
                    <li>Category: ${project.lables.join(', ')}</li>
                  </ul>
                  <a
                    class="btn btn-primary open-proj-btn"
                    type="button"
                    style="cursor: pointer"
                    href="${project.url}"
                    target="_blank"
                  >
                    <i class="fa fa-compass"></i>
                    Open Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>`
  $('.modal-dialog').html(modalHTML)
}
