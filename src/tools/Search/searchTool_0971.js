/**
 * Generated Tool: searchTool_0971
 * Domain: Search
 * ID: 0971
 */
exports.searchTool_0971 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0971:', error);
    throw error;
  }
};
