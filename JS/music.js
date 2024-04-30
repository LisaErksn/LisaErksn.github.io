import { animateLogo } from "./functions.js"
import { apparitionNavbar } from "./functions.js"
import { banniereBtn } from "./functions.js"
import { opacityVideo } from "./functions.js"
import { popupOpen } from "./functions.js"
import { popupClose } from "./functions.js"
import { calculHeightBanniere } from "./functions.js"


animateLogo()
apparitionNavbar()
banniereBtn()
opacityVideo()
popupOpen()
popupClose()
calculHeightBanniere()
onresize = () => { calculHeightBanniere() };

