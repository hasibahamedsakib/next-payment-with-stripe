import { NextResponse } from "next/server";

export async function GET() {
    try {
        const carNames = [
            { name: "Toyota" },
            { name: "Honda" },
            { name: "BMW" },
            { name: "Mercedes-Benz" },
            { name: "Audi" },
            { name: "Tesla" },
            { name: "Ford" },
            { name: "Chevrolet" },
            { name: "Nissan" },
            { name: "Volkswagen" },
            { name: "Volvo" },
            { name: "Ferrari" },
            { name: "Lamborghini" },
            { name: "Porsche" },
            { name: "Bentley" },
            { name: "Maserati" },
            { name: "Land Rover" },
            { name: "Jaguar" },
            { name: "Bugatti" },
            { name: "Rolls-Royce" },
            { name: "Aston Martin" },
            { name: "Mazda" },
            { name: "Subaru" },
            { name: "Hyundai" },
            { name: "Kia" },
            { name: "Suzuki" },
            { name: "Mitsubishi" },
            { name: "Peugeot" },
            { name: "Citroën" },
            { name: "Fiat" },
            { name: "Alfa Romeo" },
            { name: "Renault" },
            { name: "Skoda" },
            { name: "Seat" },
            { name: "Mini" },
            { name: "Chrysler" },
            { name: "Dodge" },
            { name: "Jeep" },
            { name: "Ram" },
            { name: "GMC" },
            { name: "Cadillac" },
            { name: "Buick" },
            { name: "Infiniti" },
            { name: "Acura" },
            { name: "Lexus" },
            { name: "Genesis" },
            { name: "Lincoln" },
            { name: "McLaren" },
            { name: "Pagani" },
            { name: "Koenigsegg" },
            { name: "Rivian" },
            { name: "Lucid" },
            { name: "Polestar" },
          ];
        
          return NextResponse.json({
              message: "Data fatched successfully",
              success: true,
              data: carNames
          });
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            success: false
        });
    }
  }
  