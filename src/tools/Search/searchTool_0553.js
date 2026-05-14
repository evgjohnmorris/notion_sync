/**
 * Generated Tool: searchTool_0553
 * Domain: Search
 * ID: 0553
 */
exports.searchTool_0553 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0553:', error);
    throw error;
  }
};
