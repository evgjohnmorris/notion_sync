/**
 * Generated Tool: searchTool_0274
 * Domain: Search
 * ID: 0274
 */
exports.searchTool_0274 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0274:', error);
    throw error;
  }
};
