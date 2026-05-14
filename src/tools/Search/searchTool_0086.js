/**
 * Generated Tool: searchTool_0086
 * Domain: Search
 * ID: 0086
 */
exports.searchTool_0086 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0086:', error);
    throw error;
  }
};
