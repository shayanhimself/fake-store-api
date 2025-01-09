const fs = require('fs');
const path = require('path');

class Product {
	static findOne({ id }) {
		return new Promise((resolve, reject) => {
			const filePath = path.join(__dirname, '../data/products', `${id}.json`);

			fs.readFile(filePath, 'utf8', (err, data) => {
				if (err) {
					// File not found or other error
					reject(new Error(`Product with ID ${id} not found`));
				} else {
					try {
						const product = JSON.parse(data);
						resolve(product);
					} catch (parseErr) {
						reject(new Error('Error parsing product JSON'));
					}
				}
			});
		});
	}
}

module.exports = Product;