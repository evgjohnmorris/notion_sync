/**
 * Generated Tool: searchTool_0733
 * Domain: Search
 * ID: 0733
 */
exports.searchTool_0733 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0733:', error);
    throw error;
  }
};
