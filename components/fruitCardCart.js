import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { themeColors } from "../theme";
import { MinusIcon, PlusIcon } from "react-native-heroicons/solid";

export default function FruitCardCart({ fruit }) {
  const [quantity, setQuantity] = useState(fruit.qty);
  const increaseQty = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prevQty) => prevQty - 1);
    }
  };
  return (
    <View className="flex-row justify-between items-center space-x-5 mb-4">
      <View className="ml-5">
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Product", { ...fruit, color: fruit.color(1) })
          }
          className="flex-row justify-center -mb-9 shadow-lg z-20"
        >
          <Image
            source={fruit.image}
            style={{
              height: 65,
              width: 65,
              shadowColor: fruit.shadow,
              overflow: "visible",
              shadowRadius: 15,
              shadowOffset: { width: 0, height: 20 },
              shadowOpacity: 0.4,
            }}
          />
        </TouchableOpacity>

        <View
          style={{ backgroundColor: fruit.color(0.4), height: 60, width: 60 }}
          className={` rounded-3xl flex justify-end items-center`}
        ></View>
      </View>
      <View className="flex-1 space-y-1">
        <Text
          style={{ color: themeColors.text }}
          className=" text-base font-bold"
        >
          {fruit.name}
        </Text>
        <Text className="text-yellow-500 font-extrabold">{fruit.price}đ</Text>
      </View>
      <View className="flex-row items-center space-x-2">
        <TouchableOpacity
          onPress={increaseQty}
          className="bg-gray-300 p-1 rounded-lg"
        >
          <PlusIcon size="15" color="white" />
        </TouchableOpacity>
        <Text>{quantity}</Text>
        <TouchableOpacity
          onPress={decreaseQty}
          className="bg-gray-300 p-1 rounded-lg"
        >
          <MinusIcon size="15" color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
