import React, { useState } from "react";
import axios from "axios";
import {
  Select,
  TextInput,
  PasswordInput,
  rem,
  Group,
  Button,
  Text,
} from "@mantine/core";
import { Grid } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMantineTheme } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";

import "./adduser.css";

const AddUserForm = () => {
  const theme = useMantineTheme();
  const [userData, setUserData] = useState({});
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      ConfirmPassword: "",
      cellNumber: "",
      StateLocation: "",
      UserType: "",
      ZipCode: "",
    },
    // validate: {
    //   FirstName: (value) =>
    //     /^[A-Za-z\s]+$/.test(value) && value.length >= 2 && value.length <= 50
    //       ? null
    //       : "Invalid firstName",

    //   LastName: (value) =>
    //     /^[A-Za-z\s]+$/.test(value) && value.length >= 2 && value.length <= 50
    //       ? null
    //       : "Invalid lastName",

    //   Email: (value) => (/.+@\S+$/.test(value) ? null : "Invalid email"),
    // Password: (value) =>
    //   /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/.test(value)
    //     ? null
    //     : "Invalid password. It must be at least 8 characters long and contain at least one letter and one digit.",

    // ConfirmPassword: (value, data) =>
    //   value === data.Password ? null : "Passwords do not match",

    //     ZipCode: (value) =>
    //       /^\d{5}(?:-\d{4})?$/.test(value) ? null : "Invalid zip code",

    //     cellNumber: (value) =>
    //       /^\d{11}$/.test(value)
    //         ? null
    //         : "Invalid phone number. It must be 11-digit number.",
    //   },
  });

  const handleSubmit = async (values) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: token,
        },
      };

      const response = await axios.post(
        "http://localhost:3000/users",
        form.values,
        config
      );

      console.log("User Added:", response.data);

      form.reset();
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        ConfirmPassword: "",
        cellNumber: "",
        StateLocation: "",
        UserType: "",
        ZipCode: "",
      });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="heading">
      <h1>Add User</h1>
      <h2>Fill in the data to add user</h2>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Grid>
          <Grid.Col span={4}>
            <Select
              label="User Type"
              placeholder="Pick one"
              withAsterisk
              data={[
                { value: "Admin", label: "Admin" },
                { value: "User", label: "User" },
                // { value: "Inventory Manager", label: "Inventory Manager" },
                // { value: "Accountant", label: "Accountant" },
                // { value: "Dispatcher", label: "Dispatcher" },
              ]}
              {...form.getInputProps("UserType")}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput
              label="First Name"
              withAsterisk
              placeholder="Mubushra"
              {...form.getInputProps("firstName")}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput
              label="Last Name"
              placeholder="Chaudhary"
              {...form.getInputProps("lastName")}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput
              label="Email"
              withAsterisk
              placeholder="mubushra@gmail.com"
              {...form.getInputProps("email")}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <PasswordInput
              label="Password"
              withAsterisk
              placeholder="abc123"
              {...form.getInputProps("password")}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <PasswordInput
              label="Confirm Password"
              withAsterisk
              placeholder="abc123"
              {...form.getInputProps("ConfirmPassword")}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput
              label="Cell Number"
              withAsterisk
              placeholder="0300-0000000"
              {...form.getInputProps("cellNumber")}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Select
              label="State Location"
              placeholder="Pick one"
              withAsterisk
              data={[
                { value: "Alabama", label: "Alabama" },
                { value: "Alaska", label: "Alaska" },
                { value: "Arizona", label: "Arizona" },
                { value: "California", label: "California" },
                { value: "Connecticut", label: "Connecticut" },
              ]}
              {...form.getInputProps("StateLocation")}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput
              label="Zip Code"
              withAsterisk
              placeholder="12345"
              {...form.getInputProps("ZipCode")}
            />
          </Grid.Col>
          <div className="dropzone">
            <Dropzone
              h={300}
              onDrop={(files) => console.log("accepted files", files)}
              onReject={(files) => console.log("rejected files", files)}
              maxSize={3 * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}
              // {...props}
            >
              <Group
                position="center"
                spacing="xl"
                style={{ minHeight: rem(220), pointerEvents: "none" }}
              >
                <Dropzone.Accept>
                  <IconUpload
                    size="3.2rem"
                    stroke={1.5}
                    color={
                      theme.colors[theme.primaryColor][
                        theme.colorScheme === "dark" ? 4 : 6
                      ]
                    }
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    size="3.2rem"
                    stroke={1.5}
                    color={
                      theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
                    }
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconPhoto size="3.2rem" stroke={1.5} />
                </Dropzone.Idle>

                <div>
                  <Text size="xl" inline>
                    Drag images here or click to select files
                  </Text>
                </div>
              </Group>
            </Dropzone>
          </div>
          <div className="buttons">
            <Button>Reset</Button>
            <Button type="submit">Add</Button>
          </div>
        </Grid>
      </form>
    </div>
  );
};
export default AddUserForm;
