export class Contact {
    constructor(
        public contactId: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string,
        public isActive: boolean
    ) { }
}