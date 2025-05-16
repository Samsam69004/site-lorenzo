import { Application } from "@hotwired/stimulus"

const application = Application.start()
window.Stimulus = application

import HelloController from "./hello_controller"
application.register("hello", HelloController)
