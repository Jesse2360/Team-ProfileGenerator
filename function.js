var staffcards = []

generateHTML = (staff) => {
    staff.forEach((teamMember) => {
        if(teamMember.getRole() === 'Manager'){
            doManager(teamMember)
        }else if (teamMember.getRole() === 'Engineer'){
            doEngineer(teamMember)
        }else if (teamMember.getRole() === 'Intern'){
            doIntern(teamMember)
        } 
    })

return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The Staff</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
</head>
<body style="background-color: rgb(189, 172, 172);">
    
<div class="container-fluid">
    <div class="row">
        <div class="col-12 jumbotron mb-3">
                <h1 class="text-center">The Staff</h1>
            </div>
        </div>
    </div>
    
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
            ${staffcards.join('')}
            </div>
        </div>
    </div>
</body>
</html>
`;
}

    function doManager (manager){
    staffcards.push(`
        <div class="mx-2 card">
                <div class="bg-secondary card-header">
                    <h2 class="text-light card-title">${manager.name}</h2>
                </div>
            <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Manager</li>
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `)
}
    function doEngineer (engineer){
        staffcards.push(`
            <div class="mx-2 card">
                <div class="bg-secondary card-header">
                    <h2 class="text-light card-title">${engineer.name}</h2>
                </div>
                <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Engineer</li>
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
    `)
}
function doIntern (intern){
    staffcards.push(`
        <div class="mx-2 card">
            <div class="bg-secondary card-header">
                <h2 class=" text-light card-title">${intern.name}</h2>
            </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Intern</li>
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</a></li>
            </ul>
    </div>
</div>
`)
}

module.exports = generateHTML;