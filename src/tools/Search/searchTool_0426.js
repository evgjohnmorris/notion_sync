/**
 * Generated Tool: searchTool_0426
 * Domain: Search
 * ID: 0426
 */
exports.searchTool_0426 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0426:', error);
    throw error;
  }
};
