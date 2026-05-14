/**
 * Generated Tool: searchTool_0340
 * Domain: Search
 * ID: 0340
 */
exports.searchTool_0340 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0340:', error);
    throw error;
  }
};
