class Food
{
    constructor()
    {
        var foodStock, lastFed;
        this.image = loadImage("images/Milk.png");
    }

    display()
    {
        var x = 200, y = 200;

        imageMode(CENTER);
        image(this.image, x, y, 80, 80);

        if(this.foodStock != 0)
        {
            for(var i = 0; this.foodStock; i++)
            {
                if(i%10 == 0)
                {
                    x = 80;
                    y = y+50;
                }
                image(this.image, x, y, 50, 50);
                x = x+30;
            }
        }
    }

    getFoodStock()
    {
        var FoodStockRef = database.ref('Food');
        FoodStockRef.on("value",(data)=>{
        FoodStock = data.val();
    })
    } 
    
    updateFoodStock()
    {
        database.ref('/').update({
            FoodStock: count
          });
    }
    
    deductFood()
    {
        database.ref('/').update({
            FoodStock: FoodStock - 1
          });
    }
}