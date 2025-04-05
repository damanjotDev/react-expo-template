import { Model } from "@/components/ui/model";
import { UserActions } from "@/reducers";
import { useAppDispatch, useTypedSelector } from "@/srore";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const dispatch = useAppDispatch();
  const { usersLoading, users, error, isModel } = useTypedSelector((state) => state.User);
  console.log(isModel, error)
  return (
    <View className="flex-1 items-center justify-center">
      <Text onPress={() => dispatch(UserActions.setModel({}))} className="py-5 px-10 shadow-lg bg-white rounded-full">Open Model</Text>
      <Model open={false} animationType="fade" transparent={true} setValue={()=> dispatch(UserActions.setModel({}))} className="flex-1 flex-col justify-center items-center px-4">
  
          <View className="w-full h-96 bg-yellow-500 rounded-2xl">
            {/* Modal content here */}
          </View>
        
      </Model>
    </View>
  );
}
