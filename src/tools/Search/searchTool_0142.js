/**
 * Generated Tool: searchTool_0142
 * Domain: Search
 * ID: 0142
 */
exports.searchTool_0142 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0142:', error);
    throw error;
  }
};
