function isValid(frm)
{
    var kadi = frm.kadi.value;
    var ad = frm.ad.value;
    var soyad = frm.soyad.value;
    var tc = frm.tc.value;
    var sifre1 = frm.sifre1.value;
    var sifre2 = frm.sifre2.value;
    var email = frm.email.value;
    var atpos=email.indexOf("@");
    var dotpos=email.lastIndexOf(".");
    
    if ( ad==null || ad==""  )
    {
        alert(" Adınız boş geçilemez");
        return false;
    }
    if ( soyad==null || soyad==""  )
    {
        alert(" Soyadınız boş geçilemez");
        return false;
    }
    if ( tc==null || tc=="" || tc.length < 11 || tc.length > 11 || tc>='0' && tc<='9')
    {
        alert("Lütfen Geçerli bir TC kimlik numarası giriniz");
        return false;
    }
    if ( kadi==null || kadi=="" || kadi.length < 4 )
    {
        alert("Kullanıcı adı 4 karakterden az olamaz");
        return false;
    }
    if ( sifre1 == null || sifre1 == "" || sifre2 == null || sifre2 == "")
    {
        alert("Şifreyi boş bırakmayın");
        return false;
    }
    if ( !(sifre1 == sifre2) )
    {
        alert("Şifreler eşleşmiyor");
        return false;
    }
    if ( atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length )
    {
        alert("Geçerli email adresi girin");
        return false;
    }      
    return true;
}