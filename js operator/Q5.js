
const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

if (
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside
) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

if (
    (isDoorLocked && isWindowClosed) ||
    !isAlarmOn
) {
    console.log("Security condition checked.");
}
