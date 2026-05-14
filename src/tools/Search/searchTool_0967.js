/**
 * Generated Tool: searchTool_0967
 * Domain: Search
 * ID: 0967
 */
exports.searchTool_0967 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0967:', error);
    throw error;
  }
};
