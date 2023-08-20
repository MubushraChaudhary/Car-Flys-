import React from "react";
import {
  Text,
  Header,
  Footer,
  AppShell,
  Navbar,
  List,
  NavLink,
  Group,
} from "@mantine/core";
import { Grid } from "@mantine/core";

import {
  LayoutDashboard,
  Mail,
  Phone,
  ShoppingCart,
  Users,
  Tool,
  Car,
  Notebook,
  MoodHappy,
  SettingsAutomation,
  Settings,
  CurrencyDollar,
  Calculator,
  AddressBook,
  FaceIdError,
  Key,
} from "tabler-icons-react";
import "./db.css";
import BarChart from "./utils/barchart";
import { Data } from "./utils/Data";
import PieChart from "./utils/piechart";
import PieData from "./utils/Piedata";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar className="Navbar" width={{ base: 300 }} height={500} p="xs">
          <List>
            <List.Item className="list-item">
              {" "}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LayoutDashboard size={28} strokeWidth={2} />
                Dashboard
              </div>
            </List.Item>

            <Group position="apart">
              <Users size={28} strokeWidth={2} color={"white"} />
              <NavLink
                label="User
                Management"
                childrenOffset={20}
              >
                <NavLink label="Add Users" />
                <NavLink label="View Users" />
              </NavLink>
            </Group>

            <List.Item className="list-item">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Notebook size={48} strokeWidth={2} color={"white"} />
                View Dealerships
              </div>
            </List.Item>

            <List.Item className="list-item">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Tool size={48} strokeWidth={2} color={"white"} /> View Services
              </div>
            </List.Item>
            <List.Item className="list-item">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MoodHappy size={48} strokeWidth={2} color={"white"} />
                Warranty
              </div>
            </List.Item>

            <List.Item className="list-item">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ShoppingCart size={28} strokeWidth={2} color={"white"} />
                Orders
              </div>
            </List.Item>
            <List.Item className="list-item">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <SettingsAutomation size={48} strokeWidth={2} color={"white"} />
                Leads
              </div>
            </List.Item>
            <List.Item className="list-item">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Settings size={48} strokeWidth={2} color={"white"} />
                Financial Institutes
              </div>
            </List.Item>
            <List.Item className="list-item">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CurrencyDollar size={48} strokeWidth={2} color={"white"} />
                Payments
              </div>
            </List.Item>
            <List.Item className="list-item">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Calculator size={48} strokeWidth={2} color={"white"} />
                Accounting
              </div>
            </List.Item>
            <List.Item className="list-item">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AddressBook size={48} strokeWidth={2} color={"white"} />
                Reviews
              </div>
            </List.Item>
            <List.Item className="list-item">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaceIdError size={48} strokeWidth={2} color={"white"} />
                Complaints
              </div>
            </List.Item>
            <List.Item className="list-item">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Settings size={48} strokeWidth={2} color={"white"} />
                Settings
              </div>
            </List.Item>
          </List>
        </Navbar>
      }
      header={
        <Header className="header" height={60} p="xs">
          <div className="container">
            <div className="Left">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Phone size={48} strokeWidth={2} color={"white"} />
                <Text>+1(240)307-3416</Text>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Mail size={48} strokeWidth={2} color={"white"} />
                <Text>info@carflys.com</Text>
              </div>
            </div>

            <div className="Right">
              <Text>Home</Text>
              <Text>Vehicles</Text>
              <Text>Dashboard</Text>
              <Text>Finance Calculator</Text>
            </div>
          </div>
        </Header>
      }
      styles={(theme) => ({
        main: {
          paddingTop: "6rem",
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      footer={
        <Footer className="Footer" height={60} p="md">
          <Text>Contact us today</Text>
        </Footer>
      }
    >
      <Outlet />
    </AppShell>
  );
};

export default App;
