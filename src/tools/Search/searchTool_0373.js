/**
 * Generated Tool: searchTool_0373
 * Domain: Search
 * ID: 0373
 */
exports.searchTool_0373 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0373:', error);
    throw error;
  }
};
