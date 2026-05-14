/**
 * Generated Tool: searchTool_0260
 * Domain: Search
 * ID: 0260
 */
exports.searchTool_0260 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0260:', error);
    throw error;
  }
};
