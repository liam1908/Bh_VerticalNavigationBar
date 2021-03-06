declare module TcHmi {
    module Controls {
        module System {
            class TcHmiContainer extends TcHmi.Controls.System.TcHmiContainerControl {
                /** Constructor */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** @member */
                protected __elementTemplateRoot: JQuery;
                /**
                 * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                 * Call attribute processor functions here to initialize default values!
                 * @function __previnit
                 */
                __previnit(): void;
                /**
                * If raised, all attributes have been set to it's default or dom values.
                * @function __init
                */
                __init(): void;
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
               * @function
               */
                __attach(): void;
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                * @function
                */
                __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                * @function
                */
                destroy(): void;
                /**
                * Adds a child to DOM
                * @function
                */
                addChild(co: TcHmi.Controls.System.baseTcHmiControl, pos?: number | null): void;
                __addChild(co: TcHmi.Controls.System.baseTcHmiControl, pos?: number | null): void;
                /**
                 *
                 * @function
                 */
                removeChild(co: TcHmi.Controls.System.baseTcHmiControl): void;
                __removeChild(co: TcHmi.Controls.System.baseTcHmiControl): void;
            }
        }
    }
}
