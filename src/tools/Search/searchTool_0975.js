/**
 * Generated Tool: searchTool_0975
 * Domain: Search
 * ID: 0975
 */
exports.searchTool_0975 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0975:', error);
    throw error;
  }
};
