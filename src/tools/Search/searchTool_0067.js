/**
 * Generated Tool: searchTool_0067
 * Domain: Search
 * ID: 0067
 */
exports.searchTool_0067 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0067:', error);
    throw error;
  }
};
