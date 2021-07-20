# GradeManagementTool

Grade Management Tool helps teachers to keep track of their students' grades. Teachers need to sign up by their emails and start adding their students' information

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install all the packages needed.

```bash
cd server
npm install
```

Making the connection to database,create your .env file, paste the code below. Change the "username" and "password" to your own


 ```bash
TEACHER_URI = "mongodb+srv://username:password@cluster0.qftfl.mongodb.net/myDatabase?retryWrites=true&w=majority"
```


## Usage

```bash
cd server
npm start

cd ../client
npm start

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
