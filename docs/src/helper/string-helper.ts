export const removeBeforeLastSlash = (inputString: string) => {
    if (!inputString.includes("/")) return inputString
    const parts = inputString.split('/');
    return parts[parts.length - 1];
}