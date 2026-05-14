/**
 * Generated Tool: searchTool_0022
 * Domain: Search
 * ID: 0022
 */
exports.searchTool_0022 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0022:', error);
    throw error;
  }
};
