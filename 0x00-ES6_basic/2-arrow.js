export default function getNeighbourhoodsList() {
	this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

	const self = this;
	self.addNeighborhood = (newNeighborhood) => {
		self.sanFranciscoNeighborhoods.push(newNeighborhood);
		console.log(self.sanFranciscoNeighborhoods);
		return self.sanFranciscoNeighborhoods;
	};
}
