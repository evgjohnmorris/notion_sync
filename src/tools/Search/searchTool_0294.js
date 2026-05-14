/**
 * Generated Tool: searchTool_0294
 * Domain: Search
 * ID: 0294
 */
exports.searchTool_0294 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0294:', error);
    throw error;
  }
};
