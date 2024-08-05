import React from 'react'
import ReactDOM from 'react-dom/client'
import Introduction from './components/Introduction.jsx'
import AreaOfResearch from './components/researchcomponents/AreaOfResearch.jsx'
import WorkExpirience from './components/researchcomponents/WorkExpirience.jsx'
import Publication from './components/researchcomponents/Publication.jsx'
import ResearchPaperPublished from './components/researchcomponents/ResearchPaperPublished.jsx'
import ActivityAsReviewer from './components/researchcomponents/ActivityAsReviewer.jsx'
import './index.css'

import { PaginationComponent } from './components/PaginationComponent.jsx'

import { 
  scrollFunction,
  highlightHeaderIfSectionVisible
} from './reusables.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container">
      <div className="mainComponents">
        <Introduction />
      </div>
      <div className="mainComponents">    <PaginationComponent />      </div>
      <div className="mainComponents">    <AreaOfResearch />    </div>
      <hr/>
      <div className="mainComponents">    <WorkExpirience />    </div>
      <hr/>
      <div className="mainComponents">    <Publication />    </div>
      <hr/>
      <div className="mainComponents">    <ResearchPaperPublished />    </div>
      <hr/>
      <div className="mainComponents">    <ActivityAsReviewer />    </div>
      <hr/>
    </div>
  </React.StrictMode>,
)

window.onscroll = () => {
  scrollFunction()
  highlightHeaderIfSectionVisible('areaOfResearch', 'areaOfResearchHeader')
  highlightHeaderIfSectionVisible('workExpirience', 'workExpirienceHeader')
  highlightHeaderIfSectionVisible('publication', 'publicationHeader')
  highlightHeaderIfSectionVisible('researchPaperPublished', 'researchPaperPublishedHeader')
  highlightHeaderIfSectionVisible('activityAsReviewer', 'activityAsReviewerHeader')
};
