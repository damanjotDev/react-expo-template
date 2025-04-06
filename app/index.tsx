import CustomButton from "@/components/ui/CustomButton";
import InputField from "@/components/ui/InputField";
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


      <View className="w-full p-5">
        <InputField
          label="Name"
          placeholder="Enter name"
          // icon={icons.person}
          // value={''}
          onChangeText={(value) => { }}
        />

        <InputField
          label="Name"
          placeholder="Enter name"
          // icon={icons.person}
          // value={''}
          onChangeText={(value) => { }}
        />

        <InputField
          label="Name"
          placeholder="Enter name"
          // icon={icons.person}
          // value={''}
          onChangeText={(value) => { }}
        />

        <CustomButton
          title="Sign Up"
          onPress={() => { }}
          className="mt-6"
        />
      </View>
    </View>
  );
}
