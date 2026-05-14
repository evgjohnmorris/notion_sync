/**
 * Generated Tool: searchTool_0033
 * Domain: Search
 * ID: 0033
 */
exports.searchTool_0033 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0033:', error);
    throw error;
  }
};
