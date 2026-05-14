/**
 * Generated Tool: searchTool_0330
 * Domain: Search
 * ID: 0330
 */
exports.searchTool_0330 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0330:', error);
    throw error;
  }
};
