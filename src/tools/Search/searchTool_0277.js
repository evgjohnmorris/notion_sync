/**
 * Generated Tool: searchTool_0277
 * Domain: Search
 * ID: 0277
 */
exports.searchTool_0277 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0277:', error);
    throw error;
  }
};
