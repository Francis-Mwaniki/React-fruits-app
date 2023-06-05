const FruitBenefits = () => {
  const fruits = [
    {
      name: "Apple",
      description:
        "Apples are a great source of fiber and vitamin C. They promote heart health and can help with weight loss.",
      image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Banana",
      description:
        "Bananas are rich in potassium and provide energy. They can help reduce muscle cramps and support digestion.",
      image: "https://images.pexels.com/photos/5945848/pexels-photo-5945848.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Orange",
      description:
        "Oranges are packed with vitamin C and antioxidants. They boost the immune system and improve skin health.",
      image: "https://images.pexels.com/photos/616838/pexels-photo-616838.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {fruits.map((fruit) => (
        <div key={fruit.name} className="max-w-sm mx-4 my-8">
          <img
            src={fruit.image}
            alt={fruit.name}
            className="shadow-md w-36 h-36 rounded-full"
          />
          <div className=" bg-slate-100 mt-4 p-4 rounded-lg shadow-md">
            <h2 className="text-lg text-gray-400 font-bold mb-2">{fruit.name}</h2>
            <p className="text-gray-600">{fruit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FruitBenefits;
