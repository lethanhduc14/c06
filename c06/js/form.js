var elForm , elSelectPackage, elPackageHint, elTermsHint, elTerms;
elForm= document.getElementById('formSignup');
elSelectPackage= document.getElementById('package');
elPackageHint= document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');
function packageHint(){
    var pack= this.options[this.selectedIndex].value;
    if (pack === ' monthly'){
        elPackageHint.innerHTML = 'save $10 if you pay 1 year!';
    }else {
        elPackageHint.innerHTML='Wise choise';
    }
}
function checkTerms(event){
    if (!elTerms.checked){
        elTermsHint.innerHTML='You must agree to the terms.';
    }
}
elForm.addEventListener('submit'.checkTerms, false);
elSelectPackage.addEventListener('change',packageHint,false);