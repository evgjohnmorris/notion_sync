/**
 * Generated Tool: searchTool_0104
 * Domain: Search
 * ID: 0104
 */
exports.searchTool_0104 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0104:', error);
    throw error;
  }
};
