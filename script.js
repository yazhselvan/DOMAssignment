function label_create(tagname, attrname, attrvalue, content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;
}

function input_tag(inputTag, attrname, attrval, attrnam1, attrval1){
    var input_ele = document.createElement(inputTag);
    input_ele.setAttribute(attrname, attrval);
    input_ele.setAttribute(attrnam1, attrval1);
    return input_ele;
}

function break_Create(){
    var break_ele = document.createElement('br');
    return break_ele;
}

function address(){
    var address = {
        "First name": document.getElementById("firstName").value,
        "Last name": document.getElementById("lastName").value,
        "Middle name": document.getElementById("middleName").value,
        "Email": document.getElementById("email").value,
        "Address": document.getElementById("address").value
    }
    console.log(address);
}

//Email
var label_email = label_create("label", "for", "email", "Email");
var break_email = break_Create();
var input_email_element = input_tag("input", "type", "email", "id", "email")
var input_email_break = break_Create();

//FirstName
var label_firstName = label_create("label", "for", "firstName", "First Name");
var break_firstName = break_Create();
var input_firstName_element = input_tag("input", "type", "firstName", "id", "firstName")
var input_firstName_break = break_Create();
//LastName
var label_lastName = label_create("label", "for", "lastName", "Last Name");
var break_lastName = break_Create();
var input_lastName_element = input_tag("input", "type", "lastName", "id", "lastName")
var input_lastName_break = break_Create();
//MiddleName
var label_middleName = label_create("label", "for", "middleName", "Middle Name");
var break_middleName = break_Create();
var input_middleName_element = input_tag("input", "type", "middleName", "id", "middleName")
var input_middleName_break = break_Create();
//Address
var label_address = label_create("label", "for", "address", "Address");
var break_address = break_Create();
var input_address_element = input_tag("input", "type", "address", "id", "address")
var input_address_break = break_Create();
//Submit
var submitbutton = label_create("button", "onclick", "address()", "Submit");

document.body.append(
    label_email, break_email, input_email_element, input_email_break,
    label_firstName, break_firstName, input_firstName_element, input_firstName_break,
    label_lastName, break_lastName, input_lastName_element, input_lastName_break,
    label_middleName, break_middleName, input_middleName_element, input_middleName_break,
    label_address, break_address, input_address_element, input_address_break,
    submitbutton
);