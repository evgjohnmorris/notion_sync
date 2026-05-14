/**
 * Generated Tool: searchTool_0383
 * Domain: Search
 * ID: 0383
 */
exports.searchTool_0383 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0383:', error);
    throw error;
  }
};
