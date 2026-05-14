/**
 * Generated Tool: searchTool_0501
 * Domain: Search
 * ID: 0501
 */
exports.searchTool_0501 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0501:', error);
    throw error;
  }
};
