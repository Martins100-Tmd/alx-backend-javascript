export default function loadBalancer(chinaDownload, USDownload) {
	const firstPromise = Promise.race([chinaDownload, USDownload]);

	return firstPromise;
}
