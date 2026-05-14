/**
 * Generated Tool: searchTool_0251
 * Domain: Search
 * ID: 0251
 */
exports.searchTool_0251 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0251:', error);
    throw error;
  }
};
