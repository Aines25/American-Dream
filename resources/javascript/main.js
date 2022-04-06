let aText = new Array(
    "New York City", 
    "The City that never sleeps."
    );
    let iSpeed = 100; 
    let iIndex = 0; 
    let iArrLength = aText[0].length; 
    let iScrollAt = 20; 
    let iTextPos = 0; 

     
    function typewriter(){
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     let destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
     
    typewriter();


    // Generate random quote

   /* const randomFact = [
    'A little over 8 million people live in New York City. That means 1 in every 38 people in the United States call the city home.', 
    'Times Square is named after the New York Times. It was originally called Longacre Square until the Times moved there in 1904.', 
    'New York City’s Federal Reserve Bank has the largest gold storage in the world. The vault is 80 feet below street level and contains $90 billion in gold.',
    'More than 800 languages are spoken in New York City, making it the most linguistically diverse city in the world. 4 in 10 households speak a language other than English.'
    ]

const generateRandomFact = () => 