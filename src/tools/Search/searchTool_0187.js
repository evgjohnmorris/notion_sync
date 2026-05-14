/**
 * Generated Tool: searchTool_0187
 * Domain: Search
 * ID: 0187
 */
exports.searchTool_0187 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0187:', error);
    throw error;
  }
};
