/**
 * Generated Tool: searchTool_0235
 * Domain: Search
 * ID: 0235
 */
exports.searchTool_0235 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0235:', error);
    throw error;
  }
};
