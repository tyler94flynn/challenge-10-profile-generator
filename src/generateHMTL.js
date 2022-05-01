


//todo: make functions to populate card data for each employee type 






//creates cards based on role for each item in the array of employees
const generateCard = (data) => {
    var htmlAddress = "";

    data.forEach((item) => {
        if (item.getRole() === "Manager") {
            var string = generateManager(item);
            htmlAddress += string;
        } else if (item.getRole() === "Engineer") {
            var string = generateEngineer(item);
            htmlAddress += string;
        } else if (item.getRole() === "Intern") {
            var string = generateIntern(item);
            htmlAddress += string;
        }
    });
    return htmlAddress;
};


//generates the page using generateCard function
const generateHTML = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Details</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="./dist/style.css">
        </head>

        <body>
            <div class="jumbotron jumbotron-fluid" style='background-color: red;'>
                <div class="container">
                    <h1 class="display-4 text-center">Team Details</h1>
                </div>
            </div>
            
            ${generateCard(data)}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

        </body>
    </html>`;
};