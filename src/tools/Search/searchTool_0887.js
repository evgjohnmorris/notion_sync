/**
 * Generated Tool: searchTool_0887
 * Domain: Search
 * ID: 0887
 */
exports.searchTool_0887 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0887:', error);
    throw error;
  }
};
