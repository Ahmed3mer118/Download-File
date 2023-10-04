const ulrInput = document.querySelector("input");
const downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", async () => {
  try {
    if(!ulrInput.value){
        throw new Error("input field is empty!")
    }
    const response = await fetch(ulrInput.value); 
    const file = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = new Date().getTime();
    link.click();
    
    setTimeout(()=>{
        ulrInput.value = "";
    },4000)
  } catch (error) {
    alert("failed to download the file!");
  }
});
