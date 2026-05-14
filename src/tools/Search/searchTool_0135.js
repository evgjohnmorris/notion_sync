/**
 * Generated Tool: searchTool_0135
 * Domain: Search
 * ID: 0135
 */
exports.searchTool_0135 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0135:', error);
    throw error;
  }
};
