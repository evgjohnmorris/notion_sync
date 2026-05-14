/**
 * Generated Tool: searchTool_0272
 * Domain: Search
 * ID: 0272
 */
exports.searchTool_0272 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0272:', error);
    throw error;
  }
};
