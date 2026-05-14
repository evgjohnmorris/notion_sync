/**
 * Generated Tool: searchTool_0569
 * Domain: Search
 * ID: 0569
 */
exports.searchTool_0569 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0569:', error);
    throw error;
  }
};
