export const userAPI = (userData) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (
                userData.email === "admin@admin.com" &&
                userData.password === "123456"
            ) {
                resolve(true);
            } else {
                reject(false);
            }
        }, 2000);
    });
