/**
 * Generated Tool: searchTool_0175
 * Domain: Search
 * ID: 0175
 */
exports.searchTool_0175 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0175:', error);
    throw error;
  }
};
