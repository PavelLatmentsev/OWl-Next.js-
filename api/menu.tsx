import API from "@/app/api";
// import { MenuItem } from "@/interface/menu.inerface";

export async function getMenu(firstCategory:number) {
try {
    const res=await fetch(API.topPage.find, {
        method: "POST",
        body:JSON.stringify({
          firstCategory
        }),
        headers: new Headers({ 'content-type': 'application/json'})
      });
      return res.json();
} catch (error) {
     console.log(error);
}
    }