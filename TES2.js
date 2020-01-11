function InputUserName(name)
{
    console.log("Username : " + name);

    var checkFirstRegex = /^[0-9~`!@#$%^&()_={}[\]:;,.<>+\/?-]$/;
    if(name.length < 5 || name.length > 12 )
    {
        return "Username tidak valid (5 - 12 Character)";
    }
    else
    {
        for(var a = 0; a < name.length; a++)
        {
            //Cek First Character
            if (checkFirstRegex.test(name[0]) == true) 
            {
                return "Username tidak valid (tidak bolek diawali angka dan spesial karakter)";
            }
        }
    }

    if(name != "")
    {
        var CheckNumber = /[0-9]/;
        var CheckUpperCase = /[A-Z]/;
        var CheckLowerCase = /[a-z]/;

        if(!CheckNumber.test(name))
        {
            return "Username Tidak Valid (Harus Mengandung Angka)";
        }
        else if(!CheckUpperCase.test(name))
        {
            return "Username Tidak Valid (Harus Mengandung Huruf Besar)";
        }
        else if(!CheckLowerCase.test(name))
        {
            return "Username Tidak Valid (Harus Mengandung Huruf Kecil)";
        }
    }

    return 'Username valid';
}

function InputPassword(password)
{
    console.log("Password : " + password);

    if(password.length < 7)
    {
        return "Password Tidak Valid (Minimal 7 Karakter)";
    }

    if(password != "")
    {
        var CheckNumber = /[0-9]/;
        var CheckUpperCase = /[A-Z]/;
        var CheckLowerCase = /[a-z]/;
        var CheckSpesial = /[~`!@#$%^&()_={}[\]:;,.<>+\/?-]/;
        var CheckSpesialChar = /[@]/;

        if(!CheckNumber.test(password))
        {
            return "Password Tidak Valid (Harus Mengandung Angka)";
        }
        else if(!CheckUpperCase.test(password))
        {
            return "Password Tidak Valid (Harus Mengandung Huruf Besar)";
        }
        else if(!CheckLowerCase.test(password))
        {
            return "Password Tidak Valid (Harus Mengandung Huruf Kecil)";
        }
        else if (!CheckSpesialChar.test(password))
        {
            return "Password Tidak Valid (Harus Mengandung Spesial Karakter '@')";
        }
        else if (!CheckSpesialChar.test(password))
        {
            return "Password Tidak Valid (Harus Mengandung Spesial Karakter '@')";
        }
    }

    return "Password Valid";
}

console.log(InputUserName("Arbidwi1"));
console.log(InputPassword("malang234"));

console.log("");

console.log(InputUserName("arbidwiwi"));
console.log(InputPassword("C0d3YourFuture!#@"));