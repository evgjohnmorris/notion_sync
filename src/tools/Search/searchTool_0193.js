/**
 * Generated Tool: searchTool_0193
 * Domain: Search
 * ID: 0193
 */
exports.searchTool_0193 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0193:', error);
    throw error;
  }
};
