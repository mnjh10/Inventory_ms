exports.checkLowStock = (product) => {
    if (product.quantity <= product.threshold) {
        console.log(`🚨 Low Stock Alert: ${product.name} has only ${product.quantity} left!`);
        // In future: send email, Slack, browser notifications here
    }
};
