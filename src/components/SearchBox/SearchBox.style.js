import styled, {css} from 'styled-components' // burdan css i cagirabiliriz.

export const StyledSearchBox = styled.div`
margin: 2rem;

// bu sekilde alta styled component yapilmadan style verilebilir. ve bu durumda 
// ayni inputa styled component yapilsa yine bunun styleri gecerli olur.

    /* input{
      color:blue;
      border-radius: 0.4rem;
      padding: 0.3rem
    }

    button{
        padding:0.3rem;
        margin-left:0.5rem;
        border-radius:0.4rem;
        background-color: azure;
        font-weight:bold;
        border-color: cyan
        
    } */
// $ {styledSearchInput} { color: green} bu sekilde styled componentlar ic icede kullanilabilir.
`;

export const StyledSearchButton = styled.button`
    background-color: lightgray; // sartli bir style verilmek istenildiginde bu kullanilir, props olarak gelen 
    ${p => p.isColored &&  // iscolored true gelirse red false gelirse gri olur.
        css`
            background-color:red;
        `
}
    
    padding:0.3rem;
    margin-left:0.5rem;
    border-radius:0.4rem;
    font-weight: bold;
    border-color: azure;

`
export const StyledInheritButton = styled(StyledSearchButton)` // bu sekilde daha once tanimladigimiz bir styled
background-color: white; // component i inherit ederek yeni bir ozellik edip kullandik
`


export const StyledSearchInput = styled.input` // back ticker icerisine  ile fonksiyon yazilabilir
      color:${(p) => p.color}; // styled componentlar vasitasiyla props gonderilebilir ve bu p harfi ile gosterilir
      border-radius: 0.4rem;
      padding: 0.3rem
`;


