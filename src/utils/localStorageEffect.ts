export const localStorageEffect = (key: string) => ({
    setSelf,
    onSet }: {
        setSelf: Function,
        onSet: Function,
    }) => {
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