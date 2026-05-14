/**
 * Generated Tool: searchTool_0382
 * Domain: Search
 * ID: 0382
 */
exports.searchTool_0382 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0382:', error);
    throw error;
  }
};
