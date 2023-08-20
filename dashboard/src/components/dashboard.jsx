const Dashboard = () => {
  return (
    <>
      <Grid className="Grid">
        <div className="same">
          {" "}
          <div className="pic">
            <Users size={48} strokeWidth={2} color={"white"} />
          </div>
          <Grid.Col span={10}>Total Users</Grid.Col>
        </div>
        <div className="same">
          {" "}
          <div className="pic">
            <ShoppingCart size={28} strokeWidth={2} color={"white"} />
          </div>
          <Grid.Col span={10}>Total Orders</Grid.Col>
        </div>
        <div className="same">
          <div className="pic">
            <Car size={48} strokeWidth={2} color={"white"} />{" "}
          </div>
          <Grid.Col span={10}>Total Vehicles</Grid.Col>
        </div>
        <div className="same">
          <div className="pic">
            <CurrencyDollar size={48} strokeWidth={2} color={"white"} />
          </div>
          <Grid.Col span={10}>Total Payments</Grid.Col>
        </div>
        <div className="same">
          <div className="pic">
            <FaceIdError size={48} strokeWidth={2} color={"white"} />
          </div>
          <Grid.Col span={10}>Total Complaints</Grid.Col>
        </div>
        <div className="same">
          <div className="pic">
            <AddressBook size={48} strokeWidth={2} color={"white"} />
          </div>
          <Grid.Col span={10}>Total Reviews</Grid.Col>
        </div>
        <div className="same">
          <div className="pic">
            <Key size={48} strokeWidth={2} color={"white"} />
          </div>
          <Grid.Col span={10}>Total Accounts</Grid.Col>
        </div>
        <div className="same">
          <div className="pic">
            <Car size={48} strokeWidth={2} color={"white"} />
          </div>
          <Grid.Col span={10}>Total Vehicles</Grid.Col>
        </div>
      </Grid>

      <BarChart chartData={Data} />
      <PieData />
    </>
  );
};

export default Dashboard;
