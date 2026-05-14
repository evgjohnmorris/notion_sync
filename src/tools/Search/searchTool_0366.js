/**
 * Generated Tool: searchTool_0366
 * Domain: Search
 * ID: 0366
 */
exports.searchTool_0366 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0366:', error);
    throw error;
  }
};
