export const errorMessages = {
    fieldRequired: (fieldName: string) => `${fieldName} is required.`,
    validAddress: (fieldName: string) => `Please input a valid ${fieldName}.`,
    minLength: (fieldName: string, min: number) =>
        `${fieldName} must be at least ${min} characters.`,
};
