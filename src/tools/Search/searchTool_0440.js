/**
 * Generated Tool: searchTool_0440
 * Domain: Search
 * ID: 0440
 */
exports.searchTool_0440 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0440:', error);
    throw error;
  }
};
