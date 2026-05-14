/**
 * Generated Tool: searchTool_0116
 * Domain: Search
 * ID: 0116
 */
exports.searchTool_0116 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0116:', error);
    throw error;
  }
};
