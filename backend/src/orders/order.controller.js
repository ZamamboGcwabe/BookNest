const Order = require("./order.model");

const createAOreder = async (req, res) => {
    try {
        const newOrder = await Order(req.body);
        const saveOrder = await newOrder.save();
        res.status(200).json(saveOrder);
    } catch (error) {
        console.error("Error creating oder", error);
        res.status(500).json({ message: "Failed to create order" });
    }
};

const getOrderByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const orders = await Order.find({ email }).sort({ createdAt: -1 });
        if (!orders) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching orders", error);
        res.status(500).json({ message: "Failed to fetch order" });
    }
}

module.exports = {
    createAOrder,
    getOrderByEmail
};