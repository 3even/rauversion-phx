import { Application } from "@hotwired/stimulus"
import Dropdown from "stimulus-dropdown"
import Audio from "./audio_controller"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

application.register("dropdown", Dropdown)
application.register("audio", Audio)

export { application }




// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)