/**
 * Generated Tool: searchTool_0815
 * Domain: Search
 * ID: 0815
 */
exports.searchTool_0815 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0815:', error);
    throw error;
  }
};
