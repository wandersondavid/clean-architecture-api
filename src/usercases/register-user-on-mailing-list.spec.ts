describe ('Register user aon mailing list use case', () => {
    test('Shoult add user with complete data to mailing list', async () => {
        const users: UserData[] = [];
        const repo: UserRepository = new InMemoryUserRepository(users);
        const usercase: RegisterUserOnMailingList = new RegisterUserOnMailingList();
        const name = 'any_name';
        const email = 'any@mail.com';
        const response = await usercase.registerUserOnMailingList({name, email});
        const user = await repo.findUserByEmail('any@mail.com');
        expect((await user).name).toBe('any_name');
    })
})