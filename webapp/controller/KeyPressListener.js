sap.ui.define([
    
], () => {
    "use strict";

    const ENTER_KEY = "Enter";

    class KeyPressListener {
        static elementBeingMonitored = null;
        static inputBuffer = [];
        static abortController = new AbortController();

        static setup() {
            document.addEventListener('keypress', this.onKeyPress.bind(this));
            document.addEventListener('keydown', this.onKeyDown.bind(this));
        }

        static onKeyPress(event) {
            const keyPressed = event.key;
            console.log("keypressed!", "event:", event, "key:", keyPressed);

            // Only record keypresses if focused element is readOnly
            if(!document.activeElement.readOnly){ 
                console.log("focused element is not read only");
                return;
            }

            const focusedElement = event.target;
            if(this.elementBeingMonitored !== focusedElement) {
                console.log("changing focused element");
                console.log("now monitoring: ", focusedElement);
                this.monitorNewElement(focusedElement);
            }

            if(keyPressed === ENTER_KEY) {
                console.log("Enter key pressed");
                this.elementBeingMonitored.value = this.getTextFromInputBuffer();
                this.clearInputBuffer();
            } else {
                this.addKeyToInputBuffer(keyPressed);
            }
        }

        // keypress is deprecated and keydown is the recommended event.
        // For debugging purposes as we do not know if DataWedge also emits keydown events in addition to keypress.
        static onKeyDown(event) {
            const key = event.key;
            console.log("keydowned!", "event:", event, "key:", key);
        }

        static monitorNewElement(element) {
            this.clearInputBuffer();
            this.abortController.abort(); // remove 'blur' event listener from previous monitored elements

            this.elementBeingMonitored = element;
            this.elementBeingMonitored.addEventListener(
                "blur", 
                (event) => {
                    console.log("blurred!");
                    this.clearInputBuffer();
                }, 
                {
                    signal: this.abortController.signal
                });
        }

        static clearInputBuffer() {
            console.log("Cleaning input buffer");
            this.inputBuffer = [];
        }

        static addKeyToInputBuffer(key) {
            console.log("Storing key in input buffer: ", keyPressed);
            this.inputBuffer.push(key);
        }

        static getTextFromInputBuffer() {
            console.log("Getting text from buffer");
            return this.inputBuffer.join('');
        }
    }

    return KeyPressListener;
});