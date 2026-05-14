/**
 * Generated Tool: searchTool_0131
 * Domain: Search
 * ID: 0131
 */
exports.searchTool_0131 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0131:', error);
    throw error;
  }
};
