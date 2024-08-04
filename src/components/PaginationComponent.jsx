// import { useState } from 'react'
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

// const areaOfResearchHeader = document.getElementById('areaOfResearchHeader');
// const workExpirienceHeader = document.getElementById('workExpirienceHeader');
// const publicationHeader = document.getElementById('publicationHeader');
// const researchPaperPublishedHeader = document.getElementById('researchPaperPublishedHeader');
// const activityAsReviewerHeader = document.getElementById('activityAsReviewerHeader');

// const isElementInViewport = (element) => {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// const highlightHeaderIfSectionVisible = (id, header) => {
//   console.log("hello")
//   const element = document.getElementById(id);
//   if(!element) return
//   if(isElementInViewport(element)) {
//           header.style.color = "#F38A8A"
//           header.style.borderBottom = "3px solid #F38A8A"
//   }            
// }

export { 
    PaginationComponent, 
    // highlightHeaderIfSectionVisible
  }
