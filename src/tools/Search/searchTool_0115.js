/**
 * Generated Tool: searchTool_0115
 * Domain: Search
 * ID: 0115
 */
exports.searchTool_0115 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0115:', error);
    throw error;
  }
};
