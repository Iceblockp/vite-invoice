import { productRender } from "./app/product";
import { calculateRecordTotal, recordObserver } from "./app/record";
import { manageProductBtnHandler, newProductFormHandler, printBtnHandler, recordFormHandler, recordGroupHandler } from "./core/handlers";
import { closeDrawer, manageProductBtn, newProductForm, printBtn, quantityInput, recordForm, recordGroup } from "./core/selectors";
import { products } from "./core/variables";

class Invoice {

    observers(){
        recordObserver();

    }

    initialRender(){
        productRender(products);

    }

    listener(){
        manageProductBtn.addEventListener("click",manageProductBtnHandler);
        closeDrawer.addEventListener("click",manageProductBtnHandler);
        newProductForm.addEventListener("submit",newProductFormHandler);
        recordForm.addEventListener("submit",recordFormHandler)
        recordGroup.addEventListener("click",recordGroupHandler);
        printBtn.addEventListener("click",printBtnHandler);

    }

    init(){

        console.log("Invoice App start");
        this.observers();
        this.initialRender();
        this.listener();
    }




}

export default Invoice;

