import '../stylesheets/PaginationComponent.css'

const PaginationComponent = () => {

  return (
    <>
      <div>
        <nav id="mainNav">
          <ul>
            <li className='active' id="areaOfResearchHeader"><a href="#areaOfResearch">Area of Research</a></li>
            <li id="workExpirienceHeader"><a href="#workExpirience">Work Experiences</a></li>
            <li id="publicationHeader"><a href="#publication">Publications</a></li>
            <li id="researchPaperPublishedHeader"><a href="#researchPaperPublished">Research Papers</a></li>
            <li id="activityAsReviewerHeader"><a href="#activityAsReviewer">Activity as Reviewer</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export {
  PaginationComponent,
}
