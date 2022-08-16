export const localStorageEffect = (key: string) => ({
    setSelf,
    onSet }: {
        setSelf: Function,
        onSet: Function,
    }) => {

    // Ignore local storage if we're running tests
    const isJestRunning = typeof jest != 'undefined';
    if (isJestRunning) {
        return;
    }

    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: object, _: object, isReset: boolean) => {
        isReset
            ? localStorage.removeItem(key)
            : localStorage.setItem(key, JSON.stringify(newValue));
    });
};