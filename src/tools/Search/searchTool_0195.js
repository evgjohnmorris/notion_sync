/**
 * Generated Tool: searchTool_0195
 * Domain: Search
 * ID: 0195
 */
exports.searchTool_0195 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0195:', error);
    throw error;
  }
};
