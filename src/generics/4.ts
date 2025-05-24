type User = {
      name: string;
      surname: string;
      email: string;
      password: string;
    }
    
    function createOrUpdateUser(initialValues: Partial<User>): User {
        // Оновлення користувача
        
        const defaultValue: User = {
            name: 'Top',
            surname: 'Gear',
            email: '',
            password: '',
        }
        return { ...defaultValue, ...initialValues }
    }
    
    createOrUpdateUser({ 
      email: 'user@mail.com', 
      password: 'password123' 
    });
    
   