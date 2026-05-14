/**
 * Generated Tool: searchTool_0206
 * Domain: Search
 * ID: 0206
 */
exports.searchTool_0206 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0206:', error);
    throw error;
  }
};
