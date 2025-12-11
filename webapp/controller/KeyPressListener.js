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
            // document.addEventListener('keydown', this.onKeyDown.bind(this));
        }

        static onKeyPress(event) {
            const keyPressed = event.key;
            // console.log("keypressed!", "event:", event, "key:", keyPressed);

            // Only record keypresses if focused element is readOnly
            if(!document.activeElement.readOnly){ 
                return;
            }

            const focusedElement = event.target;
            if(this.elementBeingMonitored !== focusedElement) {
                console.log("monitoring ", focusedElement);
                this.monitorNewElement(focusedElement);
            }

            if(keyPressed === ENTER_KEY) {
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
            // this.abortController.abort(); // remove 'blur' event listener from previous monitored elements

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
            this.inputBuffer = [];
        }

        static addKeyToInputBuffer(key) {
            this.inputBuffer.push(key);
        }

        static getTextFromInputBuffer() {
            return this.inputBuffer.join('');
        }
    }

    return KeyPressListener;
});