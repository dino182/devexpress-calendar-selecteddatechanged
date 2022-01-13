export function create(popoverElement, target, showEvent = "dxclick", position = "bottom") {
    const popover = new DevExpress.ui.dxPopover(popoverElement, {
        target: target,
        container: popoverElement,
        showEvent: showEvent,
        position: position,
        animation: {
            show: {
                type: "pop",
                from: { scale: 0 },
                to: { scale: 1 }
            },
            hide: {
                type: "fade",
                from: 1,
                to: 0
            }
        },
        deferRendering: false
    });
    return popover;
}
export function dispose(popover) {
    popover.dispose();
}